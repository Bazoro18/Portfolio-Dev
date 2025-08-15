interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
}

const TimelineCard = ({ year, title, description }: TimelineCardProps) => {
  return (
    <div className="flex-shrink-0 w-64">
      <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-6 h-full">
        <div className="text-portfolio-accent font-semibold text-lg mb-3">{year}</div>
        <h4 className="text-portfolio-highlight font-medium mb-2">{title}</h4>
        <p className="text-portfolio-text text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
