const hamburger = document.querySelector('.hamburger');  
const headerNav = document.querySelector('#headerNav ul');

hamburger.addEventListener('click', () => {
    headerNav.classList.toggle('active');    
    hamburger.classList.toggle('toggle');    
});

