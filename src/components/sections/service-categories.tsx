'use client';

import Image from "next/image";
import { motion } from 'framer-motion';

interface ServiceItem {
  title: string;
  subtitle: string;
  image: string;
}

export function ServiceCategories() {
  const services: ServiceItem[] = [
    {
      title: "PROFESSIONAL CREW",
      subtitle: "MEET THE CREW",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/opari-lifestyle-crew-bridge_fraseryachts-neZl93f6-22.jpg?",
    },
    {
      title: "SPECIAL OCCASIONS",
      subtitle: "PLAN YOUR PARTY",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/carinthia-lifestyle-onboard-evening-chic-2_fraseryachts-mL2ugp6w-23.jpg?",
    },
    {
      title: "CORPORATE EVENTS",
      subtitle: "PLAN YOUR EVENT",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a578887f-72eb-48df-b257-ebb823c0a81a-fraseryachts-com/assets/images/emir-lifestyle-onboard-limo-tender-exterior_fraseryachts-1EugVZJO-24.jpg?",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[#666666] mb-2">
            Seven Star Every Time
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-wider text-[#001433]">
            FIRST CLASS SERVICE
          </h2>
        </div>

        {/* Service Columns */}
        <div className="grid md:grid-cols-3 gap-0 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative h-[400px] md:h-[500px] overflow-hidden group"
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.03,
                zIndex: 10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Image with dark overlay */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index === 0}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-white p-6 text-center">
                <motion.p 
                  className="text-sm uppercase tracking-widest mb-2 opacity-90 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 0 }}
                  whileHover={{ y: -5 }}
                >
                  {service.subtitle}
                </motion.p>
                <motion.h3 
                  className="text-2xl md:text-3xl font-light tracking-wider mb-6"
                  initial={{ y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05,
                    transition: { duration: 0.3, delay: 0.1 }
                  }}
                >
                  {service.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ 
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.1 }
                  }}
                >
                  <button 
                    className="border-2 border-white text-white px-6 py-2 text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-[#001433] transition-colors"
                    onClick={() => console.log(`Clicked ${service.title}`)}
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}