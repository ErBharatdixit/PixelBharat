import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User, Tag } from "lucide-react";

export const Contact = () => {
      const [formData, setFormData] = useState({
            name: "",
            subject: "",
            message: ""
      });

      const [isSent, setIsSent] = useState(false);

      const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            const whatsappNumber = "917068876861"; // Bharat's WhatsApp number
            const text = `*New Message from Portfolio Website*\n\n*From:* ${formData.name}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            window.open(whatsappUrl, "_blank");

            setIsSent(true);
            setFormData({ name: "", subject: "", message: "" });
            setTimeout(() => setIsSent(false), 5000);
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({
                  ...formData,
                  [e.target.name]: e.target.value
            });
      };

      return (
            <section id="contact" className="py-20 relative overflow-hidden">
                  {/* Background Elements */}
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px] -z-10" />

                  <div className="container mx-auto px-6 md:px-12 lg:px-24">
                        <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="mb-16 text-center md:text-left"
                        >
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                              <div className="w-20 h-1 bg-accent-primary rounded-full mx-auto md:mx-0" />
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-12 items-start">
                              {/* Contact Form */}
                              <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 p-8 rounded-2xl border border-white/10"
                              >
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                          {/* Name */}
                                          <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                                <div className="relative">
                                                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                                      <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors"
                                                            placeholder="Bharat Dixit"
                                                      />
                                                </div>
                                          </div>

                                          {/* Subject */}
                                          <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                                <div className="relative">
                                                      <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                                      <input
                                                            type="text"
                                                            id="subject"
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                            required
                                                            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors"
                                                            placeholder="Project Inquiry / Collaboration"
                                                      />
                                                </div>
                                          </div>

                                          {/* Message */}
                                          <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                                <div className="relative">
                                                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                                                      <textarea
                                                            id="message"
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            required
                                                            rows={5}
                                                            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                                                            placeholder="Tell me about your project or idea..."
                                                      />
                                                </div>
                                          </div>

                                          <button
                                                type="submit"
                                                className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${isSent
                                                      ? "bg-accent-primary text-white"
                                                      : "bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:opacity-90 hover:scale-[1.02] active:scale-95"
                                                      }`}
                                          >
                                                {isSent ? (
                                                      "✅ Opening WhatsApp..."
                                                ) : (
                                                      <>
                                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                            </svg>
                                                            Send via WhatsApp
                                                            <Send className="w-4 h-4" />
                                                      </>
                                                )}
                                          </button>

                                          <p className="text-center text-xs text-gray-500">
                                                Clicking the button will open WhatsApp with your message pre-filled.
                                          </p>
                                    </form>
                              </motion.div>

                              {/* Info Panel */}
                              <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="space-y-8"
                              >
                                    <h3 className="text-2xl font-bold mb-4">Let's build something amazing together</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                          Have a project in mind or want to discuss opportunities? Fill out the form and your message will be sent directly to my WhatsApp — I'll get back to you quickly!
                                    </p>

                                    {/* WhatsApp highlight card */}
                                    <div className="flex items-center gap-4 p-4 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl">
                                          <div className="p-3 bg-accent-primary/20 rounded-xl">
                                                <svg className="w-6 h-6 text-accent-primary" viewBox="0 0 24 24" fill="currentColor">
                                                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                          </div>
                                          <div>
                                                <p className="text-sm font-semibold text-accent-primary">WhatsApp Direct</p>
                                                <p className="text-gray-400 text-sm">+91 70688 76861</p>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                                          <div className="p-3 bg-accent-secondary/20 rounded-xl">
                                                <Mail className="w-6 h-6 text-accent-secondary" />
                                          </div>
                                          <div>
                                                <p className="text-sm font-semibold text-accent-secondary">Email</p>
                                                <p className="text-gray-400 text-sm">bharat010703@gmail.com</p>
                                          </div>
                                    </div>
                              </motion.div>
                        </div>
                  </div>
            </section>
      );
};
