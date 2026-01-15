"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Users, Compass, Star, HelpCircle, Mic, Bot, Sparkles, Menu, Book } from "lucide-react"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "/toolkit", label: "Daily Toolkit", icon: Compass },
    { href: "/emotions", label: "Emotions", icon: Heart },
    { href: "/empathy", label: "Empathy", icon: Users },
    { href: "/relationships", label: "Relationships", icon: Heart },
    { href: "/confidence", label: "Confidence", icon: Star },
    { href: "/voice", label: "Voice", icon: Mic },
    { href: "/help", label: "Help", icon: HelpCircle },
    { href: "/blogs", label: "articles", icon: Book },
  ]

  return (
    <html lang="en">
      <body className={`${inter.className} home`}>
        <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <img src='/love.png' className=" object-conver w-10 h-10 rounded-full text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-800">VibeCare</h1>
                  <p className="text-xs text-slate-600">Emotion reset</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1 bg-transparent">
                {navigationItems.map((item) => {
                  return (
                    <Button key={item.href} variant="ghost" size="sm" asChild>
                      <Link href={item.href} className="flex items-center gap-2">
                        {item.label}
                      </Link>
                    </Button>
                  )
                })}

                {/* AI Companion Button */}
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg ml-2 relative overflow-hidden group"
                  asChild
                >
                  <Link href="/chatbot" className="flex items-center gap-2">
                    <div className="relative">
                      <Bot className="w-4 h-4" />
                      <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300" />
                    </div>
                    AI Companion
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </Link>
                </Button>
              </div>

              {/* Mobile Hamburger Menu */}
              <div className="flex lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-80 bg-gradient-to-b from-blue-50 to-purple-50">
                    <div className="flex flex-col space-y-4 mt-8">
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <img src='/love.png' className=" object-conver w-20 h-20 rounded-full text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800">Your handy Companion</h2>
                        <p className="text-sm text-slate-600 hidden lg:flex">Your space to reconnect</p>
                      </div>

                      {/* Mobile Navigation Items */}
                      {navigationItems.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <Button
                            key={item.href}
                            variant="ghost"
                            className="justify-start h-12 text-left hover:bg-white/50"
                            asChild
                            onClick={() => setIsOpen(false)}
                          >
                            <Link href={item.href} className="flex items-center gap-3">
                              <IconComponent className="w-5 h-5" />
                              <span className="text-base">{item.label}</span>
                            </Link>
                          </Button>
                        )
                      })}

                      {/* Mobile AI Companion Button */}
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg mt-4 h-12 relative overflow-hidden group"
                        asChild
                        onClick={() => setIsOpen(false)}
                      >
                        <Link href="/chatbot" className="flex items-center gap-3 justify-center">
                          <div className="relative">
                            <Bot className="w-5 h-5" />
                            <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300" />
                          </div>
                          <span className="text-base font-medium">AI Companion</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </Link>
                      </Button>

                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <p className="text-xs text-slate-500 text-center">
                          Take your time. You're doing better than you think. 💙
                        </p>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>
              {/* Footer */}
        {/* <footer className="relative py-14 bg-gradient-to-r from-purple-700 via-blue-700 to-purple-800 text-white overflow-hidden shadow-2xl border-t-4 border-purple-400/40">
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
              <Link href="/" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Home</Link>
              <Link href="/toolkit" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Daily Toolkit</Link>
              <Link href="/emotions" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Emotions</Link>
              <Link href="/empathy" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Empathy</Link>
              <Link href="/relationships" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Relationships</Link>
              <Link href="/confidence" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Confidence</Link>
              <Link href="/voice" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Voice</Link>
              <Link href="/help" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">Help</Link>
              <Link href="/chatbot" className="transition-all duration-200 text-lg font-semibold px-4 py-2 rounded hover:bg-white/10 hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400">AI Companion</Link>
            </div>
            <p className="text-blue-100 mb-2 text-lg font-medium italic">
              Take your time. Be gentle with yourself. You're doing better than you think.
            </p>
            <p className="text-blue-200 text-sm">💙 Built with care for your emotional wellness journey</p>
          </div>
          <div className="absolute -bottom-10 left-10 w-40 h-40 bg-pink-400/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
        </footer> */}

        {/* Floating Chatbot Button */}
        <Link href="/chatbot">
          <Button
            size="lg"
            className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-50 group"
          >
            <div className="relative">
              <Bot className="w-6 h-6 text-white" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
              <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Button>
        </Link>


      </body>
    </html>
  )
}
