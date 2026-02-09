import { CheckCircle, FileText, Lightbulb, Zap } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  onContactClick: () => void;
}

const services = [
  {
    id: 1,
    title: "Parecer Técnico",
    description:
      "Emissão de pareceres técnicos fundamentados em análise grafológica com metodologia científica comprovada.",
    icon: FileText,
    features: ["Análise pericial", "Documentação técnica", "Válido legalmente"],
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-600/10",
  },
  {
    id: 2,
    title: "Formulação de Quesitos",
    description:
      "Auxílio na formulação de questões técnicas fundamentadas para guiar a perícia de forma eficaz.",
    icon: Lightbulb,
    features: ["Questões estratégicas", "Orientação pericial", "Fundamentação técnica"],
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-600/10",
  },
  {
    id: 3,
    title: "Consultoria Prévia",
    description:
      "Consultas especializadas sobre viabilidade pericial, procedimentos e orientações técnicas antes da perícia formal.",
    icon: Zap,
    features: ["Avaliação de viabilidade", "Orientação procedimental", "Parecer inicial"],
    color: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-600/10",
  },
  {
    id: 4,
    title: "Documentoscopia",
    description:
      "Análise completa de documentos para comprovar autenticidade e detectar falsificações em RG, CNH, Passaporte e diplomas.",
    icon: Zap,
    features: ["Análise documental", "Detecção de falsificação", "Parecer forense"],
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-600/10",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Serviços Especializados
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções profissionais em perícia grafotécnica e documentoscopia com fundamentação científica, rigor técnico e excelência.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ translateY: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
                className={`group relative ${service.bgColor} backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 10 }}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle
                          size={20}
                          className={`flex-shrink-0 mt-1 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 -top-40 h-full w-full translate-x-full group-hover:translate-x-0 transform opacity-30 bg-gradient-to-r from-white to-transparent transition-transform duration-700"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
