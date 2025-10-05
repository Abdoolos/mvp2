'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useTheme as useNextTheme } from 'next-themes'
import { ReactNode } from 'react'

// Custom hook to maintain compatibility with existing code
export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme()
  
  return {
    theme: theme as 'light' | 'dark' | 'system',
    setTheme,
    resolvedTheme: resolvedTheme as 'light' | 'dark'
  }
}

interface ThemeProviderProps {
  children: ReactNode
  [key: string]: any
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
