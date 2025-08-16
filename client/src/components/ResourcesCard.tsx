import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  category: string;
  description: string;
  link?: string;
}

const ResourcesCard = ({ title, category, description, link }: ResourceCardProps) => {
  return (
    <article className="bg-portfolio-card border border-portfolio-border rounded-lg p-8 hover:border-portfolio-accent transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold text-portfolio-highlight hover:text-portfolio-accent transition-colors cursor-pointer">
          {title}
        </h2>
        <span className="text-portfolio-text text-sm whitespace-nowrap ml-4">{category}</span>
      </div>
      <p className="text-portfolio-text mb-4 leading-relaxed">
        {description}
      </p>
      {link && (
        <div className="flex justify-end">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-accent hover:text-portfolio-highlight transition-colors flex items-center space-x-1"
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </article>
  );
};

export default ResourcesCard;
