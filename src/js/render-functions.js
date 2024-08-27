
export const createGalleryCardTemplate = imgInfo => {
    return `
    <li class="gallery-card">
      <a href="${imgInfo.largeImageURL}">
        <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
      </a> 
      <ul>
        <li>likes: ${imgInfo.likes}</li>
        <li>views: ${imgInfo.views}</li>
        <li>comments: ${imgInfo.comments}</li>
        <li>downloads: ${imgInfo.downloads}</li>
      </ul>
    </li>
    `;
};

export const displayPhotos = (photos, galleryEl, modal) => {
    const galleryMarkup = photos.map(createGalleryCardTemplate).join('');
    galleryEl.innerHTML = galleryMarkup;

    modal.refresh();
};



export const showLoadingIndicator = (indicatorEl) => {
    indicatorEl.classList.remove('is-hidden');
};

export const hideLoadingIndicator = (indicatorEl) => {
    indicatorEl.classList.add('is-hidden');
};