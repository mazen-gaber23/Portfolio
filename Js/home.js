const typingElement = document.getElementById('typing');
const text = "Front-End Developer | Angular"; 
let index = 0;

function type() {
  typingElement.innerHTML += text.charAt(index);
  index++;

  if (index > text.length) {
    setTimeout(() => {
      typingElement.innerHTML = "";
      index = 0;
      type();
    }, 2000);
  } else {
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.getElementById("backToTopBtn").addEventListener("click", topFunction);

function navActiveIfScroll() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          } 
      });
  }
);
}
document.addEventListener("DOMContentLoaded", navActiveIfScroll);  

  ////////////////////
 document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // يظهر لما يدخل بنسبة 15%
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // يظهر لما تقرب منه
      } else {
        entry.target.classList.remove("show"); // يختفي أول ما تبعد عنه أو تطلع لفوق
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
