"use client"

import { Building2, Landmark, Heart, Leaf, Coins, Users, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const allies = [
  {
    name: "CORFO",
    program: "Semilla Inicia Mujeres",
    type: "Fondo Público",
    icon: Landmark,
    investment: "Hasta $17 millones CLP",
    description: "Financia emprendimientos liderados por mujeres. Contacto: semillainicia@corfo.cl",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Scotiabank Chile",
    program: "ScotiaINSPIRA",
    type: "Inversión ESG",
    icon: Coins,
    investment: "$490 millones disponibles",
    description: "Programa de inversión social con convocatoria abierta desde marzo 2026. Directora: Katia Berdichewsky.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    name: "Fundación Colunga",
    program: "Fondo Transforma",
    type: "Fundación Privada",
    icon: Heart,
    investment: "Financiamiento + Mentoría",
    description: "Apoya innovación social con financiamiento y mentorías. Director: Arturo Celedón De Andraca.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    name: "Fondo Alquimia",
    program: "Derechos de Mujeres",
    type: "Fondo Feminista",
    icon: Users,
    investment: "Apoyo territorial",
    description: "Primer fondo feminista de Chile (2002). Financia organizaciones por derechos de mujeres. Contacto: Paula Contreras.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    name: "Fundación Avina",
    program: "Colaboración de Impacto",
    type: "Fundación Internacional",
    icon: Leaf,
    investment: "25+ años de experiencia",
    description: "Facilita colaboraciones de impacto en América Latina. Responsable Chile: Pamela Ríos Vera.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    name: "Anglo American",
    program: "Desarrollo Comunitario (CDC)",
    type: "Inversión ESG",
    icon: Building2,
    investment: "Presupuesto comunidades",
    description: "Programas para comunidades vecinas a operaciones en la cordillera. Foco en educación y movilidad social.",
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    name: "Fundació SURT",
    program: "Empoderamiento de Mujeres",
    type: "Fundación Internacional",
    icon: Sparkles,
    investment: "5.135+ personas atendidas",
    description: "Fundación de Dones (Barcelona) especializada en empoderamiento personal, económico y comunitario de mujeres. Lidera proyectos de investigación social e innovación metodológica con perspectiva de género.",
    color: "bg-purple-500/10 text-purple-600",
    link: "https://surt.org/es/",
  },
]

const publicFunds = [
  {
    name: "SERNATUR",
    program: "Fondo de Turismo Sustentable",
    description: "Financia proyectos que articulan turismo con comunidades locales.",
  },
  {
    name: "Ministerio de la Mujer",
    program: "Fondos de Autonomía Económica",
    description: "Especialmente útil para etapas de formación y certificación laboral.",
  },
]

export function Allies() {
  return (
    <section id="aliados" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nuestros Aliados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Financiadores de Impacto Identificados
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hemos identificado financiadores que no solo aportan dinero, sino que comparten una visión de cambio social. 
            Los clasificamos según el tipo de relación que queremos construir con cada uno.
          </p>
        </div>

        {/* Main Allies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {allies.map((ally, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${ally.color}`}>
                    <ally.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {ally.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-serif text-foreground">{ally.name}</CardTitle>
                <p className="text-sm font-medium text-primary">{ally.program}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                  <Coins className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-foreground">{ally.investment}</span>
                </div>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {ally.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Public Funds Section */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">
            Fondos Públicos Adicionales
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {publicFunds.map((fund, index) => (
              <div key={index} className="flex gap-4 p-4 bg-secondary/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{fund.name}</h4>
                  <p className="text-sm text-primary mb-1">{fund.program}</p>
                  <p className="text-sm text-muted-foreground">{fund.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Trabajamos con instituciones comprometidas con el impacto social real
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["CORFO", "ScotiaINSPIRA", "Colunga", "Alquimia", "Avina", "Anglo American", "SURT"].map((name) => (
              <span key={name} className="text-lg font-semibold text-foreground/50">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
