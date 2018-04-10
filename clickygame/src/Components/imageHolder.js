import React from 'react';
//import Images from './data.JSON';


const ImageHolder = props => (
    <div className="image" 
        onClick={() => props.handleClick(props.id)}>
        <div className="img-container" >
        <img alt={props.name} src={props.imageLink} />
        </div>
        </div>
);

export default ImageHolder;

        // props.Images.map(function (image) {
        //     return <div> <img src={props.image.imageLink} className="thumbnail" role="img" aria-label="Star Wars Images" alt={props.image.id} onClick={() => props.handleClick(props.image.id)} /></div>
        // })