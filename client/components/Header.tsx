import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-slate-900 via-slate-900 to-transparent border-b border-blue-500/20 sticky top-0 z-50 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20"
          >
            <FileText size={24} />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-none">
              Veritas
            </span>
            <span className="text-xs text-gray-400 font-medium">
              Assessoria Técnica
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1 md:gap-8">
          {[
            { label: "Início", href: "/" },
            { label: "Sobre", href: "/sobre" },
            { label: "Blog", href: "/blog" },
            { label: "Contato", href: "#contato" },
          ].map((item) => (
            <motion.div key={item.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {item.label === "Contato" ? (
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white font-medium transition-colors text-sm px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5541996297915"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 md:ml-8 relative group px-6 py-2.5 rounded-lg font-semibold text-white text-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            <div className="relative">Solicitar Serviço</div>
          </motion.a>
        </div>
      </nav>
    </header>
  );
}
