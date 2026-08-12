export const projects = [
    {
        title: "Manga Translation Extension",
        date: "Jun 2026 - Present",
        tech: "Chrome Extension API, Javascript, Python, Hugging Face",
        image: "extension.png",
        link: "https://github.com/X1ng1/Manga-Translator-Extension",
        description: `Manga Translation Extension is a Chrome extension that automatically translates
         Japanese manga into English and displays the translations directly on the original panels.`,
        responsibilities: [
            `Architected a Python-based ML pipeline integrating Hugging Face models for Japanese
             text detection, OCR, and machine translation, enabling automated English translations
             of manga panels.`,
            `Built benchmarks and tests to profile pipeline performance, using latency measurements
             to iteratively experiment with and optimize the system architecture for improved throughput.`,
            `Integrated a FastAPI backend with a Chrome extension to overlay translations directly
             onto manga pages while preserving the original layout.`
        ]
    },
    {
        title: "Manglify",
        date: "Feb 2026 - May 2026",
        tech: "React Native + Expo, FastAPI, Supabase, Hugging Face",
        image: "manglify.png",
        link: "https://github.com/TonyLiu2004/Multimodal-Manga-Translator/tree/main",
        description: `Manglify is an AI-powered manga reader that translates Japanese
        manga using OCR and machine translation. Users can browse manga,
        receive AI-generated translations, and read translated pages
        through a modern React Native interface.`,
        responsibilities: [
            `Designed UI wireframes to establish application layouts and user flows.`,
            `Refactored the frontend into reusable components, improving code maintainability
             and reducing duplication.`,
            `Developed responsive interfaces that adapt seamlessly across mobile and desktop screen
             sizes.`
        ]
    },
    {
        title: "MediaTracker",
        date: "Apr 2026",
        tech: "Python, CloudScraper, BeautifulSoup",
        image: "mediatracker.png",
        link: "https://github.com/X1ng1/MediaTracker",
        demoLink: "https://canva.link/r5d6ty7uu9wzb8e",
        description: `MediaTracker automates content tracking across multiple websites by scraping sources, 
        detecting new releases, and extracting relevant information.`,
        responsibilities: [
            `Built a Python-based media tracker that scrapes release data from multiple manga/webtoon sources and
             consolidates updates into JSON, including chapter numbers, release timestamps, and direct links to 
            newly released chapters.`,
            `Implemented a flexible data extraction pipeline supporting both HTML scraping and API integration
             across sources such as Webtoon and MangaDex.`,
            `Configured per-site selectors in a JSON file, so the same scraping function can handle different site
             layouts by reading container/card/title/chapter/time/link rules from JSON.`
        ]
    },
    {
        title: "Socialite",
        date: "Oct 2025 - Nov 2025",
        tech: "React + Typescript, ExpressJS, PostgreSQL, Firebase",
        image: "socialite01.png",
        link: "https://github.com/CSCI-40500-Fall-2025/project-project-1",
        description: `Built a full-stack calendar scheduling web app using
        React/Next.js and Express, allowing students to create, manage and view
        events through a centralized platform. `,
        responsibilities: [
            `Collaborated in an Agile development team using CI/CD and release workflows by
            setting up GitHub Action pipelines and automated testing with Jest across frontend
            and backend.`,
            `Implemented`,
            `Engineered a Python ML model using scikit-learn to analyze patterns in user event history
            and predict optimal scheduling times, automating event creation and significantly enhancing
            user experience by reducing manual input.`,
        ]
    },
    {
        title: "Memo",
        date: "Oct 2025 - Nov 2025",
        tech: "React, Express.js, MongoDB, Hugging Face",
        image: "memo.png",
        link: "https://github.com/X1ng1/memo",
        demoLink: "https://memo-x1ng1.vercel.app/",
        description: `Developed a full-stack digital journaling web application designed to 
        help users track daily emotions and reflect on their experiences through an interactive
        calendar interface for creating, editing, and organizing journal entries.`,
        responsibilities: [
            `Integrated Hugging Face emotion analysis into the journaling workflow, automatically classifying
            journal entries by sentiment and enriching the experience with emotion-based insights.`,
            `Designed a React/Vite frontend with interactive calendar navigation, recent-entry summaries, and
            draggable stickers, improving engagement and visual personalization of journal entries.`,
            `Led backend development by designing normalized SQL schemas for calendar and event 
            entities, building REST APIs in Express, and implementing secure authentication using
            JWT and bcrypt.`
        ]
    },
    {
        title: "Stellar Search",
        date: "Oct 2025 - Nov 2025",
        tech: "React, Python, Supabase, Gemini API",
        image: "stellar-search.png",
        link: "https://github.com/oleksiisud/slack-cluster-finder",
        description: `Stellar Search goes beyond standard keyword-based filtering used by Slack 
        and Discord, allowing users to search for message history through context clustering.`,
        responsibilities: [
            `Designed and implemented a database schema for storing user accounts and clustered
            message data.`,
            `Integrated authentication and data collection workflows for Slack and Discord so the
            system can work with real workspace data.`,
            `Deployed the backend and established CI/CD workflows to automate testing and 
            application delivery.`
        ]
    },
    {
        title: "FaceOff",
        date: "May 2025",
        tech: "Python, PyTorch, OpenCV, Matplotlib, torchvision, NumPy, Pillow",
        image: "faceoff.png",
        link: "https://github.com/laurensgalarza/FaceOff",
        description: ` FaceOff is a PyTorch-based Siamese neural network using triplet loss to
        improve facial recognition feature consistency across altered and unaltered faces with makeup`,
        responsibilities: [
            `Designed and trained a Siamese neural network in PyTorch using triplet loss to learn 
            feature embeddings that preserve identity across make-up related appearance changes.`,
            `Evaluated model performance using validation metrics such as accuracy, precision,
             and threshold optimization.`,
            `Achieved 91.67% accuracy on facial recognition across 100+ faces with and without makeup.`
        ]
    },
    {
        title: "Wanderer",
        date: "Feb 2024",
        tech: "React, Firebase, Google Maps API",
        image: "wanderer.png",
        link: "https://github.com/TonyLiu2004/HackCUNY",
        demoLink: "https://youtu.be/5Oi8-iwMTAs",
        description: `Wanderer is a platform that allows users to discover and post events easily,
        solving the problem of finding local events or posting their own.`,
        responsibilities: [
            `Collaborated with a four-person team to design and deliver a functional prototype
            within a two-day hackathon.`,
            `Designed and implemented responsive UI components with React.`,
        ]
    },
]