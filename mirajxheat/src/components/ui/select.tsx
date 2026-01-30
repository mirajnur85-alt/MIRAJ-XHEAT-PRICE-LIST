import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "appearance-none w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] rounded-xl px-4 py-3 text-sm font-medium text-white cursor-pointer transition-all duration-300 hover:border-[#00eaff] hover:bg-[rgba(0,234,255,0.1)] focus:outline-none focus:border-[#00eaff] focus:ring-2 focus:ring-[rgba(0,234,255,0.3)]",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a9b0ff] pointer-events-none" />
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }

