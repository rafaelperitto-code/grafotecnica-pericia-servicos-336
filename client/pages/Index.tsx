import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import FooterComponent from "@/components/FooterComponent";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";

export default function Index() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Header />
      <HeroSection onContactClick={() => setIsFormOpen(true)} />
      <ServicesSection />
      <ProcessSection />

      {/* Contact Section */}
      <section
        id="contato"
        className="relative py-24 md:py-32 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Entre em contato conosco para discutir sua situação e descobrir
              como podemos ajudá-lo com nossa expertise em perícia grafotécnica
              e documentoscopia.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="group relative px-8 py-4 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur group-hover:blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative">Solicitar Orçamento</div>
            </button>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                WhatsApp
              </div>
              <a
                href="https://wa.me/5541996297915"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                (41) 99629-7915
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Email</div>
              <a
                href="mailto:contato.veritasassessoria@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors break-all"
              >
                contato.veritasassessoria@gmail.com
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20 backdrop-blur-sm text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                Sigilo
              </div>
              <p className="text-gray-300">
                Confidencialidade profissional garantida
              </p>
            </div>
          </div>
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
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.99 1.526 9.927 9.927 0 003.39 19.126c1.327 0 2.619-.356 3.733-.967l.738 1.178 1.374-1.374-.988-1.572a9.988 9.988 0 002.827-7.086c0-5.468-4.438-9.93-9.9-9.93z" />
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
