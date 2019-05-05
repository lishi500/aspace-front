import React from 'react';
import PropTypes from 'prop-types';
import {imageUrl, uploadUrl} from "../../constants";


export function ImageComponent(props) {
    const {
        name,
        src,
        width,
        height,
        order,
        className,
        isUploadedImage,
        onImageLoadCallback
    } = props;

    const baseUrl = isUploadedImage ? uploadUrl : imageUrl;
    const url = src ? src : `${baseUrl}${name}`;
    let innerStyle = null;

    if (width || height) {
        innerStyle = {
            width: `${width}px`,
            height: `${height}px`,
        }
    }

    const onImageLoad = ({target:img}) => {
        const dimensions = {
            height:img.offsetHeight,
            width:img.offsetWidth
        };

        if(onImageLoadCallback) {
            onImageLoadCallback(img, dimensions, order);
        }
    };

    return (
        <img
            className={className}
            src={url}
            alt=""
            onLoad={onImageLoad}
            style={innerStyle}
        />
    );
}

ImageComponent.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    order: PropTypes.number,
    className: PropTypes.string,
    isUploadedImage: PropTypes.bool,
    onImageLoadCallback: PropTypes.func
};

ImageComponent.defaultProps = {
    isUploadedImage: false
};

export default ImageComponent;