import React from 'react';
import PropTypes from "prop-types";
import classnames from 'classnames';
import Image from "./Image";
import './Image.scss'
import {Button} from "react-bootstrap";


export class FramedImageComponent extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            hoverRemoving: false
        };

        this.onImageRemove = this.onImageRemove.bind(this);
    }


    onImageRemove(event) {
        const { removeCallback, imageId} = this.props;
        if (removeCallback && imageId) {
            removeCallback(imageId);
        }
    };

    removeIcon() {
        const { hoverRemoving } = this.state;
        return (
            <div
                onMouseEnter={() => { this.setState({hoverRemoving: true})}}
                onMouseLeave={() => { this.setState({hoverRemoving: false})}}
            >
                {hoverRemoving &&
                    <Button
                        className='removableIcon'
                        onClick={this.onImageRemove}
                    >
                        Remove
                    </Button>
                }
                { !hoverRemoving &&
                    <Image
                        className='removableIcon'
                        name="remove.png"
                        width={20}
                        height={20}/>
                }

            </div>
        );
    };


    render() {
        const {
            frameWidth,
            frameHeight,
            order,
            classNames,
            removable,
            removeCallback,
            imageId
        } = this.props;

        const innerStyle = {
            width: frameWidth+'px',
            height: frameHeight+'px'
        };
        const styleNames = classnames("frameOuter", classNames);

        return (
            <div className={styleNames} style={innerStyle}>
                <div className='frame' style={innerStyle}>
                    <Image
                        className="innerImage"
                        width={frameWidth}
                        height={frameHeight}
                        {...this.props}
                    />
                </div>
                {removable && this.removeIcon() }
            </div>

        );

    }

}

FramedImageComponent.propTypes = {
    name: PropTypes.string,
    order: PropTypes.number,
    isUploadedImage: PropTypes.bool,
    removable: PropTypes.bool,
    frameWidth: PropTypes.number,
    frameHeight: PropTypes.number,
    imageId: PropTypes.number,
    classNames: PropTypes.string,
    onImageLoadCallback: PropTypes.func,
    removeCallback: PropTypes.func
};

FramedImageComponent.defaultProps = {
    isUploadedImage: false,
    removable: false
};


export default FramedImageComponent;