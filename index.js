const regionLink = document.getElementById('region-link');
const modal = document.getElementById('regionModal');
const closeBtn = document.querySelector('.close-btn');
const saveBtn = document.querySelector('.save-btn');
const regionSelect = document.getElementById('regionSelect');
const currencySelect = document.getElementById('currencySelect');

// Currency mapping object
const regionToCurrency = {
    'portugal': 'EUR',
    'us': 'USD',
    'uk': 'GBP',
    'canada': 'CAD',
    'australia': 'AUD',
    'brazil': 'BRL',
    'bangladesh':'BDT',
    'china': 'CNY',
    'denmark': 'DKK',
    'egypt': 'EGP',
    'france': 'EUR',
    'germany': 'EUR',
    'india': 'INR',
    'japan': 'JPY',
    'kenya': 'KES',
    'mexico': 'MXN',
    'netherlands': 'EUR',
    'norway': 'NOK',
    'pakistan': 'PKR',
    'philippines': 'PHP',
    'poland': 'PLN',
    'qatar': 'QAR',
    'russia': 'RUB',
    'saudiarabia': 'SAR',
    'singapore': 'SGD',
    'southafrica': 'ZAR',
    'southkorea': 'KRW',
    'spain': 'EUR',
    'sweden': 'SEK',
    'switzerland': 'CHF',
    'taiwan': 'TWD',
    'turkey': 'TRY',
    'uae': 'AED',
    'ukraine': 'UAH',
    'vietnam': 'VND',
    'argentina': 'ARS',
    'belgium': 'EUR',
    'chile': 'CLP',
    'colombia': 'COP',
    'czechrepublic': 'CZK',
    'finland': 'EUR',
    'greece': 'EUR',
    'hungary': 'HUF',
    'iceland': 'ISK',
    'indonesia': 'IDR',
    'ireland': 'EUR',
    'italy': 'EUR',
    'kazakhstan': 'KZT',
    'malaysia': 'MYR',
    'newzealand': 'NZD',
    'peru': 'PEN',
    'portugal': 'EUR',
    'romania': 'RON',
    'serbia': 'RSD',
    'slovakia': 'EUR',
    'slovenia': 'EUR',
    'thailand': 'THB',
    'uruguay': 'UYU',
    'venezuela': 'VES',
    'vietnam': 'VND',
    'algeria': 'DZD',
    'angola': 'AOA',
    'bhutan': 'BTN',
    'bolivia': 'BOB',
    'croatia': 'HRK',
    'cuba': 'CUP',
    'ethiopia': 'ETB',
    'fiji': 'FJD',
    'ghana': 'GHS',
    'iraq': 'IQD',
    'jamaica': 'JMD',
    'jordan': 'JOD',
    'laos': 'LAK',
    'madagascar': 'MGA',
    'mali': 'XOF',
    'moldova': 'MDL',
    'morocco': 'MAD',
    'nepal': 'NPR',
    'nigeria': 'NGN',
    'oman': 'OMR'
};

// Display name mapping object
const regionToDisplayName = {
    'portugal': 'Portugal',
    'us': 'United States',
    'uk': 'United Kingdom',
    'canada': 'Canada',
    'australia': 'Australia',
    'brazil': 'Brazil',
    'bangladesh':'Bangladesh',
    'china': 'China',
    'denmark': 'Denmark',
    'egypt': 'Egypt',
    'france': 'France',
    'germany': 'Germany',
    'india': 'India',
    'japan': 'Japan',
    'kenya': 'Kenya',
    'mexico': 'Mexico',
    'netherlands': 'Netherlands',
    'norway': 'Norway',
    'pakistan': 'Pakistan',
    'philippines': 'Philippines',
    'poland': 'Poland',
    'qatar': 'Qatar',
    'russia': 'Russia',
    'saudiarabia': 'Saudi Arabia',
    'singapore': 'Singapore',
    'southafrica': 'South Africa',
    'southkorea': 'South Korea',
    'spain': 'Spain',
    'sweden': 'Sweden',
    'switzerland': 'Switzerland',
    'taiwan': 'Taiwan',
    'turkey': 'Turkey',
    'uae': 'United Arab Emirates',
    'ukraine': 'Ukraine',
    'vietnam': 'Vietnam',
    'argentina': 'Argentina',
    'belgium': 'Belgium',
    'chile': 'Chile',
    'colombia': 'Colombia',
    'czechrepublic': 'Czech Republic',
    'finland': 'Finland',
    'greece': 'Greece',
    'hungary': 'Hungary',
    'iceland': 'Iceland',
    'indonesia': 'Indonesia',
    'ireland': 'Ireland',
    'italy': 'Italy',
    'kazakhstan': 'Kazakhstan',
    'malaysia': 'Malaysia',
    'newzealand': 'New Zealand',
    'peru': 'Peru',
    'romania': 'Romania',
    'serbia': 'Serbia',
    'slovakia': 'Slovakia',
    'slovenia': 'Slovenia',
    'thailand': 'Thailand',
    'uruguay': 'Uruguay',
    'venezuela': 'Venezuela',
    'algeria': 'Algeria',
    'angola': 'Angola',
    'bhutan': 'Bhutan',
    'bolivia': 'Bolivia',
    'croatia': 'Croatia',
    'cuba': 'Cuba',
    'ethiopia': 'Ethiopia',
    'fiji': 'Fiji',
    'ghana': 'Ghana',
    'iraq': 'Iraq',
    'jamaica': 'Jamaica',
    'jordan': 'Jordan',
    'laos': 'Laos',
    'madagascar': 'Madagascar',
    'mali': 'Mali',
    'moldova': 'Moldova',
    'morocco': 'Morocco',
    'nepal': 'Nepal',
    'nigeria': 'Nigeria',
    'oman': 'Oman'
};

// Show modal when clicking region link
regionLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Update currency based on region selection
regionSelect.addEventListener('change', function() {
    const selectedRegion = this.value;
    const correspondingCurrency = regionToCurrency[selectedRegion];
    currencySelect.value = correspondingCurrency;
});

// Handle save button click
saveBtn.addEventListener('click', () => {
    const selectedRegion = regionSelect.value;
    const displayName = regionToDisplayName[selectedRegion];
    
    // Update the navbar text
    regionLink.textContent = displayName;
    
    // Update the currency
    currencySelect.value = regionToCurrency[selectedRegion];
    
    // Close the modal
    modal.style.display = 'none';
});




////////////////////////////////////////////////////////////////////


// Initialize currency and region name based on default selected region
window.addEventListener('DOMContentLoaded', () => {
    const initialRegion = regionSelect.value;
    currencySelect.value = regionToCurrency[initialRegion];
    regionLink.textContent = regionToDisplayName[initialRegion];
    
    // Set the initial selected option in regionSelect to match the navbar
    const currentRegion = Object.keys(regionToDisplayName).find(
        key => regionToDisplayName[key] === regionLink.textContent
    );
    if (currentRegion) {
        regionSelect.value = currentRegion;
    }
});







/********************8 */
    // Open the modal
    document.getElementById('shareButton').addEventListener('click', function() {
        document.getElementById('shareModal').style.display = 'flex';
    });

    // Close the modal
    function closeModal() {
        document.getElementById('shareModal').style.display = 'none';
    }

    // Function to open sharing links
    function shareTo(url) {
        window.open(url, '_blank');
    }
    function shareTo(url) {
        // Check if the URL starts with "sms:" (for direct SMS sharing)
        if (url.startsWith('sms:')) {
            // Try to open the SMS app
            window.location.href = url;
        } else {
            // Open other URLs in a new tab
            window.open(url, '_blank');
        }
    }
    

    // Function to share via direct Message (SMS)
    function shareToMessage() {
        const messageText = "Check out this link: https://yourwebsite.com";
        window.open(`sms:?body=${encodeURIComponent(messageText)}`, '_blank');
    }

    // Copy link to clipboard
// Function to get the current canonical URL if available
function getPageUrl() {
    // First try to get the canonical URL if it exists
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
        return canonicalLink.href;
    }

    // If no canonical URL, return the current URL without query parameters
    const cleanUrl = window.location.origin + window.location.pathname;
    return cleanUrl;
}

// Function to show a toast/notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `copy-notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 1000;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        animation: fadeInOut 2.5s ease-in-out;
    `;

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, 20px); }
            15% { opacity: 1; transform: translate(-50%, 0); }
            85% { opacity: 1; transform: translate(-50%, 0); }
            100% { opacity: 0; transform: translate(-50%, -20px); }
        }
    `;
    document.head.appendChild(style);

    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after animation
    setTimeout(() => {
        notification.remove();
        style.remove();
    }, 2500);
}

// Main copy function
async function copyLink() {
    try {
        // Get the URL to copy
        const urlToCopy = getPageUrl();

        // Check if the Clipboard API is available
        if (navigator.clipboard && window.isSecureContext) {
            // Use the Clipboard API
            await navigator.clipboard.writeText(urlToCopy);
            showNotification('Link copied to clipboard!');
        } else {
            // Fallback for browsers that don't support Clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = urlToCopy;
            
            // Make the textarea hidden
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            
            // Select and copy the text
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                textArea.remove();
                showNotification('Link copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy link:', err);
                textArea.remove();
                showNotification('Failed to copy link. Please try again.', 'error');
            }
        }

        // Close the modal if it exists
        if (typeof closeModal === 'function') {
            closeModal();
        }

    } catch (err) {
        console.error('Failed to copy link:', err);
        showNotification('Failed to copy link. Please try again.', 'error');
    }
}

// Optional: Function to handle the share button click
function handleShareButtonClick() {
    // Check if the Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: getPageUrl()
        }).then(() => {
            showNotification('Shared successfully!');
        }).catch((err) => {
            console.error('Share failed:', err);
            // Fallback to copy link if share fails
            copyLink();
        });
    } else {
        // Fallback to copy link if Web Share API is not available
        copyLink();
    }
}

// Example usage:
// For a copy button:
// <button onclick="copyLink()">Copy Link</button>

// For a share button with Web Share API support:
// <button onclick="handleShareButtonClick()">Share</button>


    /////////////////////

    const adultCountEl = document.querySelector('.traveler-count[data-type="adults"]');
    const childrenCountEl = document.querySelector('.traveler-count[data-type="children"]');
    const totalTravelersEl = document.getElementById('total-travelers'); // Display total travelers
    const adultDecrementBtn = document.querySelector('.traveler-btn[data-type="adults"][data-action="decrement"]');
    const adultIncrementBtn = document.querySelector('.traveler-btn[data-type="adults"][data-action="increment"]');
    const childrenDecrementBtn = document.querySelector('.traveler-btn[data-type="children"][data-action="decrement"]');
    const childrenIncrementBtn = document.querySelector('.traveler-btn[data-type="children"][data-action="increment"]');
    const bookButton = document.querySelector('.book-button');
    const travelerDetails = document.getElementById('traveler-details'); // Wrapper for traveler controls
    
    let adultCount = 2;
    let childrenCount = 0;
    
    function updateTotalTravelers() {
        const totalTravelers = adultCount + childrenCount;
        totalTravelersEl.value = `${totalTravelers} traveler${totalTravelers > 1 ? 's' : ''}`;
    }
    
    // Event listeners for adults
    adultDecrementBtn.addEventListener('click', () => {
        if (adultCount > 0) {
            adultCount--;
            adultCountEl.textContent = adultCount;
            updateTotalTravelers();
        }
    });
    
    adultIncrementBtn.addEventListener('click', () => {
        adultCount++;
        adultCountEl.textContent = adultCount;
        updateTotalTravelers();
    });
    
    // Event listeners for children
    childrenDecrementBtn.addEventListener('click', () => {
        if (childrenCount > 0) {
            childrenCount--;
            childrenCountEl.textContent = childrenCount;
            updateTotalTravelers();
        }
    });
    
    childrenIncrementBtn.addEventListener('click', () => {
        childrenCount++;
        childrenCountEl.textContent = childrenCount;
        updateTotalTravelers();
    });
    
    // Event listener for "Book Now" button
    bookButton.addEventListener('click', () => {
        // Hide the traveler details and show total travelers
        travelerDetails.style.display = 'none';
        totalTravelersEl.hidden = false;
        updateTotalTravelers();
    });
    
    // Initial display of travelers count
    updateTotalTravelers();





    //gallery
    const images = [
        './img/res1.jpg',
        './img/res2.avif',
        './img/res3.webp',
        './img/res4.jpeg',
         './img/res4.jpeg'
        // Add all your image paths here
    ];
    
    let currentImageIndex = 0;
    const totalImages = images.length; // Total number of images dynamically calculated
    
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightboxImage();
        document.querySelector('.lightbox').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        document.querySelector('.lightbox').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function updateLightboxImage() {
        const lightboxImage = document.querySelector('.lightbox-image');
        lightboxImage.src = images[currentImageIndex];
        document.querySelector('.lightbox-counter').textContent = `${currentImageIndex + 1}/${totalImages}`;
    }
    
    function prevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateLightboxImage();
        }
    }
    
    function nextImage() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            updateLightboxImage();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!document.querySelector('.lightbox').classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
    
    // Display the total number of images in gallery-count
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.gallery-count').textContent = `${totalImages}+`;
    });
    