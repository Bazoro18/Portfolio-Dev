import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'SparkNerve',
      description: 'Metadata-driven, Spark-native big data platform',
      stack: ['Spark Structured Streaming', 'Kafka', 'Hive', 'Airflow', 'HDFS'],
      impact: 'Enabled automated ingestion, CDC handling, schema evolution, and comprehensive observability',
      githubUrl: '#',
      demoUrl: '#',
      blogUrl: '#'
    },
    {
      title: 'PolyLens',
      description: 'Real-time policy compliance engine',
      stack: ['Java', 'Kafka', 'gRPC'],
      impact: 'Field-level encryption with RBAC, dynamic rule engine, and streaming replay capabilities',
      githubUrl: '#',
      demoUrl: '#',
      blogUrl: '#'
    },
    {
      title: 'StreamIQ',
      description: 'Real-time enrichment engine with broadcast joins',
      stack: ['Spark Structured Streaming', 'Delta Lake'],
      impact: 'Optimized enrichment latency by 40% and significantly reduced join computational costs',
      githubUrl: '#',
      demoUrl: '#',
      blogUrl: '#'
    },
    {
      title: 'Safe Halo',
      description: 'IoT intrusion detection & deterrent system',
      stack: ['Raspberry Pi', 'Camera Module', 'Buzzer Systems'],
      impact: 'Real-time intrusion detection alerts with automated deterrent activation system',
      githubUrl: '#',
      demoUrl: '#',
      blogUrl: '#'
    }
  ];

  const arctosProject = {
    title: 'Arctos',
    description: 'Personal safety technology project focused on helmet-based safety solutions',
    stack: [],
    impact: '',
    githubUrl: '#',
    demoUrl: '#',
    blogUrl: '#'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-6">Projects</h1>
          <p className="text-xl text-portfolio-text max-w-3xl mx-auto">
            A showcase of innovative data engineering solutions and real-time distributed systems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Arctos - Full width */}
        <div className="mt-8">
          <ProjectCard {...arctosProject} fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Projects;
