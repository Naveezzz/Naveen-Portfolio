import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;