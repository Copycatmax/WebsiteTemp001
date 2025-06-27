import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "TechCorp",
      period: "Jun 2023 - Aug 2023",
      location: "San Francisco, CA",
      description: [
        "Developed and maintained React-based web applications serving 10,000+ users",
        "Implemented RESTful APIs using Node.js and Express, improving response times by 25%",
        "Collaborated with cross-functional teams using Agile methodologies",
        "Contributed to code reviews and maintained high code quality standards"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      title: "Research Assistant",
      company: "UC Berkeley - EECS Department",
      period: "Sep 2022 - May 2023",
      location: "Berkeley, CA",
      description: [
        "Conducted research on machine learning algorithms for autonomous systems",
        "Implemented computer vision models using TensorFlow and OpenCV",
        "Published findings in IEEE conference proceedings",
        "Mentored junior students in research methodologies"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "MATLAB", "ROS"]
    },
    {
      title: "IT Support Specialist",
      company: "University Computing Services",
      period: "Jan 2022 - Aug 2022",
      location: "Berkeley, CA",
      description: [
        "Provided technical support to faculty and students across campus",
        "Troubleshot hardware and software issues for 500+ users",
        "Maintained and configured network equipment and servers",
        "Created technical documentation and training materials"
      ],
      technologies: ["Linux", "Windows", "Networking", "Help Desk", "Documentation"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and hands-on experience in engineering and technology
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <p className="text-lg text-muted-foreground">{experience.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{experience.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <h4 className="font-medium mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}