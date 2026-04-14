import { Compass, Users, GraduationCap, Briefcase, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Compass,
    title: "Rutas de Trekking",
    description: "Experiencias de montaña diseñadas exclusivamente para grupos de mujeres, con acompañamiento psicosocial y facilitadoras locales.",
  },
  {
    icon: Heart,
    title: "Talleres de Liderazgo",
    description: "Desarrollo personal y liderazgo durante las rutas, con intención transformadora y diseño pedagógico.",
  },
  {
    icon: Users,
    title: "Networking Femenino",
    description: "Espacios de conexión con participantes y egresadas del programa para construir redes de apoyo profesional.",
  },
  {
    icon: GraduationCap,
    title: "Formación en Turismo",
    description: "Capacitación en turismo sostenible presencial y online, con certificación de Guía Local reconocida.",
  },
  {
    icon: Briefcase,
    title: "Inserción Laboral",
    description: "Acompañamiento para encontrar empleo dentro del proyecto o con empresas aliadas del sector turístico.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Más que Trekking: Un Proceso de Transformación
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lo que ofrecemos no es solo aventura. Es una combinación de turismo, acompañamiento comunitario, 
            formación profesional y acceso a empleo. Todo junto para cambiar algo en la vida de quien participa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}

          {/* Highlight Card */}
          <Card className="bg-primary text-primary-foreground border-none md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Red de Oportunidades</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                Cada grupo que completa el programa pasa a formar parte de una red activa 
                donde las mujeres se apoyan entre sí para encontrar trabajo, emprender o seguir formándose.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-primary-foreground/20">
                <div>
                  <span className="text-2xl font-bold">5+</span>
                  <p className="text-xs text-primary-foreground/70">Empresas aliadas</p>
                </div>
                <div>
                  <span className="text-2xl font-bold">100%</span>
                  <p className="text-xs text-primary-foreground/70">Acompañamiento</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
