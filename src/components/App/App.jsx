import { useEffect, useState, useRef } from 'react';
import { fetchImgs } from '../img-api';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from '../SearchBar/SearchBar'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';


export default function App() {

    const [ imgs, setImgs ] = useState([]);
    const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const lastGalleryItemRef = useRef();

    const handleSearch = (newQuery) => {
        if (newQuery === query) return;
        setQuery(newQuery);
        setPage(1);
        setImgs([]);
        setTotalPages(0);
        setError(null);
      };
    
      useEffect(() => {
        const fetchImgsData = async () => {
          setLoading(true);
    
          try {
            const { images: fetchedImages, totalPages } = await fetchImgs(
              query,
              page
            );
            setImgs((prevImages) =>
              page === 1 ? fetchedImages : [...prevImages, ...fetchedImages]
            );
            setTotalPages(totalPages);
          } catch (error) {
            setError(error.message);
            toast.error(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        if (query) {
          fetchImgsData();
        }
      }, [query, page]);
    
      useEffect(() => {
        if (lastGalleryItemRef.current) {
          lastGalleryItemRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      }, [imgs]);

      const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
      };

      const endMessage = 'You have reached the end of search results.';

    return(
        <>
        <SearchBar onSearch={handleSearch} />
        <Toaster />
        {error && <ErrorMessage message={error} />}
        <ImageGallery imgs={imgs} lastItemRef={lastGalleryItemRef} onClick={setSelectedImg}/>
        {loading && <Loader />}
      {imgs.length > 0 && page < totalPages && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {page === totalPages && (
        <p>{endMessage}</p>
      )}
      <ImageModal
        isOpen={!!selectedImg}
        onClose={() => setSelectedImg(null)}
        image={selectedImg}
      />
        </>
    )
}