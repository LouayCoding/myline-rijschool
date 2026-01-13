"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

interface AccordionProps {
  type?: "single" | "multiple";
  children: React.ReactNode;
  className?: string;
}

const Accordion = ({ type = "single", children, className }: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  return (
    <div className={cn("bg-card rounded-md overflow-hidden mb-3", className)}>
      {children}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const AccordionTrigger = ({ children, className, value }: AccordionTriggerProps) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used within Accordion");

  const isOpen = context.openItems.includes(value);

  return (
    <button
      className={cn(
        "flex w-full items-center justify-between p-4 text-left font-semibold hover:bg-muted/50 transition-colors",
        className
      )}
      onClick={() => context.toggleItem(value)}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

const AccordionContent = ({ children, className, value }: AccordionContentProps) => {
  const context = React.useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used within Accordion");

  const isOpen = context.openItems.includes(value);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96" : "max-h-0"
      )}
    >
      <div className={cn("p-4 pt-0 text-muted-foreground", className)}>
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
