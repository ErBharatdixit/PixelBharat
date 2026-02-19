import { Github, Linkedin, Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
      return (
            <footer className="bg-black text-white py-12 border-t border-white/10">
                  <div className="container mx-auto px-6 md:px-12 lg:px-24">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                              {/* Contact Info */}
                              <div>
                                    <h2 className="text-2xl font-bold font-mono mb-4">
                                          BHARAT DIXIT
                                    </h2>
                                    <p className="text-gray-400 mb-6 max-w-md">
                                          Exploring new technologies and building digital solutions.
                                          Feel free to connect with me!
                                    </p>
                                    <div className="space-y-2">
                                          <a href="tel:+917068876861" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                                                +91 7068876861
                                          </a>
                                          <a href="mailto:bharat010703@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                                                bharat010703@gmail.com
                                          </a>
                                    </div>
                              </div>

                              {/* Social Links */}
                              <div className="md:text-right">
                                    <h3 className="text-lg font-bold mb-4">Connect on Socials</h3>
                                    <div className="flex md:justify-end gap-4 items-center flex-wrap">
                                          <a href="https://www.facebook.com/bharat.dixit.5872" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-blue-500" title="Facebook">
                                                <Facebook className="w-5 h-5" />
                                          </a>
                                          <a href="https://wa.me/917068876861" className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-green-500" title="WhatsApp">
                                                <MessageCircle className="w-5 h-5" />
                                                <span className="text-sm font-medium">7068876861</span>
                                          </a>
                                          <a href="https://www.instagram.com/panditbharatdixit/" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-pink-500" title="Instagram">
                                                <Instagram className="w-5 h-5" />
                                          </a>
                                          <a href="https://github.com/ErBharatdixit" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white" title="GitHub">
                                                <Github className="w-5 h-5" />
                                          </a>
                                          <a href="https://www.linkedin.com/in/bharat-dixit-8a3555296/" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-blue-400" title="LinkedIn">
                                                <Linkedin className="w-5 h-5" />
                                          </a>
                                    </div>
                              </div>
                        </div>

                        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-600 text-sm">
                              © {new Date().getFullYear()} Bharat Dixit. All rights reserved.
                        </div>
                  </div>
            </footer>
      );
};
