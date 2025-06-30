// Configuration and data
const CONFIG = {
    staticDate: "2025-06-20T08:00:00",
    defaultPerson: "default",
};

// Personal data - moved to top for easy editing
const PERSON_DATA = {
    example: {
        name: "Example Person",
        audio: true,
        message: `
Example text. Hello there!

ABCDEFG, this is another **paragraph**.
        `,
    },
    ms_hendrix: {
        name: "Ms. Hendrix",
        message: `
I hope this letter finds you well. Thank you for being such a wonderful teacher for Humanities 9! I really enjoyed being in your class. I still remember the time when we made Voyageur songs, and my group remixed *"Old Town Road"*. Being in your class made me understand the value of building connections with teachers and classmates, especially after the pandemic. Thank you for being such a nice teacher, and I hope to keep in touch with you in the future!
        `,
    },
    mr_sandhu: {
        name: "Mr. Sandhu",
        message: `
Thank you for being my Science 9 teacher! I liked how energetically you taught us about all the science concepts. I remember when we made the alien periodic table, and when you tried to get people to sing the elements song. I also vividly remember watching *The Day After Tomorrow* in class, and I liked how chill the class was. Also, I aspire to be more fit like you, and your workouts are really tough! Thank you for being such a nice teacher, and I hope to keep in touch with you in the future!
        `,
    },
    mr_mayan: {
        name: "Mr. Mayan",
        message: `
Thank you for being my PE 8, PE 9, and Math 9 teacher! I still have a photo of us running Garden City Lands, taken by my Mom from her car. Back then, I struggled to run continuously. I made it a goal to improve my cardio, and took Fitness and Conditioning 11/12 to improve my fitness. Now, I can easily run Garden City Lands in 15 minutes! Thank you for instilling the value of fitness in me, and for being such a nice teacher. I hope to keep in touch with you in the future!
        `,
    },
    mr_henders: {
        name: "Mr. Henders",
        message: `
Thank you for being my Career Life Education 10 teacher! I enjoyed listening to all the diverse presenters, presentations, and workshops. I liked your bubbly personality, which made the atmosphere of the class very welcoming and fun. Thank you for always saying *"Hi"* to me in the hallways, and for always being open to have deep, philosophical conversations with me. I really enjoyed the time I spent with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_lew: {
        name: "Ms. Lew",
        message: `
Thank you for being my French 10 teacher! I liked how interactive your lessons were. I still fondly remember the times when Meshroon and I would burst into laughter during class, or have fun in French. I liked how patient and kind you were, especially for the speaking tests. I'm also grateful for your involvement within Student Voice and always keeping your room open for us to eat lunch. I really enjoyed the time I spent with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_f_chiang: {
        name: "Mr. F. Chiang",
        message: `
Thank you for being my advisory, PE 10, and Fitness & Conditioning 12 teacher! I'm grateful for all the times you've pushed me to be more fit, and for always being there to support me through the ups and downs of my life. I remember you saying that being both smart and fit at the same time is awesome, and I aspire to be like that. Thank you for letting me spend time with my friends from the advisory next door, and for quizzing me on my math skills out of the blue. I really enjoyed the time I spent with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_p: {
        name: "Ms. Padmanabhan",
        message: `
I can't believe how fast time has flown by! I think the first time I saw you was during the Pascal math contest in grade 9. I was a little *kid*, new to the school, but had a passion for math and had done math contests before.

I loved your style of teaching when you taught me Pre-Calculus 11 AP-Prep. Seeing that all the walls in the classroom were covered in whiteboards, I knew that I would love this class. I enjoyed the frequent times when you would ask us to solve problems on the whiteboards, and this kept me really engaged in the class and made me even more interested in math.

Something funny is that in the Pre-Calculus 12 workbook, I've only written in 36 of the pages. I think sometime in October, I just stopped doing the workbook problems, and I focused solely on having a clear conceptual understanding in-class, doing the practice tests, and using the Feynman Technique to teach my peers the concepts using my own words. I think this is why I didn't need to do any homework (even though I regret not doing them), and I think I gained a lot of understanding through this method. By the way, I had sold the workbook to Hubert for $28, a win-win situation for both of us!

I also loved how you were so open to hearing my ideas and projects, like JARVIS, and how you were always willing to help me with my coding problems and projects. Thank you for supporting me throughout the past couple of years. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_cholevas: {
        name: "Ms. Cholevas",
        message: `
Thank you for being my Social Studies 10 and French 11 teacher! I especially enjoyed the current events projects, which helped me improve my public speaking skills and my ability to present information in a clear and concise manner. I enjoyed your style of teaching because I'm someone who learns well through lots of practice. The contrast between your projecting voice and pin-drop silence in the classroom was very unique. In French, I liked how intuitively you explained the topics on the whiteboard with your colourful pens. I had lots of fun making the French advertisement, and I'm really proud of the work which was put into it. I was surprised when I found out that you used it as an example for the next year's class! Thank you for being such a nice teacher, and I hope to keep in touch with you in the future!

P.S.: Here's the [French advertisement project](https://photos.app.goo.gl/HJXwLLDJ8qJSLA9p6)!
        `,
    },
    mr_klose: {
        name: "Mr. Klose",
        message: `
Thank you for always supporting me throughout high school! I've known you since the Computer Studies 10 class in grade 9, and I loved sharing my passion for computer programming with you. Thank you for being so open to the sharing of my ideas and projects, and for always pushing me to strive for more.

I really enjoyed the times when you would talk to me about cool ideas or just random things that you found interesting. I liked the self-directed nature of the classes you taught, and I appreciated how you let me work on my own projects, like [Connect Four with AI](https://prajwal.is-a.dev/connect4), JARVIS, and more. Thank you for always being there for me, and I hope to keep in touch with you in the future!
        `,
    },
    mr_mcdowell: {
        name: "Mr. McDowell",
        message: `
Thank you for being my BC First Peoples 12 teacher! I enjoyed the self-directed nature of the class, and I liked the stories which you would calmly tell us. I liked how you were so open to talking about your life experiences and about things that I'm up to. I'm grateful for the times hwne you would say *"Hi"* to me in the hallways, and for always being open to have deep, philosophical conversations with me. I wish I spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_luk: {
        name: "Mr. Luk",
        message: `
What will I do without you? I still cannot believe that I'm graduating. I'll miss you so much!

I've known you since grade 9, not as a teacher, but as someone who enjoys playing chess with me. I remember how I would play chess with you during lunch or after school, and how invested you were into each game. It's funny how I knew you and you knew me for as long as you have taught me, before you taught me in grade 11 and 12.

Thank you for opening up your room for lunch. I loved hanging out with my friends in your room, and I'm grateful that you let us eat lunch in your room, even if there were *chemicals* in there.

Thank you for always being open to hearing what I have to say, no matter how cool, random, serious, or weird it was. I'm grateful for having someone who I can talk to about anything.

Thank you for taking us to the Kwantlen Science Challenge many times! I appreciate how much you cared about us. I will remember how we glued your face to the green "bridge" for the janky car.

I hate unassigned assigned seating. Why did I sit in the back of the class? Well, I think it helped me understand the chemistry concepts better, because I got busy teaching Jacky. I liked how the chemistry labs were so chill, like we didn't do many prelabs. It was a really chill class.

I'll miss chilling with you, and I hope to keep in touch with you in the future!

P.S.: ***Pomegranate** ions are yummy!*
        `,
    },
    mr_b_chiang: {
        name: "Mr. B. Chiang",
        message: `
First of all, thank you for recommending me to join The Knowledge Society (TKS) program. I believe that it was one of the best decisions I've made in my life, and it has helped me grow so much as a person. I still remember the time when you told me about TKS, and how you said that I would be a great fit for it. I really appreciate your support and encouragement.

Secondly, thank you for being such a great Science 10 and Fitness & Conditioning 11 teacher. I liked how rigorous the Science 10 class was, and how you always pushed us to think critically and deeply about the concepts we were learning. Reflecting on the class, I'm grateful for for how harshly you graded the tests and labs because it made me work harder and do much better later in high school. I also enjoyed how you made fitness challenging but rewarding, and how you always encouraged us to push ourselves to be better.

Last, but not least, thank you for always being there for me, through my ups and downs in life. I really enjoyed the times when you would talk to me about my ideas and projects, and how you were always willing to help me with the situations that I find myself in. Once again, thank you for all your support, and I hope to keep in touch with you in the future!
        `,
    },
    ms_datoo: {
        name: "Ms. Datoo",
        message: `
Thank you for always supporting me throughout high school! I loved how you made time for me on your busy schedule for Model UN Club and for just talking about things that I'm up to. I liked hearing your stories and perspectives on global issues, conferences that you've attended, and your research projects which you're involved in. You inspire me to push myself and be involved in things which I'm passionate about so I can tell my own stories and be an interesting person, like you.

Thank you for sponsoring the Model UN Club! I'm grateful for the times when you assisted us when we were going over the national style of debate and about the procedure of MUN. Your presence and involvement insured that the club ran smoothly and better than before.

I'm grateful for being in your Literary Studies 11 AP class. I feel like it prepared me a lot for AP English because we did a wide variety of things, which all felt familiar this year. One memorable moment was when I played the role of Macbeth. I enjoyed how interactive your lessons were, and I had a lot of fun in your class!

Last, but not least, thank you for supporting me through difficult times. I'll miss being able to talk with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_lou: {
        name: "Mr. Lou",
        message: `
Thank you for being such a nice teacher. I loved the way you taught me physics, it was very intuitive to me because it was always step-by-step and you used very interesting examples. I still remember when you used to use Jamboard and how you were frustrated with OneNote! Many people don't realize how funny and lighthearted you are. I will remember that example when you were talking about action-reaction forces and you said *"If I punch you, you punch me back!"* Also when you said we need to *"strip the clothes"* to isolate the variables in physics problems. I'll never forget how much fun I had in your class, and how you always made it enjoyable.

Thank you for taking us to UBC Physics Olympics, and also helping us with the Kwantlen Science Challenge. I really enjoyed the time I spent with you outside of class. I also enjoyed going to PNE with you and others. Thanks for the pickleball field trip, too! I wish I had played more pickleball with you. Thanks for being my teacher, and I hope to keep in touch with you in the future!
        `,
    },
    ms_daly: {
        name: "Ms. Daly",
        message: `
Thank you for being my AP English Language and Composition 12 teacher! What I find interesting is how well you prepared us for the AP exam throughout the year. I enjoyed how thoughtfully you taught us not just the AP exam content, but also how to write well and how to think critically about the texts we read. I especially enjoyed our Socratic seminars, which was both daunting and exciting at the same time. Thank you for also stepping up to be at the RichMUN conference, and for being so supportive of the Model UN Club.

I'm grateful that you chose me to be the class valedictorian! Although I had not known you for the majority of high school, I felt like I had a strong connection with you, and I'm honoured that you chose me to represent our class. I enjoyed the time we spent together, and I hope to keep in touch with you in the future!
        `,
    },
    ms_lewin: {
        name: "Ms. Lewin",
        message: `
Thank you for being my CLC teacher! Although I haven't interacted with you much, I'm really grateful for the opportunities which you've presented to me, such as the Human Library event. Thank you for being supportive of my ideas and projects, and for always being open to hearing what I have to say. I wish I spent some more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_izmirli: {
        name: "Ms. Izmirli",
        message: `
Thank you for being my Law Studies 12 teacher! To be honest, I enjoyed the Question of the Day (QOTD). As someone who didn't have many friends coming into the class (since I was one of the four grade 12s), I liked how the QOTD let me get to know my classmates better. I also liked how we focused a lot on argumentation and critical thinking, which actually prepared me a lot for the AP English exam. I enjoyed the times when I participated in debates, too. Thank you for being my teacher, and I hope to keep in touch with you in the future!
        `,
    },
    mr_li: {
        name: "Mr. Li",
        message: `
Although I have never had you as a teacher, you've taught me so much about science and math through preparation for the Kwantlen Science Challenge and teh CEMC contests. I remember the times when we practiced Jeopardy questions in your room, did problems of the week, and also when I built the popsicle stick bridge. I'm grateful for all the time you spent with me, and for always being open to hearing my ideas and projects. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_hockley: {
        name: "Mr. Hockley",
        message: `
Thank you for sponsoring the Green Team! I enjoyed spending time advocating for the environment and eating lunch in your room. Although you weren't my teacher, I enjoyed talking with you about things that I'm up to and just in general, too. I hope to keep in touch with you in the future!
        `,
    },
    mr_leung: {
        name: "Mr. Leung",
        message: `
Although you have never taught me, I'm thankful for the time I've spent with you in Chess Club and Student Voice. I'm grateful for the opportunities I've had to be able to share my opinions about the school community. I enjoyed seeing your smiling face whenever we met. I'm really thankful for the trust you've put in me to represent my grad class. Thanks for keeping your room open for lunch, thank you for supporting me throughout high school, and I hope to keep in touch with you in the future!
        `,
    },
    mr_wang: {
        name: "Mr. Wang",
        message: `
Thank you for taking me on the biology field trip, even though I didn't take biology, like at all! Also, I still remember the time when you walked by a table in Mr. Luk's room where I was sitting with Hubert, Sara, and other people from AP Biology. You said "Good job" to me, and I don't know the context :)
        `,
    },
    ms_mei: {
        name: "Ms. Mei",
        message: `
Thank you so much for being the teacher librarian! I loved your soft tone and how kind you were to everyone. Thank you for the times when you were curious about what I've been up to. I enjoyed preparing for the Kwantlen Science Challenge with you, and I learned a lot from you. I enjoyed going on the UBC field trip with you as well. Thank you for watching my capstone presentation, and for always being supportive of my ideas and projects. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_wu: {
        name: "Ms. Wu",
        message: `
Thank you for being the library technician! I appreciated all the times when you would help me with printing documents and 3D printing parts for projects. I remember sometimes you would let me print more without charging me, and I really appreciate that. I enjoyed the times when you would talk to me about things that I'm up to. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_sadler: {
        name: "Ms. Sadler",
        message: `
Thank you for taking me on the UBC field trip! Although it was my second time on this exact field trip, the artwork was still intriguing and I learned a lot from it. I appreciate the times you've printed my documents for me, and for always being so kind and helpful. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_nguyen: {
        name: "Mr. Nguyen",
        message: `
Thank you for the time when you supported us at the RichMUN conference! I liked how helpful and kind you were, and how you always made sure that we were doing well. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_hans: {
        name: "Ms. Hans",
        message: `
Thank you for the times when you sponsored our MUN club meetings! I really appreciate your support and encouragement. I also enjoyed the time when you taught us how to quote sources, which I still use to this day. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_thomas: {
        name: "Mr. Thomas",
        message: `
Thank you for all the times that you spent talking to me in the hallways! I really enjoyed our conversations, and I liked how you were always so open to hearing my ideas and projects. I enjoyed it when you taught our math class when you were a student teacher. I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_blair: {
        name: "Mr. Blair",
        message: `
Thank you so much for everything that you do! I know that you are very busy around the school, but I appreciate all of the times when you would interact with me or other students. I'm grateful for the times we've chit-chatted together, about academics, projects, and life in general. Thank you for your involvement in Student Voice, where I was able to share my opinions about the school community. Thank you for vouching for me when picking the role of class valedictorian! I really enjoyed the time I spent with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_macdonald: {
        name: "Ms. MacDonald",
        message: `
Thank you for organizing all the fun events at school, especially the graduation events! Thank you for the times when you gave me the awards in grade 11 and 12, and for choosing me to be the class valedictorian! I really enjoyed the time I spent with you, and I hope to keep in touch with you in the future!
        `,
    },
    mr_o: {
        name: "Mr. Onukwulu",
        message: `
Thank you for being a cool guy with a great vibe! I liked your personality and all the times that you'd say *"Let's go to class!"* in the morning when I was late. Thank youf or being there for me! I wish I had spent more time with you, and I hope to keep in touch with you in the future!
        `,
    },
    ms_chin: {
        name: "Ms. Chin",
        message: `
Thank you for all the times you've amended the daily announcements to include announcements from my clubs! I really appreciate the work that you do behind the scenes to make the school run smoothly. Thank you!
        `,
    },
    default: {
        name: "visitor",
        message: `
I made this website to give personalized thank-you letters to the people in my life.

To see a specific message, add **?p=name** to the end of the URL.
        `,
    },
};

// Main application class
class LetterApp {
    constructor() {
        this.letterContainer = document.querySelector(".letter-container");
        this.staticDate = new Date(CONFIG.staticDate);
        this.currentPerson = this.getPersonFromURL();

        // Initialize dayjs plugin
        if (window.dayjs) {
            window.dayjs.extend(window.dayjs_plugin_relativeTime);
        }
    }

    /**
     * Get person data from URL parameter or return default
     */
    getPersonFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const personKey = urlParams.get("p");
        return PERSON_DATA[personKey] || PERSON_DATA[CONFIG.defaultPerson];
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

        const dateElement = document.createElement("p");
        dateElement.className = "date";
        dateElement.textContent = this.staticDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        const relativeTimeElement = document.createElement("p");
        relativeTimeElement.className = "relative-time";
        relativeTimeElement.textContent = window.dayjs
            ? window.dayjs(this.staticDate).fromNow()
            : "recently";

        dateBlock.appendChild(dateElement);
        dateBlock.appendChild(relativeTimeElement);

        headerBlock.appendChild(audioPlayerContainer);
        headerBlock.appendChild(dateBlock);

        return headerBlock;
    }

    /**
     * Get current person key from URL
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
        currentContent.appendChild(node);
        const buffer = 16; // px
        const fits =
            currentContent.scrollHeight <= currentPage.offsetHeight - buffer;
        currentContent.removeChild(node);
        return fits;
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

            // Gather all content nodes
            const contentNodes = [
                header,
                salutation,
                ...Array.from(bodyContent.childNodes),
                closingBlock,
            ];

            let { page: currentPage, content: currentContent } =
                this.createPage();
            this.letterContainer.appendChild(currentPage);

            // Distribute content across pages
            for (const node of contentNodes) {
                const clonedNode = node.cloneNode(true);

                if (this.fitsInPage(clonedNode, currentContent, currentPage)) {
                    currentContent.appendChild(clonedNode);
                } else {
                    // Start new page
                    const { page: newPage, content: newContent } =
                        this.createPage();
                    this.letterContainer.appendChild(newPage);
                    currentPage = newPage;
                    currentContent = newContent;
                    currentContent.appendChild(clonedNode);
                }
            }
        } catch (error) {
            console.error("Error distributing content:", error);
            this.showErrorMessage();
        }
    }

    /**
     * Show error message if something goes wrong
     */
    showErrorMessage() {
        this.letterContainer.innerHTML = `
            <div class="letter-page">
                <div class="letter-content">
                    <h1>Something went wrong</h1>
                    <p>Please try refreshing the page or check the URL parameter.</p>
                </div>
            </div>
        `;
    }

    /**
     * Initialize the application
     */
    init() {
        try {
            this.distributeContent();
        } catch (error) {
            console.error("Failed to initialize letter app:", error);
            this.showErrorMessage();
        }
    }
}

// Initialize app when DOM is loaded
window.addEventListener("load", () => {
    const app = new LetterApp();
    app.init();
});
