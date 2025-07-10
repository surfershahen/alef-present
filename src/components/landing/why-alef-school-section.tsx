
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { motion, type Variants } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { stats } from "@/data/why-alef-stats";

const MotionCard = motion(Card);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export function WhyAlefAcademySection() {
  return (
    <SectionWrapper>
      <motion.div 
          className="absolute top-10 -left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"
          animate={{ y: [0, 20, 0], rotate: [0, 180, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
          className="absolute bottom-10 -right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"
          animate={{ y: [0, -20, 0], rotate: [0, -180, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 5 }}
      />
      
      <SectionHeader title="لماذا Alef Academy؟" className="mb-12"/>
      
      <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
      >
          {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                  <MotionCard
                      className="text-center h-full shadow-lg bg-card/80 backdrop-blur-sm"
                      whileHover={{ y: -8, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                      <CardHeader>
                            <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit">
                              <stat.icon className="h-10 w-10" />
                          </div>
                      </CardHeader>
                      <CardContent>
                          {!stat.isText ? (
                              <div className="text-5xl font-bold text-primary">
                                  <AnimatedCounter from={0} to={stat.value} />{stat.suffix}
                              </div>
                          ) : (
                              <div className="text-2xl font-bold text-primary h-[60px] flex items-center justify-center">
                                  {stat.label.split(" ").slice(0, 2).join(" ")}
                              </div>
                          )}
                          <CardTitle className="font-body text-xl mt-2 text-muted-foreground">{stat.isText ? stat.label.split(" ").slice(2).join(" ") : stat.label}</CardTitle>
                      </CardContent>
                  </MotionCard>
              </motion.div>
          ))}
      </motion.div>
    </SectionWrapper>
  );
}
