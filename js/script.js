const burger = document.getElementById('burger');
const navBar = document.getElementById('nav-bar');

burger.addEventListener('click', () => {
	navBar.classList.toggle('active');
});
