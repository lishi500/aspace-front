import React from 'react';
import PropTypes from 'prop-types';
import './Photo.scss';
import {Link} from "react-router-dom";
import {getProjectUrlRelative} from "../../AppUtil";

const imgWithClick = { cursor: 'pointer' };

export function PhotoComponent(props) {

    const { index, onClick, photo, margin, direction, top, left, key } = props;
    const imgStyle = { display: 'block' };
    if (direction === 'column') {
        imgStyle.position = 'absolute';
        imgStyle.left = left;
        imgStyle.top = top;
        imgStyle.maxwidth = '70vw'
    }


    const handleClick = (event) => {
        const { onClick, photo, index } = props;
        onClick(event, { photo, index });
    };

    const handleMouseEnter = () => {
        props.photo.mouseEnterCallback(props.photo.projectId);
        // this.setState({isHovering: true});
    };

    const handleMouseOut = () => {
        props.photo.mouseLeaveCallback(props.photo.projectId);
        // this.setState({isHovering: false});
    };


    const renderMaskInfo = (photo, maskStyle) => {
        const projectUrl = getProjectUrlRelative(photo.projectId);
        return (
            <React.Fragment >
                <Link to={projectUrl}>
                    <div className="photoMask" style={maskStyle}>
                    </div>
                    <div className="photoInfo" style={maskStyle}>
                        <div className="photoPlaceholder"> </div>
                        <div className="photoProjectInfo">
                            <div className="photoProjectName">
                                {photo.name}
                            </div>
                            <div className="photoProjectNameUnderLine"> </div>
                        </div>
                        <div className="photoProjectType">
                            {photo.type}
                        </div>
                    </div>
                </Link>
            </React.Fragment>

        );
    };

    const maskStyle = {width: photo.width, height: photo.height};
    const projectUrl = getProjectUrlRelative(photo.projectId);

    return (
        <div
            className="photoContainer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
        >
            { photo.isHovering && renderMaskInfo(photo, maskStyle) }
            <Link to={projectUrl}>
                <img
                    className="photoImage"
                    key={key}
                    style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
                    {...photo}
                    onClick={onClick ? handleClick : null}
                />
            </Link>
        </div>
    );
};

export const photoPropType = PropTypes.shape({
    key: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string,
    title: PropTypes.string,
    srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

PhotoComponent.propTypes = {
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    photo: photoPropType.isRequired,
    margin: PropTypes.number,
    top: props => {
        if (props.direction === 'column' && typeof props.top !== 'number') {
            return new Error('top is a required number when direction is set to `column`');
        }
    },
    left: props => {
        if (props.direction === 'column' && typeof props.left !== 'number') {
            return new Error('left is a required number when direction is set to `column`');
        }
    },
    direction: PropTypes.string,
};

export default PhotoComponent;