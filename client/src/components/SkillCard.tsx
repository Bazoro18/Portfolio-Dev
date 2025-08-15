interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-portfolio-card border border-portfolio-border rounded-lg p-6 hover:border-portfolio-accent transition-colors duration-200 h-full flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-semibold text-portfolio-highlight mb-4">{title}</h4>
        <div className="flex flex-wrap">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-block bg-portfolio-accent/10 text-portfolio-accent px-3 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;