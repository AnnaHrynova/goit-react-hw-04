import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoSearchSharp } from 'react-icons/io5';
// import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import css from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
    const initialValues = { query: "" };
  
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
      if (values.query.trim() === "") {
        toast.error("Please enter a search query");
        setSubmitting(false);
        return;
      }
      onSearch(values.query);
      setSubmitting(false);
      resetForm();
    };
  
    return (
      <header className={css.header}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className={css.searchForm}>
              <button
                className={css.searchButton}
                type="submit"
                disabled={isSubmitting}
              >
                {/* <FontAwesomeIcon icon={faSearch} /> */}
                <IoSearchSharp size={'18px'} title="search icon"/>
              </button>
              <Field
                className={css.searchInput}
                type="text"
                name="query"
                placeholder="Search images and photos"
                autoComplete="off"
              />
              <ErrorMessage name="query" component="div" />
            </Form>
          )}
        </Formik>
      </header>
    );
  }