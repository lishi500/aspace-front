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
                    <Link to="/home">
                        <Image className="headerLogo" name="logo.png" />
                    </Link>
                </div>
                <div className="pageLinks">
                    {this.renderLinkItems("/home/residential", "RESIDENTIAL")}
                    {this.renderLinkItems("/home/commercial", "COMMERCIAL")}
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