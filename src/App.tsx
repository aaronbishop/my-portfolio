import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Download, ArrowUp, } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const PROFILE = {
  name: "Aaron Bishop",
  title: "Senior Software Engineer",
  summary:
    "Experienced full-stack engineer with expertise in Angular, Java, AWS, and modernizing enterprise applications. Skilled in building scalable, secure, and high-performance systems with a strong background in healthcare and government solutions.",
  location: "Christiansburg, VA",
  email: "rhykros@gmail.com",
  phone: "336-676-3348",
  social: {
    github: "https://github.com/aaronbishop",
    linkedin: "https://www.linkedin.com/in/aaron-bishop-99496458/",
    resume: "/Aaron_Bishop_Resume.pdf",
  },
}

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
]

const PROJECTS = [
  {
    name: "Healthcare Web Modernization",
    description:
      "Led modernization of legacy Angular applications at Carilion Clinic, improving performance, UI, and PHI/PII security.",
    tags: ["Angular", "Java", "Express", "Oracle", "MySQL"],
  },
  {
    name: "ATF Application Rewrite",
    description:
      "Team lead for full-stack rewrite of ATF’s public and internal applications from Oracle into modern Angular/Express/AWS architecture.",
    tags: ["AngularJS", "ExpressJS", "AWS", "MySQL", "ProtoBufJS"],
  },
  {
    name: "Pet Supply Mobile App",
    description:
      "Developed Android app with Java backend and MongoDB on AWS for a pet supply company.",
    tags: ["Android", "Java", "MongoDB", "Spring", "AWS"],
  },
  {
    name: "PMAT / VDAF Platform",
    description:
      "Built front-end and backend integration tool enabling unified access to transportation data across agencies.",
    tags: ["Java", "GWT", "REST API", "Leaflet", "OpenStreetMap"],
  },
]

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur bg-zinc-900/70 border-b border-transparent">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between relative">
          <a href="#home" className="text-lg font-semibold text-emerald-400">
            {PROFILE.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
          <Button asChild className="rounded-2xl">
            <a href={PROFILE.social.resume} download="Aaron_Bishop_Resume.pdf">
              <Download className="h-4 w-4 mr-2" /> Resume
            </a>
          </Button>

          {/* Gradient accent line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 animate-gradient-x"></div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-emerald-500 to-black"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white">
            Hi, I&apos;m {PROFILE.name}
          </h1>
          <p className="mt-4 text-xl text-zinc-100">{PROFILE.title}</p>
          <p className="mt-2 max-w-2xl mx-auto text-zinc-200">
            {PROFILE.summary}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild variant="secondary">
              <a href={PROFILE.social.github} target="_blank">
                <FaGithub className="h-4 w-4 mr-2" /> GitHub
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={PROFILE.social.linkedin} target="_blank">
                <FaLinkedin className="h-4 w-4 mr-2" /> LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="section-title text-3xl font-bold mb-10 text-white">
          Experience
        </h2>
        <div className="space-y-6">
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-emerald-400 transition-all"
            >
              <h3 className="text-xl font-semibold text-white">
                {job.role} —{" "}
                <span className="text-emerald-400">{job.company}</span>
              </h3>
              <p className="text-sm text-zinc-400">{job.period}</p>
              <ul className="mt-2 list-disc list-inside text-zinc-300 space-y-1">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-20 bg-gradient-to-r from-emerald-500 to-black h-0.5" />

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="section-title text-3xl font-bold mb-10 text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:border-emerald-400 transition-all"
            >
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-2 text-zinc-400">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="badge-gradient">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="my-20 bg-gradient-to-r from-emerald-500 to-black h-0.5" />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="section-title text-3xl font-bold mb-10 text-white">
          Contact
        </h2>
        <Card className="p-6 bg-zinc-900 border border-zinc-800">
          <CardHeader>
            <CardTitle className="text-white">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-zinc-300">
            <div className="flex items-center gap-2">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4 text-emerald-400" /> {PROFILE.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="h-4 w-4 text-emerald-400" /> {PROFILE.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROFILE.location)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MapPin className="h-4 w-4 text-emerald-400" /> {PROFILE.location}
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Vite,
        Tailwind, shadcn, and Framer Motion.
      </footer>

      {/* Scroll to top */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-emerald-400 text-zinc-900 shadow-lg hover:bg-emerald-300 transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </div>
  )
}