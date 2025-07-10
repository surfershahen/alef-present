
"use client";

import { FadeIn } from "@/components/shared/fade-in";
import { LottiePlayer } from "@/components/shared/lottie-player";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { steps } from "@/data/registration-steps";


export function RegistrationTimelineSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="خطوات بسيطة تفصلك عن الورشة" className="mb-16"/>

      <div className="relative">
        <div className="absolute top-12 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1} className="flex-1 w-full md:w-auto">
              <div className="flex flex-row md:flex-col items-center gap-4 text-center z-10">
                <div className="bg-secondary p-4 rounded-full border-2 border-primary/20 w-24 h-24 flex justify-center items-center">
                  <LottiePlayer src={step.animationSrc} className="w-20 h-20" />
                </div>
                <p className="text-lg font-bold text-foreground bg-background px-2">{step.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
