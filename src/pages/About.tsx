import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, HeartPulse, Shield, Target } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const About = () => {
  const stats = [
    { label: 'سنوات الخبرة', value: '15+' },
    { label: 'أطباء متخصصون', value: '12' },
    { label: 'حالات ناجحة', value: '10K+' },
    { label: 'عملاء راضون', value: '8K+' },
  ];

  const values = [
    {
      icon: HeartPulse,
      title: 'رعاية متميزة',
      description: 'نقدم أفضل مستوى من الرعاية لحيواناتكم الأليفة',
    },
    {
      icon: Shield,
      title: 'معايير عالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا',
    },
    {
      icon: Users,
      title: 'فريق محترف',
      description: 'نمتلك فريقاً من الأطباء ذوي الخبرة والكفاءة',
    },
    {
      icon: Target,
      title: 'أهداف واضحة',
      description: 'نسعى دائماً لتحقيق أفضل النتائج لعملائنا',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Veterinary Clinic"
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
              من نحن
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              نحن نؤمن بتقديم أفضل رعاية ممكنة لحيواناتكم الأليفة
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Our Story */}
          <div className="mb-20">
            <SectionTitle
              title="قصتنا"
              subtitle="رحلة من النجاح والتميز في مجال الرعاية البيطرية"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="فريق العمل"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-gray-600 leading-relaxed">
                  تأسست عيادة النور البيطرية في عام 2010 بهدف تقديم خدمات بيطرية متميزة في المملكة العربية السعودية. منذ ذلك الحين، نجحنا في بناء سمعة قوية كمركز موثوق للرعاية البيطرية.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  نفخر بكوننا من رواد الرعاية البيطرية في المنطقة، حيث نجمع بين الخبرة العميقة والتقنيات الحديثة لتقديم أفضل رعاية ممكنة لحيواناتكم الأليفة.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div>
            <SectionTitle
              title="قيمنا"
              subtitle="المبادئ التي نؤمن بها ونعمل من أجلها"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;