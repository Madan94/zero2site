// Hamburger Menu Toggle
const hamburger = document.getElementById('dzyhdr-hamburger');
const navMenu = document.getElementById('dzyhdr-nav-menu');
const heroSection = document.querySelector('.DZY-hero-section');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  if (navMenu.classList.contains('active')) {
    const navHeight = navMenu.offsetHeight;
    heroSection.style.marginTop = `${navHeight}px`;
  } else {
    heroSection.style.marginTop = '0';
  }
});

// Sticky Header and Blur Effect on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.dzyhdr-header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const spanText = document.querySelector('.DZY-animate-span');
    const text = spanText.textContent;
    spanText.textContent = ''; // Remove the text from DOM for processing

    // Split text into individual letters and wrap each in a <span>
    text.split('').forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${index * 0.1}s`; // Stagger the animation for each letter
      spanText.appendChild(span);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".DZY-stat-number");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 200; // Adjust speed

      const updateCounter = () => {
        const value = +counter.innerText;
        if (value < target) {
          counter.innerText = Math.ceil(value + increment);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target; // Set to target in case of rounding issues
        }
      };
      updateCounter();
    });
  });

 
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".dzc-carousel-container");
    const slides = document.querySelectorAll(".dzc-carousel-slide");
    let currentIndex = 0;

    // Duplicate slides for seamless looping
    const totalSlides = slides.length;
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      container.appendChild(clone);
    });

    // Function to move the carousel
    function moveCarousel() {
      currentIndex++;
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Reset the carousel when it reaches the end
      if (currentIndex === totalSlides) {
        setTimeout(() => {
          container.style.transition = "none";
          container.style.transform = "translateX(0)";
          currentIndex = 0;
        }, 500);
      }
    }

    // Auto loop every 3 seconds
    setInterval(moveCarousel, 3000);
  });


    document.querySelectorAll('.qa-question').forEach((question) => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;

    // Close other answers if you want only one open at a time
    document.querySelectorAll('.qa-item').forEach((item) => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    // Toggle current answer
    parent.classList.toggle('open');
  });
});


// JavaScript
const testimonials = document.querySelectorAll('.DD-testimonial');
const prevBtn = document.querySelector('.DD-prev');
const nextBtn = document.querySelector('.DD-next');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
});

// Auto-slide functionality
setInterval(() => {
  currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
}, 5000);


