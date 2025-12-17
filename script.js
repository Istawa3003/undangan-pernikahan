const animatables = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

// jalankan observer untuk semua element
animatables.forEach(el => observer.observe(el));