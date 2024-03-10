// main.js
import { renderGallery, showLoader, hideLoader, showEndMessage } from './js/render-functions.js';
import pixabayApi from './js/pixabay-api.js';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const loadMoreBtn = document.querySelector('.load-more-btn');
let currentPage = 1;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    showWarning('Please enter a search query!');
    return;
  }

  showLoader();

  try {
    const images = await pixabayApi.fetchImages(query, currentPage);
    renderGallery(images);

    if (images.length < 15) {
      loadMoreBtn.classList.add('hidden');
      showEndMessage();
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  } catch (error) {
    handleError(error);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();

  try {
    const images = await pixabayApi.fetchImages(searchInput.value.trim(), currentPage);
    renderGallery(images);

    if (images.length < 15) {
      loadMoreBtn.classList.add('hidden');
      showEndMessage();
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  } catch (error) {
    handleError(error);
  } finally {
    hideLoader();
  }
});

// Добавленный код для выделения активного состояния поля ввода
searchInput.addEventListener('focus', () => {
  searchInput.classList.add('active');
});

searchInput.addEventListener('blur', () => {
  searchInput.classList.remove('active');
});

function showWarning(message) {
  iziToast.warning({
    title: 'Warning',
    message: message,
  });
}

function handleError(error) {
  console.error('Error:', error);
  showErrorMessage('An error occurred. Please try again later.');
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}
