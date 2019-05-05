import React from 'react';
import Header from "../../components/header/Header";
import { imageList } from '../../constants';
import './HomePage.scss'
import Gallery from "../../components/gallery/Gallery";


export function HomePageComponent(props) {
    const MAX_HEIGHT = 675;
    // const MIN_HEIGHT = 475;
    // const HOMEPAGE_WIDTH = window.screen.width;
    // const MAX_RATIO = 0.75;

    const renderGridImages = () => {
        return (
            <Gallery
                photos={imageList}
                targetRowHeight={MAX_HEIGHT}
                margin={20}
            />
        );
    };

    return (
        <div>
            <Header />
            <div className="homeItem">
                { renderGridImages() }
            </div>
        </div>
    );
}

export default HomePageComponent;