"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function EyebrowSlider() {
  const [sliderPosition, setSliderPosition] = useState(10) // 0-100 percentage
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateSliderPosition(e.clientX)
      }
    }

    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateSliderPosition(e.touches[0].clientX)
      }
    }
    const handleGlobalTouchEnd = () => setIsDragging(false)

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove)
      document.addEventListener("mouseup", handleGlobalMouseUp)
      document.addEventListener("touchmove", handleGlobalTouchMove)
      document.addEventListener("touchend", handleGlobalTouchEnd)
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchmove", handleGlobalTouchMove)
      document.removeEventListener("touchend", handleGlobalTouchEnd)
    }
  }, [isDragging])

  return (
    <div>
      <div className="w-full">
        <div
          ref={containerRef}
          className="relative w-full aspect-[3/1] rounded-lg overflow-hidden shadow-2xl cursor-ew-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Before Image (Left side) */}
          <div className="absolute inset-0">
            <Image
              src="/images/eyebrow-before.png"
              alt="Avant - Sourcils naturels"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* After Image (Right side) with clip-path */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
          >
            <Image
              src="/images/eyebrow-after.png"
              alt="Après - Microblading sourcils"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Vertical divider line */}
          <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${sliderPosition}%` }} />

          {/* Draggable handle */}
          <div
            className="absolute top-1/2 w-12 h-12 bg-white border-4 border-white rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg cursor-grab active:cursor-grabbing transition-transform duration-150 hover:scale-110 flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
              <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
            </div>
          </div>

          {/* Labels - show only the appropriate label based on slider position */}
          {sliderPosition < 50 ? (
            <div className="absolute bottom-6 left-6 text-white text-lg font-medium bg-black/40 px-3 py-1 rounded backdrop-blur-sm">
              Avant - Sourcils naturels
            </div>
          ) : (
            <div className="absolute bottom-6 right-6 text-white text-lg font-medium bg-black/40 px-3 py-1 rounded backdrop-blur-sm">
              Après - Brow lifting
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
