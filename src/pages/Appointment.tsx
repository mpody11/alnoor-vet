import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const Appointment = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="حجز موعد"
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
              احجز موعدك الآن
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              نوفر لك خدمة حجز المواعيد بكل سهولة ويسر
            </motion.p>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                  <div className="relative">
                    <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">رقم الهاتف</label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">نوع الحيوان</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                  <option value="">اختر نوع الحيوان</option>
                  <option value="cat">قطة</option>
                  <option value="dog">كلب</option>
                  <option value="bird">طائر</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">نوع الخدمة</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                  <option value="">اختر نوع الخدمة</option>
                  <option value="checkup">فحص عام</option>
                  <option value="vaccination">تطعيم</option>
                  <option value="surgery">جراحة</option>
                  <option value="dental">عناية بالأسنان</option>
                  <option value="grooming">تنظيف وتجميل</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">التاريخ</label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">الوقت</label>
                  <div className="relative">
                    <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="time"
                      className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">ملاحظات إضافية</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-32"
                  placeholder="أضف أي ملاحظات إضافية هنا"
                ></textarea>
              </div>

              <Button className="w-full">تأكيد الحجز</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;