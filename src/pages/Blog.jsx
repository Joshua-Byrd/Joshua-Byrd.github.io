import ReactMarkdown from 'react-markdown';
// Import the markdown file as a raw string
import firstPost from '../content/first-post.md?raw';

export default function Blog() {
  // As you write more posts, you will add them to this array
  const posts = [
    {
      id: 1,
      title: "Building Reliable Data Pipelines",
      date: "October 10, 2026",
      content: firstPost
    }
  ];

  return (
    <section className="blog-page" style={{ marginTop: '2rem', animation: 'fadeIn 0.5s ease' }}>
      <h2 className="section-title">Technical Blog</h2>
      
      <div className="posts-container" style={{ maxWidth: '800px' }}>
        {posts.map(post => (
          <article key={post.id} style={{ marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.75rem', marginBottom: '0.25rem' }}>
              {post.title}
            </h3>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>
              {post.date}
            </span>
            
            <div className="markdown-content" style={{ marginTop: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              {/* ReactMarkdown converts the raw string into HTML elements */}
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}