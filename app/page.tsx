'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { AdBanner } from "@/components/AdBanner";
import { 
  Calendar, Clock, MapPin, Navigation, Heart, Sparkles, Gift, 
  Send, Users, MessageCircle, Music, Volume2, VolumeX, 
  CheckCircle2, ExternalLink, X
} from 'lucide-react';

export default function BabyShowerInvitation() {
  // Audio state simulation
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  // Simulated Google Ads click tracker / modal state
  const [adClicked, setAdClicked] = useState<string | null>(null);

  // Floating decorative items with deterministic positions to avoid Math.random during render
  const floatingItems = useMemo(() => [
    { x: '10%', duration: 12, delay: 0, type: 'heart', scale: 0.8 },
    { x: '25%', duration: 15, delay: 2, type: 'sparkle', scale: 0.6 },
    { x: '40%', duration: 10, delay: 1, type: 'dot', scale: 0.5 },
    { x: '60%', duration: 14, delay: 3, type: 'heart', scale: 1.0 },
    { x: '75%', duration: 11, delay: 0.5, type: 'sparkle', scale: 0.7 },
    { x: '90%', duration: 16, delay: 4, type: 'dot', scale: 0.4 },
    { x: '15%', duration: 13, delay: 2.5, type: 'sparkle', scale: 0.9 },
    { x: '50%', duration: 9, delay: 1.5, type: 'heart', scale: 0.7 },
  ], []);

  const handleDirectionsClick = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=V5VR%2B997,+Sakkimangalam,+Tamil+Nadu+625201', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50/50 to-amber-50/30 font-poppins text-slate-800 relative overflow-hidden">
      
      {/* Floating decorative background confetti/hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {floatingItems.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/40"
            initial={{
              x: item.x,
              y: -50,
              scale: item.scale,
              rotate: 0
            }}
            animate={{
              y: '105vh',
              rotate: 360
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: item.delay
            }}
          >
            {item.type === 'heart' ? (
              <Heart className="w-6 h-6 fill-pink-200" />
            ) : item.type === 'sparkle' ? (
              <Sparkles className="w-5 h-5" />
            ) : (
              <div className="w-3 h-3 rounded-full bg-amber-200" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Floating Header bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 px-4 py-3 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 shadow-xs">
              <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-base sm:text-lg text-pink-900 leading-tight">வளைகாப்பு அழைப்பிதழ்</h1>
              <p className="text-xs text-slate-500">செப்டம்பர் 07, 2024 • சமத்துவபுரம்</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMusicPlaying(!isMusicPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition text-xs font-medium shadow-xs"
              title="இசை இயக்க / நிறுத்த"
            >
              {isMusicPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline">{isMusicPlaying ? 'இசை ஒலிக்கிறது' : 'இசை இயக்கு'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 text-center z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-800 text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs border border-pink-200/60"
        >
          <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
          <span>எங்கள் இல்லத்தில் விரைவில் மழலைச் செல்வம்</span>
          <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
        </motion.div>

        {/* Parents Couple Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="my-6 flex justify-center"
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-pink-300 via-rose-200 to-amber-200 p-1.5 shadow-xl animate-pulse-soft overflow-hidden flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
              <Image
                src="/images/hero.png"
                alt="Parents to be"
                fill
                className="object-cover object-center scale-135 transform hover:scale-145 transition duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-playfair text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight mb-4"
        >
          சீமந்த வளைகாப்பு விழா <br />
          <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-amber-600 bg-clip-text text-transparent font-pacifico text-3xl sm:text-5xl font-normal">
            Baby Shower Celebration
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-4 inline-block px-6 py-2.5 rounded-2xl bg-white/80 border border-pink-200/80 shadow-sm"
        >
          <p className="font-playfair text-xl sm:text-2xl font-bold text-pink-900">
            தினேஷ் <span className="text-pink-500 font-normal mx-2">&</span> நாகவள்ளி
          </p>
          <p className="text-xs text-slate-500 font-medium tracking-wide">Dinesh & Nagavalli</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          எங்கள் குடும்பத்தின் பொன்னான இந்த வளைகாப்பு விழாவிற்கு தாங்கள் அனைவரும் வருகை தந்து, தாயையும் சேயையும் மனதார வாழ்த்திச் செல்ல அன்புடன் அழைக்கிறோம்.
        </motion.p>

        {/* Date & Time Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10"
        >
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">தேதி (Date)</p>
              <p className="font-playfair font-bold text-lg sm:text-xl text-slate-800">செப்டம்பர் 07, 2024</p>
              <p className="text-xs text-pink-600 font-medium">சனிவாரம் (Saturday)</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-4 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">நேரம் (Time)</p>
              <p className="font-playfair font-bold text-lg sm:text-xl text-slate-800">காலை 10:00 மணி</p>
              <p className="text-xs text-rose-600 font-medium">சுபவேளை</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={handleDirectionsClick}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
          >
            <Navigation className="w-4 h-4 text-pink-400" />
            <span>வழிகாட்டலைப் பெறுக (Get Directions)</span>
          </button>
          <a
            href="#venue"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium border border-pink-200 hover:bg-pink-50/80 transition shadow-xs text-sm"
          >
            <MapPin className="w-4 h-4 text-rose-500" />
            <span>நிகழ்விட வரைபடம் (Venue Map)</span>
          </a>
        </motion.div>
      </section>

      {/* Event Schedule Timeline */}
      <section className="py-16 px-4 max-w-4xl mx-auto z-10 relative">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-2">நிகழ்ச்சி நிரல் (Program Schedule)</h2>
          <p className="text-slate-500 text-sm">பாரம்பரிய முறைப்படி நடைபெறும் வளைகாப்பு வைபவ விவரங்கள்.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { time: 'காலை 10:00 மணி', title: 'வருகையும் வரவேற்பும்', desc: 'உறவினர்கள் மற்றும் நண்பர்களின் வருகை, பெற்றோரை வரவேற்கும் நிகழ்வு.', icon: Users },
            { time: 'காலை 10:45 மணி', title: 'சீமந்தம் & ஆசீர்வாதம்', desc: 'வளைகாப்பு சடங்குகள், பூச்சூட்டுதல் மற்றும் பெரியோர்களின் ஆசீர்வாதங்கள்.', icon: Sparkles },
            { time: 'மதியம் 12:00 மணி', title: 'சுவையான மதிய விருந்து', desc: 'அனைவருக்கும் அன்போடு பரிமாறப்படும் பாரம்பரிய சைவ உணவு விருந்து.', icon: Gift },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-xs border border-pink-100/80 relative overflow-hidden group hover:shadow-md transition"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50 rounded-bl-full -z-0 transition group-hover:bg-pink-100" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-pink-50 text-pink-700 text-xs font-semibold mb-2">
                  {item.time}
                </span>
                <h3 className="font-playfair font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Venue Map & Location Section */}
      <section id="venue" className="py-16 px-4 max-w-5xl mx-auto z-10 relative">
        <div className="bg-white rounded-3xl shadow-md border border-pink-100 p-6 sm:p-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>நிகழ்விடம் (Venue Location)</span>
              </div>
              
              <h2 className="font-playfair text-3xl font-bold text-slate-900">
                சமுதாயக்கூடம், சமத்துவபுரம்
              </h2>

              <div className="space-y-3 text-slate-600 text-sm">
                <p className="font-medium text-slate-800 text-base">முகவரி விவரங்கள்:</p>
                <p className="flex items-start gap-2">
                  <span className="text-pink-600 font-semibold shrink-0">இடம்:</span>
                  <span>samuthayakoodam, samathuvapuram</span>
                </p>
                <p className="text-xs text-slate-500 italic">
                  வாகனம் நிறுத்த வசதிகள் செய்யப்பட்டுள்ளன. எளிதில் வந்து செல்லக்கூடிய வழித்தடம்.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleDirectionsClick}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-medium text-sm transition shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps-ல் வழிகாட்டலைக் காண்க</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative bg-slate-100 h-[380px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.8962713656846!2d78.19142609517782!3d9.892360759927998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c4a63853f337%3A0x8b24454a348e6cc9!2sV5VR%2B997%2C%20Sakkimangalam%2C%20Tamil%20Nadu%20625201!5e0!3m2!1sen!2sin!4v1788146940812!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Baby Shower Venue Map in Sakkimangalam"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Ads Banner Section */}
      <section className="py-10 px-4 max-w-4xl mx-auto z-10 relative">
        <div className="bg-gradient-to-r from-amber-50 via-pink-50/40 to-rose-50 border border-amber-200/70 rounded-2xl p-6 shadow-xs relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <AdBanner dataAdSlot="top" />            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-pink-100 bg-white/60 backdrop-blur-sm z-10 relative">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-pink-600">
            <Heart className="w-5 h-5 fill-pink-500" />
            <span className="font-playfair font-bold text-base sm:text-lg text-slate-800">தாங்கள் வருகை தந்து சிறப்பிக்க அன்புடன் அழைக்கிறோம்</span>
            <Heart className="w-5 h-5 fill-pink-500" />
          </div>
          <p className="text-xs text-slate-500">
            வளைகாப்பு விழா • செப்டம்பர் 07, 2024 காலை 10:00 மணி • சமத்துவபுரம், சக்கிமங்கலம்
          </p>
          <p className="text-[11px] text-slate-400 pt-2 font-medium">
            அன்புடன், <strong className="text-pink-700">தினேஷ் & நாகவள்ளி</strong> மற்றும் குடும்பத்தினர்.
          </p>
        </div>
      </footer>

      {/* Music notifier popup */}
      {isMusicPlaying && (
        <div className="fixed bottom-4 right-4 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-50 text-xs animate-bounce">
          <Music className="w-4 h-4 text-pink-400 animate-spin" />
          <span>மங்களகரமான இசை ஒலிக்கிறது...</span>
          <button onClick={() => setIsMusicPlaying(false)} className="text-slate-400 hover:text-white ml-2">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}
