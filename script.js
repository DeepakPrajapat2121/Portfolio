
// <!-- Setup and start animation! -->
var typed = new Typed('#element', {
    strings: ['<i>Web Developer</i>', 'Programmer', 'Frontend Developer.'],
    typeSpeed: 60,
  });

   // Restart Typed every 7 seconds
   setInterval(function () {
    typed.reset(); // Reset Typed instance
    typed.start(); // Start Typed animation
  }, 7000);



  // ------------ MENU SHOW ------- //

  const menuBtn = document.querySelector('.menu');
  const sidebar = document.querySelector('.sidebar');
  menuBtn.addEventListener('click', (e) => {
    sidebar.classList.toggle('show');
  })

  const nav_links = document.querySelectorAll('.nav__links');
  function removeAllActive() {
    nav_links.forEach(navL => {
      navL.classList.remove('active');
    })
  }
  nav_links.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
      removeAllActive();
      navLink.classList.add('active');

      if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
      }
    })
  })


