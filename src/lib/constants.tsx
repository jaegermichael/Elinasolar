import {
  Sun,
  Droplets,
  Zap,
  RotateCcw,
  BatteryCharging,
  Wrench,
  Building2,
  Users,
  Shield,
  Leaf,
  PiggyBank,
  MapPin,
  ChevronRight,
} from "lucide-react";
import type {
  NavItem,
  StatCard,
  Feature,
  Service,
  Project,
  TeamMember,
  Testimonial,
  ProcessStep,
  ContactInfo,
  FooterSection,
  SocialLink,
} from "./types";

export const SITE_NAME = "Eliana Solar & Boreholes";
export const SITE_TAGLINE = "Empowering Zimbabwe Through Sustainable Energy And Reliable Water Solutions";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS: StatCard[] = [
  { value: "72%", label: "Average Energy Savings" },
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Customer Support" },
];

export const FEATURES: Feature[] = [
  {
    title: "Certified Experts",
    description: "Experienced technicians and engineers dedicated to quality.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Quality Equipment",
    description: "Only proven and trusted products from leading manufacturers.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Eco-Friendly Systems",
    description: "Sustainable and environmentally responsible solutions.",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    title: "Long-Term Savings",
    description: "Reduce utility costs for years to come with efficient systems.",
    icon: <PiggyBank className="w-6 h-6" />,
  },
];

export const SERVICES: Service[] = [
  {
    id: "solar-installations",
    title: "Solar Installations",
    description: "Custom-designed solar systems built for efficiency, reliability, and long-term savings for homes and businesses.",
    image: "/images/solar-installation.jpg",
    icon: <Sun className="w-8 h-8" />,
    features: ["Residential solar", "Commercial solar", "Solar farm installations", "Grid-tie & off-grid systems"],
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "borehole-drilling",
    title: "Borehole Drilling",
    description: "Professional borehole drilling services ensuring reliable water access for agricultural, residential, and commercial use.",
    image: "/images/borehole-drilling.jpg",
    icon: <Droplets className="w-8 h-8" />,
    features: ["Site assessment", "Drilling & casing", "Pump installation", "Water quality testing"],
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "solar-water-pumps",
    title: "Solar Water Pumps",
    description: "Efficient solar-powered water pumping solutions for irrigation, livestock, and community water supply.",
    image: "/images/solar-pump.jpg",
    icon: <RotateCcw className="w-8 h-8" />,
    features: ["Surface & submersible pumps", "Solar-powered systems", "Automatic controls", "Remote monitoring"],
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "water-storage",
    title: "Water Storage Systems",
    description: "Comprehensive water storage solutions including tanks, reservoirs, and distribution systems for properties of all sizes.",
    image: "/images/water-storage.jpg",
    icon: <Building2 className="w-8 h-8" />,
    features: ["Poly & steel tanks", "Elevated storage", "Rainwater harvesting", "Distribution systems"],
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "backup-power",
    title: "Backup Power Solutions",
    description: "Reliable backup power systems including solar battery storage and generator integration for uninterrupted power supply.",
    image: "/images/backup-power.jpg",
    icon: <BatteryCharging className="w-8 h-8" />,
    features: ["Battery storage", "Inverter systems", "Generator integration", "Smart load management"],
    cta: { label: "Learn More", href: "#" },
  },
  {
    id: "maintenance",
    title: "Maintenance & Repairs",
    description: "Ongoing maintenance, repair, and monitoring services to keep your solar and water systems running at peak performance.",
    image: "/images/maintenance.jpg",
    icon: <Wrench className="w-8 h-8" />,
    features: ["Preventive maintenance", "Emergency repairs", "System monitoring", "Performance optimization"],
    cta: { label: "Learn More", href: "#" },
  },
];

export const PROJECTS: Project[] = [
  {
    id: "residential-solar-estate",
    title: "Residential Solar Estate",
    description: "Complete solar installation for a 50-home residential estate in Harare.",
    image: "/images/project-1.jpg",
    category: "Solar Installation",
    location: "Harare",
    capacity: "250kW",
    completionDate: "2024",
    featured: true,
  },
  {
    id: "community-borehole",
    title: "Community Borehole Project",
    description: "Deep borehole drilling with solar pump for a rural community in Masvingo.",
    image: "/images/project-2.jpg",
    category: "Borehole Drilling",
    location: "Masvingo",
    featured: true,
  },
  {
    id: "commercial-solar",
    title: "Commercial Solar Installation",
    description: "Rooftop solar system for a shopping complex in Bulawayo.",
    image: "/images/project-3.jpg",
    category: "Solar Installation",
    location: "Bulawayo",
    capacity: "500kW",
  },
  {
    id: "school-water-system",
    title: "School Water Supply System",
    description: "Integrated water supply system including borehole, storage, and solar pump for a primary school.",
    image: "/images/project-4.jpg",
    category: "Water Systems",
    location: "Mutare",
    featured: true,
  },
  {
    id: "solar-farm",
    title: "Agricultural Solar Farm",
    description: "Large-scale solar installation powering irrigation for a commercial farm.",
    image: "/images/project-5.jpg",
    category: "Solar Farm",
    location: "Mazowe",
    capacity: "1MW",
  },
  {
    id: "hospital-backup",
    title: "Hospital Backup Power",
    description: "Critical backup power system with solar and battery storage for a district hospital.",
    image: "/images/project-6.jpg",
    category: "Backup Power",
    location: "Gweru",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "tawanda-moyo",
    name: "Tawanda Moyo",
    role: "Founder & CEO",
    bio: "15+ years of experience in renewable energy and water infrastructure across Southern Africa.",
    image: "/images/team-1.jpg",
  },
  {
    id: "chipo-dube",
    name: "Chipo Dube",
    role: "Head of Engineering",
    bio: "Professional engineer specializing in solar system design and borehole technology.",
    image: "/images/team-2.jpg",
  },
  {
    id: "tanaka-chigumba",
    name: "Tanaka Chigumba",
    role: "Project Manager",
    bio: "Expert in managing large-scale installations from conception to completion.",
    image: "/images/team-3.jpg",
  },
  {
    id: "ruvarashe-sibanda",
    name: "Ruvarashe Sibanda",
    role: "Customer Relations",
    bio: "Dedicated to ensuring exceptional client experiences and long-term satisfaction.",
    image: "/images/team-4.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Eliana transformed our farm with a solar-powered irrigation system. Our crop yield has doubled and we've cut energy costs by 70%. Truly life-changing!",
    author: "James Mukumba",
    role: "Farm Owner",
    location: "Mazowe",
    service: "Solar Water Pumps",
    rating: 5,
    image: "/images/testimonial-1.jpg",
  },
  {
    id: "2",
    quote: "Professional borehole drilling service from start to finish. They installed a solar pump system that provides clean water to our entire community of 200 families.",
    author: "Sister Grace Moyo",
    role: "Community Leader",
    location: "Masvingo",
    service: "Borehole Drilling",
    rating: 5,
    image: "/images/testimonial-2.jpg",
  },
  {
    id: "3",
    quote: "Our school now has reliable electricity and clean water thanks to Eliana. The team was professional, punctual, and delivered beyond our expectations.",
    author: "Mr. Tendai Banda",
    role: "School Headmaster",
    location: "Mutare",
    service: "Solar Installations",
    rating: 5,
    image: "/images/testimonial-3.jpg",
  },
  {
    id: "4",
    quote: "The backup power system Eliana installed at our clinic has been a lifesaver. We never have to worry about power outages affecting patient care anymore.",
    author: "Dr. Sarah Nyoni",
    role: "Medical Director",
    location: "Gweru",
    service: "Backup Power Solutions",
    rating: 5,
    image: "/images/testimonial-4.jpg",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Site Assessment",
    description: "We visit your property to evaluate conditions and understand your specific energy and water needs.",
    icon: <MapPin className="w-6 h-6" />,
  },
  {
    step: 2,
    title: "System Design",
    description: "Our engineers create a customized system design optimized for your requirements and budget.",
    icon: <Sun className="w-6 h-6" />,
  },
  {
    step: 3,
    title: "Quotation & Approval",
    description: "Receive a detailed proposal with transparent pricing and project timeline for your approval.",
    icon: <ChevronRight className="w-6 h-6" />,
  },
  {
    step: 4,
    title: "Installation",
    description: "Our certified technicians carry out professional installation with minimal disruption to your daily activities.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    step: 5,
    title: "Testing & Commissioning",
    description: "We rigorously test every component to ensure optimal performance and system reliability.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    step: 6,
    title: "After-Sales Support",
    description: "Comprehensive warranty, maintenance, and ongoing support to keep your system performing at its best.",
    icon: <Users className="w-6 h-6" />,
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+263 77 123 4567",
  email: "info@elianasolar.co.zw",
  address: "123 Samora Machel Avenue, Harare, Zimbabwe",
  hours: "Mon - Fri: 7:30 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM",
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Solar Installations", href: "#services" },
      { label: "Borehole Drilling", href: "#services" },
      { label: "Solar Water Pumps", href: "#services" },
      { label: "Water Storage Systems", href: "#services" },
      { label: "Backup Power Solutions", href: "#services" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", href: "#", icon: <span>FB</span> },
  { label: "Instagram", href: "#", icon: <span>IG</span> },
  { label: "LinkedIn", href: "#", icon: <span>LI</span> },
  { label: "YouTube", href: "#", icon: <span>YT</span> },
];

export const METRICS = [
  { value: "2.5 MW+", label: "Solar Capacity Installed" },
  { value: "200+", label: "Boreholes Completed" },
  { value: "1,200+", label: "Homes Powered" },
  { value: "150+", label: "Communities Served" },
];