export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Alex Chen. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm hover:text-primary-foreground/80 transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm hover:text-primary-foreground/80 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}