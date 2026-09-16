import { motion } from 'motion/react';
import { MapPin, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="w-full pt-24 bg-stone-50">
      
      {/* HEADER SECTION */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Venue header" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 tracking-tight"
          >
            About <span className="italic font-light">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto"
          >
            Discover the story and passion behind Sheffield's premier event space.
          </motion.p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-8 h-8 text-stone-300 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 tracking-tight leading-tight">
            About Peak's Marquee Venue
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed font-light mb-6">
            Peak's Marquee Venue by T.C.M was established with a singular vision: to provide a breathtaking, memorable, and highly adaptable setting for life's most important celebrations. Located conveniently in Sheffield, our venue combines elegance with practicality, offering a blank canvas that can be transformed to match your exact aesthetic.
          </p>
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Whether you are hosting an intimate family gathering or a lavish wedding reception, we believe that the environment sets the tone. That is why our marquee space is meticulously maintained, beautifully presented, and supported by a team dedicated to excellence.
          </p>
        </div>
      </section>

      {/* OUR VENUE & APPROACH (Alternating grid) */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Our Venue */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" alt="Our Venue" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif text-stone-900 mb-6">Our Venue</h3>
              <p className="text-stone-600 leading-relaxed font-light mb-6 text-lg">
                Our marquee offers a spacious, airy, and inviting atmosphere that accommodates various event sizes and styles. From the moment guests step inside, they are greeted by an environment that feels both grand and welcoming.
              </p>
              <ul className="space-y-4 text-stone-700">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5" />
                  <span><strong>Versatile Layout:</strong> Easily adaptable for dining, dancing, and mingling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5" />
                  <span><strong>Elegant Atmosphere:</strong> Soft drapery, modern lighting, and premium finishes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5" />
                  <span><strong>Year-Round Comfort:</strong> Climate control features ensure a comfortable experience in any season.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Our Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl lg:order-2"
            >
              <img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2145&auto=format&fit=crop" alt="Our Approach" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <h3 className="text-3xl font-serif text-stone-900 mb-6">Our Approach</h3>
              <p className="text-stone-600 leading-relaxed font-light mb-6 text-lg">
                We go beyond just providing a space. We provide a foundation for your memories. Our approach is centered entirely around your experience and peace of mind.
              </p>
              <ul className="space-y-4 text-stone-700">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5" />
                  <span><strong>Beautiful Presentation:</strong> Meticulous attention to visual details and cleanliness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5" />
                  <span><strong>Guest Comfort:</strong> Facilities and arrangements designed to prioritize the well-being of all attendees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-400 mt-2.5" />
                  <span><strong>Professional Service:</strong> A dedicated team that understands the nuances of running a smooth event.</span>
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* LOCATION & CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <MapPin className="w-8 h-8 text-stone-900" />
          </div>
          <h2 className="text-3xl font-serif text-stone-900 mb-6">Our Location</h2>
          <p className="text-xl text-stone-600 font-light mb-4">
            12 Holme Ln, Hillsborough, Sheffield S6 4JQ, United Kingdom
          </p>
          <p className="text-stone-500 mb-12">
            Easily accessible with ample nearby parking and transport links for your guests' convenience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="tel:+447594292023"
              className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-medium tracking-wide hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call to Book
            </a>
            <Link 
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium tracking-wide hover:bg-stone-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
