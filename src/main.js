import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton
} from "./js/render-functions"

const form = document.querySelector("form");
const loadMoreBtn = document.querySelector(".load-more-button");
let searchWord = null;
let page = 1;

const searchSubmit = async (event) => {
    event.preventDefault();
    hideLoadMoreButton();

    const input = event.currentTarget.elements["search-text"];
    const query = input.value.trim();
    const formElement = event.currentTarget;
    
    if (!query) {
        return;
    } else {
        searchWord = query;
    };

    page = 1;
    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(searchWord, page);

        if (data.hits.length === 0) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            })
            return;
        }

        createGallery(data.hits);

        const totalPages = Math.ceil(data.totalHits / 9);
        if (totalPages > 1) {
            showLoadMoreButton();
        }
    } catch(error) {
        iziToast.error({
            message: error,
        });
    } finally {
        hideLoader();
        formElement.reset();
    };
};

form.addEventListener("submit", searchSubmit);

loadMoreBtn.addEventListener("click", async () => {
    showLoader();

    page += 1;

    try {
        const data = await getImagesByQuery(searchWord, page);
        const totalPages = Math.ceil(data.totalHits / 9);

        if (page >= totalPages) {
            hideLoadMoreButton();
            iziToast.info(
                { message: "We're sorry, but you've reached the end of search results." }
            );
        } else {
            showLoadMoreButton();
        }

        createGallery(data.hits);

        const galleryItem = document.querySelector(".gallery-item");
        if (galleryItem) {
            const galleryItemHeight = galleryItem.getBoundingClientRect().height;

            window.scrollBy({
                top: (galleryItemHeight * 2),
                left: 0,
                behavior: "smooth",
            });
        }
    } catch (error) {
        iziToast.error({
            message: error,
        });
    } finally {
        hideLoader();
    };

});