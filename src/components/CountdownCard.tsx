"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownCard() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Exam Date: March 2026 (Placeholder: March 1, 2026)
        const examDate = new Date("2026-03-01T09:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = examDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05] z-0" />
            <div className="z-10 text-center">
                <h3 className="text-xl font-clash font-bold text-neutral-100 mb-4">
                    Kerala SSLC / Plus Two <span className="text-neon-lime">Exams</span>
                </h3>
                <div className="flex gap-4 items-center justify-center">
                    <TimeBox value={timeLeft.days} label="Days" />
                    <span className="text-2xl font-bold text-neutral-500">:</span>
                    <TimeBox value={timeLeft.hours} label="Hrs" />
                    <span className="text-2xl font-bold text-neutral-500">:</span>
                    <TimeBox value={timeLeft.minutes} label="Mins" />
                    <span className="text-2xl font-bold text-neutral-500">:</span>
                    <TimeBox value={timeLeft.seconds} label="Secs" />
                </div>
                <p className="mt-4 text-xs font-satoshi text-neutral-400 capitalize">
                    March 2026 - The Final Countdown
                </p>
            </div>
        </div>
    );
}

function TimeBox({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <motion.div
                key={value}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -5, opacity: 0 }}
                className="text-3xl md:text-4xl font-bold font-clash text-white"
            >
                {String(value).padStart(2, "0")}
            </motion.div>
            <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                {label}
            </span>
        </div>
    );
}
