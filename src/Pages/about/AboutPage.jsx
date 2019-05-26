import React from 'react';
import Header from "../../components/header/Header";
import {getImageFrameWidth} from "../../AppUtil";
import {staffList} from "../../constants";
import Footer from "../../components/footer/Footer";
import './About.scss';
import ImageComponent from "../../components/image/Image";

function Staff(props) {
    const {image, fName, lName, position, info} = props;

    return (
        <div className='staff'>
            <div className='staffPhoto'>
                <ImageComponent
                    name={image.path}
                    height={450}
                    isUploadedImage
                />
            </div>
            <div className='staffName'>
                {`${fName} ${lName}`}
            </div>
            <div className='staffPosition'>
                {position}
            </div>
            <div className='staffinfo'>
                {info}
            </div>
        </div>
    );
}

export function AboutPageComponent(props) {

    const renderStaffs = () => {
        const staffs = staffList;
        const list = staffs.map(staff => {
            return (
                <Staff
                    {...staff}
                />
            );
        });

        return list;
    };

    return (
        <React.Fragment>
            <Header />
            <div className='aboutPage'>
                <div className='companyDescription'>
                    We have worked through all sectors including retail, hospitality, residential, and we understand the parameters, process and requirements involved. Our strategy is developed through the understanding of each individual business in order to offer individuality to each project.
                    We are able to provide a multi-faceted service addressing brand identity, signage, menus POS, packaging, uniforms, and all associated collateral to make your brand stand out. We believe that a cohesive approach produces the best impression of your business by threading the aesthetic and identity through all facets of the rollout.
                </div>
                <div className="staffList">
                    {renderStaffs()}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default AboutPageComponent;