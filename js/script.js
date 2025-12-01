document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener("scroll", function () {
        const header = document.getElementById("main-header");

        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }

        updateHeaderVars();
    });
    function updateFilterOffset() {
    const header = document.getElementById("main-header");
    const headerHeight = header.offsetHeight; // real-time height

    document.documentElement.style.setProperty(
        "--filter-top-offset",
        headerHeight + "px"
    );
    }

    window.addEventListener("scroll", updateFilterOffset);
    window.addEventListener("resize", updateFilterOffset);
    window.addEventListener("load", updateFilterOffset);
    document.getElementById("main-header").addEventListener("transitionend", updateFilterOffset);
    document.querySelector(".menu-toggle")?.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("active");
    });

    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".project-card");
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const dotsContainer = document.querySelector(".carousel-dots");

    let index = 0;
    const total = cards.length;

    cards.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "carousel-dot" + (i === 0 ? " active" : "");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    function getCardWidth() {
        return cards[0].offsetWidth + 20; // 20px gap from CSS
    }

    function getMaxTranslate() {
        const wrapperWidth = document.querySelector(".carousel-wrapper").offsetWidth;
        const totalWidth = getCardWidth() * total;
        return Math.max(0, totalWidth - wrapperWidth);
    }

    function update() {
    const slideWidth = getCardWidth();
    let offset = index * slideWidth;
    const maxTranslate = getMaxTranslate();
    if (offset > maxTranslate) offset = maxTranslate;

    track.style.transform = `translateX(${-offset}px)`;
    dots.forEach((dot, i) =>
        dot.classList.toggle("active", i === index)
    );
    }

    function nextSlide() {
    if (index < total - 1) index++;
    update();
    }

    function prevSlide() {
    if (index > 0) index--;
    update();
    }

    nextBtn.onclick = () => {
    nextSlide();
    resetAuto();
    };

    prevBtn.onclick = () => {
    prevSlide();
    resetAuto();
    };

    dots.forEach(dot => {
    dot.onclick = () => {
        index = Number(dot.dataset.index);
        update();
        resetAuto();
    };
    });

    let auto = setInterval(() => {
    if (index < total - 1) index++;
    else index = 0;
    update();
    }, 5000);

    function resetAuto() {
    clearInterval(auto);
    auto = setInterval(() => {
        if (index < total - 1) index++;
        else index = 0;
        update();
    }, 5000);
    }

    track.addEventListener("mouseenter", () => clearInterval(auto));
    track.addEventListener("mouseleave", resetAuto);

    window.addEventListener("resize", update);

    update();

    (function dynamicLayoutAdapter() {
    const root = document.documentElement;
    const header = document.getElementById("main-header");
    const filterBar = document.querySelector(".project-filters");
    const projectsSection = document.querySelector(".projects-page") || document.querySelector(".projects");
    const grid = document.querySelector(".projects-grid");
    const footer = document.querySelector("footer.footer");
    const sampleCard = document.querySelector(".project-card");

    if (!header || !filterBar || !projectsSection || !sampleCard) return;

    const computedRoot = getComputedStyle(root);
    const cardHoverScale = parseFloat(computedRoot.getPropertyValue("--card-hover-scale")) || 1.02;

    function setCssVar(name, value) { root.style.setProperty(name, value); }
    function measureHeaderHeights() {
        // Temporarily remove shrink to measure full height
        const hadShrink = header.classList.contains("shrink");
        if (hadShrink) header.classList.remove("shrink");
        const fullHeight = header.getBoundingClientRect().height;
        // add shrink if it was present and measure shrunk
        if (hadShrink) header.classList.add("shrink");
        // force shrink to measure if not present (simulate)
        header.classList.add("shrink");
        const shrunkHeight = header.getBoundingClientRect().height;
        header.classList.toggle("shrink", hadShrink); // restore original state

        return { fullHeight: Math.round(fullHeight), shrunkHeight: Math.round(shrunkHeight) };
    }

    function computeSafeBottom() {
        const cardRect = sampleCard.getBoundingClientRect();
        const cardHeight = cardRect.height;
        const scaleExtra = cardHeight * (cardHoverScale - 1); // extra height when scaled
        const footerHeight = footer ? footer.getBoundingClientRect().height : 0;
        const safe = Math.max(80, Math.ceil(scaleExtra + footerHeight + 20));
        return safe;
    }

    function updateLayoutVars() {
        const { fullHeight, shrunkHeight } = measureHeaderHeights();
        setCssVar("--header-height", `${fullHeight}px`);
        setCssVar("--header-height-shrink", `${shrunkHeight}px`);
        const topOffset = header.classList.contains("shrink") ? shrunkHeight : fullHeight;
        setCssVar("--filter-top-offset", `${topOffset + 12}px`);
        const safeBottom = computeSafeBottom();
        setCssVar("--projects-bottom-safe", `${safeBottom}px`);
    }

    const obs = new MutationObserver(() => {
        updateLayoutVars();
    });
    obs.observe(header, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", () => requestAnimationFrame(updateLayoutVars));

    updateLayoutVars();
    })();

});
