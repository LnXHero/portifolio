import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, MessageCircle, Moon, Sun, ArrowUp, Download, MapPin, Briefcase } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import myImage from './assets/imgLogo2.jpg'
import fishprojeto from './assets/fishprojeto.jpeg'
import hsprojeto from './assets/hsprojeto.jpeg'
import portimg from './assets/portimg.png'



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);

    // Scroll progress
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adicionando a classe 'dark' ao body quando darkMode é true
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">Portifólio</a>
            <div className="flex items-center space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Sobre</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projetos</a>
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  console.log('Dark mode:', !darkMode);
                }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-600" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-8 relative animate-fade-in">
            <img
              src={myImage}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto shadow-xl border-4 border-white dark:border-gray-800 object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white animate-fade-in">Heron.Dev</h1>
          <div className="h-8 mb-8">
            <TypeAnimation
              sequence={[
                'Desenvolvedor FrontEnd',
                2000,
                'UI/UX Designer',
                2000,
                'Tech Enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              className="text-xl text-blue-600 dark:text-blue-400"
              repeat={Infinity}
            />
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="/cv.pdf"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Curriculum-Vitae
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Com menos de 1 ano de experiência em desenvolvimento web, tenho me dedicado a criar
                soluções que não apenas resolvem problemas, mas também proporcionam experiências
                excepcionais aos usuários.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Minha jornada na programação começou a pouco tempo. Desde então, venho
                constantemente aprimorando minhas habilidades e explorando novas tecnologias.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-500">
                  <Briefcase className="mr-2" size={20} />
                  <span>Disponível para projetos</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="mr-2" size={20} />
                  <span>Valinhos / SP</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">C#</span>
                    <span className="text-gray-600 dark:text-gray-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">React</span>
                    <span className="text-gray-600 dark:text-gray-400">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-gray-600 dark:text-gray-400">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
                    <span className="text-gray-600 dark:text-gray-400">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Java</span>
                    <span className="text-gray-600 dark:text-gray-400">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                    <span className="text-gray-600 dark:text-gray-400">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Array de projetos */}
            {[
              {
                id: 1,
                name: 'HideAndSeek_Plugin',
                description: 'Esconde-esconde no Minecraft! Feito por um dev apaixonado por diversão e criatividade.',
                tags: ['Java'],
                image: hsprojeto,
                githubLink: 'https://github.com/LnXHero/hsPlugin',
              },
              {
                id: 2,
                name: 'Portifólio',
                description: 'Desenvolvedor transformando ideias em realidade. Cada linha de código é escrita com dedicação, buscando sempre inovar.',
                tags: ['React', 'Tailwind', 'JavaScript', 'TypeScript', 'Vite'],
                image: portimg,
                githubLink: 'https://github.com/LnXHero/portifolio',
              },
              {
                id: 3,
                name: 'Fishing_Plugin',
                description: 'Pesque peixes raros e itens especiais! Desenvolvido por um dev que adora uma boa pescaria.',
                tags: ['Java'],
                image: fishprojeto,
                githubLink: 'https://github.com/LnXHero/fishPlugin',
              },
            ].map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={`Project ${project.id}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubLink}
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="inline-block" size={24} />
                    </a>
                    {/* <a
                      href="#"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver demo
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contato</h2>
          <div className="max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2">
                <a href="https://wa.me/19971555423" className="flex items-center hover:text-blue-400">
                  <Phone className="mr-2" size={20} />
                  WhatsApp
                </a>
                <a href="https://discord.gg/d4zTMHnwQH" className="flex items-center hover:text-blue-400">
                  <MessageCircle className="mr-2" size={20} />
                  Discord
                </a>
                <a href="#" className="flex items-center hover:text-blue-400">
                  <Mail className="mr-2" size={20} />
                  guilherme@praweb.com.br
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-blue-400">Início</a>
                <a href="#about" className="block hover:text-blue-400">Sobre</a>
                <a href="#projects" className="block hover:text-blue-400">Projetos</a>
                <a href="#contact" className="block hover:text-blue-400">Contato</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/LnXHero" className="hover:text-blue-400">
                  <Github size={24} />
                </a>
                {/* Add other social media icons */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;