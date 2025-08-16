import ResourcesCard from "@/components/ResourcesCard";

const resources = [
  {
    title: "System Design Primer",
    category: "System Design",
    description: "A comprehensive open-source guide covering scalable architecture concepts and real-world system design interview preparation.",
    link: "https://github.com/donnemartin/system-design-primer",
  },
  {
    title: "Kafka Documentation",
    category: "Streaming",
    description: "Official Apache Kafka docs to help understand core concepts, producer-consumer patterns, and stream processing fundamentals.",
    link: "https://kafka.apache.org/documentation/",
  },
  {
    title: "Grokking the Coding Interview",
    category: "DSA",
    description: "Popular problem-solving patterns and practice questions for coding interviews, focusing on arrays, strings, and dynamic programming.",
    link: "https://www.educative.io/courses/grokking-the-coding-interview",
  },
  {
    title: "Data Engineering Zoomcamp",
    category: "Data Engineering",
    description: "Free end-to-end course covering data pipelines, batch/stream processing, orchestration, and cloud deployment.",
    link: "https://github.com/DataTalksClub/data-engineering-zoomcamp",
  },
];

const Resources = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-portfolio-highlight mb-6">Resources</h1>
      <p className="text-portfolio-text mb-12">
        Curated technical resources and learning materials that have been most helpful in my journey as a Data Engineer.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {resources.map((res) => (
          <ResourcesCard
            key={res.title}
            title={res.title}
            category={res.category}
            description={res.description}
            link={res.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Resources;
