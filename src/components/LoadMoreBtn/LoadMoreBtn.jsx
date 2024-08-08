import css from './LoadMoreButton.module.css'

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}