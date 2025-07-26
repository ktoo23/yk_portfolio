'use client';
import React, { useState, useEffect } from 'react';
import { AboutMe } from './_components/aboutme';
import { Skills } from './_components/skills';
import { Projects } from './_components/projects';
import { Footer } from './_components/footer';
import { Contact } from './_components/contact';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [navBackground, setNavBackground] = useState('bg-transparent');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 위치에 따라 활성 섹션 변경
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // 스크롤 위치에 따라 네비게이션 배경 변경
      if (scrollPosition > 100) {
        setNavBackground('bg-white/90 backdrop-blur-md shadow-md');
      } else {
        setNavBackground('bg-transparent');
      }

      // 현재 보이는 섹션 감지
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            if (!isScrolling) setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  // 부드러운 스크롤 이동
  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });

      // 스크롤 애니메이션이 끝나면 상태 업데이트
      setTimeout(() => {
        setIsScrolling(false);
        setActiveSection(sectionId);
      }, 500);
    }
  };

  return (
    <div className='min-h-screen bg-white text-gray-800 font-sans'>
      {/* 네비게이션 */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${navBackground}`}
      >
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <a
              href='#home'
              className='text-xl font-bold text-[#007aff]'
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              LeeYoonKyung.dev
            </a>

            {/* 데스크탑 메뉴 */}
            <div className='hidden md:flex space-x-8'>
              {[
                { id: 'about', label: '이윤경' },
                { id: 'skills', label: '기술' },
                { id: 'projects', label: '프로젝트' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-[#007aff] border-b-2 border-[#007aff]'
                      : 'text-gray-600 hover:text-[#007aff]'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* 모바일 메뉴 버튼 */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='p-2 rounded-md text-gray-600 hover:text-[#007aff] focus:outline-none'
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {isMobileMenuOpen && (
          <div className='md:hidden bg-white shadow-lg'>
            <div className='px-4 py-3 space-y-2'>
              {[
                { id: 'about', label: '이윤경' },
                { id: 'skills', label: '기술' },
                { id: 'projects', label: '프로젝트' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    activeSection === item.id
                      ? 'bg-indigo-50 text-[#007aff]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#007aff]'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 메인 섹션 */}
      <AboutMe scrollToSection={scrollToSection} />

      {/* Skills 섹션 */}
      <Skills />

      {/* Projects 섹션 */}
      <Projects />

      {/* Contact 섹션 */}
      <Contact />

      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Portfolio;
