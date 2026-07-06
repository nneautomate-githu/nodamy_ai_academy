import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import AITools from './pages/AITools';
import Portfolio from './pages/Portfolio';
import StudentResults from './pages/StudentResults';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Types
import { Course, PortfolioProject, DownloadableResource } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  
  // Modal configurations
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'enroll' | 'download' | 'project' | 'success'>('enroll');
  const [modalData, setModalData] = useState<any>(null);

  // Sync scroll positioning on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Event handlers
  const handleEnrollClick = (course: Course) => {
    setModalType('enroll');
    setModalData(course);
    setIsModalOpen(true);
  };

  const handleDownloadClick = (resource: DownloadableResource) => {
    setModalType('download');
    setModalData(resource);
    setIsModalOpen(true);
  };

  const handleProjectClick = (project: PortfolioProject) => {
    setModalType('project');
    setModalData(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-900 selection:bg-purple-500/10 selection:text-purple-600 relative overflow-hidden">
      
      {/* Background Decor from Sleek Interface Theme */}
      <div className="absolute top-[5%] right-[-5%] w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px] opacity-60 pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-[10%] w-[450px] h-[450px] bg-purple-50/70 rounded-full blur-[110px] opacity-50 pointer-events-none z-0"></div>
      
      {/* 1. Header & Navigation bar */}
      <Navbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        onEnrollClick={handleEnrollClick}
      />

      {/* 2. Primary Page Router Viewports */}
      <main className="flex-grow z-10 relative">
        {currentPage === 'home' && (
          <Home 
            onPageChange={setCurrentPage} 
            onEnrollClick={handleEnrollClick} 
            onProjectClick={handleProjectClick}
          />
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'courses' && (
          <Courses 
            onEnrollClick={handleEnrollClick} 
            onPageChange={setCurrentPage}
          />
        )}
        {currentPage === 'tools' && <AITools />}
        {currentPage === 'portfolio' && (
          <Portfolio onProjectClick={handleProjectClick} />
        )}
        {currentPage === 'results' && <StudentResults />}
        {currentPage === 'resources' && (
          <Resources onDownloadClick={handleDownloadClick} />
        )}
        {currentPage === 'faq' && <FAQ />}
        {currentPage === 'contact' && (
          <Contact onPageChange={setCurrentPage} />
        )}
      </main>

      {/* 3. Global Modern Footer */}
      <Footer onPageChange={setCurrentPage} />

      {/* 4. Overlay Modals Manager */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        data={modalData}
      />
    </div>
  );
}
