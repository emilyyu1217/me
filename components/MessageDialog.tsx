"use client"

import { useState } from "react"
import { supabase, Message } from "@/lib/supabase"

interface MessageDialogProps {
  isOpen: boolean
  onClose: () => void
}

const QUESTIONS = [
  "What's your favorite color?",
  "Who's your favorite entrepreneur?"
]

export function MessageDialog({ isOpen, onClose }: MessageDialogProps) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [selectedQuestion, setSelectedQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [showPasswordInput, setShowPasswordInput] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const { error } = await supabase
        .from("messages")
        .insert([{ email, message, question: selectedQuestion || null, answer: answer || null }])

      if (error) throw error

      setStatus("success")
      setEmail("")
      setMessage("")
      setSelectedQuestion("")
      setAnswer("")
      setTimeout(() => setStatus("idle"), 3000)
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        const data = await res.json()
        setMessages(data.messages)
        setIsAdmin(true)
      } else {
        alert("Invalid password")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error verifying password")
    }
  }

  const handleClose = () => {
    setIsAdmin(false)
    setShowPasswordInput(false)
    setPassword("")
    setMessages([])
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-gray-800 rounded-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-white">
              {isAdmin ? "Messages" : "Send a Message"}
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {isAdmin ? (
            <div className="space-y-4">
              {messages.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-4">No messages yet.</p>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="border border-gray-800 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">
                      {new Date(msg.created_at).toLocaleString()}
                    </p>
                    <p className="text-sm text-blue-400 mb-2">{msg.email}</p>
                    <p className="text-sm text-gray-300">{msg.message}</p>
                    {msg.question && (
                      <div className="mt-2 pt-2 border-t border-gray-800">
                        <p className="text-xs text-gray-500">{msg.question}</p>
                        <p className="text-sm text-green-400">{msg.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          ) : showPasswordInput ? (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-600"
                  required
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowPasswordInput(false)}
                  className="flex-1 px-4 py-2 text-sm text-gray-400 border border-gray-800 rounded hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200 transition-colors"
                >
                  View Messages
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-600 resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Pick a question (optional)</label>
                <select
                  value={selectedQuestion}
                  onChange={(e) => setSelectedQuestion(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-600"
                >
                  <option value="">Select a question...</option>
                  {QUESTIONS.map((q) => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>
              {selectedQuestion && (
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your answer</label>
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full bg-black border border-gray-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-gray-600"
                    placeholder="Type your answer..."
                  />
                </div>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-4 py-2 text-sm bg-white text-black rounded hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : status === "error" ? "Error" : "Send Message"}
              </button>
              <button
                type="button"
                onClick={() => setShowPasswordInput(true)}
                className="w-full text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                Admin
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
