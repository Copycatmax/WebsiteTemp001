import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, MapPin, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Available for Full-Time Positions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Alex Chen
              </h1>
              <p className="text-xl text-muted-foreground">
                Computer Engineering Student
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about developing innovative solutions and building scalable systems. 
                Seeking full-time opportunities in software engineering and embedded systems.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-fit">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="w-fit">
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>alex.chen@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Alex Chen - Profile"
                  className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}