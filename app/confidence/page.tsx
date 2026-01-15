"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, Plus, Trophy, Heart } from "lucide-react"
import {smallWinExamples, weeklyPrompts} from '../quotes.js'

export default function ConfidenceBuilder() {
  const [currentPrompt, setCurrentPrompt] = useState(weeklyPrompts[0])
  const [reflection, setReflection] = useState("")
  const [wins, setWins] = useState<string[]>([])
  const [newWin, setNewWin] = useState("")

  const getNewPrompt = () => {
    const randomPrompt = weeklyPrompts[Math.floor(Math.random() * weeklyPrompts.length)]
    setCurrentPrompt(randomPrompt)
    setReflection("")
  }

  const addWin = () => {
    if (newWin.trim()) {
      setWins([...wins, newWin.trim()])
      setNewWin("")
    }
  }

  const addExampleWin = (example: string) => {
    if (!wins.includes(example)) {
      setWins([...wins, example])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />back                
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Confidence Builder</h1>
              <p className="text-sm text-slate-600">Celebrate your progress and build self-appreciation</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span>Building Genuine Self-Confidence</span>
            </CardTitle>
            <CardDescription>
              Real confidence comes from recognizing your growth and celebrating small wins. It's not about being
              perfect - it's about appreciating who you're becoming.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Weekly Reflection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span>Weekly Self-Reflection</span>
            </CardTitle>
            <CardDescription>
              Take a moment to reflect on something positive about yourself or your week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <p className="text-slate-800 font-medium mb-3">{currentPrompt}</p>
                <Textarea
                  placeholder="Take your time... there's no wrong answer here."
                  value={reflection}
                  onChange={(e) => setReflection(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="flex space-x-2">
                <Button onClick={getNewPrompt} variant="outline">
                  New Prompt
                </Button>
                {reflection.trim() && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Great reflection! 🌟
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Win Tracker */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span>Your Personal Wins</span>
            </CardTitle>
            <CardDescription>
              Track your victories, no matter how small. Every step forward deserves recognition.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Add new win */}
              <div className="flex space-x-2">
                <Textarea
                  placeholder="What's something you did well today or this week?"
                  value={newWin}
                  onChange={(e) => setNewWin(e.target.value)}
                  rows={2}
                  className="flex-1"
                />
                <Button onClick={addWin} className="self-end">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {/* Win examples */}
              <div>
                <h3 className="font-medium text-slate-800 mb-3">Need inspiration? Click to add any of these wins:</h3>
                <div className="flex flex-wrap gap-2">
                  {smallWinExamples.map((example, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 transition-colors"
                      onClick={() => addExampleWin(example)}
                    >
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Display wins */}
              {wins.length > 0 && (
                <div>
                  <h3 className="font-medium text-slate-800 mb-3">Your Recent Wins:</h3>
                  <div className="space-y-2">
                    {wins.map((win, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                        <span className="text-slate-700">{win}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {wins.length === 0 && (
                <div className="text-center py-8 text-slate-500">
                  <Trophy className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                  <p>Start tracking your wins - even the small ones count!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Confidence Reminders */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-blue-700">Daily Confidence Reminders</CardTitle>
            <CardDescription>Read these when you need a gentle reminder of your worth and progress.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    You're learning and growing every day, even when it doesn't feel like it.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    Your awareness of your challenges is actually a strength, not a weakness.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    You don't have to be perfect to be worthy of love and respect.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    Every time you practice empathy or emotional awareness, you're building valuable skills.
                  </p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    Your journey to better mental health and relationships takes courage.
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-slate-700 text-sm">
                    Progress isn't always visible, but it's happening with every step you take.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-none">
          <CardContent className="py-6 text-center">
            <p className="text-slate-700 mb-4">
              <strong>You're doing important work.</strong> Building confidence isn't about becoming someone else - it's
              about recognizing and appreciating who you already are and who you're becoming.
            </p>
            <p className="text-slate-600 text-sm">
              Keep celebrating the small wins. They add up to big changes over time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
