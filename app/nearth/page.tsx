"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/nearth_logo.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function Nearth() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [randomDelays, setRandomDelays] = useState<number[]>([]);
  const [highlightedWord, setHighlightedWord] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const rectangles = [
    {
      title: "Nuestra Visión",
      description: `Enfrentamos el <strong class="highlight">individualismo</strong>, la <strong class="highlight">desconfianza</strong> y la <strong class="highlight">superficialidad</strong> que predominan
en la vida moderna, fomentando una mayor profundidad y valor en las interacciones
humanas. Nearth studio propone reconectar con la <strong class="highlight">esencia</strong> humana promoviendo un
entorno que funcione como espacio de <strong class="highlight">conexión</strong> y <strong class="highlight">exploración</strong> personal.`,
      highlightWords: ["individualismo", "desconfianza", "superficialidad", "esencia", "conexión", "exploración"],
    },
    {
      title: "Quiénes Somos",
      description: `Somos a un equipo <strong class="highlight">multidisciplinario</strong> compuesto por <strong class="highlight">profesionales</strong> de la salud,
<strong class="highlight">artistas</strong> y <strong class="highlight">creativxs</strong> apasionadxs por <strong class="highlight">transformar</strong> la forma en que las personas se
conectan entre sí y con su entorno.`,
      highlightWords: ["multidisciplinario", "profesionales", "artistas", "creativxs", "transformar"],
    },
    {
      title: "Colabora",
      description: `Trabajamos de manera <strong class="highlight">conceptual</strong> y siguiendo el <strong class="highlight">método</strong>
Nearth con cada <strong class="highlight">tema</strong>, <strong class="highlight">artista</strong>, <strong class="highlight">campaña</strong> o <strong class="highlight">evento</strong> que
ofrecemos.`,
      highlightWords: ["conceptual", "método", "tema", "artista", "campaña", "evento"],
    },
  ];

  useEffect(() => {
    const delays = rectangles.map(() =>
      Array.from({ length: 20 }, () => Math.random() * 0.5)
    );
    setRandomDelays(delays.flat());

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
      setHighlightedWord(null);
    }
  };

  useEffect(() => {
    if (hoveredIndex !== null && !isMobile) {
      const words = rectangles[hoveredIndex].highlightWords;
      let currentIndex = 0;
      const interval = setInterval(() => {
        setHighlightedWord(words[currentIndex]);
        currentIndex = (currentIndex + 1) % words.length;
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hoveredIndex, isMobile]);

  return (
    <main className="flex flex-col items-center justify-center text-center gap-8 px-4 sm:px-8 z-10">
      <Image
        src={logo}
        alt="Logo"
        width={500}
        height={500}
        className="w-full sm:w-[calc(60%-100px)] max-w-full h-auto mx-auto mb-8"
      />
      <div className={`flex flex-col sm:flex-row justify-center ${isMobile ? 'gap-8' : 'gap-4'} z-10`}>
        {rectangles.map((rect, index) => (
          <div
            key={index}
            className={`relative ${isMobile ? 'w-full' : 'w-48'} cursor-pointer mb-4 sm:mb-0`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`h-32 bg-yellow-300 mb-2 transition-all duration-300 ease-in-out ${isMobile ? 'h-auto' : ''}`}
              style={{
                opacity: hoveredIndex === index || isMobile ? 1 : 0.7,
                transform: hoveredIndex === index && !isMobile ? "scale(1.05)" : "scale(1)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-mono tracking-wider">
                  {rect.title.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{
                        animation: `flicker 0.5s infinite ${
                          randomDelays[index * 20 + i]
                        }s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            {isMobile ? (
              <div
                className="bg-white p-2 rounded shadow-lg z-10 font-mono text-xs tracking-wider mt-2"
                dangerouslySetInnerHTML={{ __html: rect.description }}
              />
            ) : (
                <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                  className="absolute bg-white p-2 rounded shadow-lg z-10 font-mono tracking-wider"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: '200%',
                    left: '-50%',
                    transform: 'translateX(-50%)',
                  }}
                  dangerouslySetInnerHTML={{ __html: rect.description }}
                  />
                )}
                </AnimatePresence>
            )}
          </div>
        ))}
      </div>
      <AnimatePresence>
        {highlightedWord && !isMobile && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: 0 }}
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="text-black font-mono text-4xl sm:text-6xl tracking-wider absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {highlightedWord.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      animation: `flicker 0.5s infinite ${Math.random() * 0.5}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .highlight {
          font-weight: bold;
          color: #FFD700;
        }
      `}</style>
    </main>
  );
}
