import React, { Component } from 'react';
import Images from './data.JSON';


const imageHolder = (props) => (
        props.Images.map(function (image) {
            return <div> <img src={props.image.imageLink} className="thumbnail" role="img" aria-label="Star Wars Images" alt={props.image.id} onClick={() => props.handleClick(props.image.id)} /></div>
        })
);

export default imageHolder;

