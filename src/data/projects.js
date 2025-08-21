


export const projects = [
    {
        projectName: "Fuzion",
        shortDescription:
            "A modern full-stack social media platform combining the features of YouTube and Twitter, enabling users to upload videos, share tweets, and interact seamlessly.",
        fullDescription: `During the development of Fuzion, I built a full-stack social media platform that combines the core features of YouTube and Twitter (X). As the full-stack developer, I designed and implemented a platform where users can upload and engage with videos and tweets, while integrating advanced social features such as playlists, likes, saves, follows, comments, and reporting tools.

        The backend was developed with Node.js, Express, and MongoDB, using Cloudinary for media storage and secure JWT-based authentication. On the frontend, I built a responsive and intuitive interface with Next.js, React, Tailwind CSS, Shadcn UI, and lucide-react, supported by Redux for state management and React Hook Form with Zod for robust validation.

        This project strengthened my expertise in building scalable full-stack applications, particularly in authentication, real-time content interaction, and multimedia handling, while showcasing my ability to deliver production-ready platforms.

        • Developed and deployed a full-stack social media application combining video-sharing and microblogging.
        • Implemented secure JWT authentication with password recovery via email.
        • Designed and built user profiles, playlists, and a content moderation/reporting system.
        • Enabled video and tweet management with full CRUD functionality.
        • Built interactive features such as likes, saves, follows, comments, and playlists.
        • Integrated Cloudinary for video/image storage and ensured responsive design across devices.
        • Utilized Next.js, React, Tailwind CSS, Shadcn UI, Redux, Node.js, Express, and MongoDB for the complete tech stack.`,
        thumbnail: "https://res.cloudinary.com/dmfvcclh3/image/upload/v1755270517/thumb-1_b9hrv0.jpg",
        techStacks: [
            "Next.js",
            "Express",
            "MongoDB",
            "Node.js",
            "Tailwind CSS",
            "Shadcn UI",
            "Redux",
            "JWT",
        ],
        liveDemo: "https://fuzion-media.vercel.app/",
        githubRepo: "https://github.com/atanu-hazra/fuzion",
        routeName: "fuzion"
    },
    {
        projectName: "PreWeather",
        shortDescription: "A sophisticated weather application delivering real-time and forecast data with multi-location support and dynamic UI.",
        fullDescription: `During the development of PreWeather, I created a responsive weather application that provides real-time updates and 10-day forecasts. Users can search any location, track multiple cities, and view details such as temperature, wind speed, humidity, UV levels, and rain probability.

        I implemented multi-location mode, auto-complete suggestions, dynamic backgrounds that adjust with time of day, and persistent local storage to retain user settings across sessions. The app was built with React, Redux Toolkit, and Tailwind CSS, and deployed on Vercel for seamless access.

        • Built a real-time weather app with 10-day forecasts.D
        • Added multi-location support with independent data handling.D
        • Implemented auto-complete search and dynamic backgrounds.D
        • Integrated local storage for persistent user data.D
        • Delivered a responsive UI with React, Redux Toolkit, and Tailwind CSS.`,
        thumbnail: "https://res.cloudinary.com/dmfvcclh3/image/upload/v1755270517/thumb-3_dlleqj.jpg",
        techStacks: [
            "React",
            "Redux",
            "Tailwind CSS",
        ],
        liveDemo: "https://preweather.vercel.app/",
        githubRepo: "https://github.com/atanu-hazra/weather-app",
        routeName: "pre-weather"
    },
    {
        projectName: "EaseCare",
        shortDescription: "A robust backend system for healthcare applications, providing secure patient and doctor management with JWT-based authentication.",
        fullDescription: `During the development of EaseCare Backend API, I built a scalable backend system designed for healthcare applications. The system includes patient and doctor management, authentication, and relationship mapping between patients and doctors. 

        The backend was implemented using Django, Django REST Framework (DRF), and PostgreSQL for secure data storage. Authentication and authorization were handled using JWT (djangorestframework-simplejwt), ensuring data security and controlled access. 

        • Designed and implemented RESTful APIs for patient and doctor management.
        • Built JWT-based authentication for secure access control.
        • Developed patient-doctor relationship mapping for effective record management.
        • Ensured reliable data storage with PostgreSQL.
        • Followed best practices for API development, modular design, and scalability.`,
        thumbnail: "https://res.cloudinary.com/dmfvcclh3/image/upload/v1755611650/20250819_191755_p47axs.jpg",
        techStacks: [
            "Django",
            "REST Framework",
            "PostgreSQL",
            "JWT Authentication",
        ],
        liveDemo: "",
        githubRepo: "https://github.com/atanu-hazra/django-healthcare",
        routeName: "easecare"
    }

];
