"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { TypingAnimation } from "@/components/typing-animation"
import { ContactForm } from "@/components/contact-form"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Github, Linkedin, Instagram, Facebook, Code, Smartphone, Brain, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 sm:pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Hello, It's Me
                <br />
                <span className="text-primary">Omar Yahya</span>
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
                I'm a{" "}
                <TypingAnimation
                  texts={["Web Developer", "AI Enthusiast", "Problem Solver", "Computer Engineering Student"]}
                  className="text-secondary font-semibold"
                />
              </div>

              <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
                Computer engineering student at Birzeit University with a passion for learning and developing new
                technologies.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/OmarYahya2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-yahya-48286a316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.instagram.com/omar.yahya1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.facebook.com/omar.yahya.7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:shadow-lg active:scale-95"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl animate-float">
                  <Image
                    src="/images/omar-profile.jpg"
                    alt="Omar Yahya - Computer Engineering Student"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 border-4 border-secondary border-l-0 border-b-0"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 border-4 border-secondary border-r-0 border-t-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* About Text */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a computer engineering student at Birzeit University with a passion for learning and developing
                  new technologies. I have experience with HTML, CSS, and Java, and I'm constantly expanding my
                  knowledge in the field of programming and software development.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Skills</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["HTML", "CSS", "Java", "Web Development", "Problem Solving"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-semibold text-secondary text-center">Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {[
                  { icon: Code, text: "Web Development" },
                  { icon: Code, text: "Software Engineering" },
                  { icon: Brain, text: "Artificial Intelligence" },
                  { icon: Smartphone, text: "Mobile App Development" },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-muted rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 active:scale-95 cursor-pointer"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <interest.icon size={16} className="sm:w-[18px] sm:h-[18px] text-primary-foreground" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{interest.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What I Do</h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              I focus on creating modern, efficient solutions using the latest technologies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Creating responsive and modern websites using the latest technologies.",
                color: "bg-chart-1",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "Developing cross-platform mobile applications with modern frameworks.",
                color: "bg-chart-2",
              },
              {
                icon: Brain,
                title: "AI Solutions",
                description: "Implementing intelligent solutions using machine learning algorithms.",
                color: "bg-chart-3",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group active:scale-95 cursor-pointer"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon size={24} className="sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Get in Touch</h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
              <h3 className="font-serif font-bold text-xl sm:text-2xl mb-4 hover:scale-105 transition-transform duration-300 inline-block">
                OmarYahya<span className="text-primary">.</span>
              </h3>
              <p className="text-background/80 mb-6 max-w-md mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
                Computer engineering student passionate about web development and AI technologies.
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                <a
                  href="https://github.com/OmarYahya2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-yahya-48286a316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.instagram.com/omar.yahya1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Instagram Profile"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.facebook.com/omar.yahya.7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Facebook Profile"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-background/80 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 active:scale-95 py-1"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 active:scale-95 py-1"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 active:scale-95 py-1"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 active:scale-95 py-1"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact Info</h4>
              <ul className="space-y-2 sm:space-y-3 text-background/80 text-sm sm:text-base">
                <li className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="break-all">omar@example.com</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                  <MapPin size={16} className="flex-shrink-0" />
                  <span>Birzeit University</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+970 XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-background/60 text-sm sm:text-base">
              &copy; 2025 Omar Yahya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
