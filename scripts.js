 //Fading Text in JS
document.addEventListener('DOMContentLoaded', () => {
  const fadeInSection = document.querySelectorAll('.fade-in-text');

  const fadeInOutObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
       if (entry.isIntersecting) {
         entry.target.style.opacity = 1;
         entry.target.style.transform = 'translateY(0)';
       }
     });
   }, { threshold: 0.5 });

  fadeInSection.forEach(section => {
    fadeInOutObserver.observe(section);
  });
});

