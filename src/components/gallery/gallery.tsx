import * as React from "react";

interface Props {
  photos: string[],
}

const Gallery: React.FunctionComponent<Props> = ({photos}) => {
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

export default Gallery;
