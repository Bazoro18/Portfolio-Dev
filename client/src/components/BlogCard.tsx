import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readMoreUrl?: string;
}

const BlogCard = ({ title, date, excerpt, tags, readMoreUrl }: BlogCardProps) => {
  return (
    <article className="bg-portfolio-card border border-portfolio-border rounded-lg p-8 hover:border-portfolio-accent transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold text-portfolio-highlight hover:text-portfolio-accent transition-colors cursor-pointer">
          {title}
        </h2>
        <span className="text-portfolio-text text-sm whitespace-nowrap ml-4">{date}</span>
      </div>
      <p className="text-portfolio-text mb-4 leading-relaxed">
        {excerpt}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-portfolio-accent/10 text-portfolio-accent px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        {readMoreUrl && (
          <a
            href={readMoreUrl}
            className="text-portfolio-accent hover:text-portfolio-highlight transition-colors flex items-center space-x-1"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
