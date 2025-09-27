import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="mb-4">
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              2025.09.19 - 09.30
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            早秋
            <span className="block text-accent">装备焕新</span>
          </h1>

          <p className="text-lg mb-8 text-balance">精选商品，7折起售</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              选购 Just Do It 精选同款
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              观看
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>

      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary/80"></div>
    </section>
  )
}
