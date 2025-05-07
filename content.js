// Function to check if an element contains ad text
function containsAdText(element) {
    // Look for the specific ad indicator in Twitter's structure
    const adDivs = element.querySelectorAll('div[dir="ltr"]');
    for (const div of adDivs) {
        const span = div.querySelector('span.css-1jxf684');
        if (span && span.textContent.trim().toLowerCase() === 'ad') {
            return true;
        }
    }
    return false;
}

// Function to remove ad content
function removeAdContent() {
    // Twitter's article elements that contain posts
    const articles = document.querySelectorAll('article[data-testid="tweet"]');

    articles.forEach(article => {
        if (containsAdText(article)) {
            // Find the main content container
            const tweetText = article.querySelector('div[data-testid="tweetText"]');
            if (tweetText && tweetText.parentElement) {
                // Hide the content container
                tweetText.parentElement.style.display = 'none';
            }

            // Also hide any card/attachment content
            const cardWrapper = article.querySelector('div[data-testid="card.wrapper"]');
            if (cardWrapper) {
                cardWrapper.style.display = 'none';
            }

            // Hide any images in the tweet
            const images = article.querySelectorAll('div[data-testid="tweetPhoto"]');
            images.forEach(img => {
                img.style.display = 'none';
            });
        }
    });
}

// Create a MutationObserver to watch for new posts
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            removeAdContent();
        }
    });
});

// Start observing the document with the configured parameters
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Add scroll event listener
let scrollTimeout;
window.addEventListener('scroll', () => {
    // Clear the previous timeout
    clearTimeout(scrollTimeout);

    // Set a new timeout to check for ads after scrolling stops
    scrollTimeout = setTimeout(() => {
        removeAdContent();
    }, 150); // Check 150ms after scrolling stops
});

// Initial check for ad posts
removeAdContent();

// Also check periodically in case some ads slip through
setInterval(removeAdContent, 2000);