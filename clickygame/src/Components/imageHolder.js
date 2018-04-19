import React from 'react';



const ImageHolder = props => (
    <div className="image" dataId={props.id}
        onClick={() => props.handleClick(props.id)}>
        <div className="img-container" >
        {/* <img src={props.imageLink} alt="finished recipe" /> */}
        <img alt={props.name} src={props.imageLink} />
        </div>
        </div>
);

export default ImageHolder;

        // props.Images.map(function (image) {
        //     return <div> <img src={props.image.imageLink} className="thumbnail" role="img" aria-label="Star Wars Images" alt={props.image.id} onClick={() => props.handleClick(props.image.id)} /></div>
        // })