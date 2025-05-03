const Blog = () => {
  const blogPost = {
    title: "My Journey in Web Development",
    date: "April 25, 2025",
    description:
      "From my first HTML encounter to building modern, scalable web applications, this post reflects on my growth through various roles including Data Analyst and Web Developer positions.",
    tags: ["Web Development", "Career Growth"],
  };

  return (
    <div id="blog" className="c-space my-16 ">
      <section className="">
        <h2 className="text-xl md:text-2xl text-center mb-8">Blog</h2>

        <div className="bg-gradient-to-r from-indigo to-storm border border-gray-50/[.1] rounded-xl shadow-lg hover:bg-royal hover-animation transition-all duration-300">
          <div className="flex justify-between items-start p-6">
            <h3 className="font-bold text-sm md:text-2xl text-white">
              {blogPost.title}
            </h3>
            <p className="text-sm text-neutral-300">{blogPost.date}</p>
          </div>

          <div className="px-6 pb-6">
            <p className="mt-2 text-sm md:text-xl text-neutral-200">
              {blogPost.description}
            </p>
            <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 text-neutral-200 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="px-2 py-2 border border-white/20 bg-white/10 text-white rounded-md hover:bg-royal hover:shadow-lg transition-all duration-300">
                View
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-neutral-400">
          More Blogs coming soon...
        </div>
      </section>
    </div>
  );
};

export default Blog;
