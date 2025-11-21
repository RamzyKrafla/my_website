export const portfolioData = {
    personal: {
        name: "Ramzy Rafla",
        role: "Electrical & Electronic Engineering Student",
        about:
            "I'm Ramzy Rafla, a student in Electrical and Electronic Engineering at EPFL with a strong focus on applied mathematics, machine learning, and software engineering. I enjoy building systems end to end, from the mathematical reasoning behind a model to the engineering that makes it work in practice. My background blends rigorous analytical training with hands-on development across multiple domains.",
        location: "Lausanne, Switzerland",
        email: "ramzy.rafla@epfl.ch",
        github: "https://github.com/RamzyKrafla",
        linkedin: "https://www.linkedin.com/in/ramzy-rafla-a41201329",
    },
    education: [
        {
            school: "EPFL (École Polytechnique Fédérale de Lausanne)",
            degree: "BSc in Electrical and Electronic Engineering",
            period: "Sept 2023 - Present",
            location: "Lausanne, Switzerland",
            gpa: "5.25/6",
            description:
                "Advanced coursework in Analysis I–IV, Numerical Analysis, Probability & Statistics, Data Science, Object-Oriented Programming, Micro-Embedded Systems, and Signal Processing.",
            highlights: [
                "TA for Analysis I & III, TA for Intro to Electricity",
                "GPA: 5.25/6"
            ]
        },
        {
            school: "Imperial College London",
            degree: "Summer Course",
            period: "Summer 2022",
            location: "London, UK",
            description:
                "Physics and Math course using Python's libraries to simulate various phenomena.",
        },
    ],
    experience: [
        {
            company: "Junior Entreprise EPFL",
            role: "Project Manager & HR Committee Member",
            period: "Feb 2025 - Present",
            location: "Lausanne, Switzerland",
            description:
                "Overseeing 5 IT and machine-learning projects worth over CHF 40,000 in revenue. Recruit and onboard new Project Managers through structured screening and weekly training program; maintain up-to-date internal playbooks and tool guides.",
        },
        {
            company: "Corporate Trust Index (CTI)",
            role: "Co-founder",
            period: "Sept 2025 - Present",
            location: "Lausanne, Switzerland",
            description:
                "Co-founding a startup developing a system to predict corporate fraud using weak signals derived from public data sources. Accepted into EPFL's Startup Launchpad program and awarded 10,000 CHF in Microsoft Azure credits. Designed the data-cleaning and structuring process to feed a machine learning model inspired by recent academic research on fraud detection.",
        },
        {
            company: "SuiteAssist",
            role: "Co-founding Team",
            period: "Oct 2025 - Present",
            location: "Lausanne, Switzerland",
            description:
                "Co-founding team developing an AI-driven WhatsApp assistant for hotels to configure their own digital concierge. Won first place at the EHL Innovation Sprint Hackathon, leading to selection in the EHL Innovation Hub's pre-acceleration program. Building a backend system for customizable chatbot configuration, analytics dashboards, and scalable multi-hotel deployment.",
        },
        {
            company: "Microsoft",
            role: "Summer Engineering Intern",
            period: "July 2024 - August 2024",
            location: "Cairo, Egypt",
            description:
                "Developed a carpooling website for Microsoft Egypt employees to reduce carbon emissions. Created the front-end using HTML and TypeScript. Helped develop the API in C# to interact with the website and database.",
        },
    ],
    projects: [
        {
            title: "Deep Learning Image Classifier",
            description: "End-to-end CV pipeline for beverage brand classification: scraped ≈2,000 images, transfer learned ResNet18 with augmentations, MPS accelerated training, modular loaders and checkpointing.",
            tags: ["Python", "PyTorch", "torchvision", "PIL", "Pandas"],
        },
        {
            title: "FawzyChat",
            description: "Voice assistant for transcription, translation, and email composition across English, Arabic, and Arabizi. Defined a two-step transcription pipeline with custom Arabizi normalization and real-time in-browser recording.",
            tags: ["OpenRouter LLMs", "FFmpeg", "React", "FastAPI", "REST APIs"],
        },
        {
            title: "Marine Ecosystem Simulator",
            description: "Visual simulator of species population dynamics under constraints, with random algal growth and scavengers consuming algae.",
            tags: ["C++", "OOP", "Gtkmm"],
        },
        {
            title: "Nintendo DS Game Development",
            description: "Developing a homebrew Nintendo DS game from scratch; learning embedded programming, memory mapping, and hardware-level graphics.",
            tags: ["C", "devkitARM", "libnds", "Desmume"],
        },
        {
            title: "Infection Simulator",
            description: "Built a binary classifier to detect a virus from patient data.",
            tags: ["Python", "Scikit-learn", "Numpy", "Matplotlib", "Pandas"],
        },
    ],
    skills: [
        "C++",
        "Python",
        "TypeScript",
        "PyTorch",
        "React",
        "scikit-learn",
        "Pandas",
        "Numpy",
        "FastAPI",
        "Matplotlib",
        "Gtkmm",
        "Applied Mathematics",
        "Machine Learning",
        "Data Science",
        "Embedded Systems",
    ],
};
