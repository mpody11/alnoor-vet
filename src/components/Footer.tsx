import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              عن العيادة
            </h3>
            <p className="text-gray-400 mb-4">
              نقدم خدمات بيطرية متكاملة بأعلى معايير الجودة والرعاية لحيواناتكم الأليفة
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'الرئيسية', path: '/' },
                { label: 'خدماتنا', path: '/services' },
                { label: 'من نحن', path: '/about' },
                { label: 'اتصل بنا', path: '/contact' },
                { label: 'حجز موعد', path: '/appointment' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              معلومات الاتصال
            </h3>
            <ul className="space-y-4">
              {[
                { Icon: Phone, text: '+966 123 456 789', label: 'اتصل بنا' },
                { Icon: Mail, text: 'info@alnoor-vet.com', label: 'راسلنا' },
                { Icon: MapPin, text: 'الرياض، المملكة العربية السعودية', label: 'موقعنا' },
              ].map(({ Icon, text, label }, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <span className="block text-sm text-gray-400">{label}</span>
                    <span className="block text-gray-300">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-gray-700 pb-2">
              ساعات العمل
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-gray-300">السبت - الخميس</p>
                  <p className="text-gray-400">9:00 ص - 9:00 م</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-gray-300">الجمعة</p>
                  <p className="text-gray-400">2:00 م - 9:00 م</p>
                </div>
              </li>
              <li className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-primary font-semibold">خدمة الطوارئ 24/7</p>
                <p className="text-gray-400">اتصل: 911</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} عيادة النور البيطرية. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
            صنع بكل <Heart className="h-4 w-4 text-red-500 mx-1" /> في المملكة العربية السعودية
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;