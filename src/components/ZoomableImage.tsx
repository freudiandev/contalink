"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/cn";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ZoomableImage({ src, alt, className, priority }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={cn("group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/50 transition-all hover:border-gold/50", className)}
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-contain transition-transform duration-500 group-hover:scale-[1.02]" priority={priority} />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/90 text-black opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
          <Search size={20} strokeWidth={2.5} />
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-black"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Cerrar imagen"
          >
            <X size={24} />
          </button>
          <div className="relative h-full w-full max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
