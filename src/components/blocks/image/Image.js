import React from "react";


const Image = (props) => {
  return (
    <img
      loading="lazy"
      src={require(`../../../../public/static/images/${props.name}`).default}
      alt = {props.alt}
      height ='100%'
      width ='100%'
      
    />
  );
};

export default Image;