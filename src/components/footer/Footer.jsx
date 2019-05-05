import React from 'react';
import Image from "../image/Image";

export function LinkIcon(iconImageName, linkUrl) {
    return  (
        <a src={linkUrl} className="linkItem">
            <Image name={iconImageName} />
        </a>
    );

}

export function FooterComponent(props) {

    return (
        <div className="footer">
            <div className="footerLogo">
                <Image name="logo.png" />
            </div>
            <div className="footerLinks">
                { LinkIcon("instagram.svg", "") }
                { LinkIcon("facebook.svg", "") }
                { LinkIcon("twitter.svg", "") }
                { LinkIcon("pinterest.svg", "") }
            </div>
            <div className="footerCopyRight">
                <div>Copyright@ASPACE</div>
                <div>ALL RIGHTS RESERVED</div>
                <div>SITE BY ASPACE</div>
            </div>
        </div>
    );

}

export default FooterComponent;