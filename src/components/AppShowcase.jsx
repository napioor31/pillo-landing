import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Pill, Bell, Calendar, Users, BarChart2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  { Icon: Pill, title: 'Leki', description: 'Pełna lista leków z dawkowaniem' },
  { Icon: Bell, title: 'Przypomnienia', description: 'Powiadomienia o każdej dawce' },
  { Icon: Calendar, title: 'Harmonogram', description: 'Tygodniowy plan przyjmowania' },
  { Icon: Users, title: 'Opiekunowie', description: 'Połączenie z bliskimi' },
  { Icon: BarChart2, title: 'Raporty', description: 'Statystyki zażywania leków' },
  { Icon: ShieldCheck, title: 'Bezpieczeństwo', description: 'Szyfrowane dane medyczne' }
];

const AppShowcase = ({ activeRole = 'patient' }) => {
  const isCaregiver = activeRole === 'caregiver';
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 300;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, features.length - 1));
    }
  };

  return (
    <section className={`w-full py-14 sm:py-24 relative overflow-hidden transition-colors duration-700 ${
      isCaregiver ? 'bg-[#1B2E27]' : 'bg-surface'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 transition-colors duration-700 ${
          isCaregiver ? 'bg-[#3F8F6B]/20' : 'bg-primary/5'
        }`} aria-hidden="true" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-500 ${
            isCaregiver ? 'bg-[#3F8F6B]/20 text-[#5DB38D]' : 'bg-primary/10 text-primary'
          }`}>
            Funkcje aplikacji
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
            isCaregiver ? 'text-white' : 'text-text-primary'
          }`}>
            Wszystko pod kontrolą
          </h2>
          <p className={`text-lg transition-colors duration-500 ${
            isCaregiver ? 'text-white/70' : 'text-text-secondary'
          }`}>
            Intuicyjny interfejs zaprojektowany z myślą o osobach starszych i ich opiekunach.
          </p>
        </motion.div>
        
        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={() => scroll('left')}
            className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full shadow-lg items-center justify-center transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isCaregiver 
                ? 'bg-[#243D34] text-white hover:bg-[#2A4539] focus-visible:ring-[#3F8F6B]' 
                : 'bg-surface text-primary hover:bg-surface-alt focus-visible:ring-primary'
            }`}
            aria-label="Przewiń w lewo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </motion.button>
          
          <motion.button
            onClick={() => scroll('right')}
            className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full shadow-lg items-center justify-center transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isCaregiver 
                ? 'bg-[#243D34] text-white hover:bg-[#2A4539] focus-visible:ring-[#3F8F6B]' 
                : 'bg-surface text-primary hover:bg-surface-alt focus-visible:ring-primary'
            }`}
            aria-label="Przewiń w prawo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </motion.button>
          
          {/* Cards Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[calc(85vw-1.5rem)] sm:w-72 snap-center"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={`rounded-3xl p-8 h-full border transition-all duration-500 ${
                  isCaregiver 
                    ? 'bg-[#243D34]/80 border-[#3F8F6B]/30 hover:border-[#3F8F6B]/50 hover:bg-[#243D34]' 
                    : 'bg-surface-alt border-divider/50 hover:border-primary-light/30 hover:shadow-lg hover:shadow-primary/5'
                }`}>
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isCaregiver ? 'bg-[#3F8F6B]/20' : 'bg-primary/10'
                    }`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <feature.Icon size={28} className={`transition-colors duration-500 ${
                      isCaregiver ? 'text-[#5DB38D]' : 'text-primary'
                    }`} aria-hidden="true" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className={`text-xl font-bold mb-2 font-[family-name:var(--font-family-heading)] transition-colors duration-500 ${
                    isCaregiver ? 'text-white' : 'text-text-primary'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`transition-colors duration-500 ${
                    isCaregiver ? 'text-white/70' : 'text-text-secondary'
                  }`}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ left: index * 300, behavior: 'smooth' });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? (isCaregiver ? 'bg-[#3F8F6B] w-6' : 'bg-primary w-6') 
                    : 'bg-divider hover:bg-primary-light'
                }`}
                aria-label={`Przejdź do slajdu ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
