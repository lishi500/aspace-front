import React, {Fragment} from 'react';
import Header from "../../components/header/Header";
import Image from "../../components/image/Image";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./Project.scss"
import {projectDetail, projectWidth, uploadUrl} from "../../constants";
import FramedImage from "../../components/image/FramedImage";
import Footer from "../../components/footer/Footer";
import {getApiUrlWithParam, getImageUploadUrl} from "../../AppUtil";
import axios from "axios";
import {PROJECT_TYPE} from "../admin/AdminProjectPage";
import Photo from "../../components/image/Photo";
import Gallery from "react-photo-gallery";

export class ProjectDetailPageComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            projectWidth: this.getProjectWidth(),
            projectId: props.match.params.id,
            currentProject: {},
            canNotFind: false,
            currentImage: 0,
            isViewerOpen: false
        };

        this.loadProject = this.loadProject.bind(this);
        this.setCurrentProject = this.setCurrentProject.bind(this);
        this.renderPageDetail = this.renderPageDetail.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
    }

    // openLightbox(index) {
    //     this.setState({currentImage: index});
    //     this.setState({isViewerOpen: true});
    // }
    openLightbox(e1,  {index}) {
        this.setState({currentImage: index + 1});
        this.setState({isViewerOpen: true});
    };

    closeLightbox() {
        this.setState({currentImage: 0});
        this.setState({isViewerOpen: false});
    };

    getProjectWidth() {
        return window.innerWidth - 400;
    }

    updateDimensions() {
        this.setState({ projectWidth: this.getProjectWidth() });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        // console.log('componentDidMount', this.state );
        if (this.state.projectId) {
            this.loadProject(this.state.projectId);
        }
    }

    loadProject(projectId) {
        const url = getApiUrlWithParam('getProject', {projectId: projectId});
        // console.log('load project from ', url);
        axios.get(
            url
        ).then(response => {
            if (response && response.data && response.data.project) {
                this.setCurrentProject(response.data.project, response.data.images);
                this.setState({canNotFind: false});
            }
        })
        .catch((error) => { this.setState({canNotFind: true});});

    }

    setCurrentProject(project, images) {
        const {id, name, description, type} = project;
        const current = {
            id,
            name,
            description,
            type,
            images
        };

        this.setState({currentProject: current});
        // console.log('current project', current);
    }

    mapImage(image) {
        const url = getImageUploadUrl(image.path);

        return {
            src: url,
            width: Math.floor(parseInt(image.width) /100),
            height: Math.floor(parseInt(image.height) /100),
        }
    }

    renderImages2(images) {
        const filteredImage = images.filter((image) => { return image.isFront === "0" });
        const mappedImages = filteredImage.map(image => this.mapImage(image));

        return (
           <React.Fragment>
               {
                   mappedImages && mappedImages.length > 0 &&
                   <Gallery
                       photos={mappedImages}
                       columns={2}
                       limitNodeSearch={2}
                       onClick={this.openLightbox}
                       // targetRowHeight={MAX_HEIGHT}
                       margin={7}
                       // direction={"row"}
                   />
               }
           </React.Fragment>
        );
    }

    renderImages(images) {
        const filteredImage = images.filter((image) => { return image.isFront === "0" });

        const frameWidth = (this.state.projectWidth - 40) / 2;
        const frameHeight = 0.75 * frameWidth;
        const imageList = filteredImage.map((image, index) => (
            <FramedImage
                classNames="projectImageFrame"
                isUploadedImage
                name={image.path}
                frameWidth={frameWidth}
                frameHeight={frameHeight}
                width={frameWidth}
                height={frameHeight}
                onClickCallback={this.openLightbox}
                index={index}
            />
        ));

        return (
            <React.Fragment>
                {imageList}
            </React.Fragment>
        )
    };

    renderLightBox(images) {
        const { currentImage, isViewerOpen } = this.state;
        return (
            <ModalGateway>
                {isViewerOpen ? (
                    <Modal onClose={this.closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={images.map(x => ({ source: `${uploadUrl}${x.path}` }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        );
    }
    renderName(name) {
        if (name && name.indexOf("@") > -1) {
            const projectName = name.substr(0, name.indexOf("@"));
            const projectAddress = name.substr(name.indexOf("@"), name.length);
            return (<div>{projectName} <span className="projectNameAddress">{projectAddress}</span></div>);
        }
        return name;
    }

    renderPageDetail(projectDetails) {
        const { name, description, type, images } = this.state.currentProject;
        let frontImage = {};
        if (images) {
            frontImage = images.filter((image) => { return image.isFront === "1" });
            if (Array.isArray(frontImage) && frontImage.length > 0) {
                frontImage = frontImage[0];
            }
        }
        // console.log('render frontImage', frontImage);
        return (
            <Fragment>
                <div className="projectDetail">
                    { this.state.canNotFind && <div>Project Does not exist</div>}
                    <div className="projectFrontImage">
                        <Image
                            isUploadedImage
                            name={frontImage.path}
                            className="frontImage"
                        />
                    </div>
                    <div className="projectInfo">
                        <div className="projectName">
                            { this.renderName(name) }
                        </div>
                        <div className="projectDescription">
                            {description}
                        </div>
                    </div>
                    <div>
                        {images && this.renderImages2(images)}
                        { this.state.isViewerOpen && images && this.renderLightBox(images) }
                    </div>
                </div>
            </Fragment>
        );
    };

    render() {
        const zIndex = this.state.isViewerOpen ? 0 : 9999;

        return (
            <React.Fragment>
                <Header zIndex={zIndex} />
                {this.state.currentProject && this.renderPageDetail()}
                <Footer/>
            </React.Fragment>
        );
    }

}

export default ProjectDetailPageComponent;