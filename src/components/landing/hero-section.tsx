
"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { useScrollToForm } from "@/hooks/use-scroll-to-form";

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const scrollToForm = useScrollToForm();
  
  return (
    <motion.section 
      ref={targetRef}
      style={{ opacity }}
      className="w-full bg-cover bg-center py-20 md:py-32 lg:py-40 relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <motion.div style={{ scale }} className="absolute inset-0 bg-background/80 backdrop-blur-sm"></motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{
            scale: [1, 1.1, 1],
            opacity: [0.07, 0.15, 0.07],
        }}
        transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 50%)",
        }}
      ></motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
            className="mb-4 text-3xl font-bold tracking-widest text-primary uppercase"
        >
            Alef Academy Presents
        </motion.p>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground">
          <motion.span
            className="block mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            بتتلبك كل ما يسألوك:
          </motion.span>
          <motion.span
            className="block text-primary mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            "احكي عن حالك؟"
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            خلّي اللغة العبرية تحكي عنك!
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground"
        >
          ورشة Alef العملية – تدريب عملي لتجاوب بثقة على أصعب الأسئلة – وتخرج بفيديو تعريفي احترافي!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10"
        >
          <Button onClick={scrollToForm} size="lg" className="font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            احجز/ي مكانك بـ 285₪
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl"
        animate={{
            y: [0, 20, -10, 0],
            x: [0, -10, 10, 0],
            scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "circInOut" }}
      ></motion.div>
       <motion.div 
        className="hidden md:block absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        animate={{
            y: [0, -20, 10, 0],
            x: [0, 10, -5, 0],
            scale: [1, 1.05, 1.1, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "circInOut", delay: 5 }}
      ></motion.div>
    </motion.section>
  );
}
