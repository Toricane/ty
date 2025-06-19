window.onload = function () {
    // --- CONFIGURATION ---
    const staticDateString = "2025-06-19T10:40:00";

    // --- PERSONALIZED PEOPLE DATA ---
    const pData = {
        example: {
            name: "Example Person",
            message: `
I wanted to take a moment to thank you for an incredible year in AP Calculus. Your passion for the subject was infectious, and you had a unique ability to make even the most complex topics feel understandable and, dare I say, fun. The "aha!" moments I had in your class are something I'll never forget.

Thank you for your patience, your encouragement, and for pushing me to be a better student. I'll carry the lessons I learned from you far beyond just mathematics.
            `,
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
        mrs_cholevas: {
            name: "Mrs. Cholevas",
            message: ``,
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
        // ... add your other people here ...
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

    const staticDate = new Date(staticDateString);

    // Set the static date display
    dateEl.textContent = staticDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Set the dynamic relative time display using Day.js
    dayjs.extend(window.dayjs_plugin_relativeTime);
    relativeTimeEl.textContent = dayjs(staticDate).fromNow();

    salutationEl.textContent = `Dear ${p.name},`;
    bodyEl.innerHTML = marked.parse(p.message);
};
