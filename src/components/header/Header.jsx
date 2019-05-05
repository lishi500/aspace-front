import React from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import Image from "../image/Image";

export class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            isExpand: true
        };

        console.log(this.state)
    }

    renderLinkItems(route,name) {
        return (
            <Link to={route} className="linkItem">
                {name}
            </Link>
        );
    }

    render() {
        return (
            <div className="header">
                <div className="headerBrand">
                    <Image className="headerLogo" name="logo.png" />
                </div>
                <div className="pageLinks">
                   {this.renderLinkItems("/project", "PROJECTS")}
                   {this.renderLinkItems("/profile", "PROFILE")}
                   {this.renderLinkItems("/contact", "CONTACT")}
                   {this.renderLinkItems("/client", "CLIENT")}
                   {this.renderLinkItems("/news", "NEWS")}
                </div>
            </div>
        );
   }
}

export default HeaderComponent;