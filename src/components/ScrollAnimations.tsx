import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

// Optimized FadeIn component
const FadeIn = React.memo(({ children, duration = 0.5, delay = 0 }) => {
    const style = useMemo(() => ({
        opacity: 0,
        transition: `opacity ${duration}s ${delay}s`
    }), [duration, delay]);

    useEffect(() => {
        const timer = setTimeout(() => {
            style.opacity = 1;
        }, delay * 1000);

        return () => clearTimeout(timer);
    }, [delay, style]);

    return <motion.div style={style}>{children}</motion.div>;
});

// Optimized Parallax component
const Parallax = React.memo(({ children, speed }) => {
    const parallaxStyle = useMemo(() => ({
        willChange: 'transform',
        transform: `translateY(${speed}%)`
    }), [speed]);

    return <motion.div style={parallaxStyle}>{children}</motion.div>;
});

// Optimized ScaleOnScroll component
const ScaleOnScroll = React.memo(({ children, scale = 1, scrollPosition }) => {
    const scaleStyle = useMemo(() => ({
        willChange: 'transform',
        transform: `scale(${scale})`
    }), [scale]);

    return <motion.div style={scaleStyle}> {children} </motion.div>;
});

// Optimized StaggerChildren animation
const StaggerChildren = React.memo(({ children, staggerAmount }) => {
    return <motion.div animate={{ transition: { staggerChildren: staggerAmount } }}>{children}</motion.div>;
});

export { FadeIn, Parallax, ScaleOnScroll, StaggerChildren };