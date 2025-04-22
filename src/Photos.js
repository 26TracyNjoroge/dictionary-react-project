import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        console.log(props.photos)
        return (
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div className="col-4" key={index}>
                                <a href={photo.src.original} target="_black" rel="noopener nreferrer">
                                     <img src={photo.src.landscape} alt={photo.alt} className="img-fluid"/>
                                </a>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        )
    } else {
        return null;
    }
    }
   