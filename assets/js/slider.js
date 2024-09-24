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
