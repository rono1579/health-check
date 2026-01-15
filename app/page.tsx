"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Bot, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import {motivationalQuotes, features, reviews} from "./quotes.js"
import Newsletter from "./_partials/newsletter"

export default function HomePage() {
  const [currentQuote, setCurrentQuote] = useState("")
  const [showNewsletter, setShowNewsletter] = useState(false)

  useEffect(() => {
    const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    setCurrentQuote(randomQuote)
  }, [])
  
  const newsletter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowNewsletter(true)
  }

  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen home overflow-none">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-6">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <img src='/love.png' className=" object-conver w-20 h-20 rounded-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-4">The Emotional Reset</h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-8">
              Your space to <span className="bg-black/40 rounded-xl p-0">reconnect with your </span>mind, your feelings, and the people around you
            </p>
          </div>

          {/* Daily Quote */}
          <Card className="mb-12 bg-gradient-to-r from-blue-100 to-purple-100 border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Today's Reminder</span>
              </div>
              <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed">"{currentQuote}"</p>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg text-lg px-8 py-6 relative overflow-hidden group"
              asChild
            >
              <Link href="/chatbot" className="flex items-center gap-3">
                <Bot className="w-6 h-6" />
                Talk to AI Companion
                <Sparkles className="w-5 h-5" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-100 hover:border-purple-500 text-slate-100 hover:text-purple-700 text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <Link href="/toolkit" className="flex items-center gap-2">
                Start Daily Toolkit
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Your Journey to Emotional Wellness</h2>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            Each tool is designed to help you understand yourself better, build stronger relationships, and develop the
            emotional skills you need to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-1-2 border-none shadow-lg relative overflow-hidden"
                style={{
                  backgroundImage: `url('/theme/${feature.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="relative z-10">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-yellow-300 transition-colors drop-shadow">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-blue-100 mb-6 leading-relaxed drop-shadow">{feature.description}</p>
                    <Button
                      variant="outline"
                      className="group-hover:bg-purple-50 group-hover:border-purple-300 group-hover:text-purple-700 transition-all bg-white/80 text-slate-700"
                      asChild
                    >
                      <Link href={feature.href} className="flex items-center gap-2">
                        Explore
                        <ArrowRight className="w-4 h-4 group-hover:translate-1-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Reviews section */}
      <section className="container mx-auto px-4 py-6 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">How our customer says about our Platform</h2>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            enjoy the the reviews our cusomers leave to get motivated. Remember life is spiritual
          </p>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index)=>{
            const profile = review.dp
            return (
              <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-200 hover:transition-y-2 border-none shadow-lg"
              >

              </Card>
            )
          })}
        </div>

      </section>

      {/* Support Section */}
      <section className="container mx-auto px-4 pb-12">
        <div className="relative border-none shadow-lg max-w-6xl mx-auto px-4 md:px-8 lg:px-16">

          <div className="support absolute inset-0 z-0"/>
          <div className="absolute inset-0 bg-black/40 z-10"/>

          <Card className="border-none shadow-lg bg-transparent relative z-20">
            <CardContent className="p-6 text-center z-20">
              <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Need Additional Support?</h3>
              <p className="text-lg text-slate-100 mb-8 leading-relaxed">
                Remember, this journey is about progress, not perfection. If you're struggling with serious mental health
                concerns, please don't hesitate to reach out to a mental health professional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <Link href="/help" className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Get Help & Resources
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/chatbot" className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Chat VibeCareAI
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Newsletter/>

        {/* Footer */}
        <footer className="relative py-14 bg-gradient-to-r from-purple-700 via-blue-700 to-purple-800 text-white overflow-hidden shadow-2xl border-t-4 border-purple-400/40">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 blur-lg opacity-60 rounded-b-full pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg animate-pulse">
                <img src='/love.png' className=" object-conver w-20 h-20 rounded-full text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-extrabold tracking-tight drop-shadow-lg">The Emotional Reset</h4>
                <p className="text-base text-blue-100 font-medium">Your space to reconnect</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <Link href="/toolkit" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Daily Toolkit</Link>
              <Link href="/emotions" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Emotions</Link>
              <Link href="/empathy" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Empathy</Link>
              <Link href="/relationships" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Relationships</Link>
              <Link href="/confidence" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Confidence</Link>
              <Link href="/voice" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Voice</Link>
              <Link href="/help" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Help</Link>
            </div>
            <p className="text-blue-100 mb-2 text-lg font-medium font-inter">
              Take your time. Be gentle with yourself. You're doing better than you think.
            </p>
            <p className="text-blue-200 text-sm">💙 Built with care for your emotional wellness journey</p>
          </div>
          <div className="absolute -bottom-10 left-10 w-40 h-40 bg-pink-400/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
          <div className="bg-gradient-to-r from-black/80 via-slate-900/80 to-black/80 absolute bottom-0 left-0 w-full flex justify-center items-center shadow-inner">
            <p className="py-3 text-sm text-slate-200 tracking-wide">
              &copy; All rights reserved @{year} | Built by{" "}
              <a
                href="http://mwaura-fredrick.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-yellow-300 hover:text-yellow-400 transition-colors"
              >
                Fredrick Mwaura
              </a> and Nextjs
            </p>
          </div>
        </footer> 
    </div>
  )
}
