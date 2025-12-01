function updateDynamicHeaderOffset() {
  const header = document.getElementById("main-header");
  const headerHeight = header.offsetHeight;

  // Update CSS variable
  document.documentElement.style.setProperty(
    "--filter-top-offset",
    `${headerHeight + 8}px`
  );
}

// UPDATE FILTER POSITION BASED ON HEADER HEIGHT
function updateHeaderMeasurements() {
  const header = document.getElementById("main-header");
  const headerRect = header.getBoundingClientRect();
  const headerHeight = headerRect.height;

  document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
  document.documentElement.style.setProperty("--filter-top-offset", `${headerHeight + 12}px`);
}

// Run on load, scroll, and resize
window.addEventListener("load", updateHeaderMeasurements);
window.addEventListener("scroll", updateHeaderMeasurements);
window.addEventListener("resize", updateHeaderMeasurements);


// Update on load
updateDynamicHeaderOffset();

// Update on scroll (because header shrinks)
window.addEventListener("scroll", updateDynamicHeaderOffset);

// Update on resize (responsive breakpoints)
window.addEventListener("resize", updateDynamicHeaderOffset);

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const category = card.dataset.category;
        if (filter === "all" || filter === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

    });
  });

  // ===== PROJECT COUNTS FOR FILTER =====
    function updateFilterCounts() {
    const cards = document.querySelectorAll(".project-card");
    const buttons = document.querySelectorAll(".filter-btn");

    const counts = {
        all: cards.length,
        professional: 0,
        academic: 0,
        personal: 0
    };

    cards.forEach(card => {
        const type = card.dataset.category;
        if (type && counts[type] !== undefined) {
        counts[type]++;
        }
    });

    buttons.forEach(btn => {
        const filter = btn.dataset.filter;
        if (counts[filter] !== undefined) {
        btn.textContent = `${btn.textContent.split("(")[0].trim()} (${counts[filter]})`;
        }
    });
    }

    updateFilterCounts();
});
