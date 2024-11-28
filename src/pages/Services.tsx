import React from 'react';
import { motion } from 'framer-motion';
import { Syringe, Stethoscope, Microscope, Scissors, Heart, Baby } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/services/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Syringe,
      title: 'التطعيمات',
      description: 'برنامج تطعيمات شامل لجميع الحيوانات الأليفة مع متابعة دورية'
    },
    {
      icon: Stethoscope,
      title: 'الفحص الشامل',
      description: 'فحص طبي شامل مع تقييم كامل للحالة الصحية لحيوانك الأليف'
    },
    {
      icon: Microscope,
      title: 'التحاليل المخبرية',
      description: 'مختبر متكامل لإجراء جميع التحاليل الطبية اللازمة'
    },
    {
      icon: Scissors,
      title: 'الجراحة',
      description: 'عمليات جراحية متقدمة بأحدث التقنيات والمعدات الطبية'
    },
    {
      icon: Heart,
      title: 'العناية المركزة',
      description: 'وحدة عناية مركزة مجهزة بالكامل للحالات الحرجة'
    },
    {
      icon: Baby,
      title: 'رعاية المواليد',
      description: 'عناية خاصة بالمواليد الجدد وتقديم النصائح للمربين'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="خدمات العيادة البيطرية"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              خدماتنا المتميزة
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              نقدم مجموعة شاملة من الخدمات البيطرية عالية الجودة لحيواناتكم الأليفة
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;