import css from './ImageCard.module.css'

export default function ImageCard({ img, onClick }) {
    return (
      <div className={css.imgWrapper} onClick={() => onClick(img)}>
        <img
          className={css.img}
          src={img.urls.small}
          alt={img.alt_description}
        />
      </div>
    );
  }