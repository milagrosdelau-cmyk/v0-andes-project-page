import Image from "next/image"
import { TrendingUp, Users, Target, MapPin } from "lucide-react"

const metrics = [
  {
    year: "2026",
    phase: "Pilotaje",
    participants: "60 mujeres",
    insertion: "40%",
    network: "1ª Red de Mentoras",
  },
  {
    year: "2027",
    phase: "Escalamiento",
    participants: "150 mujeres",
    insertion: "55%",
    network: "Certificación Guía Local",
  },
  {
    year: "2028",
    phase: "Consolidación",
    participants: "300 mujeres",
    insertion: "75%",
    network: "Modelo replicable en 3 regiones",
  },
]

const impactAreas = [
  {
    icon: Users,
    title: "Bienestar Emocional",
    description: "Mejora del bienestar psicosocial de las participantes a través del contacto con la naturaleza",
  },
  {
    icon: TrendingUp,
    title: "Empleabilidad",
    description: "Mayor empleabilidad de las mujeres que pasan por el programa de formación",
  },
  {
    icon: MapPin,
    title: "Comunidades Rurales",
    description: "Fortalecimiento de comunidades rurales en zonas andinas con turismo sostenible",
  },
  {
    icon: Target,
    title: "Presencia Femenina",
    description: "Mayor presencia de mujeres en actividades de montaña y naturaleza",
  },
]

export function Impact() {
  return (
    <section id="impacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Impacto Social
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Indicadores Sociales Proyectados
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Para poder hablar de impacto real, necesitamos medirlo. Detrás de cada porcentaje hay una mujer 
            que volvió a confiar en sí misma, que encontró trabajo, que le contó a otra lo que aprendió.
          </p>
        </div>

        {/* Timeline Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border ${
                index === 2 ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                  index === 2 ? "bg-white/20" : "bg-accent/20 text-accent-foreground"
                }`}>
                  Año {index + 1}
                </span>
                <span className={`text-2xl font-bold ${index === 2 ? "" : "text-foreground"}`}>
                  {metric.year}
                </span>
              </div>
              <h3 className={`text-lg font-semibold mb-4 ${index === 2 ? "" : "text-foreground"}`}>
                {metric.phase}
              </h3>
              <div className="space-y-3">
                <div className={`flex justify-between items-center pb-2 border-b ${
                  index === 2 ? "border-white/20" : "border-border"
                }`}>
                  <span className={`text-sm ${index === 2 ? "text-white/80" : "text-muted-foreground"}`}>
                    Participantes
                  </span>
                  <span className="font-semibold">{metric.participants}</span>
                </div>
                <div className={`flex justify-between items-center pb-2 border-b ${
                  index === 2 ? "border-white/20" : "border-border"
                }`}>
                  <span className={`text-sm ${index === 2 ? "text-white/80" : "text-muted-foreground"}`}>
                    Inserción Laboral
                  </span>
                  <span className="font-semibold">{metric.insertion}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${index === 2 ? "text-white/80" : "text-muted-foreground"}`}>
                    Red
                  </span>
                  <span className={`font-semibold text-right text-sm ${index === 2 ? "" : "text-foreground"}`}>
                    {metric.network}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/community.jpg"
              alt="Comunidad local en los Andes"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
              Áreas de Impacto Esperado
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {impactAreas.map((area, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{area.title}</h4>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
