import { Github, ExternalLink, FileText } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  impact: string;
  githubUrl?: string;
  demoUrl?: string;
  blogUrl?: string;
  fullWidth?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  stack, 
  impact, 
  githubUrl, 
  demoUrl, 
  blogUrl,
  fullWidth = false 
}: ProjectCardProps) => {
  return (
    <div className={`bg-portfolio-card border border-portfolio-border rounded-lg p-8 hover:border-portfolio-accent transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-accent/5 ${fullWidth ? 'col-span-full' : ''}`}>
      <h3 className="text-2xl font-semibold text-portfolio-highlight mb-4">{title}</h3>
      <p className="text-portfolio-text mb-4">{description}</p>
      
      {stack && stack.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-portfolio-accent mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="bg-portfolio-accent/10 text-portfolio-accent px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-portfolio-accent mb-2">Impact</h4>
        <p className="text-portfolio-text text-sm">{impact}</p>
      </div>
      
      <div className="flex space-x-4">
        {githubUrl && (
          <a
            href={githubUrl}
            className="flex items-center space-x-2 text-portfolio-accent hover:text-portfolio-highlight transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">GitHub</span>
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            className="flex items-center space-x-2 text-portfolio-accent hover:text-portfolio-highlight transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Demo</span>
          </a>
        )}
        {blogUrl && (
          <a
            href={blogUrl}
            className="flex items-center space-x-2 text-portfolio-accent hover:text-portfolio-highlight transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm">Blog Post</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
