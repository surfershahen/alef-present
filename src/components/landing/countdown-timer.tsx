
"use client";

import { useState, useEffect } from 'react';

type CountdownTimerProps = {
  targetDate: string;
  details: {
    location: string;
    time: string;
    date: string;
  }
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-muted/50 rounded-lg p-4 md:p-6 w-20 md:w-32">
    <span className="text-4xl md:text-6xl font-bold text-primary">{value.toString().padStart(2, '0')}</span>
    <span className="text-sm md:text-base text-muted-foreground mt-1">{label}</span>
  </div>
);

const DetailBox = ({ value }: { value: string }) => (
  <div className="bg-muted/50 rounded-lg py-3 px-6 text-center">
    <span className="font-semibold text-sm md:text-base text-foreground">{value}</span>
  </div>
);

export function CountdownTimer({ targetDate, details }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial time on client mount to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-card text-card-foreground p-6 md:p-8 rounded-2xl shadow-xl border border-border/20">
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-center mb-8 text-foreground">
          الورشة ستبدأ خلال:
        </h2>
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {timeLeft ? (
            <>
              <TimeBox value={timeLeft.seconds} label="ثواني" />
              <TimeBox value={timeLeft.minutes} label="دقائق" />
              <TimeBox value={timeLeft.hours} label="ساعات" />
              <TimeBox value={timeLeft.days} label="أيام" />
            </>
          ) : (
            <>
              <TimeBox value={0} label="ثواني" />
              <TimeBox value={0} label="دقائق" />
              <TimeBox value={0} label="ساعات" />
              <TimeBox value={0} label="أيام" />
            </>
          )}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <DetailBox value={details.date} />
          <DetailBox value={details.time} />
          <DetailBox value={details.location} />
        </div>
      </div>
    </div>
  );
}
