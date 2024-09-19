function showImage(event) {
  event.preventDefault(); // Prevent default link action
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.classList.remove('hidden');
}