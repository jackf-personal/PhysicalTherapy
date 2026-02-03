import { Navigation } from "@/components/Navigation";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";
import { 
  Activity, 
  HeartPulse, 
  Dumbbell, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      title: "Sports Therapy",
      description: "Targeted treatment to prevent injury and rehabilitate existing conditions through manual therapy.",
      icon: Activity
    },
    {
      title: "Physiotherapy",
      description: "Comprehensive assessment and treatment plans to restore movement and function.",
      icon: HeartPulse
    },
    {
      title: "Performance Rehab",
      description: "Bridge the gap between injury and return-to-play with strength and conditioning focused rehab.",
      icon: Dumbbell
    },
    {
      title: "Mobility & Recovery",
      description: "Enhance flexibility and reduce recovery time with specialized soft tissue techniques.",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-primary/5 rounded-bl-[200px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-secondary/5 rounded-tr-[150px] -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Accepting New Clients
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-foreground">
                Move Better.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                  Perform Stronger.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Expert physiotherapy and performance rehabilitation to help you overcome pain and reach your athletic potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/5">
                  View Services
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 overflow-hidden">
                      {/* Placeholder faces */}
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} 
                        alt="Client"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Helped</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5] max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-700">
                {/* Unsplash image of a physiotherapist or athlete */}
                {/* gym workout physiotherapy context */}
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop" 
                  alt="Athlete Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Callum Smith</p>
                    <p className="text-white/80 text-sm">Head Physiotherapist</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm">Certified Pro</p>
                  <p className="text-xs text-muted-foreground">Sports Therapy UK</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">World Class Treatment</h2>
            <p className="text-lg text-muted-foreground">
              Whether you're an elite athlete or just want to move without pain, we have the expertise to help you recover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                 {/* Unsplash physiotherapist working */}
                <img 
                  src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=2031&auto=format&fit=crop" 
                  alt="Physiotherapy Session"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Meet Your New <br/>
                <span className="text-primary">Performance Partner</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Hi, I'm Callum. I founded PhysiCal with a simple mission: to make elite-level physiotherapy accessible to everyone.
                </p>
                <p>
                  With years of experience working in professional sports and private practice, I understand that every injury is unique. That's why I don't just treat symptoms — I look for the root cause.
                </p>
                <p>
                  My approach combines hands-on manual therapy with evidence-based strength and conditioning to get you back to doing what you love, stronger than before.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-bold text-foreground">5+</h4>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-foreground">100%</h4>
                  <p className="text-sm text-muted-foreground mt-1">Commitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Road to Recovery</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              We follow a proven four-step framework to ensure you get the best results possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assess", desc: "Detailed analysis of your movement and injury history." },
              { step: "02", title: "Plan", desc: "Custom recovery roadmap tailored to your specific goals." },
              { step: "03", title: "Treat", desc: "Hands-on therapy and guided exercise prescription." },
              { step: "04", title: "Perform", desc: "Return to sport stronger and more resilient than before." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-bold text-white/5 group-hover:text-primary/20 transition-colors mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
                {i !== 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to take control of your physical health?</h2>
              <p className="text-white/90 text-lg mb-10">
                Don't let pain hold you back any longer. Book your initial consultation today and start your journey to recovery.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-lg rounded-full font-bold">
                  Book Appointment Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 h-14 px-8 text-lg rounded-full font-bold">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Have questions about our services or want to check availability? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">123 Wellness Avenue<br/>London, UK SW1A 1AA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">hello@physical-therapy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">Call Us</h4>
                    <p className="text-muted-foreground">+44 (0) 20 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-bold text-white">P</div>
                <span className="font-display font-bold text-2xl">Physi<span className="text-primary">Cal</span></span>
              </div>
              <p className="text-white/60 max-w-sm">
                Empowering movement and performance through expert physiotherapy and rehabilitation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">About</a></li>
                <li><a href="#process" className="text-white/60 hover:text-primary transition-colors">Process</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/60 hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} PhysiCal Therapy. All rights reserved.</p>
            <p>Designed with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
