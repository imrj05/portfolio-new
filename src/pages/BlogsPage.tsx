import { ArrowLeft, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts, formatDate } from '../data/blogs';

export default function BlogsPage() {
    return (
        <main className="main-content">
            <section className="blogs-page container">
                <div className="blogs-header animate-reveal stagger-1">
                    <Link to="/" className="blogs-back">
                        <ArrowLeft size={16} />
                        Back
                    </Link>
                    <h1 className="blogs-title">Blog</h1>
                    <p className="blogs-subtitle">Thoughts on building software, lessons from production, and things I've learned along the way.</p>
                </div>

                <div className="blogs-grid animate-reveal stagger-2">
                    {posts.map((post) => (
                        <Link to={`/blogs/${post.slug}`} className="blog-card" key={post.slug}>
                            <img src={post.cover} alt={post.title} className="blog-card-cover" />
                            <div className="blog-card-content">
                                <div className="blog-card-meta">
                                    <span className="blog-card-date">
                                        <Calendar size={13} />
                                        {formatDate(post.date)}
                                    </span>
                                    <span className="blog-card-read">
                                        <Clock size={13} />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h2 className="blog-card-title">{post.title}</h2>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                <div className="blog-card-footer">
                                    <div className="blog-card-tags">
                                        {post.tags.map((tag) => (
                                            <span className="blog-card-tag" key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <span className="blog-card-link">
                                        Read more <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
