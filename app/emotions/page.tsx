"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, MessageSquare } from "lucide-react"
import { emotions } from "../quotes.js"

export default function EmotionNaming() {
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([])
  const [reflection, setReflection] = useState("")
  const [showReflection, setShowReflection] = useState(false)

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions((prev) => (prev.includes(emotion) ? prev.filter((e) => e !== emotion) : [...prev, emotion]))
  }

  const getEmotionColor = (emotion: string) => {
    if (emotions.positive.includes(emotion)) return "bg-green-100 text-green-800 hover:bg-green-200"
    if (emotions.neutral.includes(emotion)) return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    return "bg-blue-100 text-blue-800 hover:bg-blue-200"
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
              <h1 className="text-2xl font-bold text-slate-800">Emotion Naming Practice</h1>
              <p className="text-sm text-slate-600">Learn to identify and understand your feelings</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span>How are you feeling today?</span>
            </CardTitle>
            <CardDescription>
              It's okay if you feel multiple things at once, or if you're not sure. Just pick what resonates with you
              right now.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Emotion Selection */}
        <div className="space-y-8">
          {/* Positive Emotions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-green-700">Positive Feelings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {emotions.positive.map((emotion) => (
                  <Badge
                    key={emotion}
                    variant="secondary"
                    className={`cursor-pointer transition-colors ${getEmotionColor(emotion)} ${
                      selectedEmotions.includes(emotion) ? "ring-2 ring-green-500" : ""
                    }`}
                    onClick={() => toggleEmotion(emotion)}
                  >
                    {emotion}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Neutral Emotions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-yellow-700">Neutral Feelings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {emotions.neutral.map((emotion) => (
                  <Badge
                    key={emotion}
                    variant="secondary"
                    className={`cursor-pointer transition-colors ${getEmotionColor(emotion)} ${
                      selectedEmotions.includes(emotion) ? "ring-2 ring-yellow-500" : ""
                    }`}
                    onClick={() => toggleEmotion(emotion)}
                  >
                    {emotion}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenging Emotions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-blue-700">Challenging Feelings</CardTitle>
              <CardDescription>
                These feelings are valid and temporary. You're not alone in experiencing them.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {emotions.challenging.map((emotion) => (
                  <Badge
                    key={emotion}
                    variant="secondary"
                    className={`cursor-pointer transition-colors ${getEmotionColor(emotion)} ${
                      selectedEmotions.includes(emotion) ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => toggleEmotion(emotion)}
                  >
                    {emotion}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selected Emotions Summary */}
        {selectedEmotions.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">You're feeling:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedEmotions.map((emotion) => (
                  <Badge key={emotion} className="bg-slate-200 text-slate-800">
                    {emotion}
                  </Badge>
                ))}
              </div>

              {!showReflection ? (
                <Button onClick={() => setShowReflection(true)} className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Reflect on these feelings
                </Button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Why do you think you feel this way today?
                    </label>
                    <Textarea
                      placeholder="There's no right or wrong answer. Just write what comes to mind..."
                      value={reflection}
                      onChange={(e) => setReflection(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong>Remember:</strong> All feelings are temporary and valid. You don't need to fix or change
                    them right now - just acknowledge them.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Encouragement */}
        <Card className="mt-8 bg-gradient-to-r from-blue-100 to-green-100 border-none">
          <CardContent className="py-6 text-center">
            <p className="text-slate-700">
              <strong>Good job</strong> taking time to check in with yourself. Emotional awareness is the first step
              toward emotional intelligence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
