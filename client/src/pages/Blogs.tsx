import BlogCard from '@/components/BlogCard';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Optimizing Spark Structured Streaming for Low-Latency Processing',
      date: 'Dec 15, 2024',
      excerpt: 'Deep dive into optimization techniques for Apache Spark Structured Streaming, covering checkpoint tuning, trigger optimization, and memory management strategies that reduced our processing latency by 40%.',
      tags: ['Spark', 'Streaming', 'Performance'],
      readMoreUrl: '#'
    },
    {
      title: 'Building Real-Time Compliance Engines with Kafka and gRPC',
      date: 'Nov 28, 2024',
      excerpt: 'Architectural patterns and implementation strategies for building real-time policy compliance systems. Covers event-driven architecture, field-level encryption, and role-based access control in streaming environments.',
      tags: ['Kafka', 'gRPC', 'Security'],
      readMoreUrl: '#'
    },
    {
      title: 'Migrating from Batch to Streaming: Lessons Learned',
      date: 'Oct 12, 2024',
      excerpt: 'Practical insights from leading a large-scale migration from batch processing to real-time streaming. Challenges faced, solutions implemented, and best practices for similar transformation projects.',
      tags: ['Migration', 'Architecture', 'Best Practices'],
      readMoreUrl: '#'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-portfolio-highlight mb-6">Blog & Learnings</h1>
          <p className="text-xl text-portfolio-text">
            Insights and experiences from building scalable data systems
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        {/* Blog Source Note */}
        <div className="mt-12 p-6 bg-portfolio-card/50 border border-portfolio-border rounded-lg text-center">
          <p className="text-portfolio-text">
            Blog posts source: [BLOG_URL] - Should dynamically display articles
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
