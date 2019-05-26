import React from 'react';
import Header from "../../components/header/Header";
import { imageList } from '../../constants';
import './HomePage.scss'
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";
import {getApiUrl, getImageUploadUrl} from "../../AppUtil";
import axios from "axios";
import {PROJECT_TYPE} from "../admin/AdminProjectPage";

const MAX_HEIGHT = 500;

export class HomePageComponent extends React.Component{
    constructor(props) {
        super(props);
        console.log('home type',  props.match.params.type);
        this.state = {
            allProject: [],
        };

        this.loadAllProject = this.loadAllProject.bind(this);
        this.setDisplayProject = this.setDisplayProject.bind(this);
    }

    componentDidMount() {
        this.loadAllProject();
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

    setDisplayProject(allProject) {
        this.setState({allProject});
    }

    mapImage(allProject) {
        return allProject.map(p => {
            if (!p.project || p.image || p.images.length === 0) {
                return null;
            }

            const image = p.images[0];
            const url = getImageUploadUrl(p.images[0].path);
            return {
                src: url,
                width: parseInt(image.width),
                height: parseInt(image.height),
                name: p.project.name,
                type: p.project.type,
                projectId: parseInt(p.project.id)
            }
        })
    }

    renderGridImages(displayProject) {
        console.log('renderGridImages', displayProject);
        const imageList2 = this.mapImage(displayProject);
        return (
            <Gallery
                photos={imageList2}
                targetRowHeight={MAX_HEIGHT}
                margin={20}
            />
        );
    };

    getDisplayProject(type) {
        let filteredList = [];
        console.log('getDisplayProject', type);

        if (this.state.allProject) {
            if (!type || type === PROJECT_TYPE.all) {
                filteredList = this.state.allProject;
            } else {
                filteredList = this.state.allProject.filter(project => project.project.type === type);
            }
        }
        console.log('filteredList', filteredList);

        return filteredList;
    }

    render() {
        const displayProject = this.getDisplayProject(this.props.match.params.type);

        return (
            <div>
                <Header />
                <div className="homeItem">
                    { this.renderGridImages(displayProject) }
                </div>
                <Footer/>
            </div>
        );
    }

}

export default HomePageComponent;