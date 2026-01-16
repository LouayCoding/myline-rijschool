import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPrice, cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export function PricingCard({ name, price, features, popular, badge }: PricingCardProps) {
  return (
    <Card className={cn(
      "flex flex-col",
      popular ? "bg-gradient-to-br from-primary/15 to-primary/10 relative" : "bg-card"
    )}>
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-primary to-primary/80">{badge}</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-center">{name}</CardTitle>
        <div className="text-center mt-4">
          <span className="text-4xl font-bold">{formatPrice(price)}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button className="w-full" variant={popular ? "default" : "outline"} asChild>
          <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">{popular ? "Meest Gekozen" : "Selecteer"}</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
