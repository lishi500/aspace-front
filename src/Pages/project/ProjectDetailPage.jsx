import React, {Fragment} from 'react';
import Header from "../../components/header/Header";
import Image from "../../components/image/Image";
import "./Project.scss"
import {projectDetail, projectWidth} from "../../constants";
import FramedImage from "../../components/image/FramedImage";
import Footer from "../../components/footer/Footer";
import {getApiUrlWithParam} from "../../AppUtil";
import axios from "axios";
import {PROJECT_TYPE} from "../admin/AdminProjectPage";

export class ProjectDetailPageComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            projectWidth: this.getProjectWidth(),
            projectId: props.match.params.id,
            currentProject: {},
            canNotFind: false
        };

        this.loadProject = this.loadProject.bind(this);
        this.setCurrentProject = this.setCurrentProject.bind(this);
        this.renderPageDetail = this.renderPageDetail.bind(this);
    }
    getProjectWidth() {
        return window.innerWidth - 400;
    }

    updateDimensions() {
        this.setState({ projectWidth: this.getProjectWidth() });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
        console.log('componentDidMount', this.state );
        if (this.state.projectId) {
            this.loadProject(this.state.projectId);
        }
    }

    loadProject(projectId) {
        const url = getApiUrlWithParam('getProject', {projectId: projectId});
        console.log('load project from ', url);
        axios.get(
            url
        ).then(response => {
            console.log('response', response);
            if (response && response.data && response.data.project) {
                this.setCurrentProject(response.data.project, response.data.images);
                this.setState({canNotFind: false});
            }
        })
        .catch((error) => { console.log('catch error', error);this.setState({canNotFind: true});});

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
        console.log('current project', current);
    }

    renderImages(images) {
        const filteredImage = images.filter((image) => { return image.isFront === "0" });

        const frameWidth = (this.state.projectWidth - 40) / 2;
        const frameHeight = 0.75 * frameWidth;
        const imageList = filteredImage.map(image => (
            <FramedImage
                classNames="projectImageFrame"
                isUploadedImage
                name={image.path}
                frameWidth={frameWidth}
                frameHeight={frameHeight}
                width={frameWidth}
                height={frameHeight}
            />
        ));

        return (
            <React.Fragment>
                {imageList}
            </React.Fragment>
        )
    };

    renderPageDetail(projectDetails) {
        const { name, description, type, images } = this.state.currentProject;
        let frontImage = {};
        if (images) {
            frontImage = images.filter((image) => { return image.isFront === "1" });
            if (Array.isArray(frontImage) && frontImage.length > 0) {
                frontImage = frontImage[0];
            }
        }
        console.log('render frontImage', frontImage);
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
                            {name}
                        </div>
                        <div className="projectDescription">
                            {description}
                        </div>
                    </div>
                    <div className="projectImages">
                        {images && this.renderImages(images)}
                    </div>
                </div>
            </Fragment>
        );
    };

    render() {
        return (
            <React.Fragment>
                <Header/>
                {this.state.currentProject && this.renderPageDetail()}
                <Footer/>
            </React.Fragment>
        );
    }

}

export default ProjectDetailPageComponent;