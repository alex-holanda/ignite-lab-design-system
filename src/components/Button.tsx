import { ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={clsx(
    'py-4 px-3 font-semibold text-black bg-cyan-500 text-sm w-full transition-colors hover:bg-cyan-300 rounded focus:ring-2 ring-white'
  )}>{children}</Comp>;
}
