import React from 'react';
import Image from "../../components/image/Image";
import './EnterPage.scss';
import {Link} from "react-router-dom";

export function EnterPageComponent(props) {
    return (
        <div className="enterPage">
            <div className="enterFront">
                <div className="enterBox">
                    <Link to="/home" className="enterButton">
                        ENTER
                    </Link>
                </div>
                <Image
                    className="enterImage"
                    name='enter.jpg'
                />
            </div>
            <div className="enterLogo">
                <Image className="enterLogoImage"
                    name="logo.png"
                />
            </div>
        </div>
    );
}

export default EnterPageComponent;