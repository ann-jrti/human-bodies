import GalleryCard from "../components/GalleryCard";
import Title from "../components/Title";
import { importAll } from "../utils/utils";
import { Link } from "react-router-dom";
import "./Gallery.css";
import bodies from "../data/bodies"


const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-title">
        <Title text="human bodies"></Title>
      </div>
      <div className="gallery-items-container">
        <div className="gallery-items">
          {bodies.map(({id}, i) => {
            return (
              <Link to={`/body/${i}`}>
                <GalleryCard imgUrl={`human-bodies/img/${id}.png`} title={`Body ${i}`}></GalleryCard>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
