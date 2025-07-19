import React, { useState, useEffect, useRef } from 'react';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Smartphone,
  Award,
  Calendar,
  MapPin,
  ChevronRight,
  Zap,
  Sparkles,
  HardDrive
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const skills = {
    languages: [
      { name: 'Python', level: 88, color: 'from-yellow-400 to-orange-400' },
      { name: 'C', level: 70, color: 'from-gray-400 to-gray-600' },
      { name: 'C++', level: 65, color: 'from-indigo-400 to-indigo-600' },
      { name: 'Java', level: 55, color: 'from-red-400 to-red-600' },

    ],
    frameworks: [
      { name: 'Reactjs', level: 90, color: 'from-blue-400 to-cyan-400' },
      { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-teal-400' },
      { name: 'Next.js', level: 60, color: 'from-gray-400 to-gray-600' },
      { name: 'HTML5', level: 98, color: 'from-blue-500 to-indigo-500' },
      { name: 'CSS3', level: 95, color: 'from-green-400 to-emerald-400' },
      { name: 'Javascript', level: 75, color: 'from-red-400 to-red-600' },
      { name: 'Node.js', level: 88, color: 'from-green-500 to-lime-500' },
      { name: 'Flask', level: 85, color: 'from-gray-500 to-slate-500' }
    ],
    database: [
      { name: 'MySQL', level: 95, color: 'from-orange-400 to-amber-400' },
      { name: 'Firebase', level: 85, color: 'from-blue-500 to-indigo-500' },
      { name: 'MongoDB', level: 70, color: 'from-green-500 to-emerald-500' }
    ],
    tools: [
      { name: 'VS code', level: 75, color: 'from-blue-400 to-cyan-400' },
      { name: 'GitHub', level: 90, color: 'from-orange-500 to-red-500' },
      { name: 'Vercel', level: 98, color: 'from-yellow-500 to-orange-500' },
    ],
    hardware: [
      { name: 'Arduino', level: 85, color: 'from-green-400 to-emerald-500' },
      { name: 'ESP32', level: 77, color: 'from-teal-400 to-cyan-500' },
      { name: 'EasyEDA', level: 90, color: 'from-lime-400 to-green-500' },
    ]
  };

  const projects = [
    {
      id: 1,
      title: 'Mini E-Commerce Website: JerseyHUB',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'TailwindCSS', 'Firebase', 'Vercel'],
      image: img1,
      github: 'https://github.com/AbishakePriyan/FUTURE_FS_02',
      live: 'https://future-fs-02-6oi9.vercel.app/',
      category: 'fullstack',
      featured: false
    },
    {
      id: 2,
      title: 'Sepsis Early Predition System',
      description: 'This AI-powered web app predicts sepsis early using a Random Forest model trained on clinical data.It allows manual or batch input, providing fast, accurate risk assessments to aid timely medical decisions.',
      tech: ['React', 'Python + Flask', 'Random Forest (scikit-learn)', 'Vercel + Render'],
      image: img2,
      github: 'https://github.com/AbishakePriyan/SepsisApp',
      live: 'https://sepsis-early-prediction-app.vercel.app/',
      category: 'fullstack',
      featured: false
    },
    {
      id: 3,
      title: 'Automatic Water Level Controller',
      description: 'This project uses an LM324 op-amp as a comparator-based controller to monitor water levels using metal probes. Based on the detected level, it activates LEDs and a relay to automatically control a water pump without using a microcontroller.',
      tech: ['LM324 Op-Amp IC', 'BC547 NPN Transistor', 'Relay Module', 'Metal Probes / Push Buttons'],
      image: img3,
      video: '/video1.mp4',
      category: 'frontend',
      featured: false
    },
    {
      id: 4,
      title: 'Automatic Fault Detection System',
      description: 'The Automatic Fault Detection System uses an LM393 comparator, Arduino, and LCD display to detect open or closed circuits in real-time. It instantly shows “Fault Detected” or “No Fault Detected” based on the circuit status, making it ideal for testing, diagnostics, and educational purposes.',
      tech: ['Arduino Uno', 'LM393 Comparator IC', '16x2 LCD Display', 'Embedded C (Arduino IDE)'],
      image: img4,
      video: '/video2.mp4',
      category: 'backend',
      featured: false
    },
    {
      id: 5,
      title: 'Voice Assistant with Python',
      description: 'This Python-based Voice Assistant uses Tkinter for the GUI and integrates PyAudio, text-to-speech, PyWhatKit, and other basic modules to perform tasks like telling time, playing YouTube videos, and more. It provides a simple yet interactive desktop assistant experience through voice commands.',
      tech: ['Python', 'Tkinter', 'PyAudio', 'pyttsx3', 'PyWhatKit'],
      image: img5,
      github: 'https://github.com/AbishakePriyan/GUI-Virtual-Assistant-main',
      category: 'backend',
      featured: false
    },
    {
      id: 6,
      title: 'Sudoku App',
      description: 'SudokuX is a modern, interactive Sudoku web application that challenges users with puzzles of varying difficulty. It includes a timer, feedback submission, and a sleek dark-themed UI built with React and Flask.',
      tech: ['React', 'TailwindCSS', 'Flask(Python)', 'Axios'],
      image: img6,
      github: 'https://github.com/AbishakePriyan/SudokuX',
      live: 'https://sudoku-x.vercel.app/',
      category: 'backend',
      featured: false
    },
    {
      id: 7,
      title: 'Stopwatch Web Application',
      description: 'This project is a React-based animated stopwatch app featuring lap recording, audio feedback, and CSV export. It’s fully mobile-responsive, built with Tailwind CSS, and designed with smooth UI animations for a better user experience.',
      tech: ['React', 'TailwindCSS', 'Howler.js'],
      image: img7,
      github: 'https://github.com/AbishakePriyan/SCT_WD_02',
      live: 'https://stopwatch-taupe-two.vercel.app/',
      category: 'backend',
      featured: false
    }
  ];

  const achievements = [
    {
      title: '5G Introductory-Level Certificate',
      issuer: 'Qualcomm 5G Wireless Acadamy',
      date: 'Jun 2025',
      icon: <Award className="w-6 h-6" />,
      color: 'from-orange-400 to-yellow-400',
      link: '/certificates/qualcomm.pdf',
      description: 'Qualcomm Wireless Acadamy 5G Exam',
      credentialId: 'LXBT9L4C'
    },
    {
      title: 'Python (Basic) Certificate',
      issuer: 'Hackerrank',
      date: 'Dec 2023',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-400 to-cyan-400',
      link: 'https://www.hackerrank.com/certificates/iframe/bf5d0d2ba9c3',
      description: 'Hackerrank Python Certificate',
      credentialId: 'BF5D0D2BA9C3'
    },
    {
      title: 'SQL (Advanced) Certificate',
      issuer: 'Hackerrank',
      date: 'Jul 2025',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-400 to-emerald-400',
      link: 'https://www.hackerrank.com/certificates/iframe/18b71a174c75',
      description: 'Hackerrank SQL Certificate',
      credentialId: '18B71A174C75'
    },
    {
      title: 'DAYZERO - 36 Hours Hackathon',
      issuer: 'CodeNex Club SRMIST',
      date: '7th and 8th Apr 2025',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-lime-500',
      link: '/certificates/codenex dayzero certificate.pdf',
      description: 'Participation Certificate',
      credentialId: '#'
    },
    {
      title: 'IEEE Membership',
      issuer: 'IEEE',
      date: 'July 2025',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-400 to-orange-500',
      link: '/certificates/Membership certificate IEEE.pdf',
      description: 'IEEE Membership Certificate',
      credentialId: '#'
    },
    {
      title: 'Skill4Future',
      issuer: 'SRMIST',
      date: 'Feb 2025',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-blue-500 to-indigo-500',
      link: '/certificates/skill for future workshop certificate.pdf',
      description: 'Skill4Future Workshop Certificate',
      credentialId: 'S4F25_119872'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Future Interns',
      location: 'Remote',
      date: 'Jun 2025 - Present',
      description: 'As a full stack development intern at Future Intern, I gained hands-on experience in building web applications using technologies like React, Node.js, and Firebase. I learnt How a website works and How they are Maintained',
      achievements: [
        'Improved application performance by 60%',
        'Implemented responsive design for mobile users',
        'Specialized in e-commerce solutions'
      ],
      type: 'work'
    },
    {
      title: 'Web Development intern',
      company: 'Skill craft Technology',
      location: 'Remote',
      date: 'July 2025 - Present',
      description: 'Building custom websites and web applications for small businesses and startups.',
      achievements: [
        'Delivered 4+ projects on time',
        'Acquired the Knowledge about Web Development',
        'Contributed to open-source projects'
      ],
      type: 'work'
    },
    {
      title: 'PCB Design and Manufacturing Intern',
      company: 'SRM Institute of Science and Technology',
      location: 'Kattankulathur, Chennai ,Tamil Nadu - on-site',
      date: 'Dec 2024',
      description: '15 days of PCB design and PCB assembly, How it Manufactured and Printed in Circuit Borad',
      achievements: [
        'Knowledge about PCB Circuits',
        'Project on ESP32',
        'Better Knowledge about Sensors and Simulation Tools(EasyEDA)'
      ],
      type: 'work'
    },
    {
      title: 'ECE Student',
      company: 'SRM Institute of Science and Technology',
      location: 'Kattankulathur, Chennai ,Tamil Nadu',
      date: '2023 - 2027 (Expected)',
      description: 'Pursuing B.tech Elelctronics and Communication Engineering with focus on Hardware and Circuit Related',
      achievements: [
          "Consistently ranked on the Dean's List for academic excellence in core ECE subjects",
          'Built multiple hardware-based projects including an Op-Amp Water Level Controller and Fault Detection System',
          'Conducted workshops and peer sessions on PCB design, circuit simulation, and embedded systems'
      ],
      type: 'education'
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Mouse Follower Glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(255, 193, 7, 0.03) 0%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Abi
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 relative group ${
                    activeSection === section
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  {section}
                  <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 ${
                    activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-yellow-400 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 capitalize transition-colors ${
                    activeSection === section
                      ? 'text-yellow-400 bg-gray-800/50'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800/30'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="animate-fade-in">
            {/* 3D Avatar with Glow */}
            <div className="relative mb-8 group">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-1 shadow-2xl shadow-yellow-500/25 transform hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  <span className="text-white font-bold text-5xl z-10">Abi</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-yellow-400/20 blur-xl animate-pulse"></div>
            </div>

            {/* Animated Title */}
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-gradient-x">
                Full Stack Developer
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                I'm Abishake Priyan
              </h2>
              <div className="absolute -top-4 -right-4 text-yellow-400 animate-bounce">
                <Sparkles className="w-8 h-8" />
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Aspiring engineer passionate about electronics and tech, skilled in both
              <span className="text-yellow-400 font-semibold">  hardware and software.</span> I love creating smart solutions using <span className="text-yellow-400 font-semibold">PCB design, Python, C/C++, and full-stack web development.</span>
            </p>

            {/* CTA Buttons with Glow Effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative border-2 border-yellow-400/50 text-yellow-400 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-400/10 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"></div>
        </div>
        <div className="absolute top-1/3 right-10 animate-float-delayed">
          <div className="w-6 h-6 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-slow">
          <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I am a passionate engineer driven by curiosity and creativity, blending hardware and software to bring ideas to life. I love designing PCBs and working with embedded systems and developing full-stack web applications, I enjoy solving real-world problems through tech.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I’m a 3rd-year Electronics and Communication Engineering (ECE) student with a strong passion for technology. Developed a deep interest in programming and full-stack web development early in my college life.
                </p>
                <p>
                  Built several projects involving modern web technologies, focusing on real-world problem solving. Gained hands-on experience in hardware projects, including PCB design and embedded systems.
                </p>
                <p>
                  Actively exploring ways to integrate hardware and software to create innovative tech solutions. Always eager to learn, build, and grow in the ever-evolving tech landscape.
                </p>
              </div>
              
            <a
              href="/Resume_ATS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-xl hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            </div>

            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Calendar, text: '2+ years of development experience', color: 'text-blue-400' },
                    { icon: MapPin, text: 'Based in Tamilnadu, India', color: 'text-green-400' },
                    { icon: Code, text: 'Electronics and Communication Student', color: 'text-purple-400' },
                    { icon: Award, text: 'Full stack Developer', color: 'text-yellow-400' }
                  ].map((fact, index) => (
                    <div key={index} className="flex items-center gap-3 group hover:transform hover:translate-x-2 transition-all duration-300">
                      <div className={`w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 ${fact.color}`}>
                        <fact.icon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{fact.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-600/50 hover:border-yellow-400/50 hover:text-yellow-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.github && (
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:animate-pulse" />
                      Code
                    </a>)}
                    {project.live && (
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:animate-pulse" />
                      Live Demo
                    </a>)}
                    {project.video && (
                    <a 
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:animate-pulse" />
                      Watch Demo
                    </a>)}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I work with a diverse range of technologies and these are some of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => {
              const icons = {
                languages: Code,
                frameworks: Server,
                database: Database,
                tools: Smartphone,
                hardware: HardDrive
              };
              const Icon = icons[category];
              const colors = {
                languages: 'from-blue-400 to-cyan-400',
                frameworks: 'from-green-400 to-emerald-400',
                database: 'from-purple-400 to-pink-400',
                tools: 'from-orange-400 to-yellow-400',
                hardware: 'from-red-400 to-orange-400'
              };

              return (
                <div 
                  key={category}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:scale-105"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colors[category]} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white capitalize">{category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * skillList.length + index) * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section id="experience" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My professional journey and academic background in my Career.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 rounded-full shadow-lg shadow-yellow-500/20"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50 z-10 animate-pulse">
                    <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/10">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                          exp.type === 'work' 
                            ? 'bg-gradient-to-r from-blue-400 to-cyan-400' 
                            : 'bg-gradient-to-r from-purple-400 to-pink-400'
                        }`}>
                          {exp.type === 'work' ? (
                            <Server className="w-6 h-6 text-white" />
                          ) : (
                            <Award className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            {exp.title}
                          </h4>
                          <p className="text-yellow-400 font-medium">{exp.company}</p>
                          <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location} • {exp.date}
                          </p>
                          <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 group/achievement">
                                <ChevronRight className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0 group-hover/achievement:animate-pulse" />
                                <span className="text-gray-300 text-sm group-hover/achievement:text-white transition-colors">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-white mb-4">Certificates</h3>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my technical expertise across various technologies and platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Certificate Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-yellow-400 transition-colors text-lg leading-tight">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-yellow-400/80 font-medium mt-1">{achievement.issuer}</p>
                      <p className="text-xs text-gray-400 mt-1">{achievement.date}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Certificate Description */}
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                    {achievement.description}
                  </p>
                  
                  {/* Credential ID */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">ID:</span>
                      <code className="text-xs bg-gray-800/50 px-2 py-1 rounded text-gray-400 font-mono">
                        {achievement.credentialId}
                      </code>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-yellow-400/70 group-hover:text-yellow-400 transition-colors">
                      <span>View Certificate</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-5 rounded-2xl`}></div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* View All Certificates Button */}
            <div className="text-center mt-12">
              <button className="group relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 text-white px-8 py-4 rounded-xl font-semibold border border-gray-600/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  View All Certificates
                  <ExternalLink className="w-4 h-4 group-hover:animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking for a developer, have a project in mind, or just want to connect, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', value: 'kabishake191@email.com', color: 'from-blue-400 to-cyan-400' },
                  { icon: Github, title: 'GitHub', value: 'github.com/AbishakePriyan', color: 'from-gray-400 to-gray-600' },
                  { icon: Linkedin, title: 'LinkedIn', value: 'linkedin.com/in/abishake-priyan-88351a2a8', color: 'from-blue-500 to-indigo-500' }
                ].map((contact, index) => (
                  <div key={index} className="group flex items-center gap-4 hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {contact.title}
                      </h4>
                      <p className="text-gray-300">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-12 relative z-20 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Abishake Priyan
            </h3>
            <p className="text-gray-400 mb-6">
              Full Stack Developer
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: Github, href: 'https://github.com/AbishakePriyan', color: 'hover:text-gray-300' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/abishake-priyan-88351a2a8', color: 'hover:text-blue-400' },
                { icon: Mail, href: 'https://mail.google.com/', color: 'hover:text-yellow-400' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`text-gray-500 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-800/50">
              <p className="text-gray-500">
                © 2025 Abishake Priyan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;