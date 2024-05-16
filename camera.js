document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('videoElement');
    const captureButton = document.getElementById('captureButton');

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing camera:', error);
        });

    captureButton.addEventListener('click', () => {
        window.location.href = 'result.html';
    });
});
