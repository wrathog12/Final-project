document.addEventListener('DOMContentLoaded', function () {
    // Placeholder for any future JavaScript code
    // Example: Fetching and displaying data from localStorage or an API
    const imgDataUrl = localStorage.getItem('capturedImage');
    if (imgDataUrl) {
        const infoCard = document.querySelector('.info-card p');
        infoCard.textContent = 'Captured image data available';
    } else {
        const infoCard = document.querySelector('.info-card p');
        infoCard.textContent = 'No captured data found.';
    }
});
