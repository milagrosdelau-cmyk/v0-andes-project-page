import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Mountain } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-andes.jpg"
          alt="Mujeres haciendo trekking en los Andes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-white/90">Emprendimiento Social en Chile</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 text-balance">
            Rutas de Reconexión y Oportunidades para Mujeres
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
            Experiencias de turismo transformador en la Cordillera de los Andes. 
            Reconecta contigo misma, teje vínculos con otras mujeres y accede a oportunidades reales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group">
              Conoce Nuestras Rutas
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              Apoya el Proyecto
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-white">300+</span>
              <span className="text-xs text-white/70">Mujeres al 2028</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-white">75%</span>
              <span className="text-xs text-white/70">Autonomía Económica</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm mb-2">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-white">3</span>
              <span className="text-xs text-white/70">Regiones de Chile</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
