import Header from "@/components/Header";
import { CheckCircle, FileText, Users, Award, ArrowRight, Zap } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-900 rounded-full border border-blue-600">
              <p className="text-sm font-medium text-blue-300">
                Expertise em Análise Grafológica
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Perícia Grafotécnica
              </span>
              <br />
              Particular
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Serviços profissionais de perícia grafotécnica para investigações,
              validação de documentos e análises comportamentais com
              fundamentação científica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 group">
                Solicitar Avaliação
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-400 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Soluções profissionais em análise grafotécnica com fundamentação
              científica e rigor técnico
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-slate-700 rounded-xl p-8 border border-blue-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Parecer Técnico
              </h3>
              <p className="text-gray-300 mb-4">
                Emissão de pareceres técnicos fundamentados em análise
                grafológica com metodologia científica comprovada para
                contextos legais, corporativos e investigativos.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Análise pericial
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Documentação técnica
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Validade em juízo
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-slate-700 rounded-xl p-8 border border-blue-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Formulação de Quesitos
              </h3>
              <p className="text-gray-300 mb-4">
                Orientação especializada para formulação de quesitos periciais
                que garantam análise completa e adequada do objeto de perícia
                conforme normas técnicas e jurídicas.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Quesitos específicos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Conformidade legal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Consultoria prévia
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-slate-700 rounded-xl p-8 border border-blue-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-12 h-12 bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-amber-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Consultoria Prévia
              </h3>
              <p className="text-gray-300 mb-4">
                Discussão inicial e avaliação exploratória dos documentos ou
                questões grafotécnicas antes da perícia formal, orientando
                sobre viabilidade e procedimentos.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Avaliação preliminar
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Orientação técnica
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  Sem compromisso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Por Que Nos Escolher
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Expertise Reconhecida
                    </p>
                    <p className="text-gray-400 text-sm">
                      Profissional certificado com metodologia científica comprovada
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Sigilo Profissional
                    </p>
                    <p className="text-gray-400 text-sm">
                      Conformidade com ética profissional e proteção de dados
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Relatórios Detalhados
                    </p>
                    <p className="text-gray-400 text-sm">
                      Documentação técnica clara e acessível para diferentes contextos
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-white">
                      Atendimento Personalizado
                    </p>
                    <p className="text-gray-400 text-sm">
                      Soluções customizadas de acordo com suas necessidades específicas
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-blue-700">
              <div className="space-y-6">
                <div className="bg-slate-900 rounded-xl p-6 border border-blue-800">
                  <p className="text-sm text-blue-300 mb-2">Metodologia</p>
                  <p className="text-lg font-semibold text-white">
                    Abordagem Científica
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Baseada em neuropsicologia e análise comportamental
                  </p>
                </div>
                <div className="bg-slate-900 rounded-xl p-6 border border-blue-800">
                  <p className="text-sm text-blue-300 mb-2">Validade</p>
                  <p className="text-lg font-semibold text-white">
                    Aceita em Processos Legais
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Pareceres admissíveis em juízo
                  </p>
                </div>
                <div className="bg-slate-900 rounded-xl p-6 border border-blue-800">
                  <p className="text-sm text-blue-300 mb-2">Tempo</p>
                  <p className="text-lg font-semibold text-white">
                    Entrega Rápida
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Relatórios em 5-10 dias úteis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Analisar?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discussão inicial sem compromisso e
            apresentação detalhada dos serviços
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Orçamento
            </button>
            <a
              href="mailto:contato@example.com"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email de Contato
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col sm:flex-row gap-8 justify-center text-sm">
            <div>
              <p className="font-semibold mb-1">Telefone</p>
              <p className="text-gray-300">(11) 9999-9999</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="text-gray-300">contato@periografo.com.br</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Localização</p>
              <p className="text-gray-300">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>
            © 2024 Perícia Grafotécnica. Todos os direitos reservados. | Sigilo
            profissional garantido
          </p>
        </div>
      </footer>
    </div>
  );
}
