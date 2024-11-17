gsap.registerPlugin(ScrollTrigger);

// Select all feature items
const sections = gsap.utils.toArray(".container .panel"); // Get individual sections
const container = document.querySelector('.container');

// Animate each feature on scroll
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1), // Move through all items horizontally
    ease: "none",
    scrollTrigger: {
        trigger: ".container", // The container that triggers the animation
        pin: true, // Pins the container during the horizontal scroll
        scrub: 1, // Smooth scrubbing
        snap: 1 / (sections.length - 1), // Snap to each item
        markers: false, // Debug markers (can be removed after testing)
        start: "top top", // Start when the top of the container hits the top of the viewport
        end: () => "+=" + container.offsetWidth, // End after scrolling through all the sections


        // Optional: Ensure the scroll continues smoothly after horizontal scrolling ends
        onComplete: () => {
            // Trigger any behavior after the scroll completes (e.g., show more content)
            gsap.to(".container", { duration: 1, opacity: 1 });
        }
    },
});

// Get the chevron container and the target story section
const chevronContainer = document.querySelector('.chevron-container');
const storySection = document.getElementById('story');

// Add click event listener to the chevron container
chevronContainer.addEventListener('click', function() {
    // Scroll smoothly to the story section
    storySection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'  // Align the top of the section to the viewport
    });
});