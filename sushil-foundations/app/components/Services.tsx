'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  HeartPulse,
  Users,
  Stethoscope,
  HandHeart,
} from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Employment Assistance',
    description:
      'Comprehensive job placement services and career counseling to help individuals find meaningful employment opportunities.',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070',
    color: 'from-amber-400 to-amber-500',
  },
  {
    icon: HeartPulse,
    title: 'Swarna Bindu Prashana',
    description:
      'Traditional Ayurvedic health supplement program for children to boost immunity and promote holistic development.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Users,
    title: 'De-addiction Programs',
    description:
      'Compassionate support and rehabilitation services for individuals struggling with substance dependence.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Stethoscope,
    title: 'Health Camps',
    description:
      'Regular health screening camps for children and communities, providing essential medical services and awareness.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: HandHeart,
    title: 'Charitable Donations',
    description:
      'Direct support programs for disadvantaged populations, providing essential resources and opportunities.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070',
    color: 'from-purple-500 to-indigo-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to create lasting positive impact in
            communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div
                  className={`absolute bottom-4 left-4 w-14 h-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}
                >
                  <service.icon className="text-white" size={28} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}
              ></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
