"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 20,
  });

  const moveX = useTransform(smoothX, [-1, 1], [-35, 35]);
  const moveY = useTransform(smoothY, [-1, 1], [-35, 35]);

  const [particles, setParticles] = useState<
    {
      left: number;
      top: number;
      size: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 35 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 5,
      delay: Math.random() * 5,
    }));

    setParticles(generated);

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set((event.clientX / window.innerWidth) * 2 - 1);
      mouseY.set((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 30%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.12), transparent 30%), radial-gradient(circle at 50% 90%, rgba(14,165,233,0.08), transparent 30%)",
          backgroundSize: "150% 150%",
        }}
      />

      {/* Moving glow 1 */}
      <motion.div
        className="absolute h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[120px]"
        style={{
          x: moveX,
          y: moveY,
          left: "5%",
          top: "10%",
        }}
      />

      {/* Moving glow 2 */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[130px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -70, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          right: "-10%",
          top: "25%",
        }}
      />

      {/* Moving glow 3 */}
      <motion.div
        className="absolute h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[110px]"
        animate={{
          x: [-50, 80, 0, -50],
          y: [30, -40, 70, 30],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: "30%",
          bottom: "-5%",
        }}
      />

      {/* Digital grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white/40"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse spotlight */}
      <motion.div
        className="absolute h-[300px] w-[300px] rounded-full bg-white/[0.025] blur-3xl"
        style={{
          x: useTransform(smoothX, [-1, 1], ["-20%", "20%"]),
          y: useTransform(smoothY, [-1, 1], ["-20%", "20%"]),
          left: "40%",
          top: "35%",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
}