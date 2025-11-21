'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const openings = [
  {
    title: 'Social Worker',
    department: 'Community Development',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    description:
      'Work directly with communities to implement our programs and create social impact.',
  },
  {
    title: 'Program Coordinator',
    department: 'Operations',
    location: 'Multiple Locations',
    type: 'Full-time',
    description:
      'Coordinate and manage multiple programs across different villages and districts.',
  },
  {
    title: 'Healthcare Professional',
    department: 'Health Services',
    location: 'Field Work',
    type: 'Part-time',
    description:
      'Provide medical support and conduct health camps in rural communities.',
  },
  {
    title: 'Fundraising Manager',
    department: 'Development',
    location: 'Bangalore, Karnataka',
    type: 'Full-time',
    description:
      'Lead fundraising initiatives and build relationships with donors and partners.',
  },
];

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="careers" className="py-32 bg-white scroll-mt-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a mission-driven team creating lasting social change
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h3>
            <div className="space-y-4">
              {[
                'Make a real difference in communities',
                'Professional growth and development opportunities',
                'Collaborative and supportive work environment',
                'Competitive compensation and benefits',
                'Flexible work arrangements',
                'Meaningful and purposeful work',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600"></div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              alt="Team working together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Current Openings
          </h3>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-amber-200 hover:shadow-lg transition-all duration-300 hover:scale-102"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase size={16} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    Apply Now
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-amber-50 to-amber-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't see the right position?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            We're always looking for talented individuals passionate about
            social change.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            Send General Application
          </button>
        </motion.div>
      </div>
    </section>
  );
}
