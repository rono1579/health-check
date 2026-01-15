"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, User, Calendar, Heart, Share2, BookmarkPlus, Eye, MessageCircle, Twitter, Facebook, Link } from 'lucide-react';
import {currentPost, recentBlogs} from '../../quotes.js'
import Newsletter from '../../_partials/newsletter.tsx'
// import { useNavigate } from 'react-router-dom';

const BlogPostPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(342);
  const [readingProgress, setReadingProgress] = useState(0);
  // const navigate = useNavigate()
  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = (platform: string) => {
    // In a real app, you'd implement actual sharing functionality
    console.log(`Sharing to ${platform}`);
  };
  function back(){
    window.location.back()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Back Navigation */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            onClick={back}>
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Hero Section */}
            <header className="mb-12">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentPost.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  {currentPost.title}
                </h1>
                
                {/* Author and Meta Info */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={currentPost.authorImage} 
                      alt={currentPost.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{currentPost.author}</div>
                      <div className="text-sm text-gray-600">{currentPost.authorBio}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(currentPost.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{currentPost.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>{currentPost.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl mb-8">
                <img 
                  src={currentPost.heroImage} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Actions */}
              <div className="flex items-center justify-between py-6 border-y border-gray-200">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isLiked 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                    <span>{likes}</span>
                  </button>
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isBookmarked 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <BookmarkPlus size={18} className={isBookmarked ? 'fill-current' : ''} />
                  </button>
                  <div className="flex items-center gap-1 text-gray-500">
                    <MessageCircle size={18} />
                    <span>{currentPost.comments} comments</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 mr-2">Share:</span>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-all duration-300"
                  >
                    <Twitter size={16} />
                  </button>
                  <button 
                    onClick={() => handleShare('facebook')}
                    className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-all duration-300"
                  >
                    <Facebook size={16} />
                  </button>
                  <button 
                    onClick={() => handleShare('link')}
                    className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-all duration-300"
                  >
                    <Link size={16} />
                  </button>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-xl leading-relaxed text-gray-700 mb-8 font-medium">
                {currentPost.content.introduction}
              </p>

              {/* Content Sections */}
              {currentPost.content.sections.map((section, index) => (
                <section key={index} className="mb-12">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    {section.content}
                  </p>
                  <div className="aspect-video overflow-hidden rounded-xl shadow-lg mb-8">
                    <img 
                      src={section.image} 
                      alt={section.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </section>
              ))}

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Moving Forward</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {currentPost.content.conclusion}
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Professional Support?</h3>
                <p className="text-gray-700 mb-6">
                  If you're struggling with anxiety, remember that professional help is available. 
                  A licensed therapist can work with you to develop personalized strategies for managing anxiety.
                </p>
                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Find a Therapist
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                    Crisis Resources
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Recent Blog Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Articles</h3>
                <div className="space-y-4">
                  {recentBlogs.map((blog) => (
                    <article key={blog.id} className="group cursor-pointer">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <img 
                            src={blog.image} 
                            alt={blog.title}
                            className="w-16 h-12 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 mb-1">
                            {blog.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{formatDate(blog.date).split(',')[0]}</span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                  View All Articles
                </button>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Get weekly insights on mental health, wellness tips, and new articles delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-yellow-500 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Crisis Resources */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200">
                <h4 className="font-semibold text-rose-800 mb-3">Crisis Support</h4>
                <div className="space-y-2 text-sm text-rose-700">
                  <div className="flex justify-between">
                    <span>Crisis Hotline:</span>
                    <span className="font-medium">988</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Text Support:</span>
                    <span className="font-medium">HOME to 741741</span>
                  </div>
                  <p className="text-xs text-rose-600 mt-3">
                    Available 24/7 for immediate support
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
};

export default BlogPostPage;