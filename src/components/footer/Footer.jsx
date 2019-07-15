import React from 'react';
import Image from "../image/Image";
import "./Footer.scss"

export function LinkIcon(iconImageName, linkUrl) {
    return  (
        <a href={linkUrl} className="footerLinkIcon" target="_blank">
            <Image name={iconImageName} />
        </a>
    );
}


export function FooterComponent(props) {
    const { isAbout } = props;
    return (
        <div className="footer">
            <div className="footerLogo">
                <Image name="logo.png" />
            </div>
            { isAbout &&
                <div className="footerAboutContact">
                    <div>STUDIO: 15 EPPING ROAD, DOUBLE BAY</div>
                    <div><a className="footerEmailLinks" href="mailto:kai@aspacedesign.com.au">KAI@ASPACEDESIGN.COM.AU</a> | M: <span className="footerMobile">0431 742 640</span></div>
                    <div><a className="footerEmailLinks" href="mailto:eka@aspacedesign.com.au">EKA@ASPACEDESIGN.COM.AU</a> | M: <span className="footerMobile">0421 836 027</span></div>
                </div>
            }
            <div className="footerLinks">
                { LinkIcon("instagram.svg", "https://www.instagram.com/a_space_design/") }
                { LinkIcon("facebook.svg", "https://www.facebook.com/aspaceinteriorgraphicdesign?fref=ts") }
                { LinkIcon("linkedin.svg", "https://www.linkedin.com/in/kai-yu-b124ba28?authType=NAME_SEARCH&authToken=wzvu&locale=en_US&srchid=2370228741440468794370&srchindex=1&srchtotal=380&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A2370228741440468794370%2CVSRPtargetId%3A96793790%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH") }
                { LinkIcon("pinterest.svg", "https://www.pinterest.com.au/kai5621") }
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