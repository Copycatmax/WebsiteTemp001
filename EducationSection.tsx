import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements in engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle>University of California, Berkeley</CardTitle>
                  <p className="text-sm text-muted-foreground">2020 - 2024</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Bachelor of Science in Computer Engineering</h3>
                <p className="text-sm text-muted-foreground">GPA: 3.8/4.0</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Data Structures</Badge>
                  <Badge variant="outline" className="text-xs">Algorithms</Badge>
                  <Badge variant="outline" className="text-xs">Computer Architecture</Badge>
                  <Badge variant="outline" className="text-xs">Operating Systems</Badge>
                  <Badge variant="outline" className="text-xs">Database Systems</Badge>
                  <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Senior Project</h4>
                <p className="text-sm text-muted-foreground">
                  "Smart Campus Navigation System" - Developed an IoT-based indoor navigation 
                  system using computer vision and sensor fusion.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-primary" />
                  <CardTitle>Honors & Awards</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Dean's List</h4>
                    <p className="text-sm text-muted-foreground">Fall 2022, Spring 2023</p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">IEEE Outstanding Student Award</h4>
                    <p className="text-sm text-muted-foreground">2023</p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Engineering Scholarship</h4>
                    <p className="text-sm text-muted-foreground">2021-2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <CardTitle>Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium">AWS Cloud Practitioner</h4>
                  <p className="text-sm text-muted-foreground">Amazon Web Services • 2023</p>
                </div>
                <div>
                  <h4 className="font-medium">Google Cloud Associate</h4>
                  <p className="text-sm text-muted-foreground">Google Cloud • 2023</p>
                </div>
                <div>
                  <h4 className="font-medium">Python for Data Science</h4>
                  <p className="text-sm text-muted-foreground">Coursera • 2022</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}