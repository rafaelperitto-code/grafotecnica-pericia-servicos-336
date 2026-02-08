import Header from "@/components/Header";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "A Importância da Perícia Grafotécnica em Processos Legais",
    excerpt:
      "Entenda como a análise grafotécnica pode ser determinante em casos judiciais e qual é o papel do perito grafotécnico.",
    date: "15 de janeiro de 2024",
    category: "Perícia",
    slug: "importancia-pericia-grafotecnica",
  },
  {
    id: "2",
    title: "Como a Escrita Revela Detalhes Sobre a Personalidade",
    excerpt:
      "Descubra como características da escrita podem indicar traços de personalidade e comportamento do indivíduo.",
    date: "10 de janeiro de 2024",
    category: "Análise",
    slug: "escrita-personalidade",
  },
  {
    id: "3",
    title: "Detecção de Fraudes em Documentos: Técnicas Modernas",
    excerpt:
      "Conheça as técnicas mais avançadas utilizadas na detecção de fraudes documentais e falsificação de assinatura.",
    date: "5 de janeiro de 2024",
    category: "Técnicas",
    slug: "deteccao-fraudes-documentos",
  },
  {
    id: "4",
    title: "O Papel do Perito Grafotécnico em Investigações",
    excerpt:
      "Saiba como os peritos grafotécnicos contribuem para investigações criminais e processos administrativos.",
    date: "28 de dezembro de 2023",
    category: "Investigação",
    slug: "perito-grafotecnico-investigacoes",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Blog
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Veritas
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              Insights, análises e informações sobre perícia grafotécnica,
              autenticação de documentos e técnicas forenses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-32 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-slate-700 rounded-xl overflow-hidden border border-blue-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all group block"
              >
                <article className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-900 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-blue-400 group-hover:text-blue-300 font-semibold transition-colors">
                    Ler Artigo
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-8">
              Mais artigos em breve. Acompanhe nossas publicações!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interessado em Nossos Serviços?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato para discutir suas necessidades de análise
            grafotécnica
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Voltar ao Início
            <ArrowRight size={18} />
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
