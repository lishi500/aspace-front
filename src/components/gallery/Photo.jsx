import React from 'react';
import PropTypes from 'prop-types';
import './Photo.scss';
import {Link} from "react-router-dom";
import {getProjectUrlRelative} from "../../AppUtil";

const imgWithClick = { cursor: 'pointer' };

export class PhotoComponent extends React.Component {
    constructor(props) {
        super(props);

        const { margin, direction, top, left } = props;
        this.imgStyle = { display: 'block' };
        if (direction === 'column') {
            this.imgStyle.position = 'absolute';
            this.imgStyle.left = left;
            this.imgStyle.top = top;
        }

        this.state = {
            isHovering: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);

    }


    handleClick(event) {
        const { onClick, photo, index } = this.props;
        onClick(event, { photo, index });
    };

    handleMouseEnter() {
        this.setState({isHovering: true});
    }
    handleMouseOut() {
        this.setState({isHovering: false});
    }


    renderMaskInfo(photo, maskStyle) {
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
    }

    render() {
        const { onClick, photo } = this.props;
        const maskStyle = {width: photo.width, height: photo.height};
        return (
            <div
                className="photoContainer"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseOut}
            >
                { this.state.isHovering && this.renderMaskInfo(photo, maskStyle) }

                <img
                    className="photoImage"
                    style={this.onClick ? { ...this.imgStyle, ...imgWithClick } : this.imgStyle}
                    {...photo}
                    onClick={onClick ? this.handleClick : null}
                    alt=""
                />
            </div>
        );
    }

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
