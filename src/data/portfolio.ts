export type PersonalInfo = {
  name: string;
  role: string;
  about: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  copyrightYear: number;
};

export type CredibilityItem = {
  label: string;
  value: string;
  detail: string;
};

export type SelectedWorkItem = {
  type: string;
  title: string;
  context: string;
  description: string;
  signal: string;
  tags: string[];
};

export type EducationEntry = {
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  description: string;
  highlights?: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  skills?: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type PublicationItem = {
  title: string;
  context: string;
  year: string;
};

export type HeroFocusArea = {
  label: string;
  note: string;
  /** Lucide icon name resolved in Hero.tsx */
  icon: "microscope" | "database" | "brain" | "network";
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  fieldNoteTitle: string;
  fieldNoteBody: string;
  currentThreadLabel: string;
  currentThread: string;
  focusAreas: HeroFocusArea[];
  domains: string[];
};

export type PortfolioData = {
  personal: PersonalInfo;
  hero: HeroContent;
  credibility: CredibilityItem[];
  selectedWork: SelectedWorkItem[];
  workingNotes: string[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  projects: ProjectItem[];
  publications: PublicationItem[];
  skills: SkillGroup[];
  contactBlurb: string;
};

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ramzy Rafla",
    role: "Incoming MSc Robotics at ETH Zürich · BSc Electrical & Electronic Engineering, EPFL",
    about:
      "I work on applied machine-learning systems where the data pipeline matters as much as the model. Recent work spans medical imaging research, recommendation and credit-risk systems, retrieval/RAG products, fraud-detection tooling, and technical project delivery.",
    location: "Lausanne, Switzerland",
    email: "ramzy.rafla@epfl.ch",
    github: "https://github.com/RamzyKrafla",
    linkedin: "https://www.linkedin.com/in/ramzy-rafla-a41201329",
    copyrightYear: 2026,
  },
  hero: {
    eyebrow: "EPFL → ETH · Applied ML · Builder desk",
    headline:
      "I build applied ML systems where the pipeline is treated as seriously as the model.",
    fieldNoteTitle: "Researcher with builder instincts.",
    fieldNoteBody:
      "I like technical work that starts with messy inputs and ends in a system someone can actually use.",
    currentThreadLabel: "Current thread",
    currentThread:
      "Medical imaging, recommendation systems, retrieval/RAG, and practical ML delivery.",
    focusAreas: [
      {
        label: "Medical imaging",
        note: "CT angiography, vessel signal, segmentation",
        icon: "microscope",
      },
      {
        label: "Data pipelines",
        note: "Leakage checks, geometry, experiment loops",
        icon: "database",
      },
      {
        label: "Applied ML",
        note: "Models that survive real constraints",
        icon: "brain",
      },
      {
        label: "RAG systems",
        note: "Useful answers from messy documents",
        icon: "network",
      },
    ],
    domains: ["Research", "Engineering", "Teaching", "Startups"],
  },
  credibility: [
    {
      label: "Next",
      value: "ETH Zürich",
      detail: "MSc Robotics, Systems and Control",
    },
    {
      label: "Research",
      value: "Idiap",
      detail: "Medical imaging + vascular ML · AUROC 0.840",
    },
    {
      label: "Delivery",
      value: "Junior Entreprise",
      detail: "CHF 50K+ technical mandate portfolio",
    },
    {
      label: "Builder",
      value: "MNT-Halan / EHL / EPFL IP",
      detail: "Recsys, RAG products, fraud-detection tooling",
    },
  ],
  selectedWork: [
    {
      type: "Industry",
      title: "Recommendation + credit-risk ML",
      context: "MNT-Halan",
      description:
        "Built a content-based recommendation engine combining customer affinity and product popularity, engineered a 63-feature credit-risk dataset from 300k+ loan applications, and shipped a hybrid RAG pipeline (Dense + BM25 + Cross-Encoder) at 88% Acc@1 and 100% Acc@4.",
      signal: "Applied ML under production data constraints",
      tags: ["Recommendation", "Credit risk", "RAG", "Data science"],
    },
    {
      type: "Research",
      title: "Renal-artery abnormality detection",
      context: "Idiap Research Institute",
      description:
        "Developed a 3D CNN pipeline for renal-artery abnormality detection in CTA scans, rebuilt preprocessing to eliminate patient leakage and preserve anatomical geometry, and evaluated multiple image representations to a test AUROC of 0.840.",
      signal: "Preprocessing as part of the science",
      tags: ["Medical imaging", "3D CNN", "PyTorch", "CTA"],
    },
    {
      type: "Builder",
      title: "Suite Assist hotel concierge",
      context: "EHL Innovation Hub",
      description:
        "Built the backend for a hotel-document RAG assistant, covering ingestion, chunking, embeddings, retrieval, response generation, and guardrails.",
      signal: "Useful AI from messy real documents",
      tags: ["RAG", "OpenAI embeddings", "Pinecone", "Backend"],
    },
    {
      type: "Operator",
      title: "Technical mandate portfolio",
      context: "Junior Entreprise EPFL",
      description:
        "Managed ML, AI, and software projects for clients while supporting recruitment, internal operations, student-association partnerships, and operating resources.",
      signal: "Technical judgment under delivery constraints",
      tags: ["Project management", "HR", "Partnerships", "Estimation"],
    },
  ],
  workingNotes: [
    "I like work where the preprocessing is part of the science, not a cleanup step.",
    "I look for failure modes early: leakage, distorted geometry, brittle retrieval, unclear assumptions.",
    "I build in layers: data pipeline, baseline, experiment loop, then interface.",
    "I'm most interested in applied ML that ends up being used by people.",
  ],
  education: [
    {
      school: "ETH Zürich",
      degree: "MSc in Robotics, Systems and Control",
      period: "Starting Sept 2026",
      location: "Zürich, Switzerland",
      description:
        "Incoming master's program focused on robotics, systems, and control.",
    },
    {
      school: "EPFL (École Polytechnique Fédérale de Lausanne)",
      degree: "Bachelor's Degree, Electrical and Electronic Engineering",
      period: "Sept 2023 – Jun 2026",
      location: "Lausanne, Switzerland",
      gpa: "5.20/6",
      description:
        "Coursework across Analysis I–IV, matrix & numerical analysis, probability & statistics, machine learning & data science, signal processing, control systems, embedded systems, telecommunications, and microwave & antennas.",
      highlights: [
        "Teaching assistant for Analysis I & III and Introduction to Electricity (2 semesters)",
        "Bachelor thesis: Computer-Aided Detection of Renal-Artery Abnormalities in CT Angiography (EPFL & Idiap, 2026)",
      ],
    },
    {
      school: "Imperial College London",
      degree: "Physics and Mathematics Summer Programme",
      period: "Summer 2022",
      location: "London, UK",
      description:
        "Physics and Math course using Python libraries to simulate various phenomena.",
    },
  ],
  experience: [
    {
      company: "MNT-Halan (Egypt’s First Fintech Unicorn)",
      role: "Data Science Intern",
      period: "Jul 2026 – Aug 2026",
      location: "Cairo, Egypt",
      description: [
        "Built a content-based recommendation engine combining customer affinity and product popularity.",
        "Engineered a 63-feature credit-risk dataset from 300k+ loan applications for default prediction.",
        "Built a hybrid RAG pipeline (Dense + BM25 + Cross-Encoder), achieving 88% Acc@1 and 100% Acc@4.",
      ],
      skills: ["Recommendation systems", "Credit risk", "RAG", "Data science", "Python"],
    },
    {
      company: "Idiap Research Institute",
      role: "Medical AI Research Intern",
      period: "Feb 2026 – Jun 2026",
      location: "Martigny, Switzerland",
      description: [
        "Developed a 3D CNN pipeline for renal artery abnormality detection in CTA scans.",
        "Rebuilt the preprocessing workflow to eliminate patient leakage and preserve anatomical geometry.",
        "Built a nine-stage preprocessing pipeline using frozen vascular foundation models for organ and vessel segmentation.",
        "Evaluated five image representations across controlled experiments, achieving a test AUROC of 0.840.",
        "Extended work from the bachelor thesis on computer-aided detection of renal-artery abnormalities from CT angiography.",
      ],
      skills: ["PyTorch", "3D CNNs", "Medical imaging", "HPC", "Segmentation"],
    },
    {
      company: "Junior Entreprise EPFL",
      role: "Project Manager & Human Resources Committee Member",
      period: "Feb 2025 – Present",
      location: "Lausanne, Switzerland",
      description: [
        "Managed a CHF 50K+ portfolio of AI/software client projects while supporting recruitment and internal operations.",
        "Built and maintained partnerships with EPFL student associations in ML, biotech, and engineering.",
        "Served on the HR committee, rebuilding internal resources for tools, processes, onboarding, and project-manager training.",
      ],
      skills: ["Project management", "Project estimation", "Partnerships", "HR", "Operations"],
    },
    {
      company: "EPFL",
      role: "Teaching Assistant",
      period: "Sep 2024 – Feb 2026",
      location: "Lausanne, Switzerland",
      description: [
        "TA for Analysis I & III and Introduction to Electricity (2 semesters), including support for mechanical-engineering cohorts.",
        "Supported exercise sessions, student questions, and scientific communication across math and electrical-engineering courses.",
      ],
      skills: ["Teaching", "Vector calculus", "Fourier analysis", "Electricity"],
    },
    {
      company: "EHL Innovation Hub",
      role: "Founding Engineer",
      period: "Nov 2025 – Jan 2026",
      location: "Lausanne, Switzerland · Hybrid",
      description: [
        "Built Suite Assist, an AI hotel concierge that answers guest questions from real hotel documents.",
        "Developed the RAG backend using OpenAI embeddings, Pinecone, OpenRouter, and custom guardrails.",
        "Covered document ingestion, chunking, retrieval, response generation, and safety constraints end to end.",
      ],
      skills: ["RAG", "OpenAI embeddings", "Pinecone", "Backend engineering"],
    },
    {
      company: "EPFL Innovation Park",
      role: "Artificial Intelligence Engineer",
      period: "Jul 2025 – Nov 2025",
      location: "Lausanne, Switzerland · Hybrid",
      description: [
        "Co-developed Corporate Trust Index, an AI system for detecting corporate fraud from weak public signals.",
        "Built web-scale data pipelines and supported model development; selected for the EPFL Startup Launchpad.",
        "Built data-collection and front-end pieces for weak-signal analysis from public sources.",
      ],
      skills: ["AI", "Web scraping", "Front-end development", "Data pipelines", "Startup"],
    },
    {
      company: "Microsoft",
      role: "Full Stack Engineering Intern",
      period: "Jul 2024 – Aug 2024",
      location: "Cairo, Egypt",
      description: [
        "Built an internal ride-sharing platform using React, ASP.NET Core, and C# to reduce employee commuting emissions.",
        "Developed front-end features and contributed to C# API integration for Microsoft Egypt employees.",
      ],
      skills: ["React", "ASP.NET Core", "TypeScript", "C#", "API integration"],
    },
  ],
  projects: [
    {
      title: "Software-Defined FM Stereo Receiver",
      description:
        "Implemented a complete FM stereo receiver in GNU Radio with demodulation, 19 kHz pilot recovery, stereo reconstruction, filtering, and 250-to-48 kHz resampling; validated live reception and an arctangent-free FM demodulator.",
      tags: ["GNU Radio", "DSP", "FIR Filters", "Signal Processing"],
    },
    {
      title: "Deep Learning Image Classifier",
      description:
        "Built an end-to-end beverage classifier by scraping ≈2,000 images, fine-tuning ResNet18 with augmentations, and implementing a modular training pipeline with checkpointing.",
      tags: ["Python", "PyTorch", "ResNet18", "Computer Vision"],
    },
    {
      title: "FawzyChat",
      description:
        "Multilingual voice assistant supporting transcription, translation, email drafting, custom Arabizi normalization, and real-time browser recording.",
      tags: ["OpenRouter LLMs", "React", "FastAPI", "REST APIs"],
    },
    {
      title: "Embedded Game Development on Nintendo DS",
      description:
        "Built a real-time homebrew game on ARM9/ARM7 processors, implementing timers, interrupts, graphics, audio, touchscreen input, and sprite management directly on the hardware.",
      tags: ["C", "ARM", "libnds", "Embedded"],
    },
    {
      title: "Marine Ecosystem Simulator",
      description:
        "Visual simulator of species population dynamics under constraints, with random algal growth and scavengers consuming algae.",
      tags: ["C++", "OOP", "Gtkmm"],
    },
    {
      title: "Infection Simulator",
      description: "Built a binary classifier to detect a virus from patient data.",
      tags: ["Python", "Scikit-learn", "Numpy", "Matplotlib", "Pandas"],
    },
  ],
  publications: [
    {
      title:
        "Computer-Aided Detection of Renal-Artery Abnormalities in CT Angiography",
      context: "Bachelor Thesis · EPFL & Idiap Research Institute",
      year: "2026",
    },
  ],
  skills: [
    {
      group: "ML + Research",
      items: [
        "PyTorch",
        "Computer Vision",
        "Medical Imaging",
        "3D CNNs",
        "Segmentation",
        "Recommendation systems",
        "Credit risk",
        "scikit-learn",
        "HPC",
      ],
    },
    {
      group: "Systems + Product",
      items: [
        "TypeScript",
        "React",
        "FastAPI",
        "RAG",
        "OpenAI Embeddings",
        "Pinecone",
        "ASP.NET Core",
        "REST APIs",
      ],
    },
    {
      group: "Foundations",
      items: [
        "Python",
        "C++",
        "C",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "GNU Radio",
        "DSP",
        "Signal Processing",
        "Embedded Systems",
        "Control Systems",
      ],
    },
    {
      group: "Languages",
      items: [
        "Arabic (Native)",
        "English (C2)",
        "French (C2)",
        "Spanish (A2)",
      ],
    },
    {
      group: "Delivery",
      items: [
        "Project Management",
        "Project Estimation",
        "Partnerships",
        "HR Operations",
        "Scientific Communication",
      ],
    },
  ],
  contactBlurb:
    "Open to research, engineering, and applied ML conversations in Lausanne, Zürich, or remote.",
};
