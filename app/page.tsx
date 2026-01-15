"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  HelpCircle, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Brain, 
  Users, 
  Shield,
  Star,
  Quote,
  MessageSquare,
  TrendingUp,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import { motivationalQuotes, features, reviews } from "./quotes.js"
import Newsletter from "./_partials/newsletter"

export default function HomePage() {
  const [currentQuote, setCurrentQuote] = useState("")
  const [showNewsletter, setShowNewsletter] = useState(false)
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setCurrentQuote(randomQuote)
    
    // Auto-rotate reviews
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  const newsletter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowNewsletter(true)
  }

  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Your Journey to Emotional Wellness Starts Here
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Reconnect With Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Emotional Self
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              A comprehensive platform designed to help you understand, process, and grow through your emotions with science-backed tools and compassionate guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <Link href="/chatbot" className="flex items-center gap-3">
                  <Bot className="w-6 h-6" />
                  Start Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-700 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <Link href="/demo" className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Active Users", icon: Users },
              { number: "95%", label: "Report Improvement", icon: TrendingUp },
              { number: "24/7", label: "AI Support", icon: Bot },
              { number: "50+", label: "Expert Tools", icon: CheckCircle }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Daily Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
              <CardContent className="p-10 text-center">
                <Quote className="w-12 h-12 text-white/50 mx-auto mb-6" />
                <p className="text-2xl md:text-3xl text-white italic leading-relaxed mb-8">
                  "{currentQuote}"
                </p>
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 text-white">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Daily Motivation • Refreshes Every 24 Hours
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Emotional Wellness</span> Suite
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each module is scientifically designed to address different aspects of emotional intelligence and mental wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        className="group-hover:text-blue-600 transition-colors p-0"
                        asChild
                      >
                        <Link href={feature.href} className="flex items-center gap-2">
                          Explore Tool
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <span className="text-sm text-slate-500">30+ exercises</span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Thousands</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from people who transformed their emotional wellbeing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${index === activeReview ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                >
                  <Card className="border-none shadow-xl rounded-2xl overflow-hidden">
                    <CardContent className="p-10">
                      <div className="flex items-center mb-6">
                        <img
                          src={review.dp}
                          alt={review.name}
                          className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                        />
                        <div className="ml-6">
                          <h4 className="text-xl font-bold text-slate-900">{review.name}</h4>
                          <p className="text-slate-600">{review.role}</p>
                          <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg text-slate-700 italic leading-relaxed">"{review.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
              
              <div className="flex justify-center mt-8 space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === activeReview ? 'bg-blue-600 w-8' : 'bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Emotional Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands who have found balance, understanding, and emotional resilience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg rounded-xl shadow-lg"
                asChild
              >
                <Link href="/signup" className="flex items-center gap-3">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-xl"
                asChild
              >
                <Link href="/demo" className="flex items-center gap-2">
                  Book a Demo
                </Link>
              </Button>
            </div>
            
            <p className="text-blue-200 mt-8 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Vibecare</h3>
                  <p className="text-slate-400">Your emotional wellness partner</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-md">
                Empowering individuals with science-backed tools for emotional intelligence, mental wellness, and personal growth.
              </p>
            </div>

            {[
              {
                title: "Solutions",
                links: ["Emotional Toolkit", "AI Companion", "Relationship Tools", "Confidence Building", "Voice Therapy"]
              },
              {
                title: "Resources",
                links: ["Blog & Articles", "Research Papers", "Webinars", "Case Studies", "Help Center"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-lg font-bold mb-6">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">
                © {year} Vibecare. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</Link>
                <Link href="#" className="text-slate-400 hover:text-white transition-colors">YouTube</Link>
              </div>
            </div>
            
            <div className="mt-8 text-center text-slate-500 text-sm">
              <p>
                Built with ❤️ by{" "}
                <a
                  href="https://github.com/rono1579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Rono
                </a>
                {" • "}Powered by Next.js & Modern Psychology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}