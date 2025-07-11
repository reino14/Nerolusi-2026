// ==========================NAVBAR=====================
  window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
      header.classList.add('shadow-md', 'backdrop-blur-md');
    } else {
      header.classList.remove('shadow-md', 'backdrop-blur-md');
      header.style.backgroundColor = 'white';
    }
  });
  const navbarCheckbox = document.getElementById('navbar-open')
  const menuLinks = document.querySelectorAll('nav ul li a')

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarCheckbox.checked = false; // Tutup navbar
    })
  })