// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Ob feature cards, pricing cards, stat items
document.querySelectorAll('.feature-card, .pricing-card, .stat-item').forEach(el => {
  observer.observe(el);
});

// Add fade-in-up to hero stats on load (since they’re in viewport)
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.stat-item').forEach(el => {
      el.classList.add('visible');
    });
  }, 300);
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// Optional: Add parallax-like effect to hero image on scroll
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroImage.style.transform = `perspective(1000px) rotateY(${Math.sin(scrollY / 200) * 3}deg) scale(${1 + Math.abs(Math.sin(scrollY / 500)) * 0.02})`;
  });
}

// Preload images (simulated via data URI — replace with real URLs in production)
const img = new Image();
img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ccircle cx='300' cy='200' r='100' fill='%23e5e7eb'/%3E%3Ctext x='300' y='205' text-anchor='middle' font-size='20' fill='%236b7280'%3EOffice Scene%3C/text%3E%3C/svg%3E";




const modal = document.getElementById("myModal");
const btn = document.getElementById("buttonModal");
const closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
})

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
})

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});
