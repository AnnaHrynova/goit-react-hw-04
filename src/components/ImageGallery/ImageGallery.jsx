import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

export default function ImageGallery({ imgs, onClick, lastItemRef }) {
    return (
      <ul className={css.galleryList}>
        {imgs.map((img, index) => (
          <li
            className={css.galleryListItem}
            key={img.id}
            ref={index === imgs.length - 1 ? lastItemRef : null}
          >
            <ImageCard img={img} onClick={onClick} />
          </li>
        ))}
      </ul>
    );
  }