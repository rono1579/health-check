"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, User, Calendar, ArrowRight } from 'lucide-react';
import {topBlog, featuredBlogs, topList, moreBlogs, recentPosts} from '../quotes.js'

const BlogPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay, featuredBlogs.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredBlogs.length) % featuredBlogs.length);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Featured Carousel Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {featuredBlogs.map((blog, index) => (
            <div key={blog.id} className="min-w-full relative">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="max-w-2xl text-white">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      {blog.title}
                    </h1>
                    <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <User size={18} />
                        <span className="font-medium">{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{formatDate(blog.date)}</span>
                      </div>
                    </div>
                    <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                      Read More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {featuredBlogs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Top of the Week Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Top of the Week
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main featured article */}
            <div className="lg:col-span-2">
              <article className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={topBlog.image} 
                    alt={topBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {topBlog.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {topBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <User size={16} />
                        <span className="font-medium">{topBlog.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar size={16} />
                        <span>{formatDate(topBlog.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock size={16} />
                        <span>{topBlog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            {/* Top articles list */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Also Popular This Week</h3>
              {topList.map((blog, index) => (
                <article key={blog.id} className="group flex gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-20 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-2">
                      {blog.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="font-medium">{blog.author}</span>
                      <span>•</span>
                      <span>{formatDate(blog.date)}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Blogs Section */}
      <section className="py-16 px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            More from Our Blog
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {moreBlogs.map((blog) => (
                <article key={blog.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="font-medium">{blog.author}</span>
                      <span>•</span>
                      <span>{formatDate(blog.date)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Recent posts sidebar */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8 self-start">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Support Resources</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <article key={post.id} className="group pb-4 border-b border-gray-100 last:border-b-0 cursor-pointer">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Crisis Support Section */}
              <div className="mt-8 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                <h4 className="font-semibold text-rose-800 mb-2">Need Immediate Support?</h4>
                <p className="text-sm text-rose-700 mb-3">
                  If you're in crisis, please reach out for help immediately.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-rose-700">
                    <span className="font-medium">Crisis Hotline:</span>
                    <span>988</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-700">
                    <span className="font-medium">Text Support:</span>
                    <span>Text HOME to 741741</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg">
                View All Resources
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;