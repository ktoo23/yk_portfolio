'use client';

import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProblemSolutionItem {
  problem: string;
  solution: string;
  result: string;
  notionLink?: string;
}

interface ProjectData {
  id: number;
  title: string;
  image: string;
  period: string;
  description: string;
  longDescription: string[];
  tech: string[];
  teamType: string;
  deployLink?: string;
  githubLink?: string;
  problemSolutions: ProblemSolutionItem[];
  keyFeatures: string[];
  demoVideo?: string;
  screenshots?: string[];
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: '타임옥션',
    image: '/images/TA.png',
    period: '2025.05.30 ~ 2025.08.09',
    teamType: '4명 (FE 4)',
    description:
      '실시간 경매를 통해 사용자들이 합리적인 가격으로 물건을 거래할 수 있는 플랫폼',
    longDescription: [
      '실시간 경매를 통해 사용자들이 합리적인 가격으로 물건을 거래할 수 있는 플랫폼입니다. 개발하면서 브라우저 캐싱, 하이드레이션 에러, 알림 시스템 등의 문제를 하나씩 해결해나갔습니다.',
    ],
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'Tanstack Query',
      'Tailwind CSS',
      'Zustand',
      'PWA',
    ],
    problemSolutions: [
      {
        problem:
          '프로필 이미지 변경 시 브라우저 캐시로 인해 화면에 즉시 반영되지 않는 UX 문제 발생',
        solution:
          '브라우저가 URL 단위로 캐시하는 특성을 활용해 URL에 타임스탬프 쿼리 파라미터를 추가하는 캐시 버스팅 기법을 적용하고, 공통 유틸함수로 분리하여 재사용 가능한 구조로 설계',
        result: '이미지 업데이트 시 즉시 반영 구현',
        notionLink:
          'https://zinc-coat-dea.notion.site/Supabase-2242da80e7b580f0bcf4ce26e6c5e1e3',
      },
      {
        problem:
          'URL 직접 접근 시 서버-클라이언트 간 Date.now() 값 차이로 하이드레이션 에러 발생',
        solution:
          '서버와 클라이언트의 초기 렌더링 결과를 일치시키기 위해 useState 초기값을 정적 값으로 설정하고 useEffect에서 동적 값 적용',
        result:
          '모든 접근 방식(직접 URL, 새로고침, 링크)에서 안정적인 페이지 로딩 구현',
        notionLink:
          'https://zinc-coat-dea.notion.site/Next-js-2242da80e7b5802b84fbc8b71d474560',
      },
      {
        problem:
          '여러 기기에서 구독해도 마지막 구독 기기에만 알림 발송되는 문제 파악',
        solution:
          '사용자는 보유한 모든 기기에서 알림을 기대한다는 관점에서 활성 구독 전체 조회 후 Promise.allSettled()로 모든 기기에 병렬 발송',
        result:
          '사용자의 모든 활성 기기에서 놓치는 알림 없이 멀티 디바이스 경험 제공',
        notionLink:
          'https://zinc-coat-dea.notion.site/Task-description-2432da80e7b580be8268c9ec43447337',
      },
      {
        problem:
          '프로필 페이지 로딩 속도가 평균 500~600ms로 다른 페이지 대비 현저히 느린 문제 분석',
        solution:
          '불필요한 네트워크 호출을 줄이기 위해 API Route 우회하여 서버 컴포넌트에서 데이터베이스 직접 접근으로 구조 개선하고, 화면 표시 크기 대비 과도한 원본 이미지 로딩을 막기 위해 next/image 적용',
        result: '페이지 초기 렌더링 속도 약 30~40% 개선',
      },
    ],
    keyFeatures: [
      '실시간 경매 참여 및 입찰 시스템',
      '하향식 거래 핫딜 이벤트',
      '실시간 채팅 기능',
      'PWA 기반 푸시 알림 서비스',
    ],
    githubLink: 'https://github.com/ktoo23/KFE3-e2e-Chwee-up-hajah',
    deployLink: 'https://kfe-3-e2e-chwee-up-hajah-web.vercel.app',
  },
  {
    id: 2,
    title: '노인을 위한 키오스크는 있다',
    image: '/images/wiki.png',
    period: '2024.12.04 ~ 2024.12.09',
    teamType: '4명 (FE 4)',
    description:
      '디지털 취약계층을 위한 키오스크 UI/UX 개선으로 접근성을 높인 프로젝트',
    longDescription: [
      '디지털 취약계층을 위한 키오스크 개선 프로젝트입니다. 개발 기간 중 디자이너가 이탈하는 상황에서도 팀을 이끌며, 실제 현장 경험을 바탕으로 사용자가 실제로 필요한 기능을 만들었습니다.',
    ],
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'Vitest',
      'Zustand',
    ],
    problemSolutions: [
      {
        problem:
          '디자이너 이탈 및 개발 기간 2일 제약이라는 위기 상황에서 팀 프로젝트 완성 책임감으로 리더 역할 자처',
        solution:
          '초기 "기능 간소화" 접근에서 피드백을 통해 "간소화 ≠ 편의성"이라는 핵심 인사이트 도출하고, 본질적 사용자 경험 개선으로 프로젝트 방향 전환 주도',
        result:
          '표면적 해결책에서 벗어나 본질적 사용자 경험 개선으로 프로젝트 방향 전환 주도',
        notionLink:
          'https://zinc-coat-dea.notion.site/401c313c9ab44ff3a0560ccf2b31aa1b',
      },
      {
        problem:
          '맥도날드 아르바이트 경험을 바탕으로 실제 고객 질문("이거 매워요?", "달달했던 것 같은데") 분석',
        solution:
          '기존 카테고리 방식 + 맛 기반 메뉴 분류로 직관적 탐색 환경 설계하고, 단순 기능 제거가 아닌 충분한 설명 제공을 통해 사용자가 스스로 결정할 수 있는 UI 구현',
        result:
          '단순 기능 제거가 아닌 충분한 설명 제공을 통해 사용자가 스스로 결정할 수 있는 UI 구현',
      },
    ],
    keyFeatures: [
      '안내 캐릭터 "위키" 도입(메뉴 주문 길잡이 역할)',
      '맛 기반 메뉴 카테고리로 직관적인 메뉴 분류 (달달, 짭짤, 매콤)',
      '세심한 설명 제공',
      '음성을 통한 메뉴 검색 시스템',
    ],
    deployLink: 'https://nowiki-yk.vercel.app',
    githubLink: 'https://github.com/ktoo23/nowiki-test',
  },
  {
    id: 3,
    title: 'Min:i 추억 앨범',
    image: '/images/mini.png',
    period: '2024.09.01 ~ 2025.02',
    teamType: '4명 (FE 2, BE 2)',
    description:
      'AI가 사진을 분석해 자동으로 질문을 생성하고, 답변을 바탕으로 개인화된 스토리를 만드는 디지털 앨범 서비스',
    longDescription: [
      '노인 인지 기능 향상과 가족 간 유대감 강화를 위한 디지털 앨범 서비스입니다. AI가 사진을 분석해서 자동으로 질문을 만들어주고, 답변을 바탕으로 개인화된 스토리를 생성합니다.',
    ],
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
    problemSolutions: [
      {
        problem:
          '기존 미들웨어는 쿠키 존재만 확인하고 토큰이 실제로 유효한지는 검증하지 않아 만료된 토큰으로도 접근 가능한 문제 발생',
        solution:
          '클라이언트에서 위조할 수 없고 페이지별 세밀한 접근 제어가 가능하도록 서버 액션으로 변경하여 실제 API 호출을 통해 토큰 유효성 검증',
        result:
          'Tanstack Query 캐싱 문제를 우회하고 항상 최신 인증 상태를 확인',
        notionLink:
          'https://zinc-coat-dea.notion.site/Next-js-1dc2da80e7b58091bc82f3b3f09beb19',
      },
      {
        problem:
          'DropdownMenu 안에 Dialog를 열 때 이벤트 버블링으로 인해 Dialog가 열리자마자 바로 닫히는 문제 발생',
        solution:
          'DropdownMenu의 자동 닫힘 동작을 막기 위해 onSelect에서 preventDefault()와 DialogContent에서 stopPropagation() 적용',
        result: 'DropdownMenu가 열린 상태에서 Dialog를 정상적으로 사용',
        notionLink:
          'https://zinc-coat-dea.notion.site/1932da80e7b5805d872ec325a9c16643',
      },
    ],
    keyFeatures: [
      'AI 기반 사진 분석으로 자동 질문 생성',
      '사용자 답변 기반 개인화된 스토리텔링',
      'CRUD 기능을 갖춘 앨범 관리',
      '그룹 초대/삭제/권한 관리',
      '회상 요법을 활용한 인지 기능 향상 콘텐츠',
    ],
    githubLink: 'https://github.com/Memory-album',
    deployLink: 'https://min-i.vercel.app',
  },
  {
    id: 4,
    title: '내 가족이 되.',
    image: '/images/logo.svg',
    period: '2024.09 ~ 2025.01',
    teamType: '개인',
    description:
      '이미지 편집 기능과 독립적 개발 환경을 구축한 임보 입양 홍보 플랫폼',
    longDescription: [
      '유기동물 임보와 입양을 촉진하기 위한 플랫폼입니다. 기존 프로젝트들과 차별화를 위해 인스타그램 스토리 같은 이미지 편집 기능에 도전했으며, 백엔드 없이도 완전한 기능을 구현할 수 있는 환경을 만들었습니다.',
    ],
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'Tanstack Query',
      'SCSS',
      'Zustand',
      'React Hook Form',
      'Auth.js',
      'Mock Service Worker',
    ],
    problemSolutions: [
      {
        problem:
          '기존 고정 크기 이미지 방식에서 벗어나 사용자가 업로드한 다양한 비율의 이미지를 원본 비율로 표시하고 싶어 동적 비율 처리 기능 구현 결정',
        solution:
          'next/image의 sizes 속성과 padding-bottom 비율 설정 방식 적용했으나 flexbox 환경에서 실제 렌더링 너비와 계산된 높이가 불일치하는 문제 발생. 이미지 로드 후 naturalWidth/naturalHeight 기반으로 동적 비율 계산하여 landscape, portrait, square 등으로 분류하고, padding-bottom의 고정 비율 특성으로 인한 문제를 aspect-ratio 속성으로 교체',
        result: '반응형 환경에서도 정확한 비율 유지 구현',
        notionLink:
          'https://zinc-coat-dea.notion.site/Nextjs-Image-10e2da80e7b580dfb040db2c83d52d6d',
      },
      {
        problem:
          '개인 프로젝트로 백엔드 API 없이 프론트엔드 기능을 완전히 구현하고 검증할 필요성 인식',
        solution:
          '단순 하드코딩 데이터 대신 실제 API 호출과 동일한 환경을 위해 MSW로 모의 API 서버 구축',
        result:
          '로그인, 회원가입, 데이터 CRUD 등 실제 서버 없이 독립적으로 개발 및 테스트 완료',
        notionLink:
          'https://zinc-coat-dea.notion.site/tldraw-1832da80e7b5801ab45fc9b5e8f4fd2a', // tldraw임
      },
    ],
    keyFeatures: [
      'Tldraw 기반 인스타그램 스토리 유사 이미지 편집',
      '이미지 비율별 반응형 레이아웃 (landscape/portrait/square)',
      'Quill 에디터와 이모지를 활용한 풍부한 텍스트 작성',
      'MSW로 백엔드 시뮬레이션',
      'Auth.js 기반 소셜 로그인',
    ],
    githubLink: 'https://github.com/ktoo23/be_mine',
    demoVideo: '/videos/bemine/시연.mp4',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleProjectClick = (project: ProjectData): void => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id='projects' className='py-20 px-8 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold mb-4 text-gray-800'>프로젝트</h2>
            <div className='w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4'></div>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              문제를 정의하고, 해결 과정을 설계하며, 성과를 측정한 프로젝트들을
              소개합니다.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project) => (
              <Card
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className='group cursor-pointer transition-all duration-200 hover:shadow-md border border-gray-200 bg-white'
              >
                <div className='relative overflow-hidden h-48'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                <CardHeader className='pb-1'>
                  <CardTitle className='text-xl font-bold text-gray-800 mb-1'>
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className='pt-0'>
                  <p className='text-gray-600 mb-6 line-clamp-3 leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        variant='secondary'
                        className='bg-gray-100 text-gray-700'
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge
                        variant='outline'
                        className='text-gray-500 border-gray-300'
                      >
                        +{project.tech.length - 3}개
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 프로젝트 상세 모달 */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        {selectedProject && (
          <DialogContent className='p-8 sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-white'>
            <DialogHeader>
              <DialogTitle className='text-2xl font-bold text-gray-800 mb-2'>
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>

            <div className='space-y-6 py-4'>
              {/* 프로젝트 설명 */}
              <div>
                <h3 className='text-base text-[#22222280] mb-3'>
                  프로젝트 설명
                </h3>
                {selectedProject.longDescription.map((d, index) => (
                  <p className='text-neutral-800 leading-relaxed' key={index}>
                    {d}
                  </p>
                ))}
              </div>

              {/* 기술 스택 */}
              <div>
                <h3 className='text-base text-[#22222280] mb-3'>기술 스택</h3>
                <div className='flex flex-wrap gap-2'>
                  {selectedProject.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant='secondary'
                      className='bg-gray-100 text-gray-700'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className='flex gap-10 text-[#222222CC]'>
                <div>
                  <h3 className='text-base text-[#22222280] mb-1'>참여인원</h3>
                  <p>{selectedProject.teamType}</p>
                </div>
                <div>
                  <h3 className='text-base text-[#22222280] mb-1'>기간</h3>
                  <p> {selectedProject.period}</p>
                </div>
              </div>

              <hr />
              {/* 주요 기능 */}
              <div>
                <h3 className='text-lg font-semibold text-[#222222] mb-3'>
                  주요 기능
                </h3>
                <ul className='space-y-2 text-[#222222CC]'>
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <p className='mr-2'>•</p>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <hr />
              {/* 상세 내용 */}
              <div>
                <h3 className='text-lg font-semibold text-[#222222] mb-3'>
                  상세 내용
                </h3>
                <div className='space-y-8 text-[#222222CC]'>
                  {selectedProject.problemSolutions.map((item, index) => (
                    <div key={index}>
                      <div className='space-y-3'>
                        <div className='text-[#222222]'>
                          {index + 1}. {item.problem}
                        </div>

                        <ul className='pl-4'>
                          <li className='mb-2 flex'>
                            <p className='text-gray-400 mr-2'>•</p>
                            <p>{item.solution}</p>
                          </li>
                          <li className='flex'>
                            <p className='text-gray-400 mr-2'>•</p>
                            <p>{item.result}</p>
                          </li>
                        </ul>

                        {item.notionLink && (
                          <div className='pl-5 mb-5 w-fit'>
                            <a
                              href={item.notionLink}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-blue-600 text-sm hover:underline flex items-center'
                            >
                              <ExternalLink size={14} className='mr-1' />
                              자세한 내용 보기
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {selectedProject.demoVideo && (
              <div>
                <h3 className='text-lg font-semibold mb-2'>Demo</h3>
                <p className='text-sm text-muted-foreground mb-2'>
                  *이 프로젝트는 MSW를 사용하여 백엔드 API를 시뮬레이션합니다.
                </p>
                <video width='70%' controls muted>
                  <source src={selectedProject.demoVideo} type='video/mp4' />
                  브라우저가 비디오 태그를 지원하지 않습니다.
                </video>
              </div>
            )}
            {/* 액션 버튼 */}
            <div className='flex gap-3'>
              {selectedProject.deployLink && (
                <Button
                  asChild
                  className='flex-1 bg-blue-600 hover:bg-blue-700 text-white'
                >
                  <a
                    href={selectedProject.deployLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center'
                  >
                    <ExternalLink size={16} className='mr-2' />
                    사이트 보기
                  </a>
                </Button>
              )}

              {selectedProject.githubLink && (
                <Button
                  asChild
                  variant='outline'
                  className='flex-1 border-gray-300 text-gray-700 hover:bg-gray-50'
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

            <DialogClose className='cursor-pointer absolute right-4 top-4 rounded-full p-2 hover:bg-gray-100 transition-colors'>
              <X size={18} />
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};
