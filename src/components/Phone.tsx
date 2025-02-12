import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export default function Phone({
  className,
  imgSrc,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div
      className={
        (cn("relative pointer-events-none z-50 overflow-hidden"), className)
      }
      {...props}
    >
      <div className=" pointer-events-none z-50 select-none relative">
        <img
          src={
            dark
              ? "/phone-template-dark-edges.png"
              : "/phone-template-white-edges.png"
          }
          alt={imgSrc}
        />
        <div className=" absolute -z-10 inset-0">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={imgSrc}
            alt="overlaying phone image"
          />
        </div>
      </div>
    </div>
  );
}
