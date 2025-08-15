import SkillCard from '@/components/SkillCard';
import { useState, useEffect } from 'react';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Big Data Engineer | Real-Time Distributed Systems | System Design Specialist";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const skills = [
    { title: 'Programming & Scripting', skills: ['Java', 'Python', 'PySpark', 'SQL'] },
    { title: 'Data Modeling & Warehousing', skills: ['Dimensional Modeling', 'Data Vault', 'OLAP / OLTP Systems'] },
    { title: 'Databases & Storage', skills: ['MySQL', 'MongoDB', 'HDFS', 'Delta Lake'] },
    { title: 'Data Processing Frameworks', skills: ['Apache Spark', 'Apache Kafka', 'Azure Databricks'] },
    { title: 'Data Orchestration & Workflow Automation', skills: ['Apache Airflow', 'Azure Data Factory'] },
    { title: 'Version Control & CI/CD', skills: ['Git / GitHub', 'Jenkins'] }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-highlight mb-6">
            Mitesh Shah
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-portfolio-accent mb-8 font-medium">
            {displayedText}
          </h2>
          <p className="text-lg sm:text-xl text-portfolio-text max-w-3xl mx-auto leading-relaxed">
            "Architecting Scalable Data Solutions, Enabling Smarter Decisions."
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-portfolio-highlight mb-12 text-center">Technical Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <SkillCard {...skillGroup} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
