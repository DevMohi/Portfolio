"use client";
import React from "react";

const Blog = () => {
  const blogPost = {
    title: "My Journey in Web Development",
    date: "April 25, 2025",
    description:
      "From my first HTML encounter to building modern, scalable web applications, this post reflects on my growth through various roles including Data Analyst and Web Developer positions.",
    tags: ["Web Development", "Career Growth"],
  };

  return (
    <div className="c-space section-spacing" id="blog">
      <section className="section-spacing">
        <h2 className="text-heading text-center">Blog</h2>

        <div className="mt-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-xl text-neutral-100">
                {blogPost.title}
              </h3>
              <p className="text-sm text-neutral-400">{blogPost.date}</p>
            </div>

            <p className="mt-2 text-neutral-300">{blogPost.description}</p>

            <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-700 text-neutral-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-neutral-100 rounded-md transition-colors duration-200">
                View
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-neutral-400">
            More Blogs coming soon...
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
