import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { getPostBySlug, formatDate } from '../data/blogs';

export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) return <Navigate to="/blogs" replace />;

    return (
        <main className="main-content">
            <article className="blog-detail container">
                <div className="blog-detail-header animate-reveal stagger-1">
                    <Link to="/blogs" className="blogs-back">
                        <ArrowLeft size={16} />
                        All posts
                    </Link>
                    <div className="blog-detail-tags">
                        {post.tags.map((tag) => (
                            <span className="blog-card-tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <h1 className="blog-detail-title">{post.title}</h1>
                    <div className="blog-detail-meta">
                        <span className="blog-card-date">
                            <Calendar size={13} />
                            {formatDate(post.date)}
                        </span>
                        <span className="blog-card-read">
                            <Clock size={13} />
                            {post.readTime}
                        </span>
                    </div>
                </div>

                <div className="blog-detail-cover animate-reveal stagger-2">
                    <img src={post.cover} alt={post.title} className="blog-detail-cover-img" />
                </div>

                <div className="blog-detail-body animate-reveal stagger-3">
                    {post.body.split('\n\n').map((block, i) => {
                        if (block.startsWith('## ')) {
                            return <h2 className="blog-body-h2" key={i}>{block.replace('## ', '')}</h2>;
                        }
                        if (block.startsWith('```')) {
                            const lines = block.split('\n');
                            const code = lines.slice(1, -1).join('\n');
                            return (
                                <pre className="blog-body-code" key={i}>
                                    <code>{code}</code>
                                </pre>
                            );
                        }
                        if (block.startsWith('- ')) {
                            const items = block.split('\n').filter(l => l.startsWith('- '));
                            return (
                                <ul className="blog-body-list" key={i}>
                                    {items.map((item, j) => {
                                        const text = item.replace(/^- \*\*(.*?)\*\*/, '<strong>$1</strong>');
                                        return <li key={j} dangerouslySetInnerHTML={{ __html: text.slice(2) }} />;
                                    })}
                                </ul>
                            );
                        }
                        // Handle inline bold **text**
                        const html = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`(.*?)`/g, '<code>$1</code>');
                        return <p className="blog-body-p" key={i} dangerouslySetInnerHTML={{ __html: html }} />;
                    })}
                </div>

                <div className="blog-detail-footer animate-reveal stagger-4">
                    <Link to="/blogs" className="blogs-back">
                        <ArrowLeft size={16} />
                        Back to all posts
                    </Link>
                </div>
            </article>
        </main>
    );
}
