import React from 'react';
import Header from "../../components/header/Header";
import {getApiUrl, getImageFrameWidth} from "../../AppUtil";
import {staffList} from "../../constants";
import Footer from "../../components/footer/Footer";
import './About.scss';
import ImageComponent from "../../components/image/Image";
import axios from "axios";

function Staff(props) {
    const {image, name, position, info, index} = props;
    const staffClassName = index % 2 === 0 ? 'staffLeft' : 'staffRight';

    return (
        <div className={staffClassName}>
            <div className='staffPhoto'>
                <ImageComponent
                    name={image.path}
                    isUploadedImage
                />
            </div>
            <div className='staffName'>
                {name}
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

export class ProfilePageComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            allStaff: null
        }
    }

    componentDidMount() {
        this.loadAllStaff();
    }

    loadAllStaff() {
        const req = getApiUrl('getAllStaff');
        axios.get(req)
            .then((response) => {
                // console.log('load all staff', response);
                if (response && response.data) {
                    this.setState({allStaff: response.data});
                }
            });
    }


     renderStaffs() {
        const staffs = this.state.allStaff;
        const list = staffs.map((staff, index) => {
            return (
                <Staff
                    index={index}
                    {...staff}
                />
            );
        });

        return list;
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className='aboutPage'>
                    <div className="staffList">
                        {this.state.allStaff && this.renderStaffs()}
                    </div>
                </div>
                <Footer isAbout />
            </React.Fragment>
        );
    }

}

export default ProfilePageComponent;