import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, ArrowUp, } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const PROFILE = {
    name: "Aaron Bishop",
    title: "Senior Software Engineer",
    summary: `Experienced full-stack engineer with expertise in Angular, Java, AWS, and modernizing enterprise applications. Skilled in building scalable, secure, and high-performance systems with a strong background in healthcare and government solutions. 
  I'm passionate about helping people, writing clean code, following best practices, and continuous learning. 


  When I'm not coding, I enjoy 🥋 practicing martial arts (currently Brazilian Jiu Jitsu), 🍳 cooking amazing food for friends and family, [ROLLERBLADE] rollerblading/biking, and 🎮 competitive gaming with my friends.`,
    location: "Christiansburg, VA",
    email: "rhykros@gmail.com",
    phone: "336-676-3348",
    social: {
        github: "https://github.com/aaronbishop",
        linkedin: "https://www.linkedin.com/in/aaron-bishop-99496458/",
        resume: "/Aaron_Bishop_Resume.pdf",
    },
};
const EXPERIENCE = [
    {
        company: "Carilion Clinic",
        role: "Senior Software Engineer",
        period: "2019 – 2025",
        bullets: [
            "Modernized Angular applications and improved UI/UX across healthcare systems.",
            "Maintained on-prem server infrastructure ensuring security and high availability.",
            "Designed and implemented full-stack Java applications for multiple departments.",
        ],
    },
    {
        company: "ACI",
        role: "Software Engineer (Team Lead)",
        period: "2017 – 2019",
        bullets: [
            "Led rewrite of ATF applications into Angular/Express/AWS architecture.",
            "Migrated sensitive data and infrastructure to AWS cloud with strict compliance.",
            "Developed Android mobile + Java backend app deployed on AWS.",
        ],
    },
    {
        company: "Harmonia",
        role: "Software Engineer",
        period: "2014 – 2017",
        bullets: [
            "Developed PMAT/VDAF tool for transportation data integration and visualization.",
            "Implemented REST APIs and front-end data visualization with Leaflet maps.",
        ],
    },
    {
        company: "Radford University",
        role: "Student Developer",
        period: "2013 – 2014",
        bullets: [
            "Built personalized exam scheduling application with study tips and navigation.",
            "Served as project manager and requirements lead for student project.",
        ],
    },
];
const PROJECTS = [
    {
        name: "Healthcare Web Modernization",
        description: "Led modernization of legacy Angular applications at Carilion Clinic, improving performance, UI, and PHI/PII security.",
        tags: ["Angular", "Java", "Express", "Oracle", "MySQL"],
    },
    {
        name: "ATF Application Rewrite",
        description: "Team lead for full-stack rewrite of ATF’s public and internal applications from Oracle into modern Angular/Express/AWS architecture.",
        tags: ["AngularJS", "ExpressJS", "AWS", "MySQL", "ProtoBufJS"],
    },
    {
        name: "Pet Supply Mobile App",
        description: "Developed Android app with Java backend and MongoDB on AWS for a pet supply company.",
        tags: ["Android", "Java", "MongoDB", "Spring", "AWS"],
    },
    {
        name: "PMAT / VDAF Platform",
        description: "Built front-end and backend integration tool enabling unified access to transportation data across agencies.",
        tags: ["Java", "GWT", "REST API", "Leaflet", "OpenStreetMap"],
    },
];
const RollerbladeIcon = () => (_jsx("img", { src: "/rollerblade.png", alt: "rollerblade", className: "inline-block w-[1.15em] h-[1.15em] align-[-0.2em] mx-1" }));
function renderWithIcons(text) {
    const TOKEN = "[ROLLERBLADE]";
    const parts = text.split(TOKEN);
    return parts.flatMap((part, i) => i < parts.length - 1 ? [part, _jsx(RollerbladeIcon, {}, `rb-${i}`)] : [part]);
}
export default function App() {
    const [showTop, setShowTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-zinc-900 text-zinc-100", children: [_jsx("header", { className: "sticky top-0 z-50 backdrop-blur bg-zinc-900/70 border-b border-transparent", children: _jsxs("div", { className: "mx-auto max-w-6xl px-6 py-4 flex items-center justify-between relative", children: [_jsx("a", { href: "#home", className: "text-lg font-semibold text-emerald-400", children: PROFILE.name }), _jsxs("nav", { className: "hidden md:flex gap-6 text-sm", children: [_jsx("a", { href: "#about", className: "hover:text-emerald-400 transition-colors", children: "About" }), _jsx("a", { href: "#experience", className: "hover:text-emerald-400 transition-colors", children: "Experience" }), _jsx("a", { href: "#projects", className: "hover:text-emerald-400 transition-colors", children: "Projects" }), _jsx("a", { href: "#contact", className: "hover:text-emerald-400 transition-colors", children: "Contact" })] }), _jsx(Button, { asChild: true, className: "rounded-2xl", children: _jsxs("a", { href: PROFILE.social.resume, download: "Aaron_Bishop_Resume.pdf", children: [_jsx(Download, { className: "h-4 w-4 mr-2" }), " Resume"] }) }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 animate-gradient-x" })] }) }), _jsx("section", { id: "home", className: "min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-500 to-black", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "text-center", children: [_jsxs("h1", { className: "text-5xl font-bold text-white", children: ["Hi, I'm ", PROFILE.name] }), _jsx("p", { className: "mt-4 text-xl text-zinc-100", children: PROFILE.title }), _jsx(motion.div, { className: "text-white leading-relaxed max-w-[75%] mx-auto", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, children: PROFILE.summary.split("\n").map((para, i) => para.trim() ? (_jsx("p", { className: i === 2 ? "mt-8 mb-0" : "mt-0 mb-4", children: renderWithIcons(para) }, i)) : null) }), _jsxs("div", { className: "mt-6 flex justify-center gap-4", children: [_jsx(Button, { asChild: true, variant: "secondary", children: _jsxs("a", { href: PROFILE.social.github, target: "_blank", children: [_jsx(FaGithub, { className: "h-4 w-4 mr-2" }), " GitHub"] }) }), _jsx(Button, { asChild: true, variant: "secondary", children: _jsxs("a", { href: PROFILE.social.linkedin, target: "_blank", children: [_jsx(FaLinkedin, { className: "h-4 w-4 mr-2" }), " LinkedIn"] }) })] })] }) }), _jsxs("section", { id: "experience", className: "mx-auto max-w-5xl px-6 py-20", children: [_jsx("h2", { className: "section-title text-3xl font-bold mb-10 text-white", children: "Experience" }), _jsx("div", { className: "space-y-6", children: EXPERIENCE.map((job, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-emerald-400 transition-all", children: [_jsxs("h3", { className: "text-xl font-semibold text-white", children: [job.role, " \u2014", " ", _jsx("span", { className: "text-emerald-400", children: job.company })] }), _jsx("p", { className: "text-sm text-zinc-400", children: job.period }), _jsx("ul", { className: "mt-2 list-disc list-inside text-zinc-300 space-y-1", children: job.bullets.map((b, j) => (_jsx("li", { children: b }, j))) })] }, i))) })] }), _jsx(Separator, { className: "my-20 bg-gradient-to-r from-emerald-500 to-black h-0.5" }), _jsxs("section", { id: "projects", className: "mx-auto max-w-5xl px-6 py-20", children: [_jsx("h2", { className: "section-title text-3xl font-bold mb-10 text-white", children: "Projects" }), _jsx("div", { className: "grid md:grid-cols-2 gap-6", children: PROJECTS.map((p, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, className: "p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-emerald-400 transition-all", children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: p.name }), _jsx("p", { className: "mt-2 text-zinc-400", children: p.description }), _jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: p.tags.map((tag) => (_jsx("span", { className: "badge-gradient", children: tag }, tag))) })] }, i))) })] }), _jsx(Separator, { className: "my-20 bg-gradient-to-r from-emerald-500 to-black h-0.5" }), _jsxs("section", { id: "contact", className: "mx-auto max-w-5xl px-6 py-20", children: [_jsx("h2", { className: "section-title text-3xl font-bold mb-10 text-white", children: "Contact" }), _jsxs(Card, { className: "p-6 bg-zinc-900 border border-zinc-800", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-white", children: "Get in Touch" }) }), _jsxs(CardContent, { className: "space-y-3 text-zinc-300", children: [_jsx("div", { className: "flex items-center gap-2", children: _jsxs("a", { href: `mailto:${PROFILE.email}`, className: "flex items-center gap-2 hover:text-emerald-400 transition-colors", children: [_jsx(Mail, { className: "h-4 w-4 text-emerald-400" }), " ", PROFILE.email] }) }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs("a", { href: `tel:${PROFILE.phone}`, className: "flex items-center gap-2 hover:text-emerald-400 transition-colors", children: [_jsx(Phone, { className: "h-4 w-4 text-emerald-400" }), " ", PROFILE.phone] }) }), _jsx("div", { className: "flex items-center gap-2", children: _jsxs("a", { href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFILE.location)}`, target: "_blank", rel: "noreferrer", className: "flex items-center gap-2 hover:text-emerald-400 transition-colors", children: [_jsx(MapPin, { className: "h-4 w-4 text-emerald-400" }), " ", PROFILE.location] }) })] })] })] }), _jsxs("footer", { className: "py-10 text-center text-sm text-zinc-500", children: ["\u00A9 ", new Date().getFullYear(), " ", PROFILE.name, ". Built with React, Vite, Tailwind, shadcn, and Framer Motion."] }), showTop && (_jsx(motion.button, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }), className: "fixed bottom-6 right-6 p-3 rounded-full bg-emerald-400 text-zinc-900 shadow-lg hover:bg-emerald-300 transition-colors", children: _jsx(ArrowUp, { className: "h-5 w-5" }) }))] }));
}
