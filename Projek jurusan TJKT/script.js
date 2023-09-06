// Toogle class activate
const navbarnav = document.querySelector
('.navbar-nav');
// ketika jurusan kami di klik
document.querySelector('#eye')
onclick = () => {
    navbarnav.classList.toggle('activate')
};

// klik di luar sidebar untuk menghilangkan nav
const eye = document.querySelector('#eye');

document.addEventListener('click', function(e) {
    if(!eye.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});