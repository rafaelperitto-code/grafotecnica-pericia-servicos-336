import { CheckCircle, Clock, FileCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Você nos contata com detalhes do seu caso e suas necessidades específicas.",
    icon: FileCheck,
  },
  {
    number: "02",
    title: "Avaliação Prévia",
    description: "Realizamos uma avaliação inicial para confirmar viabilidade da perícia.",
    icon: CheckCircle,
  },
  {
    number: "03",
    title: "Análise Técnica",
    description: "Executamos a análise completa com metodologia científica comprovada.",
    icon: Award,
  },
  {
    number: "04",
    title: "Parecer Final",
    description: "Entregamos parecer técnico documentado e válido para contextos legais.",
    icon: Clock,
  },
];

const benefits = [
  { title: "Profissional Certificado", description: "Metodologia científica comprovada" },
  { title: "Documentação Completa", description: "Técnica clara e acessível" },
  { title: "Soluções Personalizadas", description: "Adequadas às suas necessidades" },
  { title: "Sigilo Profissional", description: "Confidencialidade garantida" },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Processo estruturado e transparente do início ao fim
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-[60%] w-[80px] h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
                  )}

                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full relative group">
                    {/* Number badge */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 mt-4">
                      <Icon className="text-blue-400" size={24} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group"
            >
              <CheckCircle className="text-blue-400 mb-4 group-hover:scale-125 transition-transform duration-300" size={24} />
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
