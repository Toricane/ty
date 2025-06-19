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
I wanted to take a moment to thank you for an incredible year in AP Calculus. Your passion for the subject was infectious, and you had a unique ability to make even the most complex topics feel understandable and, dare I say, fun. The "aha!" moments I had in your class are something I'll never forget.

Thank you for your patience, your encouragement, and for pushing me to be a better student. I'll carry the lessons I learned from you far beyond just mathematics.
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
            message: ``,
        },
        mr_mcdowell: {
            name: "Mr. McDowell",
            message: ``,
        },
        mr_luk: {
            name: "Mr. Luk",
            message: ``,
        },
        mr_b_chiang: {
            name: "Mr. B. Chiang",
            message: ``,
        },
        ms_datoo: {
            name: "Ms. Datoo",
            message: ``,
        },
        mr_lou: {
            name: "Mr. Lou",
            message: ``,
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
            message: ``,
        },
        mr_leung: {
            name: "Mr. Leung",
            message: ``,
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
