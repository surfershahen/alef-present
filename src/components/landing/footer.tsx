
"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/fade-in";
import { useScrollToForm } from "@/hooks/use-scroll-to-form";

export function Footer() {
  const scrollToForm = useScrollToForm();

  return (
    <footer className="w-full bg-secondary mt-16 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-50"
        animate={{ y: [20, 0, 20] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <FadeIn>
        <div className="container mx-auto px-4 py-12 md:py-16 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            جاهز/ة تحكي عن حالك بثقة؟
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            المقاعد محدودة جدًا لضمان تجربة شخصية وفعالة. لا تضيع/ي الفرصة!
          </p>
          <div className="mt-8">
            <Button onClick={scrollToForm} size="lg" className="font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                سجّل مكانك اليوم – المقاعد محدودة
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Alef Academy. كل الحقوق محفوظة.</p>
        </div>
      </FadeIn>
    </footer>
  );
}
