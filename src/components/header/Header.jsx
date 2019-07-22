import React from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import Image from "../image/Image";
import classnames from "classnames";
import PropTypes from "prop-types";
import FramedImageComponent from "../image/FramedImage";
import {LinkIcon} from "../footer/Footer";

export class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            isShrink: false
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollY;
        if (window.scrollY === undefined) {
            scrollY = window.pageYOffset;
        } else {
            scrollY = window.scrollY;
        }

        if (scrollY > 50) {
            this.setState({isShrink: true});
        } else {
            this.setState({isShrink: false});
        }
    };

    renderLinkItems(route,name) {
        return (
            <Link to={route} className="linkItem">
                {name}
            </Link>
        );
    }

    renderHeaderContent() {
        return (
            <React.Fragment>
                <div className="headerBrand">
                    <Link to="/home">
                        <Image className="headerLogo" name="logo.png" />
                    </Link>
                </div>
                <div className="headerLinks">
                    <div className="pageLinks">
                        {this.renderLinkItems("/home/residential", "RESIDENTIAL")}
                        {this.renderLinkItems("/home/commercial", "COMMERCIAL")}
                        {this.renderLinkItems("/about", "ABOUT")}
                        {this.renderLinkItems("/profile", "PROFILE")}
                        {this.renderLinkItems("/contact", "CONTACT")}
                        {this.renderLinkItems("/client", "CLIENT")}
                    </div>
                    <div className="socialLinks">
                        { LinkIcon("instagram.svg", "https://www.instagram.com/a_space_design/") }
                        { LinkIcon("facebook.svg", "https://www.facebook.com/aspaceinteriorgraphicdesign?fref=ts") }
                        { LinkIcon("linkedin.svg", "https://www.linkedin.com/in/kai-yu-b124ba28?authType=NAME_SEARCH&authToken=wzvu&locale=en_US&srchid=2370228741440468794370&srchindex=1&srchtotal=380&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A2370228741440468794370%2CVSRPtargetId%3A96793790%2CVSRPcmpt%3Aprimary%2CVSRPnm%3Atrue%2CauthType%3ANAME_SEARCH") }
                        { LinkIcon("pinterest.svg", "https://www.pinterest.com.au/kai5621") }
                    </div>
                </div>

            </React.Fragment>
        );
    }

    render() {
        const { zIndex } = this.props;
        const { isShrink } = this.state;

        // const shrinkedHearderStyle = zIndex === 0 ? classnames("header", "shrinked", "z-down") : classnames("header", "shrinked", "z-up") ;
        const shrinkedHearderStyle = zIndex === 0 ? "header shrinked z-down" : "header shrinked z-up" ;

        return (
            <React.Fragment>
                { !isShrink &&
                    <div className="header">
                        { this.renderHeaderContent() }
                    </div>
                }
                { isShrink && <div className="headerPlaceholder"> </div>}
                { isShrink &&
                    <div className={shrinkedHearderStyle}>
                        { this.renderHeaderContent() }
                    </div>
                }
            </React.Fragment>

        );
   }
}

HeaderComponent.propTypes = {
    zIndex: PropTypes.number,
};

HeaderComponent.defaultProps = {
    zIndex: 9999
};

export default HeaderComponent;