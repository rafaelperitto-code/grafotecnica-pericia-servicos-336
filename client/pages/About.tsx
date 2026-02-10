import Header from "@/components/Header";
import FooterComponent from "@/components/FooterComponent";
import ContactForm from "@/components/ContactForm";
import { Award, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Perícia Grafotécnica
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                com Excelência
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Perito grafotécnico e documentoscópista dedicado à análise científica com rigor técnico, metodologia comprovada e ética profissional exemplar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl h-96 flex items-center justify-center border border-blue-500/20 shadow-2xl shadow-blue-500/10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-center text-gray-400 relative z-10">
                  Sua Foto Aqui
                </span>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                Trajetória
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Profissional
                </span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-300 mb-6 leading-relaxed">
                Com mais de 15 anos de experiência em perícia grafotécnica e documentoscopia, desenvolvi expertise em análise forense de documentos, autenticação de assinatura e detecção de falsificações com rigor científico e metodologia comprovada.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 mb-8 leading-relaxed"
              >
                Minha metodologia é fundamentada em caligrafia científica, técnicas forenses e análise pericial, combinando perícia grafotécnica e documentoscopia para garantir pareceres técnicos de alta qualidade, confiabilidade e validade jurídica.
              </motion.p>

              {/* Credentials */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  {
                    icon: Award,
                    title: "Certificações Internacionais",
                    desc: "Membro de associações profissionais de relevância",
                  },
                  {
                    icon: BookOpen,
                    title: "Pesquisa Contínua",
                    desc: "Atualização constante com as mais recentes descobertas",
                  },
                  {
                    icon: Briefcase,
                    title: "Experiência Forense",
                    desc: "Colaboração com instituições legais e investigativas",
                  },
                ].map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ translateX: 10 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-300">
                        <Icon className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
                      </div>
                      <div>
                        <p className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {cred.title}
                        </p>
                        <p className="text-sm text-gray-400">{cred.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Áreas de Especialização
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Expertise em múltiplas disciplinas da perícia técnica e análise forense
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Parecer Técnico",
                description:
                  "Emissão de pareceres fundamentados em análise grafológica científica, válidos para contextos legais, corporativos e investigativos com documentação técnica completa.",
                color: "from-blue-600 to-cyan-600",
                borderColor: "border-blue-500/30",
              },
              {
                title: "Formulação de Quesitos",
                description:
                  "Orientação especializada na formulação de quesitos periciais adequados, garantindo análise completa conforme normas técnicas e jurídicas aplicáveis.",
                color: "from-purple-600 to-pink-600",
                borderColor: "border-purple-500/30",
              },
              {
                title: "Consultoria Prévia",
                description:
                  "Avaliação exploratória inicial dos documentos e questões grafotécnicas, orientando sobre viabilidade, procedimentos e próximos passos sem compromisso.",
                color: "from-amber-600 to-orange-600",
                borderColor: "border-amber-500/30",
              },
              {
                title: "Documentoscopia",
                description:
                  "Análise completa de documentos para detectar falsificações em RG, CNH, Passaporte, cédulas, diplomas e qualquer tipo de documento com metodologia científica forense.",
                color: "from-emerald-600 to-teal-600",
                borderColor: "border-emerald-500/30",
              },
            ].map((expertise, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ translateY: -8 }}
                className={`group relative bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-8 border ${expertise.borderColor} hover:border-opacity-100 transition-all duration-300 backdrop-blur-sm`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${expertise.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${expertise.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                ></div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {expertise.title}
                </h3>

                <p className="text-gray-300 relative z-10">
                  {expertise.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-blue-900/50 to-purple-900/50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Entre em contato para conhecer como posso ajudá-lo com seus desafios de análise grafotécnica e documentoscopia.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur group-hover:blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative flex items-center gap-2">
                Solicitar Serviço
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <FooterComponent />

      {/* Contact Form Modal */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5541996297915"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.968 1.495c-1.529.823-2.868 1.949-3.746 3.267-.877 1.318-1.335 2.74-1.335 4.176 0 1.437.458 2.859 1.335 4.177 1.879 2.618 5.07 4.238 8.718 4.238h.007c1.436 0 2.847-.453 4.163-1.337l.019-.01 3.19.999-1.005-3.181.012-.019A9.884 9.884 0 0020 12c0-5.471-4.41-9.92-9.95-9.92Z" />
        </svg>
      </a>

      {/* CSS Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
