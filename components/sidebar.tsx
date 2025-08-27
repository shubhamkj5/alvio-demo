"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

interface SidebarProps {
  comparisons: Array<{
    title: string
    prompt: string
    chatgptLink: string
    alvioLink: string
  }>
  activeIndex: number
  onSelectComparison: (index: number) => void
}

export function Sidebar({ comparisons, activeIndex, onSelectComparison }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden luxury-glass rounded-xl p-3 luxury-shadow-md"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-80 luxury-glass border-r border-white/10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex justify-center">
              <Image src="https://alvio.io/mainLogo.png" alt="Alvio" width={120} height={48} className="h-12 w-auto" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-2">
              {comparisons.map((comparison, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onSelectComparison(index)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    activeIndex === index
                      ? "luxury-glass-active luxury-shadow-md border border-white/20"
                      : "hover:luxury-glass hover:luxury-shadow-sm"
                  }`}
                >
                  <div className="text-sm font-medium text-white/90 line-clamp-2">{comparison.title}</div>
                  <div className="text-xs text-white/60 mt-1 line-clamp-1">{comparison.prompt.substring(0, 60)}...</div>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
