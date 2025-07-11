
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { learningFeatures } from "@/data/learning-features";

export function WhatYouWillLearnSection() {
  return (
    <SectionWrapper>
      <motion.div 
          className="absolute top-10 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
          animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
          className="absolute bottom-10 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"
          animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut", delay: 15 }}
      />
      
      <SectionHeader title="شو رح تتعلم/ي بالورشة؟" className="mb-12"/>
        
      <FadeIn delay={0.2}>
        <div className="hidden lg:block max-w-5xl mx-auto p-1 bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 rounded-2xl shadow-2xl">
          <Card className="bg-card/70 backdrop-blur-md rounded-xl overflow-hidden border-0">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {learningFeatures.map((feature, index) => {
                  const imageEl = (
                    <div className="relative h-[300px] w-[300px] mx-auto">
                      <div className="relative w-full aspect-[4/3] rounded-lg shadow-xl overflow-hidden">
                        <Image
                          src={feature.imageSrc}
                          alt={feature.title}
                          fill
                          className="rounded-lg"
                          style={{ objectFit: 'cover' }}
                          data-ai-hint={feature.aiHint}
                        />
                      </div>
                    </div>
                  );

                  const textEl = (
                    <div className="text-right">
                      <h3 className="text-3xl font-headline font-bold text-primary mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );

                  return (
                    <div key={feature.title} className="grid grid-cols-2 gap-4 items-center">
                      {index % 2 === 0 ? (
                        <>
                          {textEl}
                          {imageEl}
                        </>
                      ) : (
                        <>
                          {imageEl}
                          {textEl}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:hidden space-y-8">
          {learningFeatures.map((feature) => (
            <Card key={feature.title} className="overflow-hidden bg-card border-primary/20 shadow-lg max-w-sm mx-auto">
              <div className="flex flex-col items-center p-4">
                <div className="relative w-full max-w-xs aspect-[4/3] mx-auto rounded-md overflow-hidden">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    fill
                    className="rounded-md"
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={feature.aiHint}
                  />
                </div>
              </div>
              <CardContent className="p-6 pt-2 text-center">
                <h3 className="text-2xl font-headline font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-md text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
