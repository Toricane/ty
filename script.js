window.onload = function () {
    // --- CONFIGURATION ---
    const staticDateString = "2025-06-20T08:00:00";

    // --- PERSONALIZED PEOPLE DATA ---
    // Use `audio: true` to indicate an audio file exists.
    // The filename is now automatically assumed to be `key.mp3`.
    const pData = {
        example: {
            name: "Example Person",
            audio: true, // The audio file is assumed to be `audio/example.mp3`
            message: `
Example text. Hello there!

ABCDEFG, ths is another **paragraph**.
            `,
        },
        ms_hendrix: {
            name: "Ms. Hendrix",
            message: ``,
        },
        mr_sandhu: {
            name: "Mr. Sandhu",
            message: ``,
        },
        mr_mayan: {
            name: "Mr. Mayan",
            message: ``,
        },
        mr_henders: {
            name: "Mr. Henders",
            message: ``,
        },
        ms_lew: {
            name: "Ms. Lew",
            message: ``,
        },
        mr_f_chiang: {
            name: "Mr. F. Chiang",
            message: ``,
        },
        ms_p: {
            name: "Ms. Padmanabhan",
            message: ``,
        },
        ms_cholevas: {
            name: "Ms. Cholevas",
            message: `P.S.: Here's the [French advertisement project](https://photos.app.goo.gl/HJXwLLDJ8qJSLA9p6)!`,
        },
        mr_klose: {
            name: "Mr. Klose",
            message: `
Thank you for always supporting me throughout high school! I've known you since the Computer Studies 10 class in grade 9, and I loved sharing my passion for computer programming with you. Thank you for being so open to the sharing of my ideas and projects, and for always pushing me to strive for more.

I really enjoyed the times when you would talk to me about cool ideas or just random things that you found interesting. I liked the self-directed nature of the classes you taught, and I appreciated how you let me work on my own projects, like [Connect Four with AI](https://prajwal.is-a.dev/connect4), JARVIS, and more. Thank you for always being there for me, and I hope to keep in touch with you in the future!
            `,
            audio: true,
        },
        mr_mcdowell: {
            name: "Mr. McDowell",
            message: ``,
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
            audio: true,
        },
        mr_b_chiang: {
            name: "Mr. B. Chiang",
            message: ``,
        },
        ms_datoo: {
            name: "Ms. Datoo",
            message: `
Thank you for always supporting me throughout high school! I loved how you made time for me on your busy schedule for Model UN Club and for just talking about things that I'm up to. I liked hearing your stories and perspectives on global issues, conferences that you've attended, and your research projects which you're involved in. You inspire me to push myself and be involved in things which I'm passionate about so I can tell my own stories and be an interesting person, like you.

Thank you for sponsoring the Model UN Club! I'm grateful for the times when you assisted us 
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
            message: ``,
        },
        ms_lewin: {
            name: "Ms. Lewin",
            message: ``,
        },
        ms_izmirli: {
            name: "Ms. Izmirli",
            message: ``,
        },
        mr_li: {
            name: "Mr. Li",
            message: ``,
        },
        mr_hockley: {
            name: "Mr. Hockley",
            message: `
Thank you for sponsoring the Green Team! I enjoyed spending time advocating for the environment and eating lunch in your room. Although you weren't my teacher, I enjoyed talking with you about things that I'm up to and just in general, too. I hope to keep in touch with you in the future!
            `,
            audio: true,
        },
        mr_leung: {
            name: "Mr. Leung",
            message: ``,
        },
        mr_wang: {
            name: "Mr. Wang",
            message: `
Thank you for taking me on the biology field trip, even though I didn't take biology, like at all! Also, I still remember the time when you walked by a table in Mr. Luk's room where I was sitting with Hubert, Sara, and other people from AP Biology. You said "Good job" to me, and I don't know the context :)
            `,
            audio: true,
        },
        mr_blair: {
            name: "Mr. Blair",
            message: ``,
        },
        ms_macdonald: {
            name: "Ms. MacDonald",
            message: ``,
        },
        mr_o: {
            name: "Mr. Onukwulu",
            message: ``,
        },
        ms_chin: {
            name: "Ms. Chin",
            message: ``,
        },
        // ... add your other people here, adding `audio: true` where needed ...
        default: {
            name: "visitor",
            message: `
I made this website to give personalized thank-you letters to the people in my life.

To see a specific message, add **?p=name** to the end of the URL.
            `,
        },
    };

    // --- SCRIPT LOGIC (No need to edit below this line) ---

    const urlParams = new URLSearchParams(window.location.search);
    const pKey = urlParams.get("p");
    const p = pData[pKey] || pData["default"];

    const dateEl = document.querySelector(".date");
    const relativeTimeEl = document.querySelector(".relative-time");
    const salutationEl = document.querySelector(".salutation");
    const bodyEl = document.querySelector(".letter-body");
    const audioContainer = document.getElementById("audio-player-container");

    // Logic to create and inject the audio player
    // 1. Check if the `audio` property is true.
    // 2. If it is, create the audio player using the person's key as the filename.
    if (p.audio && pKey) {
        // Also check if pKey exists to avoid errors on the default page
        const audioEl = document.createElement("audio");
        audioEl.src = `audio/${pKey}.mp3`; // Dynamically creates the path
        audioEl.controls = true;
        audioEl.preload = "metadata";
        audioContainer.appendChild(audioEl);
    }

    const staticDate = new Date(staticDateString);

    dateEl.textContent = staticDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    dayjs.extend(window.dayjs_plugin_relativeTime);
    relativeTimeEl.textContent = dayjs(staticDate).fromNow();

    salutationEl.textContent = `Dear ${p.name},`;
    bodyEl.innerHTML = marked.parse(p.message);
};
