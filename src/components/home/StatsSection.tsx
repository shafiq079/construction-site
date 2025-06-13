import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    awards: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    projects: 500,
    experience: 20,
    clients: 450,
    awards: 25,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounter = (key: keyof typeof finalCounts, target: number) => {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, duration / steps);
      };

      Object.entries(finalCounts).forEach(([key, value]) => {
        animateCounter(key as keyof typeof finalCounts, value);
      });
    }
  }, [isVisible]);

  const stats = [
    {
      label: 'Projects Completed',
      value: counts.projects,
      suffix: '+',
    },
    {
      label: 'Years Experience',
      value: counts.experience,
      suffix: '+',
    },
    {
      label: 'Happy Clients',
      value: counts.clients,
      suffix: '+',
    },
    {
      label: 'Industry Awards',
      value: counts.awards,
      suffix: '+',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;