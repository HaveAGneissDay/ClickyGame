import React, { Component } from 'react';


const imageHolder = (props) => (
    <div
        className="thumbnail"
        role="img"
        aria-label="Star Wars Images"
        style={{
            backgroundImage: `url(${props.images})`
        }}
        onClick={() => props.handleClick(props.id)}
 />
// props.map(image => {
//     return <img key={image} src ={require(`../images/${image}.png`)} alt="" className="image-responsive" />
// })

);

export default imageHolder;

