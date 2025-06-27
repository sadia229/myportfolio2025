
import { useEffect, useState } from 'react';
import { Terminal, Code, User, Briefcase, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Welcome to my digital realm...';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Docker', 
    'AWS', 'Linux', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL'
  ];

  const projects = [
    {
      name: 'CyberShield',
      description: 'Advanced penetration testing framework',
      tech: ['Python', 'Kali Linux', 'Metasploit'],
      status: '[CLASSIFIED]'
    },
    {
      name: 'QuantumCrypt',
      description: 'Next-gen encryption algorithm implementation',
      tech: ['C++', 'Cryptography', 'Assembly'],
      status: '[ACTIVE]'
    },
    {
      name: 'NeuralNet-X',
      description: 'AI-powered threat detection system',
      tech: ['Python', 'TensorFlow', 'PyTorch'],
      status: '[DEPLOYED]'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Matrix-style background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent animate-pulse"></div>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-xs opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Terminal className="w-8 h-8 text-green-400" />
            <div className="text-2xl font-bold">
              <span className="text-green-400">[</span>
              <span className="text-white">SYSTEM</span>
              <span className="text-green-400">]</span>
              <span className="animate-pulse ml-2">█</span>
            </div>
          </div>
          
          <div className="border border-green-400 p-6 bg-black/50 backdrop-blur-sm">
            <div className="text-green-300 mb-2">$ whoami</div>
            <h1 className="text-4xl font-bold text-white mb-4 glow-text">
              ALEX CIPHER
            </h1>
            <div className="text-green-400 mb-4 h-8">
              {typedText}<span className="animate-pulse">█</span>
            </div>
            <div className="text-green-300">
              <span className="text-green-400">&gt;</span> Full Stack Developer | Cybersecurity Enthusiast | Digital Architect
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">
              <span className="text-green-400">[</span>ABOUT<span className="text-green-400">]</span>
            </h2>
          </div>
          
          <div className="border border-green-400 p-6 bg-black/50 backdrop-blur-sm">
            <div className="text-green-300 mb-2">$ cat about.txt</div>
            <div className="text-green-100 space-y-4">
              <p>
                Penetrating the digital frontier since 2018. Specializing in crafting secure, 
                scalable applications while exploring the depths of cybersecurity and AI.
              </p>
              <p>
                When I'm not debugging code or hunting vulnerabilities, you'll find me 
                reverse engineering malware or contributing to open-source security tools.
              </p>
              <div className="text-green-400 mt-4">
                <span className="text-green-300">Status:</span> ONLINE | 
                <span className="text-green-300"> Location:</span> ENCRYPTED | 
                <span className="text-green-300"> Clearance:</span> TOP SECRET
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">
              <span className="text-green-400">[</span>SKILLS<span className="text-green-400">]</span>
            </h2>
          </div>
          
          <div className="border border-green-400 p-6 bg-black/50 backdrop-blur-sm">
            <div className="text-green-300 mb-4">$ ls -la /skills/</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="text-green-100 hover:text-white hover:glow-text transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-green-400">&gt;</span> {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">
              <span className="text-green-400">[</span>PROJECTS<span className="text-green-400">]</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className="border border-green-400 p-6 bg-black/50 backdrop-blur-sm hover:bg-green-900/10 transition-all duration-300"
              >
                <div className="text-green-300 mb-2">$ cat projects/{project.name.toLowerCase()}.md</div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white glow-text">{project.name}</h3>
                  <span className="text-green-400 text-sm">{project.status}</span>
                </div>
                <p className="text-green-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-1 border border-green-400 text-green-300 text-sm hover:bg-green-400 hover:text-black transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Mail className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">
              <span className="text-green-400">[</span>CONTACT<span className="text-green-400">]</span>
            </h2>
          </div>
          
          <div className="border border-green-400 p-6 bg-black/50 backdrop-blur-sm">
            <div className="text-green-300 mb-4">$ ./initiate_contact.sh</div>
            <div className="space-y-4">
              <div className="text-green-100">
                <span className="text-green-400">&gt;</span> Encrypted channels available for secure communication
              </div>
              <div className="flex gap-6">
                <a href="#" className="flex items-center gap-2 text-green-300 hover:text-white hover:glow-text transition-all duration-300">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-green-300 hover:text-white hover:glow-text transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-green-300 hover:text-white hover:glow-text transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
              </div>
              <div className="text-green-300 mt-4">
                <span className="text-green-400">Email:</span> cipher@encrypted.domain
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <div className="border border-green-400 p-4 bg-black/50 backdrop-blur-sm">
            <div className="text-green-300 mb-2">$ uptime</div>
            <div className="text-green-100">
              System operational since 2018 | Last breach: NEVER | Security level: MAXIMUM
            </div>
            <div className="text-green-400 mt-2 animate-pulse">
              [CONNECTION SECURED]
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
