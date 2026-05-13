import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
  className?: string;
};

export function Reveal({ children, delay = 0, as: Tag = "div", className }: Props) {
  const style = delay ? { animationDelay: `${delay}ms` } : undefined;
  return (
    <Tag className={`reveal ${className ?? ""}`} style={style}>
      {children}
    </Tag>
  );
}
