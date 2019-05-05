import React, {Fragment} from 'react';
import Header from "../../components/header/Header";
import Image from "../../components/image/Image";
import "./Project.scss"
import {projectDetail} from "../../constants";
import FramedImage from "../../components/image/FramedImage";

export function ProjectDetailPageComponent(props) {

    const renderImages = images => {
        const imageList = images.map(image => (
            <FramedImage
                classNames="projectImageFrame"
                src={image.src}
                frameWidth={610}
                frameHeight={430}
            />
        ));
        console.log(imageList);
        return (
            <React.Fragment>
                {imageList}
            </React.Fragment>
        )
    };

    const renderPageDetail = projectDetails => {
        const { name, description, type, frontImage, images } = projectDetails;

        return (
            <Fragment>
                <Header/>
                <div className="projectDetail">
                    <div className="projectFrontImage">
                        <Image
                            src={frontImage}
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
                        {renderImages(images)}
                    </div>
                </div>
            </Fragment>
        );
    };

    return (
        <React.Fragment>
            {renderPageDetail(projectDetail)}
        </React.Fragment>
    );
}

export default ProjectDetailPageComponent;