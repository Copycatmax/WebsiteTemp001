import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, ExternalLink, Calendar } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Campus Navigation System",
      description: "An IoT-based indoor navigation system that uses computer vision and sensor fusion to provide real-time navigation assistance for visually impaired students. The system combines LIDAR, cameras, and BLE beacons to create accurate indoor maps and provide voice-guided navigation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      technologies: ["Python", "OpenCV", "ROS", "Raspberry Pi", "TensorFlow", "Firebase"],
      github: "https://github.com/alexchen/smart-navigation",
      demo: "https://smart-navigation-demo.com",
      date: "2023",
      category: "Senior Project"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "A web-based collaborative workspace that enables teams to work together in real-time. Features include live document editing, video conferencing, screen sharing, and project management tools. Built with modern web technologies and optimized for performance.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "WebRTC"],
      github: "https://github.com/alexchen/collab-platform",
      demo: "https://collab-platform-demo.com",
      date: "2023",
      category: "Full-Stack Development"
    },
    {
      title: "Autonomous Drone Swarm",
      description: "Developed a coordinated swarm of autonomous drones for search and rescue operations. The system uses distributed algorithms for path planning, obstacle avoidance, and communication between drones. Each drone can operate independently while contributing to the collective mission.",
      image: "https://images.unsplash.com/photo-1508614999368-9260051292e5?w=500&h=300&fit=crop",
      technologies: ["C++", "ROS", "OpenCV", "ArduPilot", "MATLAB", "Gazebo"],
      github: "https://github.com/alexchen/drone-swarm",
      demo: null,
      date: "2022",
      category: "Robotics"
    },
    {
      title: "Machine Learning Trading Bot",
      description: "An algorithmic trading system that uses machine learning to predict stock price movements and execute trades automatically. The system processes real-time market data, news sentiment, and technical indicators to make informed trading decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "Pandas", "Alpha Vantage API", "Docker", "AWS"],
      github: "https://github.com/alexchen/trading-bot",
      demo: null,
      date: "2022",
      category: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my engineering projects and technical achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-2 text-sm text-white bg-black/50 px-2 py-1 rounded">
                    <Calendar className="h-3 w-3" />
                    <span>{project.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}