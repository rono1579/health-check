'use client'
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sun, Droplets, Wind, CheckCircle, Plus, Trash2, Target, Sparkles, Play, Pause, RotateCcw } from "lucide-react"

interface Task {
  id: string
  text: string
  completed: boolean
  priority: "high" | "medium" | "low"
}

export default function ToolkitPage() {
  const [hydrationCompleted, setHydrationCompleted] = useState(false)
  const [breathingCompleted, setBreathingCompleted] = useState(false)
  const [tasksCompleted, setTasksCompleted] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [selectedPriority, setSelectedPriority] = useState<"high" | "medium" | "low">("medium")
  
  // Breathing exercise states
  const [modalTimer, setModalTimer] = useState(0)
  const [isBreathing, setIsBreathing] = useState(false)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [breathingPhase, setBreathingPhase] = useState<"inhale" | "hold" | "exhale">("inhale")
  const modalInterval = useRef<NodeJS.Timeout | null>(null)
  const phaseInterval = useRef<NodeJS.Timeout | null>(null)
  const breathingDuration = 300 // 5 minutes in seconds

  const completionPercentage = Math.round(
    (((hydrationCompleted ? 1 : 0) + (breathingCompleted ? 1 : 0) + (tasksCompleted ? 1 : 0)) / 3) * 100,
  )

  // Timer management
  useEffect(() => {
    if (isTimerRunning && isBreathing) {
      modalInterval.current = setInterval(() => {
        setModalTimer((prev) => {
          if (prev < breathingDuration) {
            return prev + 1
          } else {
            setIsTimerRunning(false)
            setIsBreathing(false)
            setBreathingCompleted(true)
            clearInterval(modalInterval.current!)
            return prev
          }
        })
      }, 1000)
    } else {
      if (modalInterval.current) {
        clearInterval(modalInterval.current)
      }
    }

    return () => {
      if (modalInterval.current) clearInterval(modalInterval.current)
    }
  }, [isTimerRunning, isBreathing, breathingDuration])

  // Breathing phase management
  useEffect(() => {
    if (isTimerRunning && isBreathing) {
      let phaseTimer = 0
      phaseInterval.current = setInterval(() => {
        phaseTimer++
        
        // 4-7-8 breathing cycle (19 seconds total)
        if (phaseTimer <= 4) {
          setBreathingPhase("inhale")
        } else if (phaseTimer <= 11) {
          setBreathingPhase("hold")
        } else if (phaseTimer <= 19) {
          setBreathingPhase("exhale")
        } else {
          phaseTimer = 0 // Reset cycle
        }
      }, 1000)
    } else {
      if (phaseInterval.current) {
        clearInterval(phaseInterval.current)
      }
    }

    return () => {
      if (phaseInterval.current) clearInterval(phaseInterval.current)
    }
  }, [isTimerRunning, isBreathing])

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        priority: selectedPriority,
      }
      setTasks([...tasks, task])
      setNewTask("")
    }
  }

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    setTasks(updatedTasks)
    
    // Check if all tasks are completed
    setTasksCompleted(updatedTasks.length > 0 && updatedTasks.every((task) => task.completed))
  }

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
    
    // Update completion status
    setTasksCompleted(updatedTasks.length > 0 && updatedTasks.every((task) => task.completed))
  }

  const startBreathingExercise = () => {
    setIsBreathing(true)
    setModalTimer(0)
    setIsTimerRunning(true)
    setBreathingPhase("inhale")
  }

  const pauseTimer = () => {
    setIsTimerRunning(false)
  }

  const resumeTimer = () => {
    setIsTimerRunning(true)
  }

  const resetTimer = () => {
    setModalTimer(0)
    setIsTimerRunning(false)
    setBreathingPhase("inhale")
  }

  const closeBreathingModal = () => {
    setIsBreathing(false)
    setIsTimerRunning(false)
    if (modalInterval.current) clearInterval(modalInterval.current)
    if (phaseInterval.current) clearInterval(phaseInterval.current)
  }

  const getPriorityColor = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
    }
  }
  const getBreathingInstruction = () => {
    switch (breathingPhase) {
      case "inhale":
        return {
          text: "Breathe In... 🌬️",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" // calm ocean
        }
      case "hold":
        return {
          text: "Hold... ⏸️",
          image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" // still mountain lake
        }
      case "exhale":
        return {
          text: "Breathe Out... 💨",
          image: "https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?auto=format&fit=crop&w=1200&q=80" // misty forest
        }
      default:
        return {
          text: "",
          image: ""
        }
    }
  }

  let remainingTime = breathingDuration - modalTimer

  function formatTime(remainingTime): string {
    const minutes = Math.floor(remainingTime / 60);
    const remainingSeconds = remainingTime % 60;
    return `${minutes} min ${remainingSeconds} sec`;
  }

  remainingTime = formatTime(remainingTime)

  console.log(remainingTime)

  const getBreathingColor = () => {
    switch (breathingPhase) {
      case "inhale":
        return "#00FFFF" // blue
      case "hold":
        return "#f59e0b" // yellow
      case "exhale":
        return "#10b981" // green
    }
  }

  const seconds = modalTimer % 60
  const minutes = Math.floor(modalTimer / 60)

  return (
    <div className="min-h-screen toolkit ">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <img src='/love.png' className=" object-conver w-16 h-16 rounded-full text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Daily Mental Clarity Toolkit
            </h1>
            <p className="text-lg text-slate-600 mb-6">Start your day with intention and focus</p>

            {/* Progress Overview */}
            <Card className="bg-gradient-to-r from-blue-100 to-green-100 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-slate-700">Today's Progress</span>
                  <span className="text-sm font-bold text-slate-800 bg-white px-3 py-1 rounded-full shadow-sm">
                    {completionPercentage}%
                  </span>
                </div>
                <Progress value={completionPercentage} className="h-3 mb-2" />
                <p className="text-sm text-slate-600">
                  {completionPercentage === 100
                    ? "🎉 Amazing! You've completed your morning routine!"
                    : "Keep going! Every step counts toward a clearer mind."}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step 1: Hydration */}
            <Card className={`transition-all duration-300 hover:scale-105 ${
              hydrationCompleted 
                ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg" 
                : "hover:shadow-lg"
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hydrationCompleted 
                      ? "bg-blue-500 text-white shadow-lg" 
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}>
                    {hydrationCompleted ? <CheckCircle className="w-5 h-5" /> : <Droplets className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-lg font-semibold">Step 1: Hydration</span>
                    {hydrationCompleted && (
                      <Badge className="ml-2 bg-blue-500 hover:bg-blue-600 shadow-sm">Complete</Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Start your day by drinking a full glass of water. Hydration helps clear brain fog and improves focus.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg mb-4 border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-2">💡 Why This Helps:</h4>
                  <p className="text-sm text-blue-700">
                    Dehydration can worsen brain fog and make it harder to concentrate. Starting with water helps your
                    brain function optimally. <span className="text-green-600 font-medium">#KeepHydrated</span>
                  </p>
                </div>
                <Button
                  onClick={() => setHydrationCompleted(!hydrationCompleted)}
                  className={`transition-all duration-300 ${
                    hydrationCompleted 
                      ? "bg-blue-500 hover:bg-blue-600 shadow-lg" 
                      : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
                  }`}
                >
                  {hydrationCompleted ? "Completed ✓" : "Mark as Complete"}
                </Button>
              </CardContent>
            </Card>

            {/* Step 2: Breathing */}
            <Card className={`transition-all duration-300 hover:scale-105 ${
              breathingCompleted 
                ? "ring-2 ring-green-500 bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg" 
                : "hover:shadow-lg"
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    breathingCompleted 
                      ? "bg-green-500 text-white shadow-lg" 
                      : "bg-green-100 text-green-600 hover:bg-green-200"
                  }`}>
                    {breathingCompleted ? <CheckCircle className="w-5 h-5" /> : <Wind className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-lg font-semibold">Step 2: Breathing</span>
                    {breathingCompleted && (
                      <Badge className="ml-2 bg-green-500 hover:bg-green-600 shadow-sm">Complete</Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Take 5 minutes for mindful breathing. This helps reduce anxiety and centers your mind for the day ahead.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg mb-4 border border-green-100">
                  <h4 className="font-medium text-green-800 mb-2">🧘‍♂️ 4-7-8 Breathing Technique:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Inhale for 4 counts</li>
                    <li>• Hold for 7 counts</li>
                    <li>• Exhale for 8 counts</li>
                    <li>• Repeat for 5 minutes</li>
                  </ul>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button
                    onClick={startBreathingExercise}
                    disabled={isBreathing}
                    className="bg-green-600 hover:bg-green-700 hover:shadow-lg transition-all duration-300"
                  >
                    {isBreathing ? "In Progress..." : "Start Breathing Exercise"}
                  </Button>
                  {breathingCompleted && (
                    <Badge className="bg-green-500 px-3 py-1 shadow-sm">Complete ✓</Badge>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Top 3 Tasks */}
            <Card className={`lg:col-span-2 transition-all duration-300 hover:scale-[1.02] ${
              tasksCompleted 
                ? "ring-2 ring-purple-500 bg-gradient-to-br from-purple-50 to-violet-100 shadow-lg" 
                : "hover:shadow-lg"
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    tasksCompleted 
                      ? "bg-purple-500 text-white shadow-lg" 
                      : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                  }`}>
                    {tasksCompleted ? <CheckCircle className="w-5 h-5" /> : <Target className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-lg font-semibold">Step 3: Top 3 Tasks</span>
                    {tasksCompleted && (
                      <Badge className="ml-2 bg-purple-500 hover:bg-purple-600 shadow-sm">Complete</Badge>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6">
                  Write down your top 3 priorities for today. Keeping it simple helps prevent overwhelm and improves focus.
                </p>

                {/* Add Task Form */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6 border border-purple-100">
                  <div className="flex gap-2 mb-3">
                    <Input
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="What's important to you today?"
                      className="flex-1 border-purple-200 focus:border-purple-400"
                      onKeyPress={(e) => e.key === "Enter" && addTask()}
                    />
                    <select
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value as "high" | "medium" | "low")}
                      className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all border border-purple-200 hover:border-purple-300"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                    <Button 
                      onClick={addTask} 
                      size="sm" 
                      className="bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-purple-700">💡 Focus on what truly matters. Quality over quantity.</p>
                </div>

                {/* Tasks List */}
                <div className="space-y-3">
                  {tasks.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                      <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>Add your first task to get started</p>
                    </div>
                  ) : (
                    tasks.map((task, index) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-sm"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Checkbox 
                          checked={task.completed} 
                          onCheckedChange={() => toggleTask(task.id)}
                          className="data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                        />
                        <span className={`flex-1 transition-all duration-300 ${
                          task.completed 
                            ? "line-through text-slate-500" 
                            : "text-slate-800"
                        }`}>
                          {task.text}
                        </span>
                        <Badge className={`${getPriorityColor(task.priority)} shadow-sm`}>
                          {task.priority}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteTask(task.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>

                {tasks.length > 0 && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">
                        Progress: {tasks.filter((t) => t.completed).length} of {tasks.length} completed
                      </span>
                      {tasksCompleted && (
                        <Badge className="bg-purple-500 shadow-sm animate-pulse">All Done! 🎉</Badge>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Completion Message */}
          {completionPercentage === 100 && (
            <Card className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 border-none shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Fantastic Work! 🎉</h3>
                <p className="text-lg text-slate-600 mb-4">
                  You've completed your morning routine. Your mind is clearer, your body is hydrated, and you have a
                  clear focus for the day.
                </p>
                <p className="text-sm text-slate-500">
                  Remember: Progress over perfection. You're building habits that will serve you well.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Breathing Exercise Modal */}
      {isBreathing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div 
            style={{ backgroundColor: getBreathingColor() }}
            className="rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 relative transform scale-100 animate-in">
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-red-500 text-2xl font-bold transition-colors duration-300"
              onClick={closeBreathingModal}
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
              Breathing Exercise
            </h2>

            {/* Breathing Phase Indicator */}
            <div className="relative w-full h-96 flex items-center justify-center">
              <img
                src={getBreathingInstruction().image}
                alt={getBreathingInstruction().text}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="relative z-10 bg-black/40 text-white text-2xl font-semibold px-6 py-3 rounded-lg">
                {getBreathingInstruction().text}
              </div>
            </div>

            {/* Analogue Timer */}
            <div className="flex flex-col items-center mb-6">
              <svg width="120" height="120" viewBox="0 0 120 120" className="mb-2">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#34d399"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 54}
                  strokeDashoffset={2 * Math.PI * 54 * (1 - modalTimer / breathingDuration)}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 1s linear" }}
                />
                {/* Clock hand */}
                <line
                  x1="60"
                  y1="60"
                  x2={60 + 50 * Math.sin((2 * Math.PI * modalTimer) / breathingDuration)}
                  y2={60 - 50 * Math.cos((2 * Math.PI * modalTimer) / breathingDuration)}
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="60" r="6" fill="#10b981" />
              </svg>
              <span className="text-sm text-slate-600 font-medium">Timer Progress</span>
            </div>

            {/* Digital Timer */}
            <div className="text-center mb-6">
              <span className="text-4xl font-mono text-green-700 font-bold">
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
              </span>
              <div className="text-slate-500 text-sm mt-1">
                {`${remainingTime} remaining`}
              </div>
            </div>

            {/* Timer Controls */}
            <div className="flex justify-center gap-3 mb-4">
              {!isTimerRunning ? (
                <Button
                  onClick={resumeTimer}
                  className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  disabled={modalTimer >= breathingDuration}
                >
                  <Play className="w-4 h-4" />
                  Resume
                </Button>
              ) : (
                <Button
                  onClick={pauseTimer}
                  className="bg-yellow-600 hover:bg-yellow-700 flex items-center gap-2"
                >
                  <Pause className="w-4 h-4" />
                  Pause
                </Button>
              )}
              
              <Button
                onClick={resetTimer}
                variant="outline"
                className="flex items-center gap-2 hover:bg-slate-50"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={closeBreathingModal}
                variant="outline"
                className="bg-slate-50 hover:bg-red-600 hover:text-slate-200"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}