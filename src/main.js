import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


import { fetchPhotos } from "./js/pixabay-api";
import { createGalleryCardTemplate } from "./js/render-functions";
import { displayPhotos } from "./js/render-functions";
import { showLoadingIndicator } from "./js/render-functions";
import { hideLoadingIndicator } from "./js/render-functions";



const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadingIndicatorEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery-card a');

const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchValue = searchFormEl.elements.user_query.value.trim();
    if(searchValue === "") {
        iziToast.error({
            title: "Error",
            message: "Sorry, there are no images matching your search query. Please try again!",
        });
        return;
    }
    
    showLoadingIndicator(loadingIndicatorEl);

    galleryEl.innerHTML = ''; // Очистка 
   


    fetchPhotos(searchValue)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.warning({
                    title: "No results",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: 'topRight',
                });
                return;
            }
            displayPhotos(data.hits, galleryEl,lightbox);
        })
        .catch(err => {
            iziToast.error({
                title: "Error",
                message: "Something went wrong! Please try again later.",
                position: 'topRight',
            });
            console.error("Error fetching images:", err);
        })
        .finally(() => {
            hideLoadingIndicator(loadingIndicatorEl);
            searchFormEl.elements.user_query.value = '';
        });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
