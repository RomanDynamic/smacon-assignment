const reviews = [
  {
    title: "A Truly Authentic Experience",
    description:
      '"Omakase exceeded all my expectations. The attention to detail in every dish was impeccable, and the flavors were simply outstanding."',
    reviewer: "David S.",
  },
  {
    title: "Sublime Flavors",
    description:
      '"Each dish was an art piece, and every bite took me on a journey. The best sushi I\'ve ever had!"',
    reviewer: "Emily R.",
  },
  {
    title: "A Culinary Masterpiece",
    description:
      '"From the presentation to the taste, everything was flawless. Highly recommended for sushi lovers!"',
    reviewer: "John D.",
  },
];

function createReviewCard(review) {
  return `
    <div class="review-card" draggable="false" style="user-select: none;">
<svg class="quotation" width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.22" d="M17.493 3.51499L9.867 18.152L6.054 19.136C6.464 18.234 6.956 17.496 7.53 16.922C8.186 16.348 8.924 16.061 9.744 16.061C11.466 16.061 13.024 16.758 14.418 18.152C15.894 19.546 16.632 21.35 16.632 23.564C16.632 25.778 15.812 27.746 14.172 29.468C12.614 31.108 10.728 31.928 8.514 31.928C6.3 31.928 4.373 31.108 2.733 29.468C1.093 27.828 0.273 25.86 0.273 23.564C0.273 22.58 0.478 21.473 0.888 20.243C1.298 18.931 1.995 17.291 2.979 15.323L11.22 0.0709939L17.493 3.51499ZM40.125 3.51499L32.499 18.152L28.686 19.136C29.096 18.234 29.588 17.496 30.162 16.922C30.818 16.348 31.556 16.061 32.376 16.061C34.098 16.061 35.656 16.758 37.05 18.152C38.526 19.546 39.264 21.35 39.264 23.564C39.264 25.778 38.444 27.746 36.804 29.468C35.246 31.108 33.36 31.928 31.146 31.928C28.932 31.928 27.005 31.108 25.365 29.468C23.725 27.828 22.905 25.86 22.905 23.564C22.905 22.58 23.11 21.473 23.52 20.243C23.93 18.931 24.627 17.291 25.611 15.323L33.852 0.0709939L40.125 3.51499Z" fill="white"/>
</svg>

      <h2>${review.title}</h2>
      <p>${review.description}</p>
      <div class="review-footer">

        <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#DD2B2B"/>
<path d="M36 0L38.6942 8.2918H47.4127L40.3593 13.4164L43.0534 21.7082L36 16.5836L28.9466 21.7082L31.6407 13.4164L24.5873 8.2918H33.3058L36 0Z" fill="#DD2B2B"/>
<path d="M60 0L62.6942 8.2918H71.4127L64.3593 13.4164L67.0534 21.7082L60 16.5836L52.9466 21.7082L55.6407 13.4164L48.5873 8.2918H57.3058L60 0Z" fill="#DD2B2B"/>
<path d="M84 0L86.6942 8.2918H95.4127L88.3593 13.4164L91.0534 21.7082L84 16.5836L76.9466 21.7082L79.6407 13.4164L72.5873 8.2918H81.3058L84 0Z" fill="#DD2B2B"/>
<path d="M108 0L110.694 8.2918H119.413L112.359 13.4164L115.053 21.7082L108 16.5836L100.947 21.7082L103.641 13.4164L96.5873 8.2918H105.306L108 0Z" fill="#DD2B2B"/>
</svg>

        </svg>
        <span>- ${review.reviewer}</span>
      </div>
    </div>
  `;
}

const slider = document.getElementById("reviews");
const reviewsHTML = reviews.map(createReviewCard).join("");
slider.innerHTML = reviewsHTML + reviewsHTML; // Duplicate the reviews for infinite loop

// Function to detect the center card and increase its brightness
function highlightMiddleCard() {
  const cards = document.querySelectorAll(".review-card");
  const sliderRect = slider.getBoundingClientRect();
  const sliderCenter = sliderRect.left + sliderRect.width / 2;

  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;

    if (Math.abs(sliderCenter - cardCenter) < cardRect.width / 2) {
      card.classList.add("highlight"); // Add highlight to the center card
    } else {
      card.classList.remove("highlight");
    }
  });
}

slider.addEventListener("scroll", highlightMiddleCard);

// Drag to scroll functionality
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  slider.classList.add("dragging");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  slider.classList.remove("dragging");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return; // Stop the function if not dragging
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
  slider.scrollLeft = scrollLeft - walk;
});

highlightMiddleCard(); // Initial highlight
