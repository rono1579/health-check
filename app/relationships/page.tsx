import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, MessageCircle, Lightbulb } from "lucide-react"

export default function RelationshipRecovery() {
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
              <h1 className="text-2xl font-bold text-slate-800">Relationship Recovery & Growth</h1>
              <p className="text-sm text-slate-600">Learning from the past, building for the future</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-6 max-w-6xl mx-auto py-6 px-4 md:px-8 lg:px-16">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500" />
              <span>Your Relationship Journey</span>
            </CardTitle>
            <CardDescription>
              Losing someone you cared about is painful, but it's also an opportunity to grow and become a better
              partner. This space is for gentle reflection and practical growth.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Gentle Reflection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-blue-700">What I'm Learning About Myself</CardTitle>
            <CardDescription>
              Instead of focusing on what went wrong, let's reframe this as learning and growth.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-blue-50 border-l-4 border-blue-600">
                <h3 className="font-semibold text-slate-800 mb-2">Emotional Distance</h3>
                <p className="text-slate-600 mb-3">
                  You recognize that you struggled to be emotionally present, especially during difficult times like her
                  period.
                </p>
                <div className="text-sm text-slate-700">
                  <p>
                    <strong>What this teaches you:</strong> Emotional presence is a skill that can be developed. It's
                    not about having all the answers - it's about being there and showing you care.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-green-50 border-l-4 border-green-600">
                <h3 className="font-semibold text-slate-800 mb-2">Brain Fog & Focus Issues</h3>
                <p className="text-slate-600 mb-3">
                  Mental clarity affects how we show up in relationships. When we're foggy, it's harder to be present
                  for others.
                </p>
                <div className="text-sm text-slate-700">
                  <p>
                    <strong>What this teaches you:</strong> Taking care of your mental health isn't selfish - it helps
                    you be a better partner. Your daily toolkit is building this foundation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-600">
                <h3 className="font-semibold text-slate-800 mb-2">Communication Challenges</h3>
                <p className="text-slate-600 mb-3">
                  You're working on finding your voice and expressing yourself more clearly and confidently.
                </p>
                <div className="text-sm text-slate-700">
                  <p>
                    <strong>What this teaches you:</strong> Good communication is learnable. Every conversation is
                    practice, and you're already improving by being aware of this.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supporting Someone During Hard Times */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-600" />
              <span>How to Support Someone During Difficult Times</span>
            </CardTitle>
            <CardDescription>
              Practical guidance for being there when someone you care about is struggling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">During Physical Discomfort (like periods)</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-slate-700">
                        <strong>Ask what they need:</strong> "Is there anything I can do to help you feel more
                        comfortable?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-slate-700">
                        <strong>Offer practical help:</strong> "Can I get you a heating pad, some tea, or your favorite
                        snacks?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-slate-700">
                        <strong>Be patient with mood changes:</strong> "I know you're not feeling well. I'm here if you
                        need anything."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-slate-700">
                        <strong>Don't take it personally:</strong> Remember that pain and hormones can affect mood -
                        it's not about you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 mb-3">During Emotional Struggles</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-slate-700">
                        <strong>Listen without trying to fix:</strong> "That sounds really hard. Do you want to talk
                        about it?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-slate-700">
                        <strong>Validate their feelings:</strong> "Your feelings make complete sense. Anyone would feel
                        that way."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-slate-700">
                        <strong>Stay present:</strong> Put away distractions and give them your full attention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Say When You Don't Know What to Say */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>When You Don't Know What to Say</span>
            </CardTitle>
            <CardDescription>
              It's okay not to have perfect words. Honesty and presence matter more than eloquence.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-800">Honest Responses</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-slate-700 italic">"I don't know what to say, but I'm here with you."</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-slate-700 italic">"I wish I knew how to make this better for you."</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-slate-700 italic">
                      "I'm not sure what you need right now, but I care about you."
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-slate-800">Simple Support</h3>
                <div className="space-y-2">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-slate-700 italic">"I'm here."</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-slate-700 italic">"That sounds really tough."</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-slate-700 italic">"You don't have to go through this alone."</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Building for Future Relationships */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              <span>Building for Your Next Relationship</span>
            </CardTitle>
            <CardDescription>
              The work you're doing now is preparing you to be a better partner in the future.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-yellow-50">
                <div className="w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Emotional Awareness</h3>
                  <p className="text-slate-600 text-sm">Continue practicing emotion naming and self-reflection</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-blue-50">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Active Listening</h3>
                  <p className="text-slate-600 text-sm">Practice being fully present in conversations</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-green-50">
                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Clear Communication</h3>
                  <p className="text-slate-600 text-sm">Work on expressing your thoughts and feelings openly</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-50">
                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Self-Care Foundation</h3>
                  <p className="text-slate-600 text-sm">Maintain your mental clarity and emotional health</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Encouragement */}
        <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-none">
          <CardContent className="py-6 text-center">
            <p className="text-slate-700 mb-4">
              <strong>You're already growing.</strong> The fact that you're here, reflecting and working on yourself,
              shows incredible self-awareness and commitment to becoming better.
            </p>
            <p className="text-slate-600 text-sm">
              Healing isn't linear, and growth takes time. Be patient with yourself as you build these new skills.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
