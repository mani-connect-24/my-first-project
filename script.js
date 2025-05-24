document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal .close-btn');
    const viewMoreBtns = document.querySelectorAll('.view-more-btn');

    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImagesContainer = document.getElementById('modal-images');
    const modalMetricsList = document.getElementById('modal-metrics');

    // Placeholder project data
    const projectData = {
        "sunday-suppers": {
            title: "Sunday Suppers Series",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            images: ["https://via.placeholder.com/400x250/FFC107/000000?Text=Project+Image+1", "https://via.placeholder.com/400x250/03A9F4/FFFFFF?Text=Project+Image+2"],
            metrics: ["Metric A: Achieved X% increase.", "Metric B: Reduced Y by Z hours.", "Metric C: Participant satisfaction at 90%."]
        },
        "annual-retreat": {
            title: "The Annual Retreat Program",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: ["https://via.placeholder.com/400x250/4CAF50/FFFFFF?Text=Retreat+Image+1"],
            metrics: ["Key Metric: Successful execution within budget.", "Feedback: Overwhelmingly positive feedback from attendees."]
        },
        "international-cultural-festival": {
            title: "International Cultural Festival (Details)",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: ["https://via.placeholder.com/400x250/E91E63/FFFFFF?Text=Festival+Image+1"],
            metrics: ["Key Metric: Record attendance.", "Feedback: Celebrated diversity and cultural exchange."]
        },
        "global-leadership-program": {
            title: "Global Leadership Program (Details)",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: ["https://via.placeholder.com/400x250/2196F3/FFFFFF?Text=Leadership+Image+1"],
            metrics: ["Key Metric: Development of leadership skills.", "Feedback: High impact on participants' global perspective."]
        },
        "diversitea-coffee-hours": {
            title: "DiversiTEA & Coffee Hours (Details)",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: ["https://via.placeholder.com/400x250/795548/FFFFFF?Text=DiversiTEA+Image+1"],
            metrics: ["Key Metric: Fostered inclusive dialogue.", "Feedback: Enhanced community connection."]
        },
        "executive-speaker-series": {
            title: "Executive Speaker Series (Details)",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images: ["https://via.placeholder.com/400x250/607D8B/FFFFFF?Text=Speaker+Image+1"],
            metrics: ["Key Metric: Provided valuable industry insights.", "Feedback: Excellent networking opportunities."]
        }
    };

    function getProjectDetails(projectId) {
        // Fallback for other projects for now
        const defaultData = {
            title: projectId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + " (Details)",
            description: "Detailed information about " + projectId.replace(/-/g, ' ') + " will be available soon. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            images: ["https://via.placeholder.com/400x250/9E9E9E/FFFFFF?Text=Placeholder+Image"],
            metrics: ["Metric 1: Coming soon.", "Metric 2: Under review."]
        };
        return projectData[projectId] || defaultData;
    }

    // Open modal and populate content
    viewMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.dataset.projectId;
            const details = getProjectDetails(projectId);

            modalTitle.textContent = details.title;
            modalDescription.textContent = details.description;

            modalImagesContainer.innerHTML = ''; // Clear previous images
            details.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = details.title + " image";
                modalImagesContainer.appendChild(img);
            });

            modalMetricsList.innerHTML = ''; // Clear previous metrics
            details.metrics.forEach(metricText => {
                const li = document.createElement('li');
                li.textContent = metricText;
                modalMetricsList.appendChild(li);
            });

            modal.style.display = 'block';
        });
    });

    // Close modal functionality
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    // Swiper Initialization for Event Highlights slider
    const eventSwiper = new Swiper('.event-swiper', {
        // Optional parameters
        loop: true, // Enable continuous loop mode
        autoplay: {
            delay: 4000, // Autoplay delay in ms
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
        },
        slidesPerView: 1, // Default: show 1 slide
        spaceBetween: 20, // Space between slides

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px (tablets)
            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            // when window width is >= 1024px (desktops)
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },

        // If we need pagination
        pagination: {
            el: '.event-swiper .swiper-pagination', // Selector for pagination container
            clickable: true, // Allow clicking on pagination bullets to navigate
        },

        // If we need navigation buttons
        navigation: {
            nextEl: '.event-swiper .swiper-button-next', // Selector for next button
            prevEl: '.event-swiper .swiper-button-prev', // Selector for prev button
        },
    });

    // Navigation bar scroll effect
    const header = document.querySelector('body > header');
    const scrollThreshold = 50; // Pixels to scroll before changing header style

    if (header) { // Check if header element exists
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Optional: Check initial scroll position on page load
        // This handles cases where the page is loaded already scrolled down (e.g., after a refresh)
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        }
    }
});
