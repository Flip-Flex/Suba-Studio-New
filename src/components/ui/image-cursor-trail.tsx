import React, { createRef, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils"; // using project's cn

export interface ImageMouseTrailProps {
  items: string[];
  children?: ReactNode;
  className?: string;
  imgClass?: string;
  distance?: number;
  maxNumberOfImages?: number;
  fadeAnimation?: boolean;
}

export function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()));
  const currentZIndexRef = useRef(1);

  let globalIndex = 0;
  let last = { x: 0, y: 0 };

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;
    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1;
    }
    image.style.zIndex = String(currentZIndexRef.current);
    currentZIndexRef.current++;

    image.style.opacity = "1";
    image.style.transform = "translate(-50%, -50%) scale(1)";
    if (fadeAnimation) {
      setTimeout(() => {
        deactivate(image);
      }, 1500);
    }
    last = { x, y };
  };

  const distanceFromLast = (x: number, y: number) =>
    Math.hypot(x - last.x, y - last.y);

  const deactivate = (image: HTMLImageElement) => {
    image.style.opacity = "0";
    image.style.transform = "translate(-50%, -50%) scale(0)";
  };

  const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    if (distanceFromLast(clientX, clientY) > window.innerWidth / distance) {
      const lead = refs.current[globalIndex % refs.current.length]?.current;
      
      if (lead) activate(lead, clientX, clientY);
      
      if (!fadeAnimation) {
        const tailIndex = (globalIndex - maxNumberOfImages + refs.current.length) % refs.current.length;
        const tail = refs.current[tailIndex]?.current;
        if (tail && tail !== lead) {
          deactivate(tail);
        }
      }
      
      globalIndex++;
    }
  };

  return (
    <div
      onMouseMove={handleOnMove}
      onTouchMove={handleOnMove}
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden",
        className
      )}
    >
      {items.map((item, index) => (
        <img
          key={index}
          className={cn(
            "absolute left-0 top-0 rounded-3xl object-cover transition-all duration-500 ease-out pointer-events-none shadow-2xl",
            imgClass
          )}
          style={{ opacity: 0, transform: "translate(-50%, -50%) scale(0)" }}
          data-index={index}
          src={item}
          alt={`trail-image-${index}`}
          ref={refs.current[index]}
        />
      ))}
      {children}
    </div>
  );
}
