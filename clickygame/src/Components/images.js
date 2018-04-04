import React, { Component } from 'react';
import images from './images'

const imageHolder = (props) => (
    <div
        className="thumbnail"
        role="img"
        aria-label="Star Wars Images"
        style={{
            backgroundImage: `url(${props.images})`
        }}
    />
);

export default imageHolder;