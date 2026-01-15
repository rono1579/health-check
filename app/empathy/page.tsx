import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, MessageCircle, Heart, Lightbulb } from "lucide-react"
import { empathyPhrases, listeningTips } from '../quotes.js'

export default function EmpathyTraining() {
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
              <h1 className="text-2xl font-bold text-slate-800">Empathy Training Zone</h1>
              <p className="text-sm text-slate-600">Learn to connect and support others better</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 max-w-6xl">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Building Your Empathy Skills</span>
            </CardTitle>
            <CardDescription>
              Empathy isn't about having all the right words - it's about being present and showing you care. These are
              practical tools to help you connect better with others.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Listening Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>How to Listen Better</span>
            </CardTitle>
            <CardDescription>
              Good listening is the foundation of empathy. Here's how to be truly present for someone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {listeningTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-green-50">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">{tip.title}</h3>
                    <p className="text-slate-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Empathy Phrases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span>What to Say When You Care</span>
            </CardTitle>
            <CardDescription>
              Simple, genuine phrases that show empathy. You don't need to be perfect - just authentic.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {empathyPhrases.map((scenario, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-slate-800 mb-3">{scenario.situation}</h3>
                  <div className="space-y-2">
                    {scenario.phrases.map((phrase, phraseIndex) => (
                      <div key={phraseIndex} className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-slate-700 italic">"{phrase}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Practice Scenarios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              <span>Practice Scenarios</span>
            </CardTitle>
            <CardDescription>
              Imagine these situations and think about how you might respond with empathy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-600">
                <h3 className="font-semibold text-slate-800 mb-2">Scenario 1: Your friend is having period pain</h3>
                <p className="text-slate-600 mb-3">
                  She mentions she's in pain and feeling emotional. How can you show support?
                </p>
                <div className="text-sm text-slate-700 space-y-1">
                  <p>
                    <strong>Try:</strong> "That sounds really uncomfortable. Is there anything I can do to help?"
                  </p>
                  <p>
                    <strong>Or:</strong> "I'm sorry you're dealing with that. Do you want to talk about it or would you
                    prefer some space?"
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-600">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Scenario 2: Someone is anxious about a big decision
                </h3>
                <p className="text-slate-600 mb-3">
                  They keep going in circles about what to choose and seem overwhelmed.
                </p>
                <div className="text-sm text-slate-700 space-y-1">
                  <p>
                    <strong>Try:</strong> "This decision seems really important to you. What's making it feel so
                    difficult?"
                  </p>
                  <p>
                    <strong>Or:</strong> "It makes sense that you'd feel anxious about this. Want to talk through it?"
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-600">
                <h3 className="font-semibold text-slate-800 mb-2">
                  Scenario 3: Someone accomplished something they're proud of
                </h3>
                <p className="text-slate-600 mb-3">They're excited to share good news with you.</p>
                <div className="text-sm text-slate-700 space-y-1">
                  <p>
                    <strong>Try:</strong> "That's incredible! I can see how proud you are. Tell me more about it."
                  </p>
                  <p>
                    <strong>Or:</strong> "You worked so hard for this. How does it feel to have achieved it?"
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Reminders */}
        <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-none">
          <CardContent className="py-6">
            <h3 className="font-semibold text-slate-800 mb-4 text-center">Remember These Key Points</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                • <strong>You don't need perfect words</strong> - your presence and care matter more
              </p>
              <p>
                • <strong>It's okay to say "I don't know what to say, but I'm here"</strong> - honesty is powerful
              </p>
              <p>
                • <strong>Ask before giving advice</strong> - "Do you want suggestions, or do you just need someone to
                listen?"
              </p>
              <p>
                • <strong>Your own emotions are valid too</strong> - it's okay if their feelings affect you
              </p>
              <p>
                • <strong>Practice makes progress</strong> - empathy is a skill that grows with time
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
