"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { TypingAnimation } from "@/components/typing-animation"
import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, Instagram, Facebook, Code, Smartphone, Brain, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                Hello, It's Me
                <br />
                <span className="text-primary">Omar Yahya</span>
              </h1>

              <div className="text-xl md:text-2xl text-muted-foreground">
                I'm a{" "}
                <TypingAnimation
                  texts={["Web Developer", "AI Enthusiast", "Problem Solver", "Computer Engineering Student"]}
                  className="text-secondary font-semibold"
                />
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Computer engineering student at Birzeit University with a passion for learning and developing new
                technologies.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/OmarYahya2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-yahya-48286a316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/omar.yahya1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/omar.yahya.7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl animate-float">
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
                <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-secondary border-l-0 border-b-0"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-4 border-secondary border-r-0 border-t-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a computer engineering student at Birzeit University with a passion for learning and developing
                  new technologies. I have experience with HTML, CSS, and Java, and I'm constantly expanding my
                  knowledge in the field of programming and software development.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {["HTML", "CSS", "Java", "Web Development", "Problem Solving"].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-secondary text-center">Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Code, text: "Web Development" },
                  { icon: Code, text: "Software Engineering" },
                  { icon: Brain, text: "Artificial Intelligence" },
                  { icon: Smartphone, text: "Mobile App Development" },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <interest.icon size={18} className="text-primary-foreground" />
                    </div>
                    <span className="font-medium">{interest.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What I Do</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I focus on creating modern, efficient solutions using the latest technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-serif font-bold text-2xl mb-4">
                OmarYahya<span className="text-primary">.</span>
              </h3>
              <p className="text-background/80 mb-6 max-w-md">
                Computer engineering student passionate about web development and AI technologies.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/OmarYahya2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-yahya-48286a316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/omar.yahya1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/omar.yahya.7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <button
                    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>omar@example.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Birzeit University</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+970 XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2025 Omar Yahya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
