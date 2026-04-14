import Link from "next/link"
import { Mountain, Heart } from "lucide-react"

const footerLinks = {
  proyecto: [
    { href: "#nosotros", label: "Sobre Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#impacto", label: "Impacto Social" },
    { href: "#aliados", label: "Aliados" },
  ],
  participar: [
    { href: "#", label: "Inscríbete" },
    { href: "#", label: "Rutas Disponibles" },
    { href: "#", label: "Formación" },
    { href: "#contacto", label: "Contacto" },
  ],
  aliados: [
    { href: "#", label: "Ser Aliado" },
    { href: "#financiamiento", label: "Financiamiento" },
    { href: "#", label: "Programa RSE" },
    { href: "#", label: "Voluntariado" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
                <Mountain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-background leading-tight">
                  Andes Renacen
                </span>
                <span className="text-[10px] text-background/60 leading-tight">
                  Rutas de Reconexión
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
              Emprendimiento social con perspectiva feminista. Transformamos vidas de mujeres 
              a través de experiencias de turismo en la Cordillera de los Andes.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>en Chile</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Proyecto</h4>
            <ul className="space-y-3">
              {footerLinks.proyecto.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Participar</h4>
            <ul className="space-y-3">
              {footerLinks.participar.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Aliados</h4>
            <ul className="space-y-3">
              {footerLinks.aliados.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Andes Renacen. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
