import {
  BookOpen,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Home,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const site = {
  name: "NayePankh Foundation",
  tagline: "Think global. Act local.",
  email: "contact@nayepankh.com",
  phone: "+91 8318500748",
  registration: "UP Govt. | 80G & 12A Registered NGO",
  cities: "Kanpur, Ghaziabad and growing city chapters",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  hero:
    "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D1920%2Cfit%3Dcrop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg",
  smile:
    "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D768%2Ch%3D1045%2Cfit%3Dcrop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.03-am-YBgL64ZLPPI03WXe.jpeg",
  community:
    "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D1920%2Cfit%3Dcrop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg",
  newspaperOne:
    "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D1920%2Cfit%3Dcrop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-AVLW214Gz2IpXNn4.jpg",
  newspaperTwo:
    "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D1920%2Cfit%3Dcrop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-mP4wg2o0j3Uv1ggM.jpg",
  team:
    "https://assets.zyrosite.com/cdn-cgi/image/format%3Dauto%2Cw%3D768%2Ch%3D963%2Cfit%3Dcrop/YKbL494Mv8Ip3qgy/1-YD0yJ4erqEIN3ZWV.jpeg",
};

export const stats = [
  { value: "10K+", label: "lives reached through campaigns" },
  { value: "7+", label: "active city and campus chapters" },
  { value: "80G", label: "tax-exempt donation benefit" },
  { value: "12A", label: "registered public trust compliance" },
];

export const causes = [
  {
    title: "Education Access",
    description:
      "Learning drives, mentoring circles and classroom support for children who need a consistent push.",
    icon: GraduationCap,
    accent: "bg-blue-50 text-naye-blue",
  },
  {
    title: "Healthcare Support",
    description:
      "Community health awareness, hygiene kits and rapid support during urgent local needs.",
    icon: HeartPulse,
    accent: "bg-emerald-50 text-naye-green",
  },
  {
    title: "Food & Essentials",
    description:
      "On-ground relief work that routes meals, clothing and essentials to families with dignity.",
    icon: HandHeart,
    accent: "bg-orange-50 text-naye-orange",
  },
  {
    title: "Youth Volunteering",
    description:
      "A student-led movement that turns time, skills and ideas into measurable community action.",
    icon: Users,
    accent: "bg-sky-50 text-sky-700",
  },
];

export const trustPoints = [
  { icon: ShieldCheck, text: "UP Government registered NGO" },
  { icon: BookOpen, text: "80G and 12A donation compliance" },
  { icon: Home, text: "Local chapters in Kanpur and Ghaziabad" },
  { icon: Sparkles, text: "Student-led, impact-first operating model" },
];

export const testimonials = [
  {
    quote:
      "NayePankh makes volunteering feel structured, meaningful and close to the community.",
    name: "Aarohi S.",
    role: "Campus Volunteer",
  },
  {
    quote:
      "Their drives are thoughtful. Every rupee and every hour is treated like a responsibility.",
    name: "Raghav M.",
    role: "Monthly Donor",
  },
  {
    quote:
      "The team brings warmth, discipline and a strong local understanding to every initiative.",
    name: "Meera K.",
    role: "Community Partner",
  },
];

export const donationTiers = [
  { amount: "₹501", impact: "learning kits for children" },
  { amount: "₹1,100", impact: "meal and hygiene support for families" },
  { amount: "₹2,500", impact: "a focused education drive" },
  { amount: "Custom", impact: "support the cause closest to you" },
];
