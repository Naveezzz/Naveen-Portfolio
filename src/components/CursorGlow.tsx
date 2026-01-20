import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef(null);
    const throttleTimer = useRef(null);

    const handleMouseMove = useCallback((event) => {
        if (cursorRef.current) {
            cursorRef.current.style.left = `${event.pageX}px`;
            cursorRef.current.style.top = `${event.pageY}px`;
        }
    }, []);

    const throttledMouseMove = useCallback((event) => {
        if (!throttleTimer.current) {
            handleMouseMove(event);
            throttleTimer.current = setTimeout(() => {
                throttleTimer.current = null;
            }, 16);
        }
    }, [handleMouseMove]);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        window.addEventListener('mousemove', throttledMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', throttledMouseMove);
            clearTimeout(throttleTimer.current);
        };
    }, [throttledMouseMove]);

    return (
        isVisible && (
            <motion.div
                ref={cursorRef}
                className="cursor-glow"
                style={{
                    position: 'fixed',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    willChange: 'transform, opacity',
                    pointerEvents: 'none',
                    zIndex: 9999,
                }}
            />
        )
    );
};

export default CursorGlow;