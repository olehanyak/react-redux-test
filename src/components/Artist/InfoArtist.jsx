import React from "react";

const InfoArtist = (props) => {
  const artistTags = props.info.artist.tags.tag.map((i) => (
    <a className="info-artist__tags_item" href={i.url}>
      {i.name}{" "}
    </a>
  ));

  const imageArtist = props.info.artist.image[2]["#text"];

  return (
    <div className="info-artist">
   
      <img className="info-artist__img" src={imageArtist} alt="Image artist" />
      <p>{props.info.artist.bio.summary}</p>

      <div className="info-artist__tags">{artistTags}</div>
    </div>
  );
};

export default InfoArtist;
