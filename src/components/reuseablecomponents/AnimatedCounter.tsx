// src/components/AnimatedCounter.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2 
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const controls = useAnimation();
  
  // Extract numeric value and suffix (like % or +)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  
  useEffect(() => {
    const animateCounter = async () => {
      await controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.3 }
      });
      
      let start = 0;
      const increment = numericValue / (duration * 60); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplayValue(`${numericValue}${suffix}`);
          clearInterval(timer);
        } else {
          setDisplayValue(`${Math.floor(start)}${suffix}`);
        }
      }, 1000 / 60); // 60fps
    };
    
    // Start animation when component mounts
    const timer = setTimeout(() => {
      animateCounter();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [controls, numericValue, suffix, duration]);

  return (
    <motion.div 
      className="text-3xl font-bold"
      animate={controls}
    >
      {displayValue}
    </motion.div>
  );
};

export default AnimatedCounter;
