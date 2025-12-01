// /js/modalHandler.js
import { projectsData } from "./projectsData.js";

export function createProjectModal() {
  const modal = document.getElementById("project-modal");
  const modalInner = modal.querySelector(".modal-inner");
  const closeBtn = modal.querySelector(".modal-close");
  const overlay = modal.querySelector(".modal-overlay");

  function openModal(project) {
    // Build content dynamically
    let html = `
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-description">${project.desc}</p>
      <div class="modal-info">
        <p><strong>Year:</strong> ${project.year || "-"}</p>
        <p><strong>Tools:</strong> ${project.tools || "-"}</p>
      </div>
      <hr>
    `;

    // Build modular content blocks
    project.content.forEach(block => {
        if (block.type === "text") {
            html += `<div class="modal-block">${block.html}</div>`;
        }

        if (block.type === "image") {
            html += `
            <div class="modal-images">
                <img src="${block.src}" alt="${block.alt || ""}">
            </div>`;
        }

        if (block.type === "carousel") {
            html += `
            <div class="modal-carousel">
                <div class="modal-carousel-track">
                ${block.images.map(img => `
                    <div class="modal-carousel-slide">
                    <img src="${img}">
                    </div>
                `).join("")}
                </div>
                <button class="modal-carousel-btn prev">‹</button>
                <button class="modal-carousel-btn next">›</button>
                <div class="modal-carousel-dots"></div>
            </div>
            `;
        }

        if (block.type === "figure") {
        html += `
            <div class="modal-figure">
            <img src="${block.src}" alt="">
            <div class="caption">${block.caption || ""}</div>
            </div>
        `;
        }
        if (block.type === "image-left") {
        html += `
            <div class="modal-row">
            <img src="${block.src}">
            <div class="text">${block.html}</div>
            </div>
        `;
        }
        if (block.type === "image-right") {
        html += `
            <div class="modal-row reverse">
            <img src="${block.src}">
            <div class="text">${block.html}</div>
            </div>
        `;
        }
        if (block.type === "img-grid") {
        html += `
            <div class="modal-img-grid">
            ${block.images.map(src => `<img src="${src}">`).join("")}
            </div>
        `;
        }
        if (block.type === "section-title") {
        html += `<h3 class="modal-section-title">${block.text}</h3>`;
        }
        if (block.type === "carousel-left") {
        html += `
            <div class="modal-row">
            <div class="modal-carousel modal-carousel-inline">
                <div class="modal-carousel-track">
                ${block.images.map(img => `
                    <div class="modal-carousel-slide">
                    <img src="${img}">
                    </div>
                `).join("")}
                </div>
                <button class="modal-carousel-btn prev">‹</button>
                <button class="modal-carousel-btn next">›</button>
                <div class="modal-carousel-dots"></div>
            </div>
            <div class="text">${block.html}</div>
            </div>
        `;
        }
        if (block.type === "carousel-right") {
        html += `
            <div class="modal-row reverse">
            <div class="modal-carousel modal-carousel-inline">
                <div class="modal-carousel-track">
                ${block.images.map(img => `
                    <div class="modal-carousel-slide">
                    <img src="${img}">
                    </div>
                `).join("")}
                </div>
                <button class="modal-carousel-btn prev">‹</button>
                <button class="modal-carousel-btn next">›</button>
                <div class="modal-carousel-dots"></div>
            </div>
            <div class="text">${block.html}</div>
            </div>
        `;
        }

      
    });
    modalInner.innerHTML = html;
    modal.classList.add("open");
    setupModalCarousel();
  }

    function setupModalCarousel() {
    const carousels = modalInner.querySelectorAll(".modal-carousel");
    if (!carousels.length) return;

    carousels.forEach(carousel => {
        const track = carousel.querySelector(".modal-carousel-track");
        const slides = carousel.querySelectorAll(".modal-carousel-slide");
        const prev = carousel.querySelector(".modal-carousel-btn.prev");
        const next = carousel.querySelector(".modal-carousel-btn.next");
        const dotsContainer = carousel.querySelector(".modal-carousel-dots");
        let index = 0;
        slides.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => {
            index = i;
            update();
        });
        dotsContainer.appendChild(dot);
        });
        const dots = dotsContainer.querySelectorAll(".dot");
        function update() {
        track.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
        }
        next.onclick = () => {
        index = (index + 1) % slides.length;
        update();
        };
        prev.onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        update();
        };
    });
    }

  closeBtn.onclick = () => modal.classList.remove("open");
  overlay.onclick = () => modal.classList.remove("open");

  window.addEventListener("openProjectModal", e => {
    const project = projectsData.find(p => p.id === e.detail.id);
    if (project) openModal(project);
  });
}
