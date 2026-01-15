'use client'
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mic, Volume2, MessageSquare, Users } from "lucide-react"
import { vocalWarmups, speakingExercises, conversationTips } from "../quotes"

export default function VoiceExercises() {
  const [completedWarmups, setCompletedWarmups] = useState<number[]>([])
  const [completedExercises, setCompletedExercises] = useState<number[]>([])

  const toggleWarmup = (index: number) => {
    setCompletedWarmups((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const toggleExercise = (index: number) => {
    setCompletedExercises((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                back
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Your Voice: Use It</h1>
              <p className="text-sm text-slate-600">Build vocal confidence and clear communication</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-6">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mic className="w-5 h-5 text-blue-600" />
              <span>Finding Your Voice Again</span>
            </CardTitle>
            <CardDescription>
              Whether you've been quiet for a while or struggle with vocal projection, these exercises will help you
              speak with clarity and confidence. Your voice matters, and it deserves to be heard.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Vocal Warmups */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5 text-green-600" />
              <span>Daily Vocal Warmups</span>
            </CardTitle>
            <CardDescription>
              Start with these gentle exercises to prepare your voice for the day. Do these especially after periods of
              silence.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vocalWarmups.map((warmup, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-green-50">
                  <Button
                    variant={completedWarmups.includes(index) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleWarmup(index)}
                    className="mt-1 flex-shrink-0"
                  >
                    {completedWarmups.includes(index) ? "✓" : index + 1}
                  </Button>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-1">{warmup.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{warmup.description}</p>
                    <p className="text-slate-500 text-xs italic">{warmup.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            {completedWarmups.length === vocalWarmups.length && (
              <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
                <p className="text-green-800 font-medium">Great job! Your voice is warmed up and ready. 🎤</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Speaking Practice */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-purple-600" />
              <span>Daily Speaking Practice</span>
            </CardTitle>
            <CardDescription>
              Practice speaking regularly, even when you're alone. This builds vocal strength and confidence.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {speakingExercises.map((exercise, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50">
                  <Button
                    variant={completedExercises.includes(index) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleExercise(index)}
                  >
                    {completedExercises.includes(index) ? "✓" : "○"}
                  </Button>
                  <span
                    className={`flex-1 ${completedExercises.includes(index) ? "line-through text-slate-500" : "text-slate-700"}`}
                  >
                    {exercise}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-slate-700 text-sm">
                <strong>Pro tip:</strong> Start with just 5-10 minutes of speaking practice daily. Consistency matters
                more than duration.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Conversation Confidence */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-yellow-600" />
              <span>Speaking Up in Conversations</span>
            </CardTitle>
            <CardDescription>
              Practical tips for finding your voice in social situations and emotionally intense moments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {conversationTips.map((tip, index) => (
                <div key={index} className="border-l-4 border-yellow-600 pl-4">
                  <h3 className="font-semibold text-slate-800 mb-2">{tip.situation}</h3>
                  <p className="text-slate-600 text-sm">{tip.tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overcoming Voice Challenges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-blue-700">Common Voice Challenges & Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2">Challenge: Voice feels weak or shaky</h3>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Solution:</strong> Practice diaphragmatic breathing. Put one hand on your chest, one on your
                  belly. The belly hand should move more when you breathe.
                </p>
                <p className="text-slate-500 text-xs">This gives your voice more power and stability.</p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2">Challenge: Throat feels tight or strained</h3>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Solution:</strong> Do neck rolls and shoulder shrugs before speaking. Stay hydrated and avoid
                  clearing your throat harshly.
                </p>
                <p className="text-slate-500 text-xs">Tension in your body affects your voice quality.</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2">Challenge: People ask you to repeat yourself</h3>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Solution:</strong> Slow down and articulate consonants clearly. Practice speaking to the back
                  of the room, not just the person in front of you.
                </p>
                <p className="text-slate-500 text-xs">Clear articulation is more important than volume.</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-slate-800 mb-2">Challenge: Voice disappears in emotional moments</h3>
                <p className="text-slate-600 text-sm mb-2">
                  <strong>Solution:</strong> Take a breath and ground yourself first. It's okay to say "Give me a
                  moment" before responding.
                </p>
                <p className="text-slate-500 text-xs">Emotional regulation supports vocal control.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-none">
          <CardContent className="py-6 text-center">
            <p className="text-slate-700 mb-4">
              <strong>Your voice is unique and valuable.</strong> Every time you speak up, you're practicing courage and
              self-expression. Don't let perfectionism silence you.
            </p>
            <p className="text-slate-600 text-sm">
              Remember: People want to hear what you have to say. Your thoughts and feelings matter.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
