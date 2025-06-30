# A Note of Gratitude - A Digital Thank-You Letter Project

A personalized, digital thank-you letter project designed to deliver unique messages to specific individuals through a shared link. The site is built as a static web application but dynamically and securely fetches data from a cloud database.

**[▶️ View the Live Project](https://prajwal.is-a.dev/ty/)**

---

## ✨ Features

-   **Personalized Content**: Generates unique letters based on a URL parameter (e.g., `?p=name`).
-   **Dynamic Data**: All letter content is fetched on-demand from a secure Google Firestore database.
-   **Secure by Design**: Leverages Firestore Security Rules to prevent unauthorized access to the full list of messages, ensuring privacy.
-   **Multi-Page Layout**: Automatically paginates long messages into a beautiful, book-like format.
-   **Engaging UI**: Features a "stacked paper" scrolling animation for multi-page letters.
-   **Embedded Audio**: Supports including personal audio messages for an extra touch.
-   **Markdown Support**: Letter bodies are written in Markdown for easy formatting.
-   **Responsive**: Looks great on both desktop and mobile devices.

## 🛠️ Technology Stack

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Database**: [Google Firestore](https://firebase.google.com/docs/firestore)
-   **Libraries**:
    -   [Marked.js](https://marked.js.org/): For parsing Markdown in the letter body.
    -   [Day.js](https://day.js.org/): For displaying relative dates (e.g., "2 days ago").

## 🚀 Setup and Configuration

To run or fork this project, follow these steps.

### 1. Clone the Repository

```bash
git clone https://github.com/<your-github-username>/ty.git
cd ty
```

### 2. Set Up Firebase

This project relies on Firebase to store and retrieve letter data.

1.  **Create a Firebase Project**: Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Create a Firestore Database**:
    -   In your project, go to **Build > Firestore Database** and click **Create database**.
    -   Start in **production mode**.
    -   Choose a server location.
3.  **Add Your Data**:
    -   Start a new collection with the ID `people`.
    -   For each person you want to add a letter for, create a new document. Use a simple, URL-friendly string for the **Document ID** (e.g., `ms_hendrix`, `mr_sandhu`). This ID will be used in the URL (`?p=ms_hendrix`).
    -   Add the following fields to each document:
        -   `name` (string): The full name of the person.
        -   `message` (string): The letter content, can include Markdown.
        -   `datetime` (timestamp): The date for the letter.
        -   `audio` (string - optional): A direct public URL to an audio file (e.g., from Cloudinary).
4.  **Set Security Rules**:

    -   In the Firestore section, go to the **Rules** tab.
    -   Replace the existing rules with the following to ensure data privacy:

    ```
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /people/{personId} {
          // Allow anyone to read a single document
          allow get: if true;

          // Prevent anyone from listing the whole collection or writing data
          allow list, create, write, update, delete: if false;
        }
      }
    }
    ```

    -   Publish the rules.

### 3. Configure the Application

1.  **Get Firebase Credentials**:
    -   In your Firebase project settings (click the ⚙️ icon), go to **Project settings**.
    -   Under "Your apps", create a new Web App (`</>`).
    -   Register the app and Firebase will provide a `firebaseConfig` object. Copy this object.
2.  **Update `script.js`**:
    -   Open the `script.js` file.
    -   Find the `FIREBASE_CONFIG` constant and paste your configuration object there.
3.  **Add Audio Files (Optional)**:
    -   This project supports linking to externally hosted audio files.
    -   Upload your MP3 files to a service that provides direct public URLs (e.g., [Cloudinary](https://cloudinary.com/) offers a generous free plan).
    -   Copy the public URL for the audio file.
    -   In your Firestore `people` collection, for the corresponding person's document, add or update the `audio` field with this URL.

### 4. Deploy

Since this is a static site, you can easily host it on services like GitHub Pages, Netlify, or Vercel. For GitHub Pages, simply push your changes to the `main` branch and enable Pages in your repository settings.
