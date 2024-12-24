// Show the preloader for 3 seconds
// Show the preloader for 3 seconds
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Hide preloader after 3 seconds
    setTimeout(function() {
        preloader.style.display = 'none'; // Hide preloader
        content.style.display = 'block'; // Show content
    }, 1500); // 3000 milliseconds = 3 seconds
});