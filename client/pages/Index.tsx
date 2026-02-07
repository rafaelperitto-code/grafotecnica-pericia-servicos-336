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
              Revelando a Verdade através da
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Escrita
              </span>
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

            <div className="mt-12 flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-gray-400 text-sm">Avaliações Concluídas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-gray-400 text-sm">Taxa de Precisão</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-gray-400 text-sm">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Soluções abrangentes em análise grafotécnica para diversos
              contextos profissionais e legais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Perícia de Documentos
              </h3>
              <p className="text-slate-600 mb-4">
                Análise autenticidade de assinatura, verificação de fraudes
                documentais e validação de escritas em contextos legais e
                comerciais.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Autenticação de assinatura
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Detecção de fraudes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Comparação caligráfica
                </li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Análise Comportamental
              </h3>
              <p className="text-slate-600 mb-4">
                Avaliação de traços de personalidade, potencial de honestidade
                e predisposições comportamentais através análise grafológica.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Perfil personalidade
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Análise integridade
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Relatório técnico
                </li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-amber-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Apoio Legal & Forense
              </h3>
              <p className="text-slate-600 mb-4">
                Pareceres técnicos e depoimentos periciais para processos
                judiciais, investigações e litígios comerciais e familiares.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Parecer pericial
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Depoimento técnico
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Consultoria legal
                </li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Consultorias Especializadas
              </h3>
              <p className="text-slate-600 mb-4">
                Assessoria em recrutamento, seleção de pessoal e análise de
                compatibilidade comportamental para contextos corporativos.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Seleção pessoal
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Avaliação executiva
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                  Consultoria corporativa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Por Que Nos Escolher
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Expertise Reconhecida
                    </p>
                    <p className="text-slate-600 text-sm">
                      Profissional certificado com metodologia científica comprovada
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Sigilo Profissional
                    </p>
                    <p className="text-slate-600 text-sm">
                      Conformidade com ética profissional e proteção de dados
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Relatórios Detalhados
                    </p>
                    <p className="text-slate-600 text-sm">
                      Documentação técnica clara e acessível para diferentes contextos
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Atendimento Personalizado
                    </p>
                    <p className="text-slate-600 text-sm">
                      Soluções customizadas de acordo com suas necessidades específicas
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6">
                  <p className="text-sm text-slate-600 mb-2">Metodologia</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Abordagem Científica
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Baseada em neuropsicologia e análise comportamental
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-sm text-slate-600 mb-2">Validade</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Aceita em Processos Legais
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Pareceres admissíveis em juízo
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <p className="text-sm text-slate-600 mb-2">Tempo</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Entrega Rápida
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Relatórios em 5-10 dias úteis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 md:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Analisar?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discussão inicial sem compromisso e
            apresentação detalhada dos serviços
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Orçamento
            </button>
            <a
              href="mailto:contato@example.com"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email de Contato
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row gap-8 justify-center text-sm">
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
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 text-center text-slate-600 text-sm">
          <p>
            © 2024 Perícia Grafotécnica. Todos os direitos reservados. | Sigilo
            profissional garantido
          </p>
        </div>
      </footer>
    </div>
  );
}
