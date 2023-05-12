import React from 'react';

const Panel = ({ target="", className, icon, title, overlay, description, link }) => {
  return (
    <div className={className}>
      <a href={link} target={target}>
        <div className="panel-overlay text-center">
          <div className={`panel-overlay-text text-center ${className}`}>{overlay}</div>
        </div>
        <div className="panel-icon text-center">{icon}</div>
        <div className="panel-title text-center">{title}</div>
      </a>
    </div>
  );
};

export default Panel;