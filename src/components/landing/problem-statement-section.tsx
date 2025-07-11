"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import { motion, type Variants } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { problemStatement } from "@/data/problem-statement";
import { AlertTriangle, Trophy } from "lucide-react";



const MotionCard = motion(Card);

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ProblemStatementSection() {
  return (
    <SectionWrapper className="bg-secondary">
       <motion.div 
          className="absolute top-1/4 -left-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
          className="absolute bottom-1/4 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10"
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />
      
      <SectionHeader 
        title={problemStatement.title}
        description={problemStatement.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={cardVariants}>
          <MotionCard
            className="h-full border-destructive/50 border-2 bg-destructive/5 text-center shadow-lg backdrop-blur-sm"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <CardHeader>
              <AlertTriangle className="mx-auto mb-2 h-8 w-8 text-yellow-500" />
              <CardTitle className="font-headline text-2xl pt-4">{problemStatement.before.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              {problemStatement.before.points.map((point, index) => <p key={index}>{point}</p>)}
            </CardContent>
          </MotionCard>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={cardVariants}>
          <MotionCard
            className="h-full border-green-500/50 border-2 bg-green-500/5 text-center shadow-lg backdrop-blur-sm"
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <CardHeader>
              <Trophy className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <CardTitle className="font-headline text-2xl pt-4">{problemStatement.after.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              {problemStatement.after.points.map((point, index) => <p key={index}>{point}</p>)}
            </CardContent>
          </MotionCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
