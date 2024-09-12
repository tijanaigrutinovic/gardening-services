document.addEventListener('DOMContentLoaded', () => {
   const menuBtn = document.querySelector('#menu-btn');
   const closeBtn = document.querySelector('#close-btn');
   const navbar = document.querySelector('.header .navbar');

   menuBtn.addEventListener('click', () => {
      navbar.classList.add('active');
      menuBtn.style.display = 'none'; 
      closeBtn.style.display = 'block'; 
   });

   closeBtn.addEventListener('click', () => {
      navbar.classList.remove('active');
      menuBtn.style.display = 'block'; 
      closeBtn.style.display = 'none'; 
   });

   navbar.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
         navbar.classList.remove('active');
         menuBtn.style.display = 'block';
         closeBtn.style.display = 'none'; 
      }
   });
});
