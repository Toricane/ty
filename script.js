// Configuration and data
const CONFIG = {
    defaultPerson: "default",
};

// Paste your Firebase config object here that you copied from the Firebase console
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyA9UYRw3Xh7pV18ShV2e9sO6CNxrkIPNxo",
    authDomain: "gratitude-letters-4195f.firebaseapp.com",
    projectId: "gratitude-letters-4195f",
    storageBucket: "gratitude-letters-4195f.firebasestorage.app",
    messagingSenderId: "1092023265379",
    appId: "1:1092023265379:web:18f7e2a2ad61bcf859b056",
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();

// Main application class
class LetterApp {
    constructor() {
        this.letterContainer = document.querySelector(".letter-container");
        this.currentPerson = null; // Will be set asynchronously
        this.pageTops = [];
        this.db = db;

        // Initialize dayjs plugin
        if (window.dayjs) {
            window.dayjs.extend(window.dayjs_plugin_relativeTime);
        }
    }

    /**
     * Get person key from URL parameter, falling back to default.
     */
    getPersonKeyFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const personKey = urlParams.get("p");
        return personKey || CONFIG.defaultPerson;
    }

    /**
     * Fetches person data from Firestore.
     */
    async fetchPersonData(personKey) {
        try {
            const docRef = this.db.collection("people").doc(personKey);
            const doc = await docRef.get();

            if (doc.exists) {
                return doc.data();
            } else {
                console.warn(
                    `Document for '${personKey}' not found. Falling back to default.`
                );
                const defaultDocRef = this.db
                    .collection("people")
                    .doc(CONFIG.defaultPerson);
                const defaultDoc = await defaultDocRef.get();
                if (defaultDoc.exists) {
                    return defaultDoc.data();
                } else {
                    console.error(
                        "Default person data not found in Firestore."
                    );
                    return null;
                }
            }
        } catch (error) {
            console.error("Error fetching data from Firestore:", error);
            return null;
        }
    }

    /**
     * Create a new letter page element
     */
    createPage() {
        const page = document.createElement("div");
        page.className = "letter-page";

        const content = document.createElement("div");
        content.className = "letter-content";
        page.appendChild(content);

        return { page, content };
    }

    /**
     * Create header with audio player and date
     */
    createHeader() {
        const headerBlock = document.createElement("div");
        headerBlock.className = "header-block";

        // Audio player container
        const audioPlayerContainer = document.createElement("div");
        audioPlayerContainer.id = "audio-player-container";

        // Add audio player if audio file exists
        if (this.currentPerson.audio && this.getPersonKey()) {
            const audioElement = document.createElement("audio");
            audioElement.src = `audio/${this.getPersonKey()}.mp3`;
            audioElement.controls = true;
            audioElement.preload = "metadata";
            audioPlayerContainer.appendChild(audioElement);
        }

        // Date block
        const dateBlock = document.createElement("div");
        dateBlock.className = "date-block";

        if (this.currentPerson.datetime) {
            const staticDate = new Date(this.currentPerson.datetime);
            const dateElement = document.createElement("p");
            dateElement.className = "date";
            dateElement.textContent = staticDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            const relativeTimeElement = document.createElement("p");
            relativeTimeElement.className = "relative-time";
            relativeTimeElement.textContent = window.dayjs
                ? window.dayjs(staticDate).fromNow()
                : "recently";

            dateBlock.appendChild(dateElement);
            dateBlock.appendChild(relativeTimeElement);
        }

        headerBlock.appendChild(audioPlayerContainer);
        headerBlock.appendChild(dateBlock);

        return headerBlock;
    }

    /**
     * Get current person key from URL (without default fallback)
     */
    getPersonKey() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get("p");
    }

    /**
     * Create salutation element
     */
    createSalutation() {
        const salutation = document.createElement("h1");
        salutation.className = "salutation";
        salutation.textContent = `Dear ${this.currentPerson.name},`;
        return salutation;
    }

    /**
     * Create closing block with signature and links
     */
    createClosingBlock() {
        const closingBlock = document.createElement("div");
        closingBlock.className = "closing-block";

        const leftDiv = document.createElement("div");

        const closing = document.createElement("p");
        closing.className = "closing";
        closing.textContent = "Sincerely,";

        const signature = document.createElement("p");
        signature.className = "signature";
        signature.textContent = "Prajwal Prashanth";

        const extraLinks = document.createElement("div");
        extraLinks.className = "extra-links";
        extraLinks.innerHTML = `
            <a href="https://youtu.be/u0_sOrrn7fo" target="_blank" rel="noopener">🎓 Valedictorian Speech</a>
            <span class="link-separator">|</span>
            <a href="https://prajwalprashanth.substack.com/" target="_blank" rel="noopener">📨 Newsletter</a>
            <span class="link-separator">|</span>
            <a href="mailto:prajwal028@outlook.com">📧 Email</a>
            <span class="link-separator">|</span>
            <a href="https://prajwal.is-a.dev/" target="_blank" rel="noopener">🌐 Website</a>
            <span class="link-separator">|</span>
            <a href="https://instagram.com/prajwal.__.p/" target="_blank" rel="noopener">📸 Instagram</a>
            <span class="link-separator">|</span>
            <a href="https://www.linkedin.com/in/prajwalprashanth/" target="_blank" rel="noopener">🔗 LinkedIn</a>
        `;

        leftDiv.appendChild(closing);
        leftDiv.appendChild(signature);
        leftDiv.appendChild(extraLinks);

        closingBlock.appendChild(leftDiv);

        return closingBlock;
    }

    /**
     * Check if content fits in current page
     */
    fitsInPage(node, currentContent, currentPage) {
        // Create a temporary container to measure content
        const measureContainer = document.createElement("div");
        measureContainer.style.cssText = `
            position: absolute;
            visibility: hidden;
            width: ${currentPage.clientWidth}px;
            padding: ${window.getComputedStyle(currentPage).padding};
        `;
        document.body.appendChild(measureContainer);

        // Clone the existing content and the new node
        measureContainer.innerHTML = currentContent.innerHTML;
        measureContainer.appendChild(node.cloneNode(true));

        // Get the height and compare
        const contentHeight = measureContainer.offsetHeight;
        const pageHeight = currentPage.clientHeight;
        const buffer = 48; // px

        // Cleanup
        document.body.removeChild(measureContainer);

        return contentHeight <= pageHeight - buffer;
    }

    /**
     * Distribute content across multiple pages
     */
    distributeContent() {
        try {
            // Create main content elements
            const header = this.createHeader();
            const salutation = this.createSalutation();
            const bodyContent = document.createElement("div");
            bodyContent.className = "letter-body";
            bodyContent.innerHTML = window.marked
                ? window.marked.parse(this.currentPerson.message)
                : this.currentPerson.message;
            const closingBlock = this.createClosingBlock();

            // Create first page
            let { page: currentPage, content: currentContent } =
                this.createPage();
            this.letterContainer.appendChild(currentPage);

            // Add header and salutation to first page
            currentContent.appendChild(header);
            currentContent.appendChild(salutation);

            // Process body paragraphs
            const paragraphs = Array.from(bodyContent.children);
            let currentParagraphGroup = document.createElement("div");

            // Try to group paragraphs together
            paragraphs.forEach((paragraph, index) => {
                const testGroup = currentParagraphGroup.cloneNode(true);
                testGroup.appendChild(paragraph.cloneNode(true));

                if (this.fitsInPage(testGroup, currentContent, currentPage)) {
                    currentParagraphGroup.appendChild(
                        paragraph.cloneNode(true)
                    );
                } else {
                    // If current group has content, add it to the page
                    if (currentParagraphGroup.children.length > 0) {
                        currentContent.appendChild(currentParagraphGroup);
                    }

                    // Start new page if needed
                    if (index < paragraphs.length) {
                        const { page: newPage, content: newContent } =
                            this.createPage();
                        this.letterContainer.appendChild(newPage);
                        currentPage = newPage;
                        currentContent = newContent;

                        // Start new paragraph group with current paragraph
                        currentParagraphGroup = document.createElement("div");
                        currentParagraphGroup.appendChild(
                            paragraph.cloneNode(true)
                        );
                    }
                }
            });

            // Add any remaining paragraphs
            if (currentParagraphGroup.children.length > 0) {
                currentContent.appendChild(currentParagraphGroup);
            }

            // Handle closing block
            if (!this.fitsInPage(closingBlock, currentContent, currentPage)) {
                const { page: newPage, content: newContent } =
                    this.createPage();
                this.letterContainer.appendChild(newPage);
                currentPage = newPage;
                currentContent = newContent;
            }
            currentContent.appendChild(closingBlock);

            // After distributing content, set up for stacking animation
            this.setupPageStacking();
        } catch (error) {
            console.error("Error distributing content:", error);
            this.showErrorMessage();
        }
    }

    /**
     * Sets up the page stacking effect if there are multiple pages.
     */
    setupPageStacking() {
        const pages = this.letterContainer.querySelectorAll(".letter-page");
        if (pages.length <= 1) return;

        this.letterContainer.classList.add("multi-page-stack");

        // Dynamically set padding-bottom to control the final page's scroll stop
        if (pages.length > 0) {
            const pageHeight = pages[0].offsetHeight;
            this.letterContainer.style.paddingBottom = `${pageHeight * 0.7}px`;
        }

        pages.forEach((page, index) => {
            page.id = `page-${index}`;
            // Store initial, static top offsets before any scrolling
            this.pageTops.push(page.offsetTop);
        });

        let isTicking = false;
        window.addEventListener("scroll", () => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    this.updatePageStyles(pages);
                    isTicking = false;
                });
                isTicking = true;
            }
        });

        // Initial call to set styles
        this.updatePageStyles(pages);
    }

    /**
     * Updates page styles on scroll for the stacking effect.
     */
    updatePageStyles(pages) {
        const scrollY = window.scrollY;
        const topStickyOffset = window.innerHeight * 0.05; // 5vh from CSS

        let activePageIndex = 0;
        for (let i = 0; i < this.pageTops.length; i++) {
            if (scrollY >= this.pageTops[i] - topStickyOffset) {
                activePageIndex = i;
            }
        }

        const activePageStickStart =
            this.pageTops[activePageIndex] - topStickyOffset;
        const activePageScrollRange = pages[activePageIndex].offsetHeight;
        const progress =
            (scrollY - activePageStickStart) / activePageScrollRange;
        const clampedProgress = Math.max(0, Math.min(1, progress));

        pages.forEach((page, index) => {
            const stackIndex = index - activePageIndex;

            if (stackIndex < 0) {
                // Pages scrolled past
                page.style.transform = `translateY(-120px) scale(1)`;
                page.style.opacity = "0";
            } else if (stackIndex === 0) {
                // The active page
                let currentProgress = clampedProgress;
                // For the last page, allow progress to go beyond 1 to animate it away
                if (index === pages.length - 1) {
                    currentProgress = progress;
                }

                if (currentProgress <= 1) {
                    const translateY = -currentProgress * 80;
                    page.style.transform = `translateY(${translateY}px) scale(1)`;
                    page.style.opacity = "1";
                } else {
                    // Last page, after its main scroll, fade it out
                    const lastPageProgress = Math.min(
                        1,
                        (currentProgress - 1) * 5
                    );
                    const translateY = -80 - lastPageProgress * 40;
                    const opacity = 1 - lastPageProgress;
                    page.style.transform = `translateY(${translateY}px) scale(1)`;
                    page.style.opacity = `${opacity}`;
                }
            } else {
                // Pages in the stack below
                const baseTranslateY = stackIndex * 20;
                const animatedTranslateY = clampedProgress * 20;
                const translateY = baseTranslateY - animatedTranslateY;

                const baseScale = 1 - stackIndex * 0.05;
                const animatedScale = clampedProgress * 0.05;
                const scale = baseScale + animatedScale;

                page.style.transform = `translateY(${translateY}px) scale(${scale})`;
                page.style.opacity = "1";
            }
        });
    }

    /**
     * Show error message if something goes wrong
     */
    showErrorMessage() {
        this.letterContainer.innerHTML = `
            <div class="letter-page">
                <div class="letter-content">
                    <h1>Something went wrong</h1>
                    <p>There was an error loading the data. Please try refreshing the page or check the URL.</p>
                </div>
            </div>
        `;
    }

    /**
     * Initialize the application
     */
    async init() {
        const personKey = this.getPersonKeyFromURL();
        this.currentPerson = await this.fetchPersonData(personKey);

        if (!this.currentPerson) {
            this.showErrorMessage();
            return;
        }

        // Convert Firestore timestamp to JS Date object
        if (this.currentPerson.datetime && this.currentPerson.datetime.toDate) {
            this.currentPerson.datetime = this.currentPerson.datetime.toDate();
        }

        // Use a ResizeObserver to wait for the first page to have a valid size
        // before distributing content.
        const { page: tempPage } = this.createPage();
        tempPage.style.opacity = "0"; // Hide it from the user
        this.letterContainer.appendChild(tempPage);

        const observer = new ResizeObserver((entries) => {
            if (entries[0].contentRect.width > 0) {
                observer.disconnect();
                this.letterContainer.removeChild(tempPage);

                try {
                    this.distributeContent();
                } catch (error) {
                    console.error("Failed to initialize letter app:", error);
                    this.showErrorMessage();
                }
            }
        });

        observer.observe(tempPage);
    }
}

// Initialize app when DOM is loaded
window.addEventListener("load", () => {
    const app = new LetterApp();
    app.init();
});
