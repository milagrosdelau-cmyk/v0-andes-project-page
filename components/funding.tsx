"use client"

import Image from "next/image"
import { 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  Scale, 
  DollarSign,
  Users,
  Target,
  BarChart3,
  ArrowRight,
  FileText,
  Calendar,
  Percent,
  Building2,
  Briefcase,
  Globe
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const investmentNeeds = {
  total: "USD $185.000",
  period: "2026-2028",
  breakdown: [
    { category: "Operaciones y Logística", amount: 65000, percentage: 35, description: "Equipamiento, transporte, seguros, guías certificadas" },
    { category: "Capacitación y Formación", amount: 42000, percentage: 23, description: "Talleres, materiales, instructoras, certificaciones" },
    { category: "Marketing y Comercialización", amount: 28000, percentage: 15, description: "Plataforma digital, alianzas con agencias, contenido" },
    { category: "Recursos Humanos", amount: 35000, percentage: 19, description: "Equipo núcleo: coordinación, psicóloga, gestión" },
    { category: "Contingencia y Evaluación", amount: 15000, percentage: 8, description: "Imprevistos, auditoría externa, medición de impacto" },
  ]
}

const revenueModel = [
  {
    source: "Experiencias Premium (Turistas)",
    revenue: "USD $95.000",
    percentage: 51,
    details: "150-200 turistas/año a USD $450-650 por experiencia de 2-3 días",
    icon: Globe,
    color: "bg-emerald-500"
  },
  {
    source: "Programas Corporativos RSE",
    revenue: "USD $45.000",
    percentage: 24,
    details: "8-12 empresas con programas de team building con propósito",
    icon: Building2,
    color: "bg-blue-500"
  },
  {
    source: "Subvenciones Públicas/Privadas",
    revenue: "USD $30.000",
    percentage: 16,
    details: "CORFO, Fondos de Género, Cooperación Internacional",
    icon: FileText,
    color: "bg-amber-500"
  },
  {
    source: "Alianzas Estratégicas",
    revenue: "USD $15.000",
    percentage: 9,
    details: "Convenios con fundaciones y ONGs aliadas",
    icon: Users,
    color: "bg-rose-500"
  },
]

const financialProjections = [
  { year: "Año 1 (2026)", investment: "$75.000", revenue: "$45.000", breakeven: "60%", participants: 80 },
  { year: "Año 2 (2027)", investment: "$65.000", revenue: "$85.000", breakeven: "131%", participants: 150 },
  { year: "Año 3 (2028)", investment: "$45.000", revenue: "$120.000", breakeven: "267%", participants: 220 },
]

const scenarios = [
  { 
    scenario: "Optimista", 
    probability: "22%", 
    participants: 310, 
    financing: "72%",
    description: "Alta demanda turística + 3 alianzas corporativas adicionales"
  },
  { 
    scenario: "Base", 
    probability: "61%", 
    participants: 245, 
    financing: "60%",
    highlight: true,
    description: "Cumplimiento de metas comerciales y de impacto planificadas"
  },
  { 
    scenario: "Conservador", 
    probability: "14%", 
    participants: 170, 
    financing: "42%",
    description: "Crecimiento más lento, requiere ajuste de costos"
  },
  { 
    scenario: "Adverso", 
    probability: "3%", 
    participants: 90, 
    financing: "21%",
    description: "Escenario extremo - activación de plan de contingencia"
  },
]

const whyInvest = [
  {
    icon: Target,
    title: "Impacto Medible y Verificable",
    description: "Cada peso invertido se traduce en indicadores concretos: mujeres capacitadas, ingresos generados, redes creadas. Reportes trimestrales con métricas IRIS+.",
    metric: "ROI Social: 3.2x"
  },
  {
    icon: Scale,
    title: "Modelo Escalable",
    description: "El modelo funciona con 5 grupos y también con 50. No dependemos de infraestructura propia, lo que permite crecer sin grandes inversiones fijas.",
    metric: "Costo por beneficiaria: $350"
  },
  {
    icon: TrendingUp,
    title: "Sostenibilidad Financiera",
    description: "Al año 3, el proyecto genera más ingresos que gastos. Las experiencias premium financian el 100% de las becas para mujeres vulnerables.",
    metric: "Break-even: Año 2"
  },
  {
    icon: Shield,
    title: "Cumplimiento ESG Corporativo",
    description: "Las empresas que nos apoyan cumplen sus metas ESG en género, comunidades y medio ambiente. Certificaciones y reportes de impacto incluidos.",
    metric: "ODS: 5, 8, 10, 12"
  },
]

const riskMitigation = [
  { risk: "Baja demanda turística", mitigation: "Diversificación de ingresos (40% no depende de turismo)", probability: "Media" },
  { risk: "Rotación de participantes", mitigation: "Programa de mentoría y seguimiento post-trekking", probability: "Baja" },
  { risk: "Condiciones climáticas", mitigation: "Calendario flexible y seguros de contingencia", probability: "Media" },
  { risk: "Dependencia de alianzas", mitigation: "Mínimo 4 fuentes de ingreso activas", probability: "Baja" },
]

export function Funding() {
  return (
    <section id="financiamiento" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Para Inversores de Impacto
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4 mb-6 text-balance">
            Inversión con Propósito y Retorno Medible
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Andes Renacen combina sostenibilidad financiera con impacto social verificable. 
            Presentamos un modelo de negocio híbrido donde las experiencias premium financian 
            la transformación de mujeres en situación de vulnerabilidad.
          </p>
        </div>

        {/* Investment Opportunity Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <p className="text-3xl font-bold">{investmentNeeds.total}</p>
              <p className="text-sm opacity-80">Inversión Total Requerida</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold text-foreground">{investmentNeeds.period}</p>
              <p className="text-sm text-muted-foreground">Horizonte de Inversión</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <Percent className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold text-foreground">267%</p>
              <p className="text-sm text-muted-foreground">ROI Proyectado Año 3</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="pt-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-3xl font-bold text-foreground">450+</p>
              <p className="text-sm text-muted-foreground">Mujeres Impactadas</p>
            </CardContent>
          </Card>
        </div>

        {/* Why Invest */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
            Por Qué Invertir en Andes Renacen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyInvest.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                  <Badge variant="secondary" className="text-xs font-semibold">
                    {item.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Use of Funds */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Uso de los Fondos
            </h3>
            <p className="text-muted-foreground mb-8">
              Cada dólar tiene un destino claro y verificable. El 92% se destina directamente 
              a operaciones y programas; solo el 8% cubre contingencias y evaluación externa.
            </p>
            <div className="space-y-5">
              {investmentNeeds.breakdown.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-semibold text-foreground">{item.category}</span>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">
                        ${item.amount.toLocaleString()}
                      </span>
                      <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Revenue Model */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Modelo de Ingresos (Proyección Anual Año 3)
            </h3>
            <p className="text-muted-foreground mb-8">
              Cuatro fuentes de ingreso diversificadas minimizan el riesgo y aseguran 
              sostenibilidad. El turismo premium es el motor principal.
            </p>
            <div className="space-y-4">
              {revenueModel.map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-semibold text-foreground">{item.source}</span>
                        <Badge variant="outline" className="ml-2">{item.percentage}%</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{item.details}</p>
                      <p className="text-lg font-bold text-primary">{item.revenue}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">Ingresos Totales Proyectados (Año 3)</span>
                <span className="text-2xl font-bold text-primary">USD $185.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Projections Table */}
        <div className="bg-card rounded-2xl p-8 border border-border mb-16">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
            Proyecciones Financieras 2026-2028
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Período</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Inversión Requerida</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Ingresos Proyectados</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Autofinanciamiento</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Beneficiarias</th>
                </tr>
              </thead>
              <tbody>
                {financialProjections.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium text-foreground">{row.year}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{row.investment}</td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{row.revenue}</td>
                    <td className="text-center py-4 px-4">
                      <Badge 
                        variant={parseInt(row.breakeven) >= 100 ? "default" : "secondary"}
                        className={parseInt(row.breakeven) >= 100 ? "bg-emerald-500" : ""}
                      >
                        {row.breakeven}
                      </Badge>
                    </td>
                    <td className="text-center py-4 px-4 text-muted-foreground">{row.participants} mujeres</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            El proyecto alcanza el punto de equilibrio en el segundo año y genera excedentes 
            a partir del tercero, permitiendo reinversión en expansión.
          </p>
        </div>

        {/* Monte Carlo Simulation */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-serif font-bold text-foreground">
                Análisis de Escenarios (Simulación Montecarlo)
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Modelamos 10.000 iteraciones con variables de demanda, costos y alianzas 
              para proyectar probabilidades realistas de cada escenario.
            </p>
            <div className="space-y-4">
              {scenarios.map((row, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    row.highlight 
                      ? "bg-primary/5 border-primary/30" 
                      : "bg-muted/30 border-border"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {row.highlight && <CheckCircle2 className="w-4 h-4 text-primary" />}
                      <span className={`font-semibold ${row.highlight ? "text-primary" : "text-foreground"}`}>
                        {row.scenario}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {row.probability}
                      </Badge>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {row.participants} participantes
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{row.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Mitigation */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-serif font-bold text-foreground">
                Gestión de Riesgos
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Identificamos los principales riesgos y desarrollamos estrategias 
              de mitigación para cada uno.
            </p>
            <div className="space-y-4">
              {riskMitigation.map((item, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-foreground text-sm">{item.risk}</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        item.probability === "Baja" 
                          ? "border-emerald-500 text-emerald-600" 
                          : "border-amber-500 text-amber-600"
                      }`}
                    >
                      Prob. {item.probability}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Mitigación:</span> {item.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Únete como Inversor de Impacto
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ofrecemos distintos niveles de participación: desde alianzas corporativas 
            hasta inversión directa. Agenda una reunión para conocer el pitch deck completo 
            y explorar cómo podemos trabajar juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="#contacto">
                Solicitar Pitch Deck
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contacto">
                Agendar Reunión
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" /> Due Diligence Disponible
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Reportes IRIS+ Trimestrales
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Visitas a Terreno
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
