import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            PG
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900 leading-none">
              Pericia
            </span>
            <span className="text-xs text-slate-600 font-medium">
              Grafotecnica
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-700 hover:text-slate-900 font-medium transition-colors text-sm"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className="text-slate-700 hover:text-slate-900 font-medium transition-colors text-sm"
          >
            Sobre
          </Link>
          <a
            href="#contato"
            className="text-slate-700 hover:text-slate-900 font-medium transition-colors text-sm"
          >
            Contato
          </a>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors">
            Solicitar Serviço
          </button>
        </div>
      </nav>
    </header>
  );
}
