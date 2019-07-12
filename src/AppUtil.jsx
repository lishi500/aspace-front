import React from 'react';
import {apiUrl, imageUrl, uploadUrl} from "./constants";

export const getImageUploadUrl = name => `${uploadUrl}${name}`;
export const getImageUrl = name => `${imageUrl}${name}`;
export const getProjectUrlRelative = projectId => (`/projectDetail/${projectId}`);
export const getApiUrl = action => (`${apiUrl}?action=${action}`);
export const getApiPostWithPayloadUrl = () => (`${apiUrl}`);
export const getApiUrlWithParam = (action, params) => {
    let query = `?action=${action}`;
    const keys = Object.keys(params);
    keys.forEach(key => {
        query = `${query}&${key}=${params[key]}`
    });
    return (`${apiUrl}${query}`);
};

export const getHomeImageWidth = (newWidth) => {
    if (newWidth >= 1200) {
        return 1122;
    } else if  (newWidth >= 960) {
        return 900;
    } else if (newWidth >= 768) {
        return 700;
    } else {
        return 460;
    }
};

// export const getHomeImageWidth = () => {
//     if (window.innerWidth >= 1200) {
//         return 1122;
//     } else if  (window.innerWidth >= 960) {
//         return 900;
//     } else if (window.innerWidth >= 768) {
//         return 700;
//     } else {
//         return 460;
//     }
// };

export const getContainerWidth = () => {
    if (window.innerWidth >= 1200) {
        return 1126;
    } else if  (window.innerWidth >= 960) {
        return 960;
    } else if (window.innerWidth >= 768) {
        return 768;
    } else {
        return 480;
    }
};

export const getImageFrameWidth = () => {
    const containerWidth = getContainerWidth();
    switch (containerWidth) {
        case 1200:
            return 580;
        case 960:
            return 460;
        case 768:
            return 370;
        case 480:
        default:
            return 480;

    }
};

