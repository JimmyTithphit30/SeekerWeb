// Placeholder for interactivity
console.log("Welcome to Seeker Web!");
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
}
function toggleMode() {
  isLoginMode = !isLoginMode;
  authTitle.textContent = isLoginMode ? "Log In" : "Sign Up";
  toggleBtn.textContent = isLoginMode ? "Sign up" : "Log in";
  document.getElementById("nameField").style.display = isLoginMode ? "none" : "block";
  authFormElement.querySelector("button").textContent = isLoginMode ? "Log In" : "Sign Up";
}
if (!email || !pass || (!isLoginMode && !name)) {
  alert("Please fill out all fields.");
  return;
}

// main.js - Bundled site scripts with performance improvements

// Throttle scroll with requestAnimationFrame
document.addEventListener('scroll', () => {
  if (!window._scrollTicking) {
    window._scrollTicking = true;
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.animated-float');
      parallaxElements.forEach((el, idx) => {
        const speed = (idx + 1) * 0.3;
        el.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
      });
      window._scrollTicking = false;
    });
  }
}, { passive: true });

// Batched IntersectionObserver for fade-in-up
const fadeEls = document.querySelectorAll('.fade-in-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3, rootMargin: '0px 0px -100px 0px' });
fadeEls.forEach(el => observer.observe(el));

// Mobile menu toggle (single observer)
const mobileBtn = document.querySelector('button.md\:hidden');
mobileBtn?.addEventListener('click', () => {
  const existing = document.querySelector('.mobile-menu');
  if (existing) {
    existing.remove();
  } else {
    const menu = document.createElement('div');
    menu.className = 'mobile-menu absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg';
    menu.innerHTML = `
      <div class="px-4 py-6 space-y-4">
        <a href="#home" class="block text-gray-700 hover:text-blue-600">Home</a>
        <a href="#about" class="block text-gray-700 hover:text-blue-600">About</a>
        <a href="#programs" class="block text-gray-700 hover:text-blue-600">Programs</a>
        <a href="#membership" class="block text-gray-700 hover:text-blue-600">Membership</a>
        <a href="#contact" class="block text-gray-700 hover:text-blue-600">Contact</a>
      </div>
    `;
    mobileBtn.parentElement.parentElement.appendChild(menu);
  }
});

// Counter animation for membership prices
function animateCounter(el, target, duration = 1000) {
  let start = 0;
  const step = () => {
    const now = performance.now();
    const progress = Math.min((now - startTime) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  const startTime = performance.now();
  requestAnimationFrame(step);
}
const membershipSection = document.getElementById('membership');
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-counter]').forEach(el => {
        animateCounter(el, parseInt(el.dataset.counter, 10), 800);
      });
      this.disconnect();
    }
  });
}).observe(membershipSection);

// Typing effect for hero subtitle
document.addEventListener('DOMContentLoaded', () => {
  const subtitle = document.querySelector('#home p.text-lg');
  if (!subtitle) return;
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  setTimeout(() => {
    const typer = () => {
      subtitle.textContent += text.charAt(i);
      i++;
      if (i < text.length) {
        setTimeout(typer, 50);
      }
    };
    typer();
  }, 200);
});

// Ripple effect on buttons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Export for bundler compatibility
export default {};



