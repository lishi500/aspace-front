import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import FramedImage from "./FramedImage";
import './Image.scss'
import PropTypes from "prop-types";

const SortableItem = SortableElement(({image, isUploadedImage, maxHeight, maxWidth, removable, removeCallback}) => {

    return (
        <div className='sortableImageItem'>
            <FramedImage
                isUploadedImage={isUploadedImage}
                name={image.path}
                removable={removable}
                frameWidth={maxWidth}
                frameHeight={maxHeight}
                removeCallback={removeCallback}
                imageId={image.id}
            />
        </div>
    );
}

);

const SortableList = SortableContainer(props => {
    const {images, isUploadedImage, maxHeight, maxWidth, removable, removeCallback} = props;
    console.log('images', images);
    return (
        <div className='sortableImageContainer'>
            {images.map((image, index) => (
                <SortableItem
                    key={`item-${index}`}sortableImageContainer
                    index={index}
                    image={image}
                    isUploadedImage={isUploadedImage}
                    maxHeight={maxHeight}
                    maxWidth={maxWidth}
                    removable={removable}
                    removeCallback={removeCallback}
                />
            ))}
        </div>
    );
});

export function SortableImageListComponent(props) {
    const {
        images,
        onSortEnd,
        isUploadedImage,
        removable,
        maxHeight,
        maxWidth,
        removeCallback
    } = props;

    return <SortableList
        images={images}
        isUploadedImage={isUploadedImage}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        onSortEnd={onSortEnd}
        removable={removable}
        removeCallback={removeCallback}
    />;
}


SortableImageListComponent.propTypes = {
    images: PropTypes.array.isRequired,
    isUploadedImage: PropTypes.bool,
    removable: PropTypes.bool,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    onSortEnd: PropTypes.func,
    removeCallback: PropTypes.func
};

SortableImageListComponent.defaultProps = {
    onSortEnd: null,
    removeCallback: null,
    isUploadedImage: true,
    removable: false,
    maxHeight: 150,
    maxWidth: 200
};

export default SortableImageListComponent;