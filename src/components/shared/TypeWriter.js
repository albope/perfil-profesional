import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ words, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const prefersReducedMotion = useRef(
        typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    useEffect(() => {
        if (prefersReducedMotion.current) return;

        const currentWord = words[wordIndex];
        let timeout;

        if (!isDeleting && text === currentWord) {
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        } else {
            const speed = isDeleting ? deletingSpeed : typingSpeed;
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    if (prefersReducedMotion.current) {
        return <span>{words[0]}</span>;
    }

    return (
        <span>
            {text}
            <span className="typewriter-cursor" aria-hidden="true">|</span>
        </span>
    );
};

export default TypeWriter;
