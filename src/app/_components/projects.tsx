'use client';

import { useState } from 'react';
import {
  ExternalLink,
  Github,
  X,
  Calendar,
  Code,
  Briefcase,
  CheckCircle,
  Users,
  FileText,
} from 'lucide-react';

// shadcn-ui 컴포넌트 임포트
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface ProjectData {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  period: string;
  description: string;
  longDescription?: string;
  responsibilities?: string[];
  tech: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  devNotes?: {
    title: string;
    link: string;
    description: string;
  }[];
  teamType: 'team' | 'individual';
  deployLink?: string;
  githubLink?: string;
  screenshots?: string[];
  videos?: string[];
  demo?: string;
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 프로젝트 데이터
  const projects: ProjectData[] = [
    {
      id: 2,
      title: '노인을 위한 키오스크는 있다',
      subtitle: '디지털 취약계층을 위한 키오스크 UI/UX 개선',
      image: '/images/wiki.png',
      period: '2024.12.04 - 2024.12.10',
      teamType: 'team',
      description:
        '디지털 취약계층을 위한 맥도날드 키오스크 UI/UX 개선 프로젝트',
      longDescription:
        '이 프로젝트는 개발보다는 기획, 협업에 초점을 두었습니다. 개인이 가진 좋은 아이디어를 시각화하여 모두에게 공유하고 개선점을 찾기 위해 서로의 생각을 나눴습니다. 노인을 비롯한 디지털 취약계층이 키오스크를 편리하게 사용할 수 있도록 UI/UX를 재설계하고, 직관적인 가이드 시스템을 구현했습니다.',
      tech: [
        'React 18',
        'Vite',
        'TypeScript',
        'Tailwind CSS',
        'Shadcn UI',
        'Zustand',
        'Vitest',
        'React Testing Library',
      ],
      responsibilities: [
        '가이드 메시지 관리 시스템 개발 및 개선',
        '직관적인 메뉴 카테고리 시스템 개발',
        '메뉴 상세 정보 컴포넌트 개발',
        'BDD 기반 테스트 코드 작성',
      ],
      features: [
        '맛 기반 카테고리(달달, 짭짤, 매콤)로 세분화된 분류',
        '재료 정보, 알레르기 정보, 영양 정보를 포함한 직관적 UI',
        '이미지 기반 햄버거 구성품 시각화',
        '가독성 높은 텍스트와 색상 대비를 활용한 노년층 친화적 디자인',
        '테이블 서비스, 라지 세트 등 생소한 용어를 안내하는 가이드 메시지',
        '음성을 통한 메뉴 검색',
      ],
      challenges: [
        '가이드 메시지 관리 시스템의 복잡성',
        '컴포넌트 간 상태 공유 최적화',
        '테스트 케이스 설계 및 구현의 어려움',
      ],
      solutions: [
        '메시지 관리 로직을 GuidePopup 컴포넌트 내부로 이동하여 단순화',
        'Zustand를 이용한 전역 상태 관리 최적화',
        'BDD 기반의 테스트 전략 수립 및 구현',
      ],
      devNotes: [
        {
          title: '가이드 메시지 시스템 관리 개선',
          link: 'https://zinc-coat-dea.notion.site/3afa240d1bf9465fb4f0bddc2b95e18f?pvs=4',
          description: '복잡한 컴포넌트 설계에서 단순화의 중요성 체득',
        },
        {
          title: '노위키 BDD',
          link: 'https://zinc-coat-dea.notion.site/BDD-1a12da80e7b580fbb29eca90ca7cf980?pvs=4',
          description: '사용자 행동 중심으로 기능 정리',
        },
        {
          title: '프로젝트를 마치며',
          link: 'https://zinc-coat-dea.notion.site/401c313c9ab44ff3a0560ccf2b31aa1b?pvs=4',
          description: '노인을 위한 키오스크는 있다 회고',
        },
      ],
      deployLink: 'https://nowiki-yk.vercel.app',
      githubLink: 'https://github.com/ktoo23/nowiki-test',
      screenshots: [
        '/images/nowiki/main.png',
        '/images/nowiki/menulist.png',
        '/images/nowiki/menudetail1.png',
        '/images/nowiki/result.png',
      ],
    },
    {
      id: 3,
      title: 'Min:i',
      subtitle: '가족 추억 앨범',
      image: '/images/mini.png',
      period: '진행 중',
      teamType: 'team',
      description:
        '회상 요법 기반 질문과 답변을 통한 노인 인지 기능 향상 및 가족 유대감 강화 디지털 앨범 서비스',
      longDescription:
        'Min:i는 노인 인지 기능 향상과 가족 간 유대감 강화를 위한 디지털 앨범 서비스입니다. 회상 요법을 기반으로 한 질문과 답변을 통해 노인들의 기억을 자극하고 가족들과 추억을 공유할 수 있게 도와줍니다. 직관적인 UX와 효율적인 데이터 관리로 사용자 경험을 극대화했습니다.',
      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'Tanstack Query',
        'React-Hookform',
        'Zod',
      ],
      responsibilities: [
        '앨범 관리 시스템 구현',
        '질문 & 답변 관리 시스템 개발',
        '그룹 & 멤버 관리 기능 구현',
        '최적화된 검색 기능 구현',
        'Tanstack-Query를 활용한 데이터 관리',
        '서버 액션 기반 인증 시스템 구축',
      ],
      features: [
        'CRUD 기능을 갖춘 앨범 관리 인터페이스',
        '질문 생성 및 답변 관리 워크플로우',
        '초대, 삭제, 수정 등 그룹 관리 기능',
        '권한 기반 접근 제어 시스템',
        '디바운스 처리를 통한 검색 성능 최적화',
        '메시지 수신자와 질문 내용을 결합한 확장 검색 기능',
        '서버 컴포넌트와 서버 액션 기반의 고도화된 인증 시스템',
      ],
      challenges: [
        '다양한 사용자(노인, 가족 구성원) 요구사항 충족',
        '효율적인 데이터 캐싱 전략 수립',
        'SSR 환경에서 파일 업로드 폼 검증 이슈 해결',
        '중첩 UI 컴포넌트(DropdownMenu 내 Dialog)의 이벤트 버블링 문제',
        '서버-클라이언트 환경 차이에 따른 인증 처리 불일치',
      ],

      solutions: [
        '사용자 경험을 고려한 직관적인 UI/UX 설계',
        'Tanstack Query를 활용한 서버 상태 관리와 캐싱 최적화',
        '클라이언트/서버 환경을 고려한 조건부 Zod 스키마 검증 구현',
        'preventDefault와 stopPropagation을 활용한 이벤트 전파 제어',
        '미들웨어에서 서버 액션 기반 인증으로 전환하여 토큰 유효성 검증 및 보안 강화',
      ],
      devNotes: [
        {
          title: 'Next.js에서 파일 업로드 폼 검증하기',
          link: 'https://zinc-coat-dea.notion.site/Next-js-13b2da80e7b581139108ca0904ebbf54?pvs=4',
          description:
            'SSR 환경에서 FileList 객체 검증 시 발생하는 문제와 Zod를 활용한 해결 방법',
        },
        {
          title: '중첩 UI 컴포넌트의 이벤트 버블링 해결하기',
          link: 'https://zinc-coat-dea.notion.site/1932da80e7b5805d872ec325a9c16643?pvs=4',
          description:
            'DropdownMenu 내부에서 Dialog를 열 때 발생하는 이벤트 버블링 문제와 shadcn/ui 컴포넌트의 특성을 고려한 해결책 구현',
        },
        {
          title: 'Next.js 인증 시스템 고도화하기',
          link: 'https://zinc-coat-dea.notion.site/Next-js-1dc2da80e7b58091bc82f3b3f09beb19?pvs=4',
          description:
            '미들웨어에서 서버 액션 기반 인증으로 전환하여 토큰 유효성 검증 문제를 해결하고 서버-클라이언트 환경 차이를 고려한 인증 로직 설계',
        },
      ],
      githubLink: 'https://github.com/Memory-album',
      screenshots: [
        '/images/mini/start.png',
        '/images/mini/main.png',
        '/images/mini/album-detail.png',
        '/images/mini/group.png',
        '/images/mini/upload.png',
        '/images/mini/voice.png',
        '/images/mini/result.png',
      ],
    },
    {
      id: 4,
      title: '내 가족이 되',
      subtitle:
        '임보 입양 홍보 - 핌피 바이러스 사이트를 배경으로 개발하였습니다.',
      image: '/images/logo.svg',
      period: '2024.09 - 2025.01 ',
      teamType: 'individual',
      demo: '/videos/bemine/시연.mp4',
      description: '유기동물 임시보호와 입양을 위한 홍보 플랫폼',
      longDescription:
        '내 가족이 되는 유기동물 임시보호와 입양을 촉진하기 위한 홍보 플랫폼입니다. 인터랙티브한 게시글 작성 도구와 임보 유형 테스트를 통해 임보에 중요한 요소를 얼마나 갖추고 있는지 평가할 수 있습니다. 또한 이 개인 프로젝트에서는 사용자를 위한 웹 접근성을 고려했습니다. ',
      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'SCSS',
        'Zustand',
        'Tanstack Query',
        'Tldraw',
        'Quill',
        'React-Hookform',
        'Zod',
        'Auth.js',
        'MSW',
        'Express',
      ],
      responsibilities: [
        '인터랙티브 게시글 작성 시스템 개발',
        '최적화된 게시글 목록 구현',
        '반응형 디자인 및 UI/UX 최적화',
        '웹 접근성 개선',
        '소셜 로그인 및 인증 시스템 구현',
        'MSW를 통한 백엔드 연동 및 데이터 관리',
      ],
      features: [
        'Tldraw 에디터 통합으로 인스타그램 스토리와 유사한 이미지 편집 기능',
        'Quill 에디터와 emoji-mart를 활용한 풍부한 텍스트 편집 환경',
        '무한 스크롤 + throttle 적용으로 성능 최적화',
        'SCSS mixins과 constants를 활용한 일관된 디자인 시스템',
        '웹 접근성을 고려한 시맨틱 태그 사용 및 키보드 탐색을 위한 포커스 표시기 적용',
        'Auth.js를 활용한 안전한 인증 플로우',
      ],
      challenges: [
        '다양한 비율의 사용자 업로드 이미지를 고정 크기 에디터에서 효과적으로 표시하기',
        '인피니트 스크롤링 구현 시 API 중복 호출로 인한 성능 저하',
        '여러 스타일 속성과 변수를 여러 컴포넌트에서 일관되게 관리하는 어려움',
        '고정 크기의 이미지가 아닌 비율에 따른 게시글 이미지 표시',
      ],
      solutions: [
        '이미지 비율과 중앙 정렬을 위한 에디터의 createShape, 카메라 setCameraOptions 설정',
        'Custom Throttle Hook 개발을 통한 API 호출 최적화',
        'SCSS 모듈 시스템과 Next.js 설정을 활용한 전역 스타일 변수 관리 구현',
        '이미지 비율 계산 함수와 컨테이너에 맞추도록 구현',
      ],
      devNotes: [
        {
          title: 'tldraw 라이브러리로 인스타 스토리 이미지 편집하기',
          link: 'https://zinc-coat-dea.notion.site/tldraw-1832da80e7b5801ab45fc9b5e8f4fd2a?pvs=4',
          description: 'tldraw 라이브러리를 통한 이미지 편집 기능',
        },
        {
          title: '스타일 시스템 최적화 - Next.js에 scss 모듈 관리하기',
          link: 'https://zinc-coat-dea.notion.site/Nextjs-scss-4677a445a30d4386bbe5b0ac5d3948cf?pvs=4',
          description:
            'SCSS 변수와 믹스인을 모든 컴포넌트에서 효율적으로 사용할 수 있도록 설정',
        },
        {
          title: '반응형 이미지 처리 - 게시글 이미지 비율별로 보여주기',
          link: 'https://zinc-coat-dea.notion.site/Nextjs-Image-10e2da80e7b580dfb040db2c83d52d6d?pvs=4',
          description:
            '고정된 이미지 크기가 아닌 여러 이미지 비율을 고려하여 게시글에 표시',
        },
        {
          title: '인피니트 스크롤 최적화: Throttle 구현',
          link: 'https://zinc-coat-dea.notion.site/throttle-1142da80e7b5808e8b9bf2ea3759431f?pvs=4',
          description:
            'tanstack query의 useInfiniteQuery 사용 시 중복 호출 문제를 해결하기 위한 custom throttle hook 설계 및 구현',
        },
      ],
      githubLink: 'https://github.com/ktoo23/be_mine',
      videos: [
        '/videos/bemine/메인.mp4',
        '/videos/bemine/임보.mp4',
        '/videos/bemine/일기.mp4',
        '/videos/bemine/임보 상세.mp4',
        '/videos/bemine/일기 상세.mp4',
        '/videos/bemine/일기 작성.mp4',
        '/videos/bemine/임보 테스트.mp4',
      ],
    },
    {
      id: 1,
      title: '꾸부기',
      subtitle: '사용자 맞춤 스트레칭 추천 및 관리 - 엘리스 ai spark camp',
      image: '/images/bugi.png',
      period: '2025.02.20 - 2025.03.01',
      teamType: 'team',
      description:
        '사용자의 직업, 생활 패턴, 신체 부위 정보를 바탕으로 맞춤형 스트레칭을 추천해주는 서비스',
      longDescription:
        '*현재 엘리스에서 AI api 지원을 중단한 상태여서 배포를 잠시 막아둔 상태입니다.* 사용자의 직업, 생활 패턴, 신체 부위 정보를 분석하여 개인화된 스트레칭 루틴을 추천하는 웹 서비스입니다. 사용자가 쉽게 정보를 입력할 수 있도록 직관적인 인터페이스를 구현했으며, 신체 부위 선택을 위한 인터랙티브 SVG 컴포넌트를 구현했습니다.',
      tech: [
        'React 18',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Shadcn UI',
        'React-Hookform',
        'Zod',
      ],
      responsibilities: [
        'React-Hookform과 Zod를 활용한 강력한 폼 검증',
        '오류 메시지의 사용자 친화적 표시로 UX 향상',
        '인터랙티브 신체 부위 선택 UI 개발',
        'SVG를 활용한 신체 부위 선택 컴포넌트 구현',
        '각 부위별 path ID와 근육 명칭을 매핑하여 직관적인 UI/UX 제공',
        '사용자 선택에 반응하는 동적 색상 변화 및 피드백 시스템 구현',
      ],
      features: [
        '개인 맞춤형 스트레칭 루틴 추천',
        '직관적인 신체 부위 선택 인터페이스',
        '사용자 정보 기반 분석 시스템',
        '강력한 폼 유효성 검증',
      ],
      challenges: [
        'SVG 기반 인터랙티브 컴포넌트 구현의 복잡성',
        '사용자 입력 데이터의 유효성 검증 및 오류 처리',
      ],
      solutions: [
        'SVG 요소에 대한 이벤트 핸들링 최적화',
        'React-Hookform과 Zod를 조합한 강력한 폼 검증 시스템 구축',
      ],
      githubLink: 'https://github.com/stretching-coach-ai/coach-web',
      screenshots: [
        '/images/bugi/loading.PNG',
        '/images/bugi/main.PNG',
        '/images/bugi/login.PNG',
        '/images/bugi/info.PNG',
        '/images/bugi/select.PNG',
        '/images/bugi/recommend.PNG',
      ],
    },
  ];

  // 프로젝트 클릭 핸들러
  const handleProjectClick = (project: ProjectData): void => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id='projects' className='py-20 px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>Projects</h2>
          <div className='w-20 h-1.5 bg-indigo-600 mx-auto rounded-full'></div>
          <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
            다양한 프로젝트를 통해 쌓은 경험을 소개합니다. 각 프로젝트는 문제
            해결과 사용자 경험 향상에 중점을 두고 개발했습니다.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col'
            >
              <div className='overflow-hidden w-full h-48 relative'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                {project.teamType === 'team' && (
                  <div className='absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-md text-xs flex items-center'>
                    <Users size={12} className='mr-1' />팀 프로젝트
                  </div>
                )}
                {project.teamType === 'individual' && (
                  <div className='absolute top-2 right-2 bg-emerald-600 text-white px-2 py-1 rounded-md text-xs flex items-center'>
                    <FileText size={12} className='mr-1' />
                    개인 프로젝트
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className='text-xl'>{project.title}</CardTitle>
                <CardDescription className='flex items-center justify-between'>
                  <span className='flex items-center'>
                    <Calendar size={14} className='mr-1 text-indigo-600' />
                    <span>{project.period}</span>
                  </span>
                </CardDescription>
                {project.subtitle && (
                  <p className='text-sm text-gray-500 italic mt-1'>
                    {project.subtitle}
                  </p>
                )}
              </CardHeader>

              <CardContent className='flex-grow'>
                <p className='text-gray-600 mb-4 line-clamp-3'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-1 mt-3'>
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='bg-indigo-100 hover:bg-indigo-200 text-indigo-700'
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant='outline' className='text-gray-500'>
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className='border-t pt-4'>
                <Button
                  onClick={() => handleProjectClick(project)}
                  className='w-full bg-indigo-600 hover:bg-indigo-700'
                >
                  자세히 보기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedProject && (
          <DialogContent className='sm:max-w-4xl max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
              <DialogTitle className='text-2xl font-bold text-indigo-700'>
                {selectedProject.title}
                {selectedProject.teamType === 'team' ? (
                  <Badge className='ml-2 bg-indigo-100 text-indigo-700'>
                    팀 프로젝트
                  </Badge>
                ) : (
                  <Badge className='ml-2 bg-emerald-100 text-emerald-700'>
                    개인 프로젝트
                  </Badge>
                )}
              </DialogTitle>
              <DialogDescription className='flex items-center text-indigo-600'>
                <Calendar size={16} className='mr-2' />
                {selectedProject.period}
              </DialogDescription>
              {selectedProject.subtitle && (
                <p className='text-gray-600 mt-1'>{selectedProject.subtitle}</p>
              )}
            </DialogHeader>

            <div className='flex'>
              {selectedProject.screenshots?.map((screenShot, index) => (
                <div key={index} className='mr-2 rounded-lg overflow-hidden'>
                  <img
                    src={screenShot}
                    alt={`${selectedProject.title} 스크린샷 ${index}`}
                    className='w-full h-auto'
                  />
                </div>
              ))}
              {selectedProject.videos?.map((video, index) => (
                <div key={index} className='mr-2 rounded-lg overflow-hidden'>
                  <video width='100%' autoPlay muted loop>
                    <source src={video} type='video/mp4' />
                    브라우저가 비디오 태그를 지원하지 않습니다.
                  </video>
                </div>
              ))}
            </div>

            <Tabs defaultValue='overview' className='mt-6'>
              <TabsList className='w-full'>
                <TabsTrigger value='overview' className='flex-1'>
                  상세 설명
                </TabsTrigger>
                <TabsTrigger value='features' className='flex-1'>
                  주요 기능
                </TabsTrigger>
                <TabsTrigger value='challenges' className='flex-1'>
                  직면한 도전과 해결방법
                </TabsTrigger>
                {selectedProject.devNotes &&
                  selectedProject.devNotes.length > 0 && (
                    <TabsTrigger value='devNotes' className='flex-1'>
                      기록
                    </TabsTrigger>
                  )}
              </TabsList>

              <TabsContent value='overview' className='mt-4'>
                <div className='space-y-4'>
                  <div>
                    <h3 className='text-lg font-semibold mb-2'>Description</h3>
                    <p className='text-gray-700'>
                      {selectedProject.longDescription ||
                        selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.responsibilities &&
                    selectedProject.responsibilities.length > 0 && (
                      <div>
                        <h3 className='text-lg font-semibold mb-2 flex items-center'>
                          <Briefcase
                            size={18}
                            className='mr-2 text-indigo-600'
                          />
                          My Role
                        </h3>
                        <ul className='space-y-1 text-gray-700'>
                          {selectedProject.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className='flex items-start'>
                                <span className='mr-2 text-indigo-500 font-bold'>
                                  •
                                </span>
                                <span>{responsibility}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}

                  <div>
                    <h3 className='text-lg font-semibold mb-2 flex items-center'>
                      <Code size={18} className='mr-2 text-indigo-600' />
                      Technologies
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.tech.map((tech, index) => (
                        <Badge
                          key={index}
                          className='bg-indigo-100 text-indigo-700'
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {selectedProject.demo && (
                    <div>
                      <h3 className='text-lg font-semibold mb-2'>Demo</h3>
                      <p className='text-sm text-muted-foreground mb-2'>
                        *이 프로젝트는 MSW를 사용하여 백엔드 API를
                        시뮬레이션합니다.
                      </p>
                      <video width='70%' controls muted>
                        <source src={selectedProject.demo} type='video/mp4' />
                        브라우저가 비디오 태그를 지원하지 않습니다.
                      </video>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value='features' className='mt-4'>
                <h3 className='text-lg font-semibold mb-3'>Key Features</h3>
                <ul className='space-y-2'>
                  {selectedProject.features?.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <CheckCircle
                        size={16}
                        className='mr-2 mt-1 text-green-500 flex-shrink-0'
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value='challenges' className='mt-4'>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-semibold mb-3'>Challenges</h3>
                    <ul className='space-y-2'>
                      {selectedProject.challenges?.map((challenge, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='mr-2 text-red-500 font-bold'>•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-lg font-semibold mb-3'>Solutions</h3>
                    <ul className='space-y-2'>
                      {selectedProject.solutions?.map((solution, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='mr-2 text-green-500 font-bold'>
                            ✓
                          </span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              {selectedProject.devNotes &&
                selectedProject.devNotes.length > 0 && (
                  <TabsContent value='devNotes' className='mt-4'>
                    <div className='space-y-4'>
                      {selectedProject.devNotes?.map((note, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className='text-base'>
                              {note.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className='text-sm text-gray-600'>
                              {note.description}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button variant='outline' size='sm' asChild>
                              <a
                                href={note.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center'
                              >
                                <ExternalLink size={14} className='mr-1' />
                                노션에서 보기
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                )}
            </Tabs>

            <div className='flex gap-4 mt-6'>
              <Button
                asChild
                className={cn(
                  'flex-1 bg-indigo-600 hover:bg-indigo-700',
                  !selectedProject.deployLink &&
                    'cursor-not-allowed bg-indigo-400 hover:bg-indigo-400',
                )}
                disabled={!selectedProject.deployLink}
              >
                <a
                  href={selectedProject.deployLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center'
                >
                  <ExternalLink size={16} className='mr-2' />
                  Web Link
                </a>
              </Button>

              {selectedProject.githubLink && (
                <Button
                  asChild
                  variant='outline'
                  className='flex-1 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                >
                  <a
                    href={selectedProject.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center'
                  >
                    <Github size={16} className='mr-2' />
                    GitHub
                  </a>
                </Button>
              )}
            </div>

            <DialogClose className='absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100'>
              <X size={20} />
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};
