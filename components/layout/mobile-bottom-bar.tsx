"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" asChild>
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-4 w-4" />
              Bellen
            </a>
          </Button>
          <Button className="flex-1" asChild>
            <Link href="/proefles">Proefles</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
