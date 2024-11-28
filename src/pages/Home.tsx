import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Veterinary Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              رعاية بيطرية متميزة لحيواناتكم الأليفة
            </h1>
            <p className="text-xl mb-8">نقدم أفضل خدمات الرعاية البيطرية بأيدي متخصصين ذوي خبرة</p>
            <button className="btn-primary text-lg">احجز موعد الآن</button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-primary text-center">لماذا تختارنا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">رعاية موثوقة</h3>
              <p className="text-gray-600">نقدم رعاية عالية الجودة لحيواناتكم الأليفة</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">عناية فائقة</h3>
              <p className="text-gray-600">نهتم بصحة وسعادة حيواناتكم الأليفة</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">خدمة 24/7</h3>
              <p className="text-gray-600">متواجدون على مدار الساعة لخدمتكم</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">خبرة متميزة</h3>
              <p className="text-gray-600">فريق من الأطباء المتخصصين ذوي الخبرة</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;