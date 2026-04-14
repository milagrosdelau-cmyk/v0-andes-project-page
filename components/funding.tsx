import Image from "next/image"
import { CheckCircle2, TrendingUp, Shield, Scale } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fundingSources = [
  {
    title: "Venta de Experiencias Turísticas",
    description: "Tanto al público local como internacional. Las experiencias de lujo sustentan la labor social.",
    percentage: 35,
  },
  {
    title: "Alianzas Institucionales",
    description: "Convenios con instituciones públicas y ONGs que comparten nuestra misión.",
    percentage: 25,
  },
  {
    title: "Programas RSE Corporativos",
    description: "Empresas mineras y energéticas con presupuestos de inversión social en los Andes.",
    percentage: 25,
  },
  {
    title: "Subvenciones y Fondos",
    description: "En materia de igualdad de género y turismo sustentable.",
    percentage: 15,
  },
]

const whyFinanceable = [
  {
    icon: TrendingUp,
    title: "Impacto Medible",
    description: "Cada actividad está vinculada a un indicador de cambio concreto en la vida de las participantes.",
  },
  {
    icon: Scale,
    title: "Escalable",
    description: "El modelo funciona con 5 grupos y también con 50. El crecimiento no depende de infraestructura propia.",
  },
  {
    icon: Shield,
    title: "Retorno Social y Económico",
    description: "Las empresas que nos apoyan cumplen sus metas ESG y conectan con comunidades inaccesibles.",
  },
]

const scenarios = [
  { scenario: "Optimista", probability: "22%", participants: "310", financing: "72%" },
  { scenario: "Base", probability: "61%", participants: "245", financing: "60%", highlight: true },
  { scenario: "Conservador", probability: "14%", participants: "170", financing: "42%" },
  { scenario: "Adverso", probability: "3%", participants: "90", financing: "21%" },
]

export function Funding() {
  return (
    <section id="financiamiento" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Modelo de Financiamiento
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Un Proyecto Estructurado con Lógica de Sostenibilidad
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Andes Renacen no es solo una buena idea: es un proyecto estructurado con lógica de financiamiento. 
            Los recursos que recibamos tienen un destino claro, un impacto medible y una estrategia de sostenibilidad a largo plazo.
          </p>
        </div>

        {/* Why Financeable */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {whyFinanceable.map((item, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-lg font-serif text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funding Sources */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
              Fuentes de Financiamiento
            </h3>
            <p className="text-muted-foreground mb-8">
              El financiamiento del proyecto se apoya en varias fuentes para no depender de una sola. 
              Este modelo híbrido asegura que la venta de experiencias de lujo sustente nuestra labor social.
            </p>
            <div className="space-y-6">
              {fundingSources.map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{source.title}</span>
                    <span className="text-sm font-semibold text-primary">{source.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/workshop.jpg"
              alt="Taller de formación"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Monte Carlo Simulation */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Simulación Montecarlo: Escenarios de Viabilidad
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Para tomar decisiones responsables no basta con un escenario optimista. 
              Aplicamos una simulación tipo Montecarlo para modelar distintos escenarios posibles.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Escenario</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Probabilidad</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Participantes</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Autofinanciamiento</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border ${
                      row.highlight ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {row.highlight && <CheckCircle2 className="w-4 h-4 text-primary" />}
                        <span className={`font-medium ${row.highlight ? "text-primary" : "text-foreground"}`}>
                          {row.scenario}
                        </span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{row.probability}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{row.participants} mujeres</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{row.financing} costos</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-6">
            El escenario base, con un 61% de probabilidad, confirma que el proyecto es financieramente viable 
            si captamos los fondos planificados y mantenemos las alianzas.
          </p>
        </div>
      </div>
    </section>
  )
}
