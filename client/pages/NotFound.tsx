import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <p className="text-xl text-slate-600 mb-2">Página não encontrada</p>
          <p className="text-slate-500 mb-8">
            Desculpe, a página que você está procurando não existe ou foi
            movida.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
