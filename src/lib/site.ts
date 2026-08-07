export const siteConfig = {
  name: "Ascend International School",
  shortName: "Ascend",
  tagline: "Ascend Higher. Achieve Greater.",
  description:
    "Ascend International School is a Pearson-approved center offering accelerated pathways through IGCSE, International A Levels, GED, and OSSD—with personalized learning and university counselling for top global institutions.",
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

/** Primary header tabs — each opens its own page route */
export const navigation = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Academics", href: "/academics" },
  { title: "Admissions", href: "/admissions" },
  { title: "Campus Life", href: "/campus-life" },
  { title: "Faculty", href: "/faculty" },
  { title: "News", href: "/news" },
  { title: "Contact", href: "/contact" },
] as const;

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
