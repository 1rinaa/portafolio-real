"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "../lib/utils";

export interface BackgroundBeamsProps {
  className?: string;
}

const pathData = [
  "M-336 -237C-336 -237 -268 168 196 295C660 422 728 827 728 827",
  "M-325 -249C-325 -249 -257 156 207 283C671 410 739 815 739 815",
  "M-314 -261C-314 -261 -246 144 218 271C682 398 750 803 750 803",
  "M-303 -273C-303 -273 -235 132 229 259C693 386 761 791 761 791",
  "M-292 -285C-292 -285 -224 120 240 247C704 374 772 779 772 779",
  "M-281 -297C-281 -297 -213 108 251 235C715 362 783 767 783 767",
  "M-270 -309C-270 -309 -202 96 262 223C726 350 794 755 794 755",
  "M-259 -321C-259 -321 -191 84 273 211C737 338 805 743 805 743",
  "M-248 -333C-248 -333 -180 72 284 199C748 326 816 731 816 731",
  "M-237 -345C-237 -345 -169 60 295 187C759 314 827 719 827 719",
  "M-226 -357C-226 -357 -158 48 306 175C770 302 838 707 838 707",
  "M-215 -369C-215 -369 -147 36 317 163C781 290 849 695 849 695",
  "M-204 -381C-204 -381 -136 24 328 151C792 278 860 683 860 683",
  "M-193 -393C-193 -393 -125 12 339 139C803 266 871 671 871 671",
  "M-182 -405C-182 -405 -114 0 350 127C814 254 882 659 882 659",
  "M-171 -417C-171 -417 -103 -12 361 115C825 242 893 647 893 647",
  "M-160 -429C-160 -429 -92 -24 372 103C836 230 904 635 904 635",
  "M-149 -441C-149 -441 -81 -36 383 91C847 218 915 623 915 623",
  "M-138 -453C-138 -453 -70 -48 394 79C858 206 926 611 926 611",
  "M-127 -465C-127 -465 -59 -60 405 67C869 194 937 599 937 599",
  "M-116 -477C-116 -477 -48 -72 416 55C880 182 948 587 948 587",
  "M-105 -489C-105 -489 -37 -84 427 43C891 170 959 575 959 575",
  "M-94 -501C-94 -501 -26 -96 438 31C902 158 970 563 970 563",
  "M-83 -513C-83 -513 -15 -108 449 19C913 146 981 551 981 551",
  "M-72 -525C-72 -525 -4 -120 460 7C924 134 992 539 992 539",
  "M-61 -537C-61 -537 7 -132 471 -5C935 122 1003 527 1003 527",
  "M-50 -549C-50 -549 18 -144 482 -17C946 110 1014 515 1014 515",
  "M-39 -561C-39 -561 29 -156 493 -29C957 98 1025 503 1025 503",
];

// Pre-calculated animation values for each path
const animations = pathData.map((_, i) => ({
  duration: 3 + (i % 5) * 0.5,
  delay: i * 0.05,
  initialProgress: (i * 5) % 100,
}));

export const BackgroundBeams = React.memo(
  ({ className }: BackgroundBeamsProps) => {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full overflow-hidden",
          className,
        )}
      >
        <svg
          className="absolute h-full w-full"
          fill="none"
          viewBox="0 0 696 316"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Static faint paths for depth */}
          <g opacity="0.03">
            {pathData.map((d, i) => (
              <path
                key={`static-${i}`}
                d={d}
                stroke="white"
                strokeWidth="0.5"
              />
            ))}
          </g>

          {/* Animated gradient beams */}
          {pathData.map((d, i) => (
            <motion.path
              key={`beam-${i}`}
              d={d}
              stroke={`url(#gradient-${i})`}
              strokeWidth="1"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration: animations[i].duration,
                delay: animations[i].delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

          <defs>
            {pathData.map((_, i) => {
              // 6 combinaciones diferentes de colores para que haya variedad
              const scheme = i % 6;
              
              let colors: string[];
              let opacities: number[];
              
              switch (scheme) {
                case 0: // Blanco a rojo vino
                  colors = ["#FFFFFF", "#D1D5DB", "#7B1026", "#4F0A1C", "#212529"];
                  opacities = [0, 0.8, 1, 0.9, 0];
                  break;
                case 1: // Grises a rojo burdeos
                  colors = ["#9CA3AF", "#212529", "#7B1026", "#96332d", "#D1D5DB"];
                  opacities = [0, 0.7, 1, 0.8, 0];
                  break;
                case 2: // Rojo intenso a gris
                  colors = ["#4F0A1C", "#8B1A2B", "#9e322d", "#9CA3AF", "#212529"];
                  opacities = [0, 0.9, 1, 0.7, 0];
                  break;
                case 3: // Vino a blanco
                  colors = ["#7B1026", "#91322d", "#a53723", "#D1D5DB", "#FFFFFF"];
                  opacities = [0, 0.9, 0.9, 0.6, 0];
                  break;
                case 4: // Burdeos y grises
                  colors = ["#212529", "#4F0A1C", "#7B1026", "#9CA3AF", "#D1D5DB"];
                  opacities = [0, 0.8, 1, 0.6, 0];
                  break;
                default: // Rojo medio a gris oscuro
                  colors = ["#992c26", "#802a1b", "#8B1A2B", "#212529", "#4F0A1C"];
                  opacities = [0, 0.9, 0.9, 0.5, 0];
                  break;
              }
              
              return (
                <linearGradient
                  key={`gradient-${i}`}
                  id={`gradient-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={colors[0]} stopOpacity={opacities[0]} />
                  <stop offset="25%" stopColor={colors[1]} stopOpacity={opacities[1]} />
                  <stop offset="50%" stopColor={colors[2]} stopOpacity={opacities[2]} />
                  <stop offset="75%" stopColor={colors[3]} stopOpacity={opacities[3]} />
                  <stop offset="100%" stopColor={colors[4]} stopOpacity={opacities[4]} />
                </linearGradient>
              );
            })}
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";
