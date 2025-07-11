
"use client";

import { CheckCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";
import { useScrollToForm } from "@/hooks/use-scroll-to-form";
import { features, offerDetails } from "@/data/offer-details";
import { CountdownTimer } from "@/components/landing/countdown-timer";
import { WorkshopTimeline } from "@/components/landing/workshop-timeline";

const MotionCard = motion(Card);

export function OfferSection() {
  const scrollToForm = useScrollToForm();

  return (
    <SectionWrapper className="bg-secondary">
      <motion.div 
          className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-primary/10 opacity-50 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
          className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-accent/10 opacity-50 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
       <motion.div 
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/10 to-transparent blur-3xl -z-10"
          animate={{ x: [-300, 0, -300] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
          className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-accent/10 to-transparent blur-3xl -z-10"
          animate={{ x: [300, 0, 300] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
      
      <FadeIn>
        <CountdownTimer 
          targetDate={offerDetails.eventDate}
          details={{
            location: offerDetails.location,
            time: offerDetails.time,
            date: offerDetails.date,
          }}
        />
      </FadeIn>
      
      <div className="pt-16" />
      
      <FadeIn>
        <WorkshopTimeline />
      </FadeIn>

      <div className="pt-16 md:pt-24" />

      <FadeIn>
        <Card className="max-w-3xl mx-auto shadow-2xl text-center overflow-hidden bg-card/80 backdrop-blur-sm">
          <div className="bg-primary p-2"></div>
          <CardHeader className="p-8">
            <CardDescription className="text-lg font-bold text-primary">عرض خاص لفترة محدودة</CardDescription>
            <CardTitle className="font-headline text-4xl md:text-5xl font-bold mt-2">
              استثمر في مستقبلك المهني
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <div className="flex justify-center items-baseline gap-4 my-6">
              <p 
                className="text-3xl md:text-4xl text-foreground relative"
              >
                1285₪
                <motion.span
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-foreground"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: 'center' }}
                />
              </p>
              <p className="text-5xl md:text-7xl font-bold text-primary">285₪</p>
            </div>
            <p className="text-lg text-foreground mb-8">فقط! شامل كل شيء.</p>
            
            <div className="space-y-3 text-right max-w-sm mx-auto my-8">
              {features.map((feature, index) => (
                <FadeIn key={index} delay={0.1 * index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-foreground">{feature}</span>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <Button onClick={scrollToForm} size="lg" className="w-full md:w-auto font-bold text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              متحمس احجز مكاني الان!
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Button>
              <p className="text-sm text-foreground mt-4">المقاعد محدودة لضمان جودة التدريب.</p>
            </FadeIn>
          </CardContent>
        </Card>
      </FadeIn>
    </SectionWrapper>
  );
}
