import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated engineering student with a passion for innovation and problem-solving
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a senior Computer Engineering student at UC Berkeley with a strong foundation in 
                both hardware and software development. My academic journey has been complemented by 
                hands-on experience through internships and personal projects, where I've developed 
                skills in full-stack development, embedded systems, and machine learning.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Career Objectives</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm seeking full-time opportunities where I can contribute to innovative projects, 
                collaborate with talented teams, and continue growing as an engineer. I'm particularly 
                interested in roles that combine my technical skills with real-world impact.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Graduation</span>
                    <span>May 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GPA</span>
                    <span>3.8/4.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="secondary">Seeking Full-Time</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">IoT Systems</Badge>
                  <Badge variant="outline">Robotics</Badge>
                  <Badge variant="outline">Open Source</Badge>
                  <Badge variant="outline">Photography</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}