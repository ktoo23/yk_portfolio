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
  mainBgColor: string;
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

  const projects: ProjectData[] = [
    {
      id: 1,
      title: '타임옥션',
      subtitle: '지역 기반 경매 플랫폼',
      image: '/images/TA.png',
      period: '2025.05.30 ~ 2025.08.09',
      teamType: 'team',
      mainBgColor: '#7251f8',
      description:
        '지역 기반 경매 플랫폼으로 사용자들이 합리적인 가격으로 물건을 거래할 수 있는 서비스',
      longDescription:
        '타임옥션은 지역 기반 경매를 통해 더 많은 사람들이 합리적인 가격으로 물건을 거래할 수 있는 플랫폼입니다. 개발 과정에서 이미지 캐싱, 실시간 알림, 검색 성능 등 다양한 기술적 문제를 마주하고 해결하며 사용자 경험을 크게 개선했습니다.',
      tech: [
        'Next.js',
        'React',
        'TypeScript',
        'Supabase',
        'PWA',
        'Zustand',
        'Web Push API',
      ],
      challenges: [
        '🔸 프로필 이미지를 바꿔도 브라우저에 이전 이미지가 계속 보이는 문제',
        '🔸 직접 주소창에 경로 입력 후 이동 시 하이드레이션 에러가 발생하는 현상',
        '🔸 같은 사용자가 연속으로 입찰하면 이전 상위 입찰자였던 다른 사용자에게 알림이 계속 가는 문제',
        '🔸 검색할 때마다 여러 테이블을 합치는 방식의 성능 저하 고려',
      ],
      solutions: [
        '브라우저 캐싱 메커니즘을 분석해보니 같은 URL이면 새 이미지를 안 가져오는 것이 원인. URL에 타임스탬프를 붙이는 캐시 버스팅으로 해결',
        'SSR과 CSR에서 Date.now() 값이 달라서 발생하는 문제였음. 서버에서는 안전한 값 사용하고 클라이언트에서 useEffect로 동적 값 적용',
        '단순히 "현재 입찰자 제외한 최근 상위 입찰자"를 찾던 로직을 "진짜 직전 최고가 입찰자"를 찾는 로직으로 개선해서 불필요한 알림 감소',
        '기존 empty embed 패턴으로 4번의 JOIN 연산 대신, 검색 전용 테이블을 만들고 트리거로 상품 추가/변경 시 자동 동기화하여 검색 속도 개선',
      ],
      features: [
        '실시간 경매 참여 및 입찰 시스템',
        'PWA 기반 푸시 알림 서비스 (연속 입찰 중복 알림 방지)',
        '지역 기반 상품 검색 (검색 전용 테이블로 성능 최적화)',
        '사용자 프로필 관리 (이미지 캐시 버스팅 적용)',
        '경매 진행 상황 실시간 업데이트',
      ],
      devNotes: [
        {
          title: '브라우저 이미지 캐싱 문제와 해결 과정',
          link: 'https://zinc-coat-dea.notion.site/Supabase-2242da80e7b580f0bcf4ce26e6c5e1e3',
          description:
            'CDN과 브라우저 캐싱 메커니즘 분석부터 캐시 버스팅 구현까지',
        },
        {
          title: 'Next.js 하이드레이션 에러 디버깅',
          link: 'https://zinc-coat-dea.notion.site/Next-js-2242da80e7b5802b84fbc8b71d474560',
          description: 'SSR/CSR 차이점 이해하고 Date.now() 문제 해결하기',
        },
        {
          title: '경매 알림 시스템의 비즈니스 로직 개선',
          link: 'https://zinc-coat-dea.notion.site/2332da80e7b5807cafeaf9cc9fffe386',
          description: '사용자 행동 패턴을 고려한 알림 로직 설계',
        },
        {
          title: '검색 기능 구현하기',
          link: 'https://zinc-coat-dea.notion.site/Empty-embed-1-22c2da80e7b58020aab8c2c6e307ed8c',
          description: 'Empty Embed 패턴으로 검색 기능 구현하기',
        },
        {
          title: '검색 성능 개선하기',
          link: 'https://zinc-coat-dea.notion.site/2-22e2da80e7b58004b195c5bdaae3b825',
          description: 'Empty Embed 패턴의 한계와 검색 전용 테이블 생성',
        },
      ],
      githubLink: 'https://github.com/ktoo23/KFE3-e2e-Chwee-up-hajah',
      deployLink: 'https://kfe-3-e2e-chwee-up-hajah-web.vercel.app',
      videos: [
        '/videos/chee/login.gif',
        '/videos/chee/main.gif',
        '/videos/chee/auction-list.gif',
        '/videos/chee/auction-detail.gif',
        '/videos/chee/auction-add.gif',
        '/videos/chee/chat-list.gif',
        '/videos/chee/profile.gif',
      ],
    },

    {
      id: 2,
      title: 'Min:i',
      subtitle: '추억 앨범 - AI 기반 가족 유대감 강화 서비스',
      image: '/images/mini.png',
      period: '2024.09.01 ~ 2025.02',
      teamType: 'team',
      mainBgColor: '#DAE2FF',
      description:
        'AI 기반 사진 분석과 회상 요법을 통한 노인 기능 향상 및 가족 유대감 강화 디지털 앨범 서비스',
      longDescription:
        'Min:i는 노인 인지 기능 향상과 가족 간 유대감 강화를 위한 디지털 앨범 서비스입니다. AI가 사진을 분석해서 자동으로 질문을 만들어주고, 답변을 바탕으로 개인화된 스토리를 생성합니다. 개발 과정에서 인증 시스템과 UI 컴포넌트의 복잡한 문제들을 차근차근 해결해나갔습니다.',
      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'Tanstack Query',
        'Tailwind CSS',
        'shadcn/ui',
        'Zustand',
        'React Hook Form',
        'Zod',
      ],
      challenges: [
        '🔸 로그인 상태는 정상인데 서버 로그에는 "로그인 필요" 에러가 계속 뜨는 문제',
        '🔸 드롭다운 메뉴에서 다이얼로그를 열려고 하면 메뉴가 바로 닫혀버리는 문제',
        '🔸 모든 페이지마다 비슷한 margin, padding 코드가 중복되어 관리가 어려운 문제',
        '🔸 토큰이 만료되어도 캐시 때문에 UI상으로는 정상으로 보이는 문제',
      ],
      solutions: [
        '서버 환경에서는 브라우저처럼 자동으로 쿠키가 안 붙는다는 걸 알게 됨. headers에 쿠키를 명시적으로 넣어서 해결',
        'shadcn/ui의 DropdownMenuItem은 클릭하면 자동으로 닫히는 기본 동작이 있었음. preventDefault로 이 동작을 막고 stopPropagation으로 이벤트 전파 차단',
        'SCSS 변수를 만들어서 Next.js 설정으로 모든 컴포넌트에서 자동 import되도록 설정. 중복되는 코드 줄임',
        '미들웨어 대신 서버 액션으로 바꿔서 매번 실제 API 호출로 토큰 유효성을 검증하도록 개선',
      ],
      features: [
        'AI 기반 사진 분석으로 자동 질문 생성',
        '사용자 답변 기반 개인화된 스토리텔링',
        'CRUD 기능을 갖춘 앨범 관리',
        '그룹 초대/삭제/권한 관리',
        '회상 요법을 활용한 인지 기능 향상 콘텐츠',
      ],
      devNotes: [
        {
          title: 'Next.js 서버-클라이언트 쿠키 전달 문제 해결',
          link: 'https://zinc-coat-dea.notion.site/Next-js-1dc2da80e7b58091bc82f3b3f09beb19?pvs=4',
          description:
            '브라우저와 서버 환경의 차이점을 이해하고 인증 로직 개선하기',
        },
        {
          title: 'shadcn/ui 컴포넌트 이벤트 버블링 해결기',
          link: 'https://zinc-coat-dea.notion.site/1932da80e7b5805d872ec325a9c16643?pvs=4',
          description: 'preventDefault와 stopPropagation의 정확한 사용법',
        },
      ],
      githubLink: 'https://github.com/Memory-album',
      deployLink: 'https://min-i.vercel.app',
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
      id: 3,
      title: '내 가족이 되',
      subtitle: '임보 입양 홍보 사이트',
      image: '/images/logo.svg',
      period: '2024.09 ~ 2025.01',
      teamType: 'individual',
      mainBgColor: '#92719f',
      demo: '/videos/bemine/시연.mp4',
      description: '유기동물 임시보호와 입양을 위한 홍보 플랫폼',
      longDescription:
        '유기동물 임보와 입양을 촉진하기 위한 플랫폼입니다. "기존 프로젝트들은 다 비슷한 기능만 하고 있는데, 새로운 걸 해보고 싶다"는 생각으로 인스타그램 스토리 같은 이미지 편집 기능에 도전했습니다. 공식 문서와 깃허브 코드를 파악한 뒤, 새로운 라이브러리를 익히고 커스텀도 해보며 완성한 프로젝트입니다.',
      tech: [
        'React',
        'Next.js',
        'TypeScript',
        'SCSS',
        'Zustand',
        'Tanstack Query',
        'Tldraw',
        'Quill',
        'React Hook Form',
        'Zod',
        'Auth.js',
        'MSW',
      ],
      challenges: [
        '🔸 기존 단순 이미지 업로드만으로는 사용자들의 관심을 끌기 어려울 것 같다는 고민',
        '🔸 세로 이미지, 가로 이미지가 모두 같은 크기 박스에 들어가서 어색하게 보이는 문제',
        '🔸 Quill 에디터가 서버사이드 렌더링에서 에러가 나는 문제',
        '🔸 백엔드가 없어서 로그인, 데이터 관리 등을 테스트할 수 없는 문제',
      ],
      solutions: [
        '인스타그램 스토리처럼 이미지를 꾸밀 수 있는 기능을 만들어보자고 결심. Tldraw 라이브러리 공식문서를 보며 커스텀 에디터 구현',
        '이미지를 업로드할 때 naturalWidth/naturalHeight로 실제 비율을 계산해서 landscape, portrait, square로 분류. CSS aspect-ratio로 각각 다른 비율 적용',
        'dynamic import로 클라이언트에서만 로드되도록 설정하고 useRef로 생명주기 관리',
        'MSW로 완전한 가짜 백엔드 서버 구축. 로그인부터 CRUD까지 모든 기능을 프론트엔드에서 독립적으로 개발',
      ],
      features: [
        'Tldraw 기반 인스타그램 스토리 유사 이미지 편집',
        '이미지 비율별 반응형 레이아웃 (landscape/portrait/square)',
        'Quill 에디터와 이모지를 활용한 풍부한 텍스트 작성',
        'MSW로 완전한 백엔드 시뮬레이션',
        'Auth.js 기반 소셜 로그인',
      ],
      devNotes: [
        {
          title: 'Tldraw로 인스타 스토리 만들기 도전기',
          link: 'https://zinc-coat-dea.notion.site/tldraw-1832da80e7b5801ab45fc9b5e8f4fd2a?pvs=4',
          description: '공식문서만으로 새로운 라이브러리 마스터하기',
        },
        {
          title: '이미지 비율 처리의 모든 것',
          link: 'https://zinc-coat-dea.notion.site/Nextjs-Image-10e2da80e7b580dfb040db2c83d52d6d?pvs=4',
          description: 'padding-bottom에서 aspect-ratio로 진화한 과정',
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
      id: 4,
      title: '노인을 위한 키오스크는 있다',
      subtitle: '디지털 취약계층을 위한 키오스크 UI/UX 개선',
      image: '/images/wiki.png',
      period: '2024.12.04 ~ 2024.12.09',
      teamType: 'team',
      mainBgColor: '#ffc72c',
      description:
        '디지털 취약계층을 위한 맥도날드 키오스크 UI/UX 개선 프로젝트',
      longDescription:
        '디지털 취약계층을 위한 키오스크 개선 프로젝트입니다. 기간 중간에 디자이너가 이탈하고 개발 시간이 2일로 제약된 위기 상황이 발생했지만, 팀원들과 함께 방향을 재정립하여 완성했습니다. 아르바이트 경험을 바탕으로 실제 노인 고객들의 주문 패턴을 분석해 반영했습니다.',
      tech: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'shadcn/ui',
        'Vitest',
        'Zustand',
      ],
      challenges: [
        '🔸 프로젝트 중반에 디자이너가 갑자기 이탈하면서 방향을 잃은 상황',
        '🔸 개발 시간이 단 2일로 제약된 상황',
        '🔸 처음에는 "단순, 최소화 >> 간편함"이라고 생각했는데 실제로는 그렇지 않다는 깨달음',
        '🔸 가이드 메시지를 관리하는 로직이 복잡해서 유지보수가 어려운 문제',
      ],
      solutions: [
        '팀 미팅을 통해 "간소화가 곧 편의성은 아니다"는 인사이트 도출. 기능을 줄이는 게 아니라 설명을 추가하는 방향으로 전환',
        '남은 시간을 고려해 역할을 재분배하고 핵심 기능에 집중. 아르바이트 경험을 바탕으로 "맛 기반 카테고리" 아이디어 제안',
        '실제 매장에서 고객들이 "이거 매워요?", "달달한 거 없어요?" 같은 질문을 많이 하는 걸 보고 맛 기반으로 메뉴를 분류',
        'Custom Hook으로 복잡하게 만들었던 가이드 메시지 관리를 컴포넌트 내부로 이동시켜 단순화',
      ],
      features: [
        '맛 기반 메뉴 카테고리 (달달, 짭짤, 매콤)',
        '생소한 용어 설명 가이드 (테이블 서비스, 라지 세트 등)',
        '이미지 기반 햄버거 구성품 시각화',
        '노년층 친화적 큰 글씨와 색상 대비',
        '음성 검색 기능',
      ],
      devNotes: [
        {
          title: '위기 상황에서 팀을 이끈 경험',
          link: 'https://zinc-coat-dea.notion.site/401c313c9ab44ff3a0560ccf2b31aa1b?pvs=4',
          description: '디자이너 이탈 상황에서 프로젝트를 완성하기까지',
        },
        {
          title: '가이드 메시지 시스템 단순화하기',
          link: 'https://zinc-coat-dea.notion.site/3afa240d1bf9465fb4f0bddc2b95e18f?pvs=4',
          description: '복잡한 Custom Hook에서 간단한 컴포넌트로',
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
          <h2 className='text-3xl font-bold mb-4'>프로젝트</h2>
          <div className='w-20 h-1.5 bg-[#007aff] mx-auto rounded-full'></div>
          <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
            다양한 프로젝트를 통해 쌓은 경험을 소개합니다.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className='hover:bg-neutral-100 overflow-hidden group cursor-pointer transition-all duration-200 h-full flex flex-col'
            >
              <div className='overflow-hidden w-full h-48 relative'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
                {project.teamType === 'team' && (
                  <div className='absolute top-1 left-5 bg-[#007aff] text-white px-3 py-2 rounded-full text-xs flex items-center'>
                    <Users size={12} className='mr-1' />팀
                  </div>
                )}
                {project.teamType === 'individual' && (
                  <div className='absolute top-2 left-5 bg-emerald-600 text-white  px-3 py-2 rounded-full text-xs flex items-center'>
                    <FileText size={12} className='mr-1' />
                    개인
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className='text-xl'>{project.title}</CardTitle>
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
                      className='bg-indigo-100 hover:bg-indigo-200 text-[#007aff]'
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
            </Card>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedProject && (
          <DialogContent className='sm:max-w-4xl max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
              <DialogTitle className='text-2xl font-bold'>
                {selectedProject.title}
                {selectedProject.teamType === 'team' ? (
                  <Badge className='ml-2 bg-indigo-100 text-[#4088d4]'>
                    팀 프로젝트
                  </Badge>
                ) : (
                  <Badge className='ml-2 bg-emerald-100 text-emerald-700'>
                    개인 프로젝트
                  </Badge>
                )}
              </DialogTitle>
              <DialogDescription className='flex items-center'>
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
                            className='mr-2 text-[#007aff]'
                          />
                          My Role
                        </h3>
                        <ul className='space-y-1 text-gray-700'>
                          {selectedProject.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className='flex items-start'>
                                <span className='mr-2 text-[#007aff] font-bold'>
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
                      <Code size={18} className='mr-2 text-[#007aff]' />
                      Technologies
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedProject.tech.map((tech, index) => (
                        <Badge
                          key={index}
                          className='bg-indigo-100 text-[#4088d4]'
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
                  'flex-1 bg-[#007aff] hover:bg-[#4088d4]',
                  !selectedProject.deployLink &&
                    'cursor-not-allowed bg-[#4088d4] hover:bg-[#4088d4]',
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
                  className='flex-1 border-[#007aff] text-[#007aff] hover:bg-indigo-50'
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
