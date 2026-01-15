"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bot,
  Send,
  Heart,
  MessageCircle,
  Sparkles,
  User,
  Compass,
  Star,
  Users,
  Mic,
  HelpCircle,
  Wifi,
  WifiOff,
} from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Response from "@/components/ui/markdown";


interface Message {
  id: string;
  content: string;
  sender: "user" | "frdBot";
  timestamp: Date;
}

/* ------------------------------------------------------------------ */
/* QUICK‑SUGGESTIONS & DEFAULT MESSAGES (kept in a separate file)    */
/* ------------------------------------------------------------------ */
import { quickSuggestions, defaultsResponse } from "../quotes.js";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.VITE_API_BASE_URL ||
  "http://localhost:8000/api";

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>(defaultsResponse);
  const [inputMessage, setInputMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [responseContent, setResponseContent] = useState("");
  const router = useRouter();


  /* ------------------------------------------------------------------ */
  /* Scroll to the newest message when the list changes                 */
  /* ------------------------------------------------------------------ */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  /* ------------------------------------------------------------------ */
  /* Simulated connection to the Django backend (run once on mount)        */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const connectToBackend = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/connect/`);
        if (response.status === 200) {
          setIsConnected(true);
        }

        // Keep a small artificial delay so the UI shows the "connecting"
        // state for a moment – useful for demos.
        setTimeout(() => setIsConnected(true), 2000);
      } catch (error) {
        console.error("Failed to connect to server:", error);
        setIsConnected(false);
      }
    };

    connectToBackend();
  }, []);

  /* ------------------------------------------------------------------ */
  /* Send a message (user → bot)                                           */
  /* ------------------------------------------------------------------ */
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    if (inputMessage.trim().length < 3) {
      return setResponseContent("Try a longer Prompt bruv");
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);
    scrollToBottom();

    /* ------------------------------------------------------------------ */
    /* If the backend isn’t reachable yet, fall back to a dummy reply      */
    /* ------------------------------------------------------------------ */
    if (!isConnected) {
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `🤖 (Dummy Reply) You said: "${userMessage.content}". Thanks for sharing!`,
          sender: "frdBot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
      return;
    }

    /* ------------------------------------------------------------------ */
    /* Real backend request (when you have it running)                      */
    /* ------------------------------------------------------------------ */
    try {
      const resp = await axios.post(
        `${API_BASE_URL}/chat/`,
        { message: inputMessage },
        { headers: { "Content-Type": "application/json" } }
      );

      if (resp.status === 200) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: resp.data.response || "Sorry, could you please rephrase?",
          sender: "frdBot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "⚠️ Unable to connect to the server. Showing dummy response instead.",
        sender: "frdBot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
      scrollToBottom();
    }
  };

  /* ------------------------------------------------------------------ */
  /* Quick‑suggestion button handler                                        */
  /* ------------------------------------------------------------------ */
  const handleQuickSuggestion = (suggestion: string) => {
    setInputMessage(suggestion);
    handleSendMessage();
  };

  /* ------------------------------------------------------------------ */
  /* UI Rendering                                                          */
  /* ------------------------------------------------------------------ */
  return (
    <div className="max-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 py-6 gap-6 max-w-auto mx-auto px-4 md:px-8 lg:px-16">
          {/* ---------- Sidebar ---------- */}
          <div className="lg:col-span-1 space-y-4">
            {/* Quick Support */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  Quick Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {quickSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full overflow-hidden text-left justify-start h-auto p-3 text-sm hover:bg-purple-100 border-purple-200 bg-transparent"
                    onClick={() => handleQuickSuggestion(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Wellness Tools */}
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  Wellness Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-blue-100"
                  asChild
                >
                  <Link href="/toolkit" className="flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    Daily Toolkit
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-blue-100"
                  asChild
                >
                  <Link href="/emotions" className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Emotion Practice
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-blue-100"
                  asChild
                >
                  <Link href="/empathy" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Empathy Training
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-blue-100"
                  asChild
                >
                  <Link href="/confidence" className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Confidence Builder
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-blue-100"
                  asChild
                >
                  <Link href="/voice" className="flex items-center gap-2">
                    <Mic className="w-4 h-4" />
                    Voice Exercises
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:bg-blue-100"
                  asChild
                >
                  <Link href="/help" className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Help &amp; Support
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* ---------- Main Chat Area ---------- */}
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-8rem)] flex flex-col shadow-lg">
              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg sticky top-0 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        AI Emotional Companion
                      </CardTitle>
                      <p className="text-sm text-purple-100">
                        Here to listen and support you
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isConnected ? (
                      <div className="flex items-center gap-1 text-green-200">
                        <Wifi className="w-4 h-4" />
                        <span className="text-xs">Connected</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-red-200">
                        <WifiOff className="w-4 h-4" />
                        <span className="text-xs">
                          Backend Yet to be hosted
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-white">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    {message.sender === "frdBot" && (

                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}

                    <div
                      className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                          : "bg-white border border-slate-200"
                      }`}
                    >
                      <Response response={message.content} />
                      <p
                        className={`text-xs mt-2 ${
                          message.sender === "user"
                            ? "text-blue-100"
                            : "text-slate-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    {message.sender === "user" && (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </CardContent>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Share what's on your mind... I'm here to listen."
                    className="flex-1 border-slate-300 focus:border-purple-500"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || !isConnected}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <p className="text-xs text-slate-500 mt-2 text-center">
                  💙 Remember: If you're in crisis, please reach out to a
                  mental health professional or crisis hotline immediately.
                </p>
              </div>
            </Card>
          </div>

          {/* right side */}
          {/* <div className="auth lg:col-span-1 space-y-4 flex gap-2 justify-center mt-4">
            <Button onClick={()=>router.push("/login")}>login</Button>
            <Button onClick={()=>router.push("/register")}>sign up</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}