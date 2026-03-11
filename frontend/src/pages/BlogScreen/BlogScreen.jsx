import React from "react";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ChevronRight,
  User,
} from "lucide-react";
import "./BlogScreen.css";

const BLOGS = [
  {
    id: 1,
    title: "The Shift to Electric: What You Need to Know in 2025",
    excerpt:
      "With infrastructure growing rapidly, is now the right time to trade your gas-guzzler?",
    author: "James Wilson",
    date: "May 12, 2025",
    readTime: "8 min read",
    category: "Market Trends",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800",
  },
  {
    id: 2,
    title: "Maintenance Secrets to Keep Your Car Value High",
    excerpt:
      "Professional tips on how simple habits can save you thousands when it comes time to sell.",
    author: "Sarah Chen",
    date: "May 10, 2025",
    readTime: "5 min read",
    category: "Maintenance",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800",
  },
  {
    id: 3,
    title: "Classic Porsche 911: A Timeless Investment",
    excerpt:
      "Exploring why the 911 remains the gold standard for automotive collectors worldwide.",
    author: "Mark Evans",
    date: "May 08, 2025",
    readTime: "12 min read",
    category: "Car Reviews",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800",
  },
];

function BlogScreen() {
  return (
    <div className="blog-page">
      {/* Header Section */}
      <div className="blog-header-section">
        <div className="inner-container">
          <div className="breadcrumb">
            Home <ChevronRight size={14} /> <span>Journal</span>
          </div>
          <div className="header-flex">
            <div className="header-left">
              <h1>
                Carauras <span>Journal</span>
              </h1>
              <p>
                Expert insights, market analysis, and the soul of automotive
                culture.
              </p>
            </div>
            <div className="header-right">
              <div className="search-input-wrapper">
                <Search size={18} />
                <input type="text" placeholder="Search articles..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-container">
        {/* Featured Post */}
        <div className="featured-article">
          <div className="f-image">
            <img
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200"
              alt="Supercar"
            />
          </div>
          <div className="f-info">
            <span className="f-badge">Trending Now</span>
            <h2>2025 Supercar Comparison: The Battle for Aerodynamics</h2>
            <p>
              We take the year's most anticipated releases to the track to see
              which engineering marvel truly defies the wind.
            </p>
            <div className="f-meta">
              <div className="f-author">
                <User size={16} /> By Alex Thompson
              </div>
              <button className="f-btn">
                Read Article <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="blog-filters">
          {[
            "All",
            "Car Reviews",
            "Buying Guides",
            "Market Trends",
            "Maintenance",
          ].map((cat) => (
            <button key={cat} className={cat === "All" ? "active" : ""}>
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="article-grid">
          {BLOGS.map((blog) => (
            <div key={blog.id} className="article-card">
              <div className="a-img">
                <img src={blog.image} alt="" />
                <span className="a-cat">{blog.category}</span>
              </div>
              <div className="a-body">
                <div className="a-meta">
                  <span>
                    <Calendar size={14} /> {blog.date}
                  </span>
                  <span>
                    <Clock size={14} /> {blog.readTime}
                  </span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className="a-footer">
                  <span className="a-author">By {blog.author}</span>
                  <button className="a-link">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more-section">
          <button className="load-more-btn">Explore More Articles</button>
        </div>
      </div>
    </div>
  );
}

export default BlogScreen;
