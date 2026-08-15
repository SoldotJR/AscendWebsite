export type Program = {
  slug: string;
  title: string;
  shortTitle: string;
  duration: string;
  overview: string;
  highlight: string;
  tuition?: string;
  scholarship?: string;
  subjects: string[];
  outcomes: string[];
  requirements: string[];
  image: string;
  href: string;
};

export const programs: Program[] = [
  {
    slug: "pre-igcse",
    title: "Pre-IGCSE",
    shortTitle: "Pre-IGCSE",
    duration: "4-Month Foundation",
    overview:
      "For middle school students aged 14 and above who wish to pursue O-Level studies, Ascend’s Pre-IGCSE Program builds a strong academic foundation through student-centered teaching, detailed practice, and skill-building.",
    highlight: "USD 700 full course · up to USD 200 continuation discount",
    tuition: "USD 700 (full 4-month course)",
    scholarship: "Up to USD 200 discount when continuing to O-Level at Ascend",
    subjects: [
      "English (ESL)",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Information & Communications Technology (ICT)",
      "Introduction to Business",
    ],
    outcomes: [
      "Strong foundations across core STEM and language subjects",
      "Readiness to progress into Ascend’s IGCSE pathway",
      "Clearer subject and career decision-making for later study",
    ],
    requirements: [
      "Ages 14 and above",
      "Interest in pursuing IGCSE / O-Level studies",
      "Commitment to an intensive foundation program",
    ],
    image: "/images/programs/pre-igcse.jpg",
    href: "/academics/pre-igcse",
  },
  {
    slug: "igcse",
    title: "IGCSE",
    shortTitle: "IGCSE",
    duration: "14-Month Intensive",
    overview:
      "Our 14-month O-Level curriculum is designed to be intensive, preparing students to excel in their O-Level exams. The program opens doors to university pathways with counselling, extracurricular development, and in-house test preparation.",
    highlight: "USD 7,000 all-inclusive · scholarships up to 70% for early cohort",
    tuition: "USD 7,000 all-inclusive for the entire 14-month course",
    scholarship: "Scholarships of 70% available for the first 15 students (net USD 2,100 / ~USD 150 per month)",
    subjects: [
      "English",
      "Mathematics",
      "Sciences",
      "Business-related subjects",
      "University-readiness electives",
    ],
    outcomes: [
      "Competitive O-Level / IGCSE examination performance",
      "Preparation for A Levels and international university routes",
      "Access to SAT, TOEFL, and IELTS preparation under one roof",
    ],
    requirements: [
      "Successful completion of Pre-IGCSE or equivalent foundation",
      "Readiness for an accelerated 14-month curriculum",
      "Application and admissions interview",
    ],
    image: "/images/programs/igcse.jpg",
    href: "/academics/igcse",
  },
  {
    slug: "a-levels",
    title: "International A Levels",
    shortTitle: "IAL",
    duration: "16-Month Intensive",
    overview:
      "Our rigorous 16-month program ensures students achieve top A-Level, SAT, and IELTS scores—providing the competitive edge needed for entry into the world’s elite universities.",
    highlight: "USD 10,000 all-inclusive · scholarships up to 50%",
    tuition: "USD 10,000 all-inclusive for the entire 16-month course",
    scholarship: "Scholarships up to 50% available for applicable students",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Economics",
      "Business",
      "English",
      "Mathematics",
      "Further Mathematics",
      "Accounting",
    ],
    outcomes: [
      "Top A-Level results alongside SAT and IELTS readiness",
      "University counselling for leading global institutions",
      "Extracurricular depth through clubs, projects, and internships",
    ],
    requirements: [
      "Strong IGCSE / O-Level background or equivalent",
      "Ambition for competitive university admissions",
      "Completed application and academic assessment",
    ],
    image: "/images/programs/a-level.jpg",
    href: "/academics/a-levels",
  },
  {
    slug: "ged",
    title: "GED",
    shortTitle: "GED",
    duration: "6-Month Program",
    overview:
      "Students in Ascend’s GED Campus Class study in spacious, internationally standard classrooms for six months. Classes are limited to 20 students, with combined GED and SAT subject preparation plus free university application support.",
    highlight: "Campus USD 600 · Online USD 400 (exam fees excluded)",
    tuition: "Campus: USD 600 · Online: USD 400 (excluding exam fees)",
    scholarship: undefined,
    subjects: [
      "Mathematical Reasoning",
      "Reasoning Through Language Arts",
      "Science",
      "Social Studies",
      "SAT Subjects",
    ],
    outcomes: [
      "GED credential with concurrent SAT subject support",
      "Free university application guidance",
      "Flexible campus or online study options",
    ],
    requirements: [
      "Motivation to complete a six-month accelerated pathway",
      "Commitment to focused class sizes (max 20 on campus)",
      "Completed inquiry and enrollment form",
    ],
    image: "/images/programs/ged.jpg",
    href: "/academics/ged",
  },
  {
    slug: "ossd",
    title: "OSSD",
    shortTitle: "OSSD",
    duration: "Ontario Pathway",
    overview:
      "The Ontario Secondary School Diploma (OSSD) pathway at Ascend offers a globally recognized Canadian secondary credential—supporting students who aim for universities in Canada and beyond through structured coursework, counselling, and personalized learning.",
    highlight: "Canadian secondary credential · university-ready pathway",
    tuition: "Contact admissions for current cohort pricing",
    subjects: [
      "English",
      "Mathematics",
      "Sciences",
      "Social Sciences",
      "Electives aligned to university goals",
    ],
    outcomes: [
      "Ontario Secondary School Diploma pathway progress",
      "Preparation for Canadian and international university applications",
      "Personalized counselling throughout the journey",
    ],
    requirements: [
      "Academic transcripts for placement assessment",
      "English proficiency suitable for secondary study",
      "Admissions consultation with Ascend counselling team",
    ],
    image: "/images/programs/ossd.jpg",
    href: "/academics/ossd",
  },
];

export const features = [
  {
    title: "Pearson Approved",
    description: "A trusted Pearson-approved center delivering internationally recognized pathways.",
    icon: "BadgeCheck",
  },
  {
    title: "IGCSE & A Levels",
    description: "Accelerated curricula designed for examination excellence and university readiness.",
    icon: "BookOpen",
  },
  {
    title: "GED & OSSD",
    description: "Flexible alternative and Canadian diploma pathways tailored to student goals.",
    icon: "Globe2",
  },
  {
    title: "University Counseling",
    description: "Tailored guidance that opens doors to leading universities worldwide.",
    icon: "GraduationCap",
  },
  {
    title: "Small Class Sizes",
    description: "Focused cohorts—including GED campus classes capped at 20 students.",
    icon: "Users",
  },
  {
    title: "Personalized Learning",
    description: "Teaching that adapts to each learner’s strengths, pace, and ambitions.",
    icon: "Sparkles",
  },
  {
    title: "Test Preparation",
    description: "SAT, TOEFL, and IELTS preparation under one roof—no extra outside tuition required.",
    icon: "Target",
  },
  {
    title: "Global Education",
    description: "A supportive environment that nurtures confident, future-ready global citizens.",
    icon: "Compass",
  },
] as const;

export const journeySteps = [
  {
    title: "Admission",
    description: "Inquiry, assessment, and a clear onboarding plan matched to your pathway.",
  },
  {
    title: "Learning",
    description: "Intensive, personalized instruction across your chosen academic program.",
  },
  {
    title: "Activities",
    description: "Clubs, passion projects, internships, and competitions that build depth.",
  },
  {
    title: "Counseling",
    description: "One-to-one university guidance focused on fit, scholarships, and strategy.",
  },
  {
    title: "University Applications",
    description: "Essay, testing, and application support for competitive global admissions.",
  },
  {
    title: "Success",
    description: "Offers from leading institutions and the confidence to thrive beyond Ascend.",
  },
] as const;

export const testimonials = [
  {
    name: "May Myat Thazin",
    role: "A-Level Student",
    quote:
      "I chose Ascend to study A-Level because they offer opportunities to study abroad, including university counselling and other test preparation. The school provides a friendly and joyful atmosphere.",
    image: "/images/people/student-1.jpg",
  },
  {
    name: "Htet Aung",
    role: "IGCSE Pathway",
    quote:
      "The accelerated pace is challenging in the best way. Teachers know every student, and the counselling team makes university goals feel achievable rather than distant.",
    image: "/images/people/student-2.jpg",
  },
  {
    name: "Su Myat",
    role: "GED Graduate",
    quote:
      "Small classes and combined GED plus SAT support helped me stay focused. I felt prepared for exams and for the next step in my applications.",
    image: "/images/people/student-3.jpg",
  },
] as const;

export const founders = [
  {
    name: "Sayar Thaw Zin Aung Gyi",
    title: "Founder",
    credentials: ["BA, Brown University (Ivy League)", "MPP, University of Oxford"],
    image: "/images/people/founder-1.jpg",
  },
  {
    name: "Sayar Min Thaw Htut",
    title: "Founder",
    credentials: ["BA, University of Pennsylvania", "MBA, National University of Singapore"],
    image: "/images/people/founder-2.jpg",
  },
] as const;

export const pillars = [
  {
    title: "Accelerated Programs",
    description: "Intensive pathways that respect ambition without sacrificing depth.",
  },
  {
    title: "Test Preparation",
    description: "SAT, TOEFL, and IELTS readiness integrated into the school experience.",
  },
  {
    title: "University Counseling",
    description: "Strategic guidance for elite admissions and scholarship opportunities.",
  },
  {
    title: "Extracurricular Development",
    description: "Clubs, projects, internships, and competitions that shape character.",
  },
] as const;

export const newsArticles = [
  {
    slug: "igcse-cohort-opens",
    title: "IGCSE 14-Month Intensive Pathway Opens",
    excerpt:
      "Ascend’s accelerated O-Level curriculum prepares students for October examinations with counselling and test prep included.",
    date: "2025-08-01",
    category: "Academics",
    featured: true,
    image: "/images/campus/news-1.jpg",
  },
  {
    slug: "a-level-scholarships",
    title: "A-Level Scholarships of Up to 50% Available",
    excerpt:
      "Eligible students can access meaningful scholarship support on Ascend’s all-inclusive 16-month A-Level package.",
    date: "2025-07-12",
    category: "Admissions",
    featured: false,
    image: "/images/campus/news-2.jpg",
  },
  {
    slug: "university-counseling-focus",
    title: "University Counseling at the Heart of Ascend",
    excerpt:
      "From shortlists to scholarships, Ascend counsellors help students aim for institutions such as Columbia, LSE, and Berkeley.",
    date: "2025-06-20",
    category: "Counseling",
    featured: false,
    image: "/images/campus/news-3.jpg",
  },
] as const;

export const events = [
  {
    slug: "campus-open-day",
    title: "Campus Open Day",
    date: "2026-08-15",
    location: "Ascend Campus, Thaketa, Yangon",
    description: "Tour classrooms, meet faculty, and explore pathway options with admissions.",
  },
  {
    slug: "university-fair-preview",
    title: "University Pathway Workshop",
    date: "2026-09-05",
    location: "Ascend Campus",
    description: "A practical session on applications, testing timelines, and scholarship strategy.",
  },
  {
    slug: "parent-information-evening",
    title: "Parent Information Evening",
    date: "2026-09-20",
    location: "Ascend Campus",
    description: "An overview of Pre-IGCSE through A Levels, GED, and OSSD for families.",
  },
] as const;

export const faculty = [
  {
    name: "Sayar Thaw Zin Aung Gyi",
    position: "Founder & Academic Leadership",
    subjects: ["University Counseling", "Leadership"],
    bio: "BA, Brown University; MPP, University of Oxford. Guides Ascend’s academic vision and university pathway strategy.",
    image: "/images/people/founder-1.jpg",
  },
  {
    name: "Sayar Min Thaw Htut",
    position: "Founder & Strategic Leadership",
    subjects: ["Strategy", "Student Development"],
    bio: "BA, University of Pennsylvania; MBA, National University of Singapore. Champions personalized learning and institutional growth.",
    image: "/images/people/founder-2.jpg",
  },
  {
    name: "Faculty Team",
    position: "IGCSE & A-Level Instructors",
    subjects: ["Sciences", "Mathematics", "Business", "English"],
    bio: "Experienced instructors delivering intensive curricula with student-centered methods and examination focus.",
    image: "/images/people/faculty-1.jpg",
  },
  {
    name: "Counseling Team",
    position: "University Admissions Counselors",
    subjects: ["Applications", "SAT / IELTS / TOEFL"],
    bio: "Dedicated counselors supporting shortlists, essays, testing, and scholarship strategy for global admissions.",
    image: "/images/people/faculty-2.jpg",
  },
] as const;

export const faqs = [
  {
    question: "What programs does Ascend offer?",
    answer:
      "Ascend offers Pre-IGCSE, IGCSE, International A Levels, GED (campus and online), and OSSD pathways, alongside university counselling and test preparation.",
  },
  {
    question: "Is Ascend Pearson approved?",
    answer:
      "Yes. Ascend International School is a Pearson-approved center delivering internationally recognized academic pathways.",
  },
  {
    question: "Do you provide university counselling?",
    answer:
      "Yes. Tailored university counselling is central to the Ascend experience, helping students pursue leading global institutions with optimal scholarship opportunities.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes. Scholarship support varies by program—for example, up to 70% for early IGCSE cohort places and up to 50% for applicable A-Level students.",
  },
  {
    question: "Where is the campus located?",
    answer:
      "Level 2, No(65), Corner of Mya Marlar Street and Myanma Gon Yi Street, Thaketa Industrial Zone, Thaketa Township, Yangon, Myanmar.",
  },
  {
    question: "How can I book a campus visit?",
    answer:
      "Use the contact or admissions forms on this website, email hello@ascendinternationalschool.org, or call 09 9444 111 60 / 09 9444 111 90.",
  },
] as const;

export const galleryImages = [
  { src: "/images/campus/gallery-1.jpg", alt: "Students in classroom discussion", category: "Academics" },
  { src: "/images/campus/gallery-2.jpg", alt: "Campus learning environment", category: "Campus" },
  { src: "/images/campus/gallery-3.jpg", alt: "Collaborative study session", category: "Student Life" },
  { src: "/images/campus/gallery-4.jpg", alt: "University counselling meeting", category: "Counseling" },
  { src: "/images/campus/gallery-5.jpg", alt: "Science learning moment", category: "Academics" },
  { src: "/images/campus/gallery-6.jpg", alt: "Campus community gathering", category: "Events" },
  { src: "/images/campus/gallery-7.jpg", alt: "Focused independent study", category: "Student Life" },
  { src: "/images/campus/gallery-8.jpg", alt: "Ascend campus exterior atmosphere", category: "Campus" },
] as const;

export const extracurriculars = [
  {
    slug: "clubs",
    title: "Clubs",
    image: "/images/campus/gallery-1.jpg",
    href: "/campus-life/clubs",
    text: "From science to debate to the arts, Ascend offers a range of clubs where students can pursue their interests and discover new ones. Clubs are student-driven, giving members the chance to lead projects, showcase talents, and build friendships across grade levels.",
  },
  {
    slug: "internship-program",
    title: "Internship Program",
    image: "/images/campus/gallery-4.jpg",
    text: "Ascend students gain hands-on work experience through our internship program. So far, students have interned at organizations such as AYA Bank, Shop Doora, UNIFI, and Ascend International School itself. These placements allow students to develop professional skills, explore career paths, and build meaningful networks for the future.",
  },
  {
    slug: "student-council",
    title: "Student Council",
    image: "/images/campus/gallery-6.jpg",
    text: "Our Student Council empowers students to take leadership roles within the school. Members plan events, represent the student body, and collaborate with staff to improve school life. It’s a space where students learn public speaking, teamwork, and project management—all while making a positive impact on their community.",
  },
  {
    slug: "field-trips",
    title: "Field Trips & Educational Visits",
    image: "/images/campus/gallery-5.jpg",
    text: "Ascend organizes regular field trips to help students connect classroom knowledge with the real world. Recent visits include the Nuclear Information Center and FAME Pharmaceuticals, giving students direct insight into science, technology, and industry in Myanmar.",
  },
] as const;

export type Club = {
  slug: string;
  name: string;
  category: string;
  description: string;
  /** Drop a photograph at this path (jpg/png/webp) to replace the illustrated cover. */
  image?: string;
  href?: string;
};

export const clubs: Club[] = [
  {
    slug: "tech",
    name: "Tech",
    category: "Technology",
    description: "Explore technology, digital skills, innovation, and practical projects.",
    image: "/images/clubs/tech.svg",
  },
  {
    slug: "debate",
    name: "Debate",
    category: "Academic",
    description: "Develop confidence, critical thinking, public speaking, and persuasive communication.",
    image: "/images/clubs/debate.svg",
  },
  {
    slug: "health-and-wellness",
    name: "Health and Wellness",
    category: "Wellbeing",
    description: "Learn about healthy habits, wellbeing, fitness, and maintaining a balanced lifestyle.",
    image: "/images/clubs/health-and-wellness.svg",
  },
  {
    slug: "science",
    name: "Science",
    category: "Academic",
    description: "Discover scientific ideas through experiments, exploration, and hands-on activities.",
    image: "/images/clubs/science.svg",
  },
  {
    slug: "chess",
    name: "Chess",
    category: "Strategy",
    description: "Build strategic thinking, concentration, problem-solving, and decision-making skills.",
    image: "/images/clubs/chess.svg",
  },
  {
    slug: "math",
    name: "Math",
    category: "Academic",
    description: "Explore mathematics beyond the classroom through challenges, puzzles, and problem-solving.",
    image: "/images/clubs/math.svg",
  },
  {
    slug: "art",
    name: "Art",
    category: "Creative",
    description: "Express creativity through drawing, design, visual art, and creative projects.",
    image: "/images/clubs/art.svg",
  },
  {
    slug: "youth-for-impact",
    name: "Youth For Impact",
    category: "Community",
    description: "Work together on meaningful ideas and projects that create a positive impact in the community.",
    image: "/images/clubs/youth-for-impact.svg",
  },
  {
    slug: "photo-and-videography",
    name: "Photo And Videography",
    category: "Creative",
    description: "Learn photography and videography while capturing stories, events, and memorable moments.",
    image: "/images/clubs/photo-and-videography.svg",
  },
  // Add a 10th club here — the grid will place it automatically:
  // {
  //   slug: "music",
  //   name: "Music",
  //   category: "Creative",
  //   description: "Write a short description, then add /images/clubs/music.jpg when a photo is ready.",
  // },
];

export const blogPosts = [
  {
    slug: "choosing-between-a-levels-and-ged",
    title: "Choosing Between A Levels and GED",
    excerpt: "A practical guide to matching pathway, timeline, and university goals.",
    date: "2025-05-18",
    category: "Guidance",
  },
  {
    slug: "how-university-counseling-works",
    title: "How University Counseling Works at Ascend",
    excerpt: "From academic planning to applications—what families can expect.",
    date: "2025-04-22",
    category: "Counseling",
  },
  {
    slug: "building-a-strong-pre-igcse-foundation",
    title: "Building a Strong Pre-IGCSE Foundation",
    excerpt: "Why early skill-building matters before an intensive O-Level year.",
    date: "2025-03-10",
    category: "Academics",
  },
] as const;
