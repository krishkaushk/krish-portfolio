import type { Project, ExperienceItem, SkillGroup, NavLink } from "@/types";

export const PERSONAL_INFO = {
  name: "Krish Zhao Kaushik",
  firstName: "Krish",
  email: "krish.z.kaushik@gmail.com",
  github: "https://github.com/krishkaushk",
  linkedin: "https://www.linkedin.com/in/krishzkaushik/",
  university: "Simon Fraser University",
  degree: "BSc Computing Science",
  minor: "Business",
  gradYear: 2028,
} as const;

export const TAGLINE = "I build things.";

export const BIO =
  "I'm studying Computing Science at SFU with a minor in Business because I enjoy solving problems, " + 
  "and figuring out how to make things work.\n\n" +
  "I'm especially interested in AI and machine learning as well as full stack development, and building integrated " +
  "systems where different technologies work together. Looking ahead, I'm also interested in learning more about robotics.\n\n" + 
  "Apart from that, I'm usually outdoors.";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Web Development and Systems Intern (Part-Time)",
    company: "HME Medical Distribution LTD.",
    location: "Vancouver, BC",
    period: "September 2026 – Present",
    bullets: [
      "Spearheading a full website redesign, modernizing pages and working with design and external vendors as needed.",
      "Leading deployment of macOS systems company-wide to 130+ employees.",
    ],
  },
  {
    role: "Information Technology and Marketing Intern",
    company: "HME Medical Distribution LTD.",
    location: "Vancouver, BC",
    period: "June 2025 – August 2025" + "\n" + "May 2026 – August 2026",
    bullets: [
      "Built and deployed reporting pipelines using JavaScript and Power Automate, deployed with Azure Functions.",
      "Maintained and updated 2 company websites, supporting new products and a company rebrand.",
      "Built a production repo of 65+ custom Node.js functions connected to our CRM System; developed an internal debugging and training web page, mapping the custom functions and 170+ workflow dependencies.",
      "Configured an internal AI copilot agent for search across 500+ technical service documents.",
      "Designed and led an internal phishing awareness campaign targeting 130+ employees; configured, deployed, and analyzed data to present actionable recommendations.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "internlinked",
    title: "InternLinked",
    description:
      "A full-stack web app to manage internship applications end-to-end. Handles user auth, structured data storage, and document tracking so you can stop losing track of where you applied.",
    stack: ["JavaScript", "React", "Supabase", "SQL", "HTML", "CSS"],
    githubUrl: "https://github.com/krishkaushk/InternLinked",
    demoUrl: "https://devpost.com/software/internlinked",
    accentColor: "#3F6659",
    spotlight: true,
    images: [],
    coverImage: "/assets/projects/internlinked/logo.png",
    coverAlt: "InternLinked logo",
    coverVideo: "/assets/projects/internlinked/showcase.mp4",
    story: {
      subtitle: "A gamified home base for my internship and co-op hunt - helps to track my applications and files plus finds jobs based on my skills and resume.",
      role: "Team project: SystemsHacks 2026 (XHacks)",
      timeline: "React + Vite frontend, Supabase/SQL backend",
      blocks: [
        {
          type: "text",
          body:
            "Keeping track of internship and co-op applications got frustrating fast. A spreadsheet just couldn't do it all, so I built InternLinked to centralize applications, files, and related info in one place, and to match my resume against live job postings I could apply to next.\n\n" +
            "I made it gamified on purpose (XP, levels, streaks) because applying to dozens of internships is a grind, and I wanted something that actually motivated me to keep up with it.",
        },
        {
          type: "text",
          heading: "One dashboard",
          body:
            "The Dashboard tracks applications and interviews and turns every logged action into XP toward a level and a streak, so progress on a slow, discouraging process is at least visible.\n\n" +
            "Job Matches runs my resume against live postings and ranks them by a profile-match percentage. Instead of manually scanning boards, I get a shortlist of what's actually worth applying to.",
        },
        {
          type: "image",
          src: "/assets/projects/internlinked/job-matches.png",
          alt: "InternLinked job matches screen with profile match percentages",
          caption: "Job matches ranked against your resume.",
        },
        {
          type: "callout",
          label: "Why gamify a job tracker",
          body:
            "Applying to internships has almost no immediate feedback loop. I'd send an application into a void and usually hear nothing back. Layering XP, levels, and a streak on top gave me a small, immediate payoff for the one part of the process I actually control: showing up and applying again.",
        },
        {
          type: "callout",
          label: "The build",
          body:
            "My team and I built this at SystemsHacks 2026 (XHacks), using React and Vite on the frontend with Supabase and SQL for the backend. Supabase and SQL were new territory for all of us, so a good chunk of our time went into resolving Git conflicts and getting the database layer right, on top of balancing the gamification against the core tracking features so neither got shortchanged.\n\n I further added the job searching feature after the hackathon and have continued to update the project.",
        },

        {
          type: "text",
          heading: "What's next",
          body:
            "Right now InternLinked tracks and matches applications I still submit elsewhere. The natural next step is letting me apply to a matched job directly from the platform instead of just logging that I did.",
        },
      ],
    },
  },
  {
    id: "eyetag",
    title: "EyeTag",
    description:
      "An eye-tracking arcade shooter in Python using MediaPipe, iterating across ML approaches: V2, a custom ridge regression (22-feature iris landmark vectors, session-specific calibration, custom EMA smoother) and V3, a PyTorch feedforward neural network (GeLU activations, Adam optimizer, MSE loss).",
    stack: ["Python", "MediaPipe", "OpenCV", "PyTorch", "scikit-learn", "pygame"],
    githubUrl: "https://github.com/krishkaushk/EyeTag",
    accentColor: "#C1622D",
    spotlight: true,
    images: [],
    coverImage: "/assets/projects/eyetag/cover.png",
    coverAlt: "EyeTag gameplay screenshot",
    coverVideo: "/assets/projects/eyetag/gameplay.mp4",
    story: {
      subtitle: "My eye-tracking arcade shooter: look where you want to shoot.",
      role: "Solo project: ML pipeline, calibration UX, game loop",
      timeline: "V2 (Ridge regression) → V3 (neural net) iteration",
      blocks: [
        {
          type: "text",
          body:
            "I built an eye-tracking arcade shooter where your gaze is the crosshair. Look at enemies to aim, and bullets fire automatically toward wherever you're looking.\n\n" +
            "The pipeline: a webcam frame goes through MediaPipe FaceLandmarker (478 face landmarks), gets reduced to a 22-feature vector per frame, and a Ridge regression maps that to a screen (x, y). An EMA smoother filters jitter, then atan2(gaze − center) aims bullets from the ship at screen center.",
        },
        {
          type: "text",
          heading: "Turning eye tracking into a regression problem",
          body:
            "This is supervised regression, not a pretrained gaze model. During calibration I stare at 9 known points on screen, and every frame becomes a labeled training sample: 22 eye features mapped to (screen_x, screen_y). " +
            "After roughly 500 samples, a Ridge regression fits a linear map from eye space to screen space. Inference afterward is just a single matrix multiply, fast enough to run every frame.",
        },
        {
          type: "callout",
          label: "My thought process behind ridge regression",
          body:
            "I normalized iris position by eye corner coordinates instead of using raw iris coordinates, which makes it partially invariant to head movement (large movements still drift predictions, but small ones are fine).\n\n" +
            "I also added Ridge regularization at α=0.2, since 500 samples and 22 features is small enough that plain linear regression would overfit. Ridge keeps it stable.\n\n" +
            "Finally, I discard blink frames: EAR under 0.21 flags a blink, and I drop those frames from training to keep labels clean.",
        },
        {
          type: "text",
          heading: "Calibration",
          body:
            "Calibration shows 9 dots in a 3×3 grid, top-left to bottom-right. I stare at each for about 2 seconds while the progress ring fills, and blinks are ignored. The model trains once it's done, around 25 seconds total.\n\n" +
            "Keeping my head still, looking at the center of each dot rather than around it, and having even lighting all made a real difference in tracking quality.",
        },
        {
          type: "video",
          src: "/assets/projects/eyetag/calibration.mp4",
          caption: "The 9-point calibration sequence.",
        },
        {
          type: "text",
          heading: "Smoothing out the jitter",
          body:
            "Raw gaze landmark detection has sub-pixel jitter that translates directly into cursor jitter, so I smooth the output with an exponential moving average: x_smooth = α·x_raw + (1 − α)·x_prev.\n\n" +
            "At α=0.5, the current frame carries as much weight as every past frame combined, and older frames fade out exponentially, so nothing from more than about 7 frames ago meaningfully affects the output. When tracking is lost (the face leaves frame), I reset the smoother so it doesn't drag the cursor from a stale position once tracking resumes.",
        },
        {
          type: "callout",
          label: "The V3 branch: Neural Network",
          body:
            "In a separate branch, I swapped the Ridge regression for GazeNet, a 5-layer feedforward network (22 → 256 → 256 → 128 → 64 → 32 → 2) with GELU activations instead of ReLU, trained with Adam and MSE loss over 1500 epochs against a denser 5×5 calibration grid (25 points instead of 9).\n\n" +
            "I chose GELU deliberately over ReLU. ReLU networks are piecewise-linear, so predicted gaze position moves in straight segments between breakpoints, while GELU is smooth and continuously differentiable, so the cursor flows rather than snapping. It's the same reasoning GPT and BERT use GELU for.\n\n" +
            "I figured more depth and a denser calibration grid would generalize better. In practice, though, V3 doesn't track as well as the simple Ridge regression on the main branch.",
        },
      ],
    },
  },
  {
    id: "portfolio",
    title: "My Website",
    description:
      "The site you're on. Built with Next.js, TypeScript, Tailwind, and Framer Motion — deployed on Vercel.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/krishkaushk/krish-portfolio",
    accentColor: "#85c4dc",
  },
  {
    id: "pitchpal",
    title: "PitchPal",
    description:
      "Generates pitch slide decks and gives you a place to actually practice them — real-time listening, scoring, feedback, and narration powered by Gemini and ElevenLabs.",
    stack: ["React", "TypeScript", "Gemini API", "ElevenLabs API", "HTML", "CSS"],
    githubUrl: "https://github.com/StormHacks2025/pitchpal1",
    demoUrl: "https://devpost.com/software/pitchpal-t5opzn",
    accentColor: "#4C6B8A",
    coverImage: "/assets/projects/pitchpal/logo.png",
    coverAlt: "PitchPal logo",
    bannerImage: "/assets/projects/pitchpal/landing.png",
    bannerAlt: "PitchPal landing page",
  },
  {
    id: "rubiks-cube",
    title: "Rubik's Cube Solver",
    description:
      "A Rubik's cube solver in Java; evolved from bidirectional BFS to Kociemba's two-phase algorithm with pattern databases.",
    stack: ["Java", "IDA*", "Kociemba's Algorithm"],
    githubUrl: "https://github.com/simonn810/CMPT-225-Rubiks-Cube-Project-",
    accentColor: "#e2bbf9",
  },
  {
    id: "lockalarm",
    title: "LockAlarm",
    description:
      "Webcam-based focus monitor that detects when you look away and blasts an alarm to keep you accountable. Tracks face absence, head position, and eye closure across three priority levels with real-time metrics and blink filtering.",
    stack: ["Python", "MediaPipe", "OpenCV"],
    githubUrl: "https://github.com/krishkaushk/LockAlarm",
    accentColor: "#6B4C63",
    hidden: true,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "SQL"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["React", "Next.js", "Node.js", "Supabase", "Azure", "Power Automate", "Microsoft 365"],
  },
  {
    category: "Dev Tools",
    skills: ["Git", "VS Code", "Figma", "npm", "yarn", "Bash", "Linux", "MATLAB"],
  },
];
