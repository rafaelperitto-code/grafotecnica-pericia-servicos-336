import Header from "@/components/Header";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const blogPostsData: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    author: string;
    content: string;
  }
> = {
  "importancia-pericia-grafotecnica": {
    title: "A Importância da Perícia Grafotécnica em Processos Legais",
    date: "15 de janeiro de 2024",
    category: "Perícia",
    author: "Veritas Assessoria Técnica",
    content: `
# A Importância da Perícia Grafotécnica em Processos Legais

A perícia grafotécnica é uma disciplina científica que desempenha um papel fundamental em diversos processos legais e investigativos. A análise cuidadosa da escrita pode revelar informações críticas que determinam o resultado de casos complexos.

## O que é Perícia Grafotécnica?

A perícia grafotécnica é o estudo científico da escrita manuscrita com objetivo de estabelecer autenticidade, identificar autores, ou detectar falsificações. Utilizando metodologia comprovada e técnicas forenses avançadas, o perito grafotécnico consegue determinar com alto grau de confiabilidade características importantes de documentos.

## Aplicações em Processos Legais

### 1. Autenticação de Assinatura
Uma das aplicações mais comuns é a verificação de autenticidade de assinaturas em documentos importantes como:
- Testamentos
- Contratos
- Títulos de propriedade
- Procurações

### 2. Detecção de Fraudes
A perícia grafotécnica é essencial para identificar documentos falsificados ou alterados, protegendo os direitos das partes envolvidas em processos judiciais.

### 3. Investigações Criminais
Em casos de estelionato, falsificação de documentos e outros crimes, a análise grafotécnica fornece evidências técnicas valiosas para investigações.

## Metodologia Científica

A análise grafotécnica baseia-se em princípios científicos sólidos:

- **Análise de Características Morfológicas**: Forma das letras, pressão da escrita, inclinação
- **Análise de Movimentos**: Velocidade, ritmo e fluidez da escrita
- **Comparação Técnica**: Cotejo sistemático entre amostras

## Validade Jurídica

Os pareceres técnicos elaborados por peritos grafotécnicos qualificados são reconhecidos como evidência válida em processos judiciais. Quando fundamentados em metodologia científica apropriada, esses pareceres auxiliam juízes e árbitros na tomada de decisões importantes.

## Conclusão

A perícia grafotécnica é uma ferramenta indispensável para garantir justiça e proteção de direitos em contextos legais. Sua aplicação adequada pode fazer diferença significativa na resolução de casos complexos, oferecendo certeza técnica quando outros métodos são insuficientes.

Se você necessita de análise grafotécnica para seus documentos, entre em contato conosco para uma avaliação especializada.
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Artigo não encontrado
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
          >
            <ArrowLeft size={18} />
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Article Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar ao Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-semibold">{post.category}</span>
            </div>
            <div>
              <span>Por {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 md:py-32 bg-slate-800">
        <article className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace("# ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h3
                      key={index}
                      className="text-2xl font-bold text-white mt-6 mb-3"
                    >
                      {paragraph.replace("## ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-300">
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </article>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interessado em Nossos Serviços?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Precisando de análise grafotécnica profissional? Entre em contato
            conosco para discutir seu caso.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Serviço
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>
            © 2024 Veritas Assessoria Técnica. Todos os direitos reservados. |
            Sigilo profissional garantido
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
