import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compose email body
    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
    `.trim();

    // Open email client
    window.location.href = `mailto:contato.veritasassessoria@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-md w-full border border-blue-500/20 shadow-2xl shadow-blue-500/10 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Solicitar Serviço
                </h2>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4"
                    >
                      <span className="text-2xl">✓</span>
                    </motion.div>
                    <p className="text-green-400 font-semibold mb-2">
                      Mensagem enviada com sucesso!
                    </p>
                    <p className="text-gray-400 text-sm">
                      Entraremos em contato em breve.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {[
                      {
                        label: "Nome",
                        name: "name",
                        type: "text",
                        placeholder: "Seu nome",
                        required: true,
                      },
                      {
                        label: "Email",
                        name: "email",
                        type: "email",
                        placeholder: "seu@email.com",
                        required: true,
                      },
                      {
                        label: "Telefone/WhatsApp",
                        name: "phone",
                        type: "tel",
                        placeholder: "(41) 9999-9999",
                        required: false,
                      },
                      {
                        label: "Assunto",
                        name: "subject",
                        type: "text",
                        placeholder: "Assunto da solicitação",
                        required: true,
                      },
                    ].map((field, idx) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          {field.label}
                          {field.required && (
                            <span className="text-red-400"> *</span>
                          )}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full bg-slate-700/50 border border-blue-600/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mensagem <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-slate-700/50 border border-blue-600/30 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none"
                        placeholder="Descreva sua necessidade..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full group relative mt-2 px-6 py-3 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                      <div className="relative">Enviar Solicitação</div>
                    </motion.button>
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
