import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import { Award, BookOpen, Users, Briefcase } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre Mim
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Profissional dedicado à análise grafotécnica com rigor científico
              e ética profissional exemplar
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 md:py-32 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-slate-700 to-blue-900 rounded-2xl h-96 flex items-center justify-center text-gray-400">
              <span className="text-center text-sm">Sua Foto Aqui</span>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Trajetória Profissional
              </h2>
              <p className="text-gray-300 mb-4">
                Com mais de 15 anos de experiência em perícia grafotécnica,
                desenvolvi expertise em análise forense de documentos e
                autenticação de assinatura com rigor científico e metodologia
                comprovada.
              </p>
              <p className="text-gray-300 mb-6">
                Minha metodologia é fundamentada em caligrafia científica,
                técnicas forenses e análise pericial, garantindo pareceres
                técnicos de alta qualidade, confiabilidade e validade jurídica.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Award className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Certificações Internacionais
                    </p>
                    <p className="text-sm text-gray-400">
                      Membro de associações profissionais de relevância
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BookOpen className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Pesquisa Contínua
                    </p>
                    <p className="text-sm text-gray-400">
                      Atualização constante com as mais recentes descobertas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Briefcase className="text-blue-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Experiência Forense
                    </p>
                    <p className="text-sm text-gray-400">
                      Colaboração com instituições legais e investigativas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Áreas de Especialização
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-700 rounded-xl p-8 border border-blue-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Parecer Técnico
              </h3>
              <p className="text-gray-300">
                Emissão de pareceres fundamentados em análise grafológica
                científica, válidos para contextos legais, corporativos e
                investigativos com documentação técnica completa.
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-8 border border-purple-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Formulação de Quesitos
              </h3>
              <p className="text-gray-300">
                Orientação especializada na formulação de quesitos periciais
                adequados, garantindo análise completa conforme normas
                técnicas e jurídicas aplicáveis.
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-8 border border-amber-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Consultoria Prévia
              </h3>
              <p className="text-gray-300">
                Avaliação exploratória inicial dos documentos e questões
                grafotécnicas, orientando sobre viabilidade, procedimentos e
                próximos passos sem compromisso.
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-8 border border-emerald-700">
              <h3 className="text-xl font-bold text-white mb-4">
                Documentoscopia
              </h3>
              <p className="text-gray-300">
                Análise completa de documentos para detectar falsificações em
                RG, CNH, Passaporte, cédulas, diplomas e qualquer tipo de
                documento com metodologia científica forense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato para conhecer como posso ajudá-lo com seus
            desafios de análise grafotécnica
          </p>

          <button onClick={() => setIsFormOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Solicitar Serviço
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>
            © 2024 Veritas Assessoria Técnica. Todos os direitos reservados. | Sigilo
            profissional garantido
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5541996297915"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all z-40"
        title="Contato via WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.968 1.495c-1.529.823-2.868 1.949-3.746 3.267-.877 1.318-1.335 2.74-1.335 4.176 0 1.437.458 2.859 1.335 4.177 1.879 2.618 5.07 4.238 8.718 4.238h.007c1.436 0 2.847-.453 4.163-1.337l.019-.01 3.19.999-1.005-3.181.012-.019A9.884 9.884 0 0020 12c0-5.471-4.41-9.92-9.95-9.92Z" />
        </svg>
      </a>
    </div>
  );
}
