import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Star, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Peak's Marquee Venue" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm tracking-wider uppercase mb-6">
              Welcome to Sheffield's Premier Event Space
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight shadow-sm">
              Peak's Marquee Venue <br className="hidden md:block"/>
              <span className="font-light italic text-stone-200">by T.C.M</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              A Beautiful Venue for Your Most Special Moments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a 
                href="tel:+447594292023"
                className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 rounded-full font-medium tracking-wide hover:bg-stone-100 transition-colors flex items-center justify-center gap-2"
              >
                Book Your Event
                <ChevronRight className="w-4 h-4" />
              </a>
              <Link 
                to="/about"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-medium tracking-wide hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Explore Our Venue
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-stone-200 text-sm font-medium">
              <div className="flex items-center gap-2 bg-stone-900/40 backdrop-blur-sm py-2 px-4 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>12 Holme Ln, Sheffield S6 4JQ</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/40 backdrop-blur-sm py-2 px-4 rounded-full">
                <Phone className="w-4 h-4" />
                <span>+44 7594 292023</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WELCOME */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">
                Welcome to <br />
                <span className="italic font-light">Peak's Marquee</span> Venue
              </h2>
              <div className="w-20 h-1 bg-stone-200" />
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Discover an elegant and welcoming setting for your most treasured celebrations. Located in the heart of Sheffield, Peak's Marquee Venue by T.C.M offers a sophisticated space designed to make every occasion unforgettable.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-light pb-4">
                Whether you are planning a grand wedding, an intimate family gathering, or a professional corporate event, our beautifully presented venue and dedicated service ensure a seamless and memorable experience for you and your guests.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-stone-900 font-medium pb-1 border-b border-stone-900 hover:text-stone-600 hover:border-stone-600 transition-colors uppercase tracking-widest text-sm"
              >
                Learn More About Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
                alt="Elegant venue interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EVENTS & SERVICES */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight">Our Services</h2>
            <p className="text-lg text-stone-600 font-light">
              Tailored event spaces designed to host a wide variety of celebrations with elegance and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Weddings", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", desc: "A breathtaking setting for your special day." },
              { title: "Wedding Receptions", img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2145&auto=format&fit=crop", desc: "Celebrate with family and friends in style." },
              { title: "Engagements", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop", desc: "Intimate and elegant spaces for engagement parties." },
              { title: "Birthday & Family", img: "https://i.pinimg.com/736x/94/c6/1e/94c61e9939ea5543153b66dde9f344b6.jpg", desc: "Create lasting memories with your loved ones." },
              { title: "Corporate Events", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop", desc: "Professional settings for meetings and gatherings." },
              { title: "Private Parties", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", desc: "Exclusive venue hire for your private celebrations." },
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif text-stone-900 mb-2">{service.title}</h3>
                  <p className="text-stone-600 font-light text-sm mb-4">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-sm font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                    Explore <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="py-24 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">Why Choose Us</h2>
              <div className="w-20 h-1 bg-stone-700 mb-10" />
              
              <div className="grid gap-8">
                {[
                  { title: "Elegant Event Space", desc: "Spacious and beautifully designed marquee interiors tailored to your aesthetic." },
                  { title: "Beautiful Decorations", desc: "Premium styling options to perfectly match your theme and vision." },
                  { title: "Flexible Event Setup", desc: "Adaptable layouts to accommodate diverse guest numbers and seating styles." },
                  { title: "Comfortable Guest Experience", desc: "Climate-controlled environments and premium amenities for ultimate comfort." },
                  { title: "Professional Service", desc: "Dedicated staff committed to ensuring your event runs flawlessly." },
                  { title: "Convenient Location", desc: "Easily accessible in Sheffield with ample parking and transport links." },
                ].map((feature, idx) => (
                  <div key={feature.title} className="flex items-start gap-4 group">
                    <div className="mt-1 flex-shrink-0 transition-transform group-hover:scale-110">
                      <CheckCircle2 className="w-6 h-6 text-stone-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{feature.title}</h3>
                      <p className="text-stone-400 font-light text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:h-[750px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://i.pinimg.com/736x/dd/61/9b/dd619b9db7945b6a2b157cd79ed90b21.jpg"
                alt="Beautiful Decorations"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GALLERY PREVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight">Gallery Preview</h2>
              <p className="text-lg text-stone-600 font-light max-w-2xl">
                A glimpse into the stunning events hosted at Peak's Marquee Venue.
              </p>
            </div>
            <Link 
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stone-200 rounded-full text-stone-900 font-medium hover:bg-stone-50 transition-colors whitespace-nowrap"
            >
              View Full Gallery
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl aspect-square md:aspect-auto h-[300px] md:h-[600px]">
              <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" alt="Gallery preview large" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-square h-full">
              <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" alt="Gallery preview small" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-square h-full">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Gallery preview small" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-square h-full">
              <img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2145&auto=format&fit=crop" alt="Gallery preview small" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-square h-full">
              <img src="https://i.pinimg.com/736x/94/c6/1e/94c61e9939ea5543153b66dde9f344b6.jpg" alt="Gallery preview small" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT / CTA */}
      <section className="py-24 bg-stone-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
           <svg width="404" height="404" fill="none" viewBox="0 0 404 404"><defs><pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect></svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 tracking-tight">Plan Your Special Event With Us</h2>
            
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-stone-200/50 mb-10 border border-stone-100">
              <h3 className="text-2xl font-serif text-stone-900 mb-6">Peak's Marquee Venue by T.C.M</h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 text-stone-600 mb-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 mb-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">12 Holme Ln, Hillsborough</span>
                  <span className="text-sm">Sheffield S6 4JQ, UK</span>
                </div>
                
                <div className="hidden sm:block w-px h-16 bg-stone-200" />
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-900 mb-2">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Call Us Directly</span>
                  <a href="tel:+447594292023" className="text-stone-900 hover:text-stone-600 transition-colors font-semibold">
                    +44 7594 292023
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:+447594292023"
                  className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-medium tracking-wide hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20"
                >
                  Call Now
                </a>
                <Link 
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 rounded-full font-medium tracking-wide hover:border-stone-900 transition-colors"
                >
                  Book Your Event
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
