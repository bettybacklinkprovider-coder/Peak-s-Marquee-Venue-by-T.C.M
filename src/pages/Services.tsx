import { motion } from 'motion/react';
import { 
  Heart, 
  GlassWater, 
  HeartHandshake, 
  Cake, 
  Briefcase, 
  Music,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Create the wedding of your dreams in our stunning marquee venue. We provide a beautiful, customizable space with elegant stage arrangements, sophisticated lighting, and flexible seating layouts to make your special day truly unforgettable.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    icon: Heart
  },
  {
    id: 'receptions',
    title: 'Wedding Receptions',
    description: 'Host a sophisticated and joyful reception. Our venue offers the perfect environment for dining, speeches, and dancing, ensuring you and your guests celebrate in style and absolute comfort.',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2145&auto=format&fit=crop',
    icon: GlassWater
  },
  {
    id: 'engagements',
    title: 'Engagements',
    description: 'Celebrate your commitment with an elegant engagement party. Whether you prefer an intimate gathering or a grand celebration, our venue adapts beautifully to create a romantic and festive atmosphere.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop',
    icon: HeartHandshake 
  },
  {
    id: 'birthdays',
    title: 'Birthday & Family Events',
    description: 'From milestone birthdays to large family reunions, our flexible event space is ideal for bringing loved ones together. Enjoy a comfortable, spacious environment tailored to your celebration.',
    image: 'https://i.pinimg.com/736x/94/c6/1e/94c61e9939ea5543153b66dde9f344b6.jpg',
    icon: Cake
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Impress clients and colleagues with a professional venue setup. Perfect for company gatherings, award ceremonies, end-of-year parties, and professional functions requiring a touch of class.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    icon: Briefcase
  },
  {
    id: 'private',
    title: 'Private Parties',
    description: 'Hire our venue for exclusive private celebrations. We provide a stylish, secure, and highly adaptable space where you can host your party exactly the way you envision it.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    icon: Music
  }
];

export default function Services() {
  return (
    <div className="w-full pt-24 bg-stone-50">
      
      {/* HEADER SECTION */}
      <section className="relative py-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Services header" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 tracking-tight"
          >
            Events & <span className="italic font-light">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto"
          >
            Elegant spaces and professional setups tailored for every occasion.
          </motion.p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Type assertion for Icon to bypass lucide missing icon issues if Ring isn't there, but it should be fine as we use standard ones.
            // If Ring doesn't exist, we'll fix it. Let's just use Heart for engagement if needed.
            return (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 transition-opacity duration-500 group-hover:opacity-0" />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 mb-8">
                    <Icon className="w-8 h-8 text-stone-900" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">
                    {service.title}
                  </h2>
                  <div className="w-12 h-1 bg-stone-200" />
                  <p className="text-lg text-stone-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <div className="pt-6">
                    <a 
                      href="tel:+447594292023"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors shadow-md"
                    >
                      Enquire & Book
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">Ready to plan your event?</h2>
          <p className="text-lg text-stone-600 font-light mb-10 max-w-2xl mx-auto">
            Contact us today to discuss your requirements, check availability, and arrange a viewing of Peak's Marquee Venue.
          </p>
          <a 
            href="tel:+447594292023"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-stone-900 text-white rounded-full font-medium text-lg hover:bg-stone-800 transition-colors shadow-xl shadow-stone-900/10"
          >
            Call +44 7594 292023
          </a>
        </div>
      </section>

    </div>
  );
}
