import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function FooterComponent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-blue-500/20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid md:grid-cols-4 gap-12 py-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">Veritas</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Assessoria técnica especializada em perícia grafotécnica e documentoscopia.
            </p>
            <p className="text-sm text-gray-500">© 2024 Veritas Assessoria Técnica. Todos os direitos reservados.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "/" },
                { label: "Sobre", href: "/sobre" },
                { label: "Blog", href: "/blog" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Parecer Técnico",
                "Formulação de Quesitos",
                "Consultoria Prévia",
                "Documentoscopia",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/5541996297915"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Phone size={20} className="flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span>(41) 99629-7915</span>
              </a>
              <a
                href="mailto:contato.veritasassessoria@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
              >
                <Mail size={20} className="flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                <span>contato.veritasassessoria@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0" />
                <span>Paraná, Brasil</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between py-8"
        >
          <div className="text-gray-400 text-sm mb-6 md:mb-0">
            Sigilo profissional garantido | Análise confidencial e especializada
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center text-gray-400 hover:text-blue-400 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
