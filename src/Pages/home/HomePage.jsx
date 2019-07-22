import React from 'react';
import Header from "../../components/header/Header";
import './HomePage.scss'
// import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";
import {getApiUrl, getImageUploadUrl, isMobile, isTablet} from "../../AppUtil";
import axios from "axios";
import {PROJECT_TYPE} from "../admin/AdminProjectPage";
import Gallery from "react-photo-gallery";
import Photo from "../../components/image/Photo";
import { photosList } from '../../constants';

const MAX_HEIGHT = 450;
// let readyToExtendSize = true;

export class HomePageComponent extends React.Component{
    constructor(props) {
        super(props);
        // // console.log('home type',  props.match.params.type);
        this.state = {
            allProject: [],
            hoverProjectId: -1,
            maxDisplaySize: 3,
            readyToExtendSize: true,
            isMobileOrTablet: isTablet
        };
        // readyToExtendSize = true;
        this.loadAllProject = this.loadAllProject.bind(this);
        this.setDisplayProject = this.setDisplayProject.bind(this);
        this.mouseEnterCallback = this.mouseEnterCallback.bind(this);
        this.mouseLeaveCallback = this.mouseLeaveCallback.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);

    }

    componentDidMount() {
        this.loadAllProject();
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.updateDimensions);
    }

    handleScroll() {
        let scrollY;
        if (window.scrollY === undefined) {
            scrollY = window.pageYOffset;
        } else {
            scrollY = window.scrollY;
        }
        const distanceToBottom = document.body.offsetHeight - (window.innerHeight + scrollY);

        if (distanceToBottom < 500 && this.state.readyToExtendSize) {
            this.setState({maxDisplaySize: this.state.maxDisplaySize + 2, readyToExtendSize: false});

            const that = this;
            setTimeout(function() {
                that.setState({
                    readyToExtendSize: true
                });
            }
            ,1000);
        }
    };

    updateDimensions() {
        const isMobileOrTablet = window.innerWidth < 888;
        this.setState({isMobileOrTablet});
    }

    updateType() {

    }

    loadAllProject() {
        const req = getApiUrl('getAllProjectsWithFrontImage');
        axios.get(req)
            .then((response) => {
                console.log('all projects', response);
                if (response && response.data) {
                    this.setDisplayProject(response.data)
                }
            })
    }

    mouseEnterCallback(id) {
        if (id) {
            this.setState({hoverProjectId: id})
        }
    }
    mouseLeaveCallback() {
        this.setState({hoverProjectId: -1});
    }

    setDisplayProject(allProject) {
        this.setState({allProject});
    }

    mapImage(allProject) {
        if (!allProject || allProject.length === 0) {
            return [];
        }

        const imageList = [];

        for (let i = 0; i < allProject.length; i++) {
            const p = allProject[i];

            if (!p.project || p.image || p.images.length <= 1) {
                continue;
            }

            const image1 = p.images[0];
            const image2 = p.images[1];
            const id = parseInt(p.project.id);
            imageList.push(this.getImageForPhoto(p, image1, true, id === this.state.hoverProjectId));
            if (!this.state.isMobileOrTablet) {
                imageList.push(this.getImageForPhoto(p, image2, false, false));
            }
        }

        return imageList;
    }

    getImageForPhoto(p, image, isPrimary, isHovering) {
        const url = getImageUploadUrl(image.path);

        return {
            src: url,
            width: Math.floor(parseInt(image.width) /100),
            height: Math.floor(parseInt(image.height) /100),
            name: p.project.name,
            type: p.project.type,
            projectId: parseInt(p.project.id),
            isPrimary,
            isHovering,
            mouseEnterCallback: this.mouseEnterCallback,
            mouseLeaveCallback: this.mouseLeaveCallback
        }
    }

    renderGridImages(displayProject) {
        const displaySize = Math.min(this.state.maxDisplaySize, displayProject.length);
        const trimedDisplayProject = displayProject.slice(0, displaySize);
        const imageList2 = this.mapImage(trimedDisplayProject);
        // const imageList2 = photosList;
        // // console.log('imageList2', imageList2);
        // columns={2}
        // limitNodeSearch={2}
        // renderImage={Photo}
        // margin={7}
        console.log('renderGridImages', trimedDisplayProject);
        return (
            <React.Fragment>
                {   imageList2 && imageList2.length > 0 &&
                    <Gallery
                        photos={imageList2}
                        columns={1}
                        limitNodeSearch={2}
                        renderImage={Photo}
                        margin={7}
                    />
                }
            </React.Fragment>
        );
    };

    getDisplayProject(type) {
        let filteredList = [];
        // // console.log('getDisplayProject', type);

        if (this.state.allProject) {
            if (!type || type === PROJECT_TYPE.all) {
                filteredList = this.state.allProject;
            } else {
                filteredList = this.state.allProject.filter(project => project.project.type === type);
            }
        }
        // // console.log('filteredList', filteredList);

        return filteredList;
    }

    render() {
        const displayProject = this.getDisplayProject(this.props.match.params.type);

        return (
            <div>
                <Header />
                <div className="homeItem">
                    { this.state.allProject && this.state.allProject.length > 0 && this.renderGridImages(displayProject) }
                </div>
                <Footer/>
            </div>
        );
    }

}

export default HomePageComponent;