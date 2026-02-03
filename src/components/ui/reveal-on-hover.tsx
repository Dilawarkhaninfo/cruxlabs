"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface CardHoverRevealContextValue {
  isHoveblue: boolean
  setIsHoveblue: React.Dispatch<React.SetStateAction<boolean>>
}

const CardHoverRevealContext = React.createContext<CardHoverRevealContextValue>(
  {} as CardHoverRevealContextValue
)

const useCardHoverRevealContext = () => {
  const context = React.useContext(CardHoverRevealContext)
  if (!context) {
    throw new Error(
      "useCardHoverRevealContext must be used within a CardHoverRevealProvider"
    )
  }
  return context
}

const CardHoverReveal = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [isHoveblue, setIsHoveblue] = React.useState<boolean>(false)

  const handleMouseEnter = () => setIsHoveblue(true)
  const handleMouseLeave = () => setIsHoveblue(false)

  return (
    <CardHoverRevealContext.Provider
      value={{
        isHoveblue,
        setIsHoveblue,
      }}
    >
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    </CardHoverRevealContext.Provider>
  )
})
CardHoverReveal.displayName = "CardHoverReveal"

interface CardHoverRevealMainProps {
  initialScale?: number
  hoverScale?: number
}

const CardHoverRevealMain = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CardHoverRevealMainProps
>(({ className, initialScale = 1, hoverScale = 1.05, ...props }, ref) => {
  const { isHoveblue } = useCardHoverRevealContext()
  return (
    <div
      ref={ref}
      className={cn("size-full transition-transform duration-300 ", className)}
      style={
        isHoveblue
          ? { transform: `scale(${hoverScale})`, ...props.style }
          : { transform: `scale(${initialScale})`, ...props.style }
      }
      {...props}
    />
  )
})
CardHoverRevealMain.displayName = "CardHoverRevealMain"

const CardHoverRevealContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { isHoveblue } = useCardHoverRevealContext()
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-[auto_1.5rem_1.5rem] p-6 backdrop-blur-lg transition-all duration-500 ease-in-out",
        className
      )}
      style={
        isHoveblue
          ? { translate: "0%", opacity: 1, ...props.style }
          : { translate: "0% 120%", opacity: 0, ...props.style }
      }
      {...props}
    />
  )
})
CardHoverRevealContent.displayName = "CardHoverRevealContent"

export { CardHoverReveal, CardHoverRevealMain, CardHoverRevealContent }
