import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, HelpCircle, Heart, Brain, MessageCircle } from "lucide-react"
import { faqs, resources } from '../quotes.js'

export default function HelpSection() {
  return (
    <div className="help">
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <Button variant="secondary" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {/* back */}
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Help & Support</h1>
                <p className="text-sm text-slate-600">Common questions and gentle guidance</p>
              </div>
            </div>
          </div>
        </header>

        <div className="container py-6 max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <span>You're Not Alone in This</span>
              </CardTitle>
              <CardDescription>
                These are questions and concerns that many people have during their emotional growth journey. Remember,
                seeking help and asking questions is a sign of strength, not weakness.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* FAQ Section */}
          <div className="space-y-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Help Resources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Quick Help for Difficult Moments</span>
              </CardTitle>
              <CardDescription>When you're struggling, here are some immediate steps you can take.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {resources.map((resource, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-slate-800 mb-3">{resource.title}</h3>
                    <ul className="space-y-2">
                      {resource.suggestions.map((suggestion, suggestionIndex) => (
                        <li key={suggestionIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Crisis Resources */}
          <Card className="mb-8 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">If You're in Crisis</CardTitle>
              <CardDescription className="text-red-700">
                If you're having thoughts of self-harm or suicide, please reach out for professional help immediately.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <p className="text-red-800">
                  <strong>National Suicide Prevention Lifeline:</strong> 988 (US)
                </p>
                <p className="text-red-800">
                  <strong>Crisis Text Line:</strong> Text HOME to 741741
                </p>
                <p className="text-red-800">
                  <strong>International:</strong> Visit findahelpline.com for resources in your country
                </p>
                <p className="text-red-700 mt-4">
                  Remember: Asking for help is brave, not weak. You deserve support and care.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Remember Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span>Important Reminders</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <p className="text-slate-700 text-sm">
                    <strong>Progress isn't linear.</strong> You'll have good days and challenging days. Both are part of
                    the journey.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <p className="text-slate-700 text-sm">
                    <strong>You're not broken.</strong> You're a human being learning and growing. That takes time and
                    patience.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <p className="text-slate-700 text-sm">
                    <strong>Small steps count.</strong> Every time you use these tools, you're building emotional
                    intelligence and resilience.
                  </p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-600">
                  <p className="text-slate-700 text-sm">
                    <strong>You deserve love and connection.</strong> Working on yourself doesn't mean you're not worthy
                    as you are right now.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Encouragement */}
          <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-none">
            <CardContent className="py-8 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-800 mb-4">You're Doing Important Work</h3>
              <p className="text-slate-700 mb-4">
                The fact that you're here, reading this, and working on yourself shows incredible courage and
                self-awareness. Not everyone is willing to look inward and grow.
              </p>
              <p className="text-slate-600 text-sm">
                Be patient with yourself. Celebrate small wins. Trust the process. You're becoming the person you want to
                be, one day at a time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
