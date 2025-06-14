import React from "react";
import Layout from "../components/Layout";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Design Systems",
      excerpt:
        "Exploring how design systems are evolving and what it means for designers and developers.",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Minimalism in Web Design",
      excerpt:
        "Why less is more when it comes to creating effective user interfaces.",
      date: "March 8, 2024",
      readTime: "3 min read",
    },
    {
      title: "Building Better User Experiences",
      excerpt:
        "Key principles and practices for creating user-centered design solutions.",
      date: "February 28, 2024",
      readTime: "7 min read",
    },
  ];

  return (
    <Layout>
      <div className="py-16 animate-fade-in">
        {/* <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-16 text-center animate-scale-in">
            Blog
          </h1>
          
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article 
                key={post.title}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-medium text-gray-900 mb-4 hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div> */}
        <div className="text-center text-4xl">
          <h1>Coming Soon...</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
