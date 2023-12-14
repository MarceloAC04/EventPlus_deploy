import React from "react";
import './Titulo.css'

const Titulo = ({ titleText, color = "", textClass = "" }) => {
  return (
    <h1 className={`title  ${textClass}`} style={ {color: color}}>
      {titleText}
      <hr
        className="title__underscore"
        style={{ borderColor: color }}
      />
    </h1>
  );
};

export default Titulo;
