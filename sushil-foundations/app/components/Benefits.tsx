'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Heart,
  Target,
} from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Proven Impact',
    description: 'Demonstrated results in community development and individual growth',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Long-term programs that create lasting change and self-sufficiency',
  },
  {
    icon: Award,
    title: 'Quality Programs',
    description: 'Expertly designed initiatives backed by research and best practices',
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'Programs tailored to local needs with active community participation',
  },
  {
    icon: Heart,
    title: 'Holistic Approach',
    description: 'Addressing physical, mental, and social well-being comprehensively',
  },
  {
    icon: Target,
    title: 'Focused Mission',
    description: 'Clear objectives with measurable outcomes and transparent reporting',
  },
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="benefits" className="py-32 bg-white scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with a foundation committed to
            excellence and impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <p className="text-4xl font-bold text-amber-600 mb-1">98%</p>
              <p className="text-sm text-gray-600">Success Rate</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in our mission to create positive change in communities
            across Karnataka
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">
            Partner With Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
