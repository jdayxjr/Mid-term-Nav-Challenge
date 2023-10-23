function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'block' : 'none';
}

// Example content changes
document.getElementById('content').innerHTML = "Welcome to our website!";

document.querySelector('nav').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        document.getElementById('content').innerHTML = `You are on the ${event.target.innerText} page.`;
    }
});