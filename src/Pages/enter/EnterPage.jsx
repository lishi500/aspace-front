import React from 'react';
import Image from "../../components/image/Image";
import './EnterPage.scss';
import {Link} from "react-router-dom";

export function EnterPageComponent(props) {
    return (
        <div className="enterPage">
            <div className="enterFront">
                {/*<Image*/}
                {/*    className="enterImage"*/}
                {/*    name='enter.jpg'*/}
                {/*/>*/}
                <div className="enterBack" />
                <div className="enterBox">
                    <Link to="/home" className="enterButton">
                        ENTER
                    </Link>
                </div>
            </div>
            <div className="enterLogo">
                <Link to="/home" className="enterButton">
                    <Image className="enterLogoImage"
                        name="logo.png"
                    />
                </Link>
            </div>
        </div>
    );
}

export default EnterPageComponent;