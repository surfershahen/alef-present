
"use client";

import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { timelineData } from "@/data/workshop-timeline";
import { SectionHeader } from "../shared/section-header";

export function WorkshopTimeline() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-card text-card-foreground p-6 md:p-8 rounded-2xl shadow-xl border border-border/20">
      <CardHeader>
        <SectionHeader title="🗓️ شو رح يصير بالورشة؟ سيبلابوس" className="mb-0" />
      </CardHeader>
      <CardContent>
        <div className="relative border-r-2 border-primary/20 mr-4">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-8 flex items-start">
              <div className="absolute -right-5 flex items-center justify-center bg-primary rounded-full h-10 w-10 text-primary-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div className="mr-12">
                <p className="font-bold text-lg text-primary">{item.time}</p>
                <h4 className="font-headline text-xl text-foreground mt-1 mb-2">{item.title}</h4>
                <p className="text-foreground whitespace-pre-line">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
