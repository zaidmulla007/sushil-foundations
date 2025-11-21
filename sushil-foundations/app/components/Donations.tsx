'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, Heart, Users, Gift, CreditCard, Building } from 'lucide-react';

const donationOptions = [
  {
    amount: '₹500',
    title: 'Basic Support',
    description: 'Provide educational materials for one child',
    icon: Gift,
  },
  {
    amount: '₹2,000',
    title: 'Health Care',
    description: 'Support health camp for 10 people',
    icon: Heart,
    popular: true,
  },
  {
    amount: '₹5,000',
    title: 'Community Impact',
    description: 'Fund a complete de-addiction program',
    icon: Users,
  },
];

const paymentMethods = [
  { name: 'Credit Card', icon: CreditCard },
  { name: 'Bank Transfer', icon: Building },
  { name: 'UPI', icon: DollarSign },
];

export default function Donations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="donations"
      className="py-32 bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
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
            Make a{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Donation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your contribution directly impacts lives and creates lasting change
            in communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {donationOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${option.popular ? 'border-4 border-amber-600' : 'border-2 border-gray-100'
                }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center">
                  <option.icon className="text-white" size={32} />
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-2">
                  {option.amount}
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-4">
                  {option.title}
                </h4>
                <p className="text-gray-600 mb-6">{option.description}</p>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${option.popular
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  Donate Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Custom Donation Amount
          </h3>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Amount (₹)
            </label>
            <input
              type="number"
              placeholder="5000"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-amber-600 focus:outline-none text-lg"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Method
            </label>
            <div className="grid grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.name}
                  className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-amber-600 hover:bg-amber-50 transition-all duration-300"
                >
                  <method.icon size={24} className="mb-2 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    {method.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Proceed to Payment
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Your donation is tax-deductible under Section 80G
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 p-6 rounded-xl">
              <p className="text-3xl font-bold text-amber-600 mb-2">
                ₹50 Lakh+
              </p>
              <p className="text-gray-600">Funds Raised</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <p className="text-3xl font-bold text-amber-600 mb-2">5,000+</p>
              <p className="text-gray-600">Donors</p>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <p className="text-3xl font-bold text-red-600 mb-2">100%</p>
              <p className="text-gray-600">Transparency</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
