import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const objectives = [
  "Generar espacios seguros donde las mujeres puedan convivir y apoyarse",
  "Contribuir al bienestar emocional mediante el contacto con la naturaleza",
  "Favorecer la construcción de redes profesionales entre mujeres",
  "Facilitar oportunidades concretas de empleo dentro y fuera del proyecto",
  "Aportar al desarrollo económico de las comunidades locales en zonas andinas",
]

const values = [
  { title: "Igualdad", description: "Oportunidades para todas" },
  { title: "Sostenibilidad", description: "Cuidado del medio ambiente" },
  { title: "Sororidad", description: "Comunidad entre mujeres" },
  { title: "Autonomía", description: "Independencia económica" },
]

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Sobre el Proyecto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Transformando Vidas a Través de la Montaña
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Andes Renacen es un emprendimiento social con perspectiva feminista, desarrollado en Chile. 
            La idea central es aprovechar el entorno natural de la cordillera de los Andes para crear 
            experiencias de turismo transformador dirigidas a mujeres que están pasando por momentos difíciles.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/trekking-women.jpg"
                alt="Grupo de mujeres haciendo trekking en los Andes"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-card p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">+</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-foreground">60</span>
                  <p className="text-sm text-muted-foreground">Mujeres año 1</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Meta de participantes en nuestro primer año de pilotaje
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Nuestros Objetivos
            </h3>
            <div className="space-y-4 mb-8">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{objective}</p>
                </div>
              ))}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
