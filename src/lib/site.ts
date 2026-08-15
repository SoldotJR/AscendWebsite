export const siteConfig = {
  name: "Ascend International School",
  shortName: "Ascend",
  tagline: "Ascend Higher. Achieve Greater.",
  description:
    "Ascend International School is a Pearson-approved center offering accelerated pathways through IGCSE, International A Levels, GED, and OSSD. With a focus on personalized learning, students benefit from tailored university counselling and guidance designed to open doors to top global institutions. Beyond academics, a wide range of extracurricular opportunities encourages students to discover their passions and thrive as confident global citizens.",
  url: "https://www.ascendinternationalschool.org",
  locale: "en_MM",
  founded: 2024,
  email: "hello@ascendinternationalschool.org",
  phones: ["09 9444 111 60", "09 9444 111 90"],
  whatsapp: "959944411160",
  address: {
    line1: "Level 2, No(65)",
    line2: "Corner of Mya Marlar Street and Myanma Gon Yi Street",
    line3: "Thaketa Industrial Zone, Thaketa Township",
    city: "Yangon",
    country: "Myanmar",
    full: "Level 2, No(65), Corner of Mya Marlar Street and Myanma Gon Yi Street, Thaketa Industrial Zone, Thaketa Township, Yangon, Myanmar",
  },
  social: {
    facebook: "https://www.facebook.com/ascendinternationalschool",
    linkedin: "https://www.linkedin.com/company/ascend-university-prep",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Thaketa+Industrial+Zone+Yangon+Myanmar&output=embed",
} as const;

/** High-school programme pathways shown as separate Programmes menu tabs */
export const courseLinks = [
  { title: "IAL", href: "/academics/a-levels" },
  { title: "IGCSE", href: "/academics/igcse" },
  { title: "OSSD", href: "/academics/ossd" },
  { title: "Pre-IGCSE", href: "/academics/pre-igcse" },
  { title: "GED", href: "/academics/ged" },
] as const;

export type NavItem = {
  title: string;
  href: string;
  children?: readonly { title: string; href: string }[];
};

/** Primary header tabs — Programmes lists each pathway as its own tab */
export const navigation: readonly NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Programmes", href: "/academics", children: courseLinks },
  { title: "Clubs & Activities", href: "/campus-life" },
  { title: "News", href: "/news" },
  { title: "Contact", href: "/contact" },
];

/** Extra destinations listed in the mobile menu */
export const mobileExtraLinks = [
  { title: "University Counseling", href: "/university-counseling" },
  { title: "Student Life", href: "/student-life" },
  { title: "Gallery", href: "/gallery" },
  { title: "Events", href: "/events" },
  { title: "Blog", href: "/blog" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "FAQ", href: "/faq" },
] as const;

export const universities = [
  "Columbia University",
  "University of Pennsylvania",
  "Princeton University",
  "Johns Hopkins University",
  "University of Southern California",
  "Pomona College",
  "Swarthmore College",
  "UCLA",
  "University of North Carolina at Chapel Hill",
  "London School of Economics",
  "NYU",
  "Northwestern University",
  "University of Michigan",
  "King's College London",
  "Dartmouth College",
  "Claremont McKenna College",
  "University of California, Berkeley",
] as const;
