// Main JavaScript file
document.getElementById("downloadCV").addEventListener("click", function (e) {
  e.preventDefault(); // impede comportamento padrão

  const link = document.createElement("a");
  link.href = "assets/cv-maria-cecilia.pdf"; // caminho do arquivo
  link.download = "Maria-Cecilia-CV.pdf"; // nome que será baixado
  link.click();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      document.getElementById("navMenu").classList.remove("active");
      document.getElementById("mobileMenuBtn").classList.remove("active");
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navMenu.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  }
});

// Render Technologies
function renderTechnologies() {
  const techGrid = document.getElementById("techGrid");
  const icons = {
    code: '<polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/>',
    palette:
      '<circle cx=\"13.5\" cy=\"6.5\" r=\".5\"/><circle cx=\"17.5\" cy=\"10.5\" r=\".5\"/><circle cx=\"8.5\" cy=\"7.5\" r=\".5\"/><circle cx=\"6.5\" cy=\"11.5\" r=\".5\"/><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z\"/>',
    atom: '<circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z\"/><path d=\"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z\"/>',
    git: '<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><path d=\"M12 6v6m0 2v6\"/>',
    database:
      '<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"/><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"/>',
  };

  techGrid.innerHTML = technologies
    .map(
      (tech) => `
        <div class=\"tech-card\">
            <div class=\"tech-icon\">
                <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                    ${icons[tech.icon] || icons.code}
                </svg>
            </div>
            <h3>${tech.name}</h3>
        </div>
    `,
    )
    .join("");
}

// Render Soft Skills
function renderSoftSkills() {
  const skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = softSkills
    .map(
      (skill, index) => `
        <div class=\"skill-card\" style=\"animation-delay: ${index * 0.1}s\">
            <div class=\"skill-header\">
                <span class=\"skill-name\">${skill.skill}</span>
                <span class=\"skill-percentage\">${skill.level}%</span>
            </div>
            <div class=\"skill-bar\">
                <div class=\"skill-progress\" style=\"width: ${skill.level}%; animation-delay: ${0.5 + index * 0.1}s\"></div>
            </div>
        </div>
    `,
    )
    .join("");
}

// Render ERP Features
function renderERPFeatures() {
  const erpFeaturesContainer = document.getElementById("erpFeatures");
  const icons = {
    workflow:
      '<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/><path d=\"M22 12A10 10 0 0 0 12 2v10z\"/>',
    zap: '<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/>',
    settings:
      '<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 1v6m0 6v6m5.196-15.196l-4.196 4.196m-5.196 5.196l4.196 4.196m11.196-9.196l-4.196 4.196m-5.196-9.196l-4.196 4.196\"/>',
    headphones:
      '<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"/><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"/>',
  };

  erpFeaturesContainer.innerHTML = `
        <div class=\"erp-grid\">
            ${erpFeatures
              .map(
                (feature) => `
                <div class=\"erp-card\">
                    <div class=\"erp-icon\">
                        <svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                            ${icons[feature.icon] || icons.settings}
                        </svg>
                    </div>
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            `,
              )
              .join("")}
        </div>
    `;
}

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  if (!container || typeof projects === "undefined") return;

  container.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card">

          <div class="project-image" 
               style="background-image: url('${project.image}')">

            <div class="project-overlay">
              <a href="projeto.html?id=${project.id}" class="btn">
                Ver Projeto
              </a>
            </div>

          </div>

          <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="project-tags">
              ${project.technologies
                .map((tech) => `<span class="tag">${tech}</span>`)
                .join("")}
            </div>
          </div>

        </div>
      `,
    )
    .join("");
}



// Render Blog
function renderBlog() {
  const blogGrid = document.getElementById("blogGrid");
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  blogGrid.innerHTML = blogPosts
    .map(
      (post) => `
        <article class=\"blog-card\" onclick=\"window.location.href='blog.html?id=${post.id}'\" style=\"cursor: pointer;\">
            <div class=\"blog-image\" style=\"background-image: url('${post.image}')\">
                <span class=\"blog-category\">${post.category}</span>
            </div>
            <div class=\"blog-content\">
                <div class=\"blog-meta\">
                    <span class=\"blog-date\">
                        <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                            <rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/>
                        </svg>
                        ${formatDate(post.date)}
                    </span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href=\"blog.html?id=${post.id}\" class=\"blog-link\">
                    Ler artigo completo
                    <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                        <path d=\"M5 12h14M12 5l7 7-7 7\"/>
                    </svg>
                </a>
            </div>
        </article>
    `,
    )
    .join("");
}

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Here you would normally send this to a backend
    console.log("Form submitted:", data);
    alert("Obrigada pela mensagem! Entrarei em contato em breve.");
    contactForm.reset();
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Initialize all renders on page load
document.addEventListener("DOMContentLoaded", () => {
  renderTechnologies();
  renderSoftSkills();
  renderERPFeatures();
  renderProjects();
  renderBlog();
});

