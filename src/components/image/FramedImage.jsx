import React from 'react';
import PropTypes from "prop-types";
import classnames from 'classnames';
import Image from "./Image";
import './Image.scss'


export function FramedImageComponent(props) {
    const {
        frameWidth,
        frameHeight,
        order,
        classNames
    } = props;


    const innerStyle = {
        width: frameWidth+'px',
        height: frameHeight+'px'
    };
    const onImageLoadCallback = (img, dimensions) => {
        if (props.onImageLoadCallback) {
            props.onImageLoadCallback(img, dimensions, order);
        }
    };

    const styleNames = classnames("frame", classNames);

    return (
        <div className={styleNames} style={innerStyle}>
            <Image
                className="innerImage"
                {...props}
            />
        </div>
    );
}

FramedImageComponent.propTypes = {
    name: PropTypes.string,
    order: PropTypes.number,
    isUploadedImage: PropTypes.bool,
    frameWidth: PropTypes.number,
    frameHeight: PropTypes.number,
    classNames: PropTypes.string,
    onImageLoadCallback: PropTypes.func
};

FramedImageComponent.defaultProps = {
    isUploadedImage: false
};


export default FramedImageComponent;