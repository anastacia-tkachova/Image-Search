import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const SimpleLightboxClass = SimpleLightbox.default || SimpleLightbox;

const lightbox = new SimpleLightboxClass('.gallery a', {
  captions: false,
});

function createGallery(images) {
    const gallery = document.querySelector(".gallery");

    const imagesList = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    alt="${tags}"
                />
            </a>
            <ul class="img-text">
                <li class="img-text-item">
                    <p class="img-word">Likes</p>
                    <p class="img-num">${likes}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Views</p>
                    <p class="img-num">${views}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Comments</p>
                    <p class="img-num">${comments}</p>
                </li>
                <li class="img-text-item">
                    <p class="img-word">Downloads</p>
                    <p class="img-num">${downloads}</p>
                </li>
            </ul>
        </li>`).join("");

    gallery.insertAdjacentHTML("beforeend", imagesList);


    lightbox.refresh();
};

function clearGallery() {
    const gallery = document.querySelector(".gallery");

    gallery.innerHTML = "";
};

function showLoader() {
    const loader = document.querySelector(".span-loader");

    loader.classList.add("loader");
};

function hideLoader() {
    const loader = document.querySelector(".span-loader");

    loader.classList.remove("loader");
};

function showLoadMoreButton() {
    const loadMoreBtn = document.querySelector(".load-more-button");

    loadMoreBtn.classList.remove("hidden");
};

function hideLoadMoreButton() {
    const loadMoreBtn = document.querySelector(".load-more-button");

    loadMoreBtn.classList.add("hidden");
};


export {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton};