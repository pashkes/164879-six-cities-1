import React from "react";
import Proptypes from "prop-types";

const Gallery = ({photos}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos.map((item, i) => (
          <div key={i} className="property__image-wrapper">
            <img className="property__image" src={item} alt="studio"/>
          </div>)
        )}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  photos: Proptypes.array
};

export default Gallery;
