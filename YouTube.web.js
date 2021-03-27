import React from 'react';

const YouTube = ({ videoId, style, play, origin }) => {
  return (
    <iframe
      title="PMU"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=${play ? 1 : 0}&origin=${origin}`}
      style={style}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YouTube;
