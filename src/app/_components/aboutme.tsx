type Props = {
  scrollToSection: (sectionId: string) => void;
};

export const AboutMe = ({ scrollToSection }: Props) => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center pt-16'
    >
      <div className='text-center px-8 max-w-3xl mx-auto'>
        {/* <div className='mb-6'>
          <div className='inline-block relative'>
            <div className='w-24 h-24 rounded-full bg-indigo-600 bg-opacity-10 flex items-center justify-center mb-4 mx-auto overflow-hidden border-2 border-indigo-600'>
              <span className='text-4xl font-bold text-indigo-600'>YN</span>
            </div>
            <div className='absolute -bottom-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full'>
              Available
            </div>
          </div>
        </div> */}
        <h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text'>
          이윤경
        </h1>
        <h2 className='text-xl md:text-2xl text-gray-600 mb-6'>
          Frontend Developer
        </h2>
        <div className='space-y-6 max-w-2xl mx-auto mb-10'>
          <div className='bg-white p-6 rounded-2xl rounded-tl-none shadow-md relative border-2 border-indigo-100 text-left'>
            <p className='text-gray-700 leading-relaxed'>
              <b>기술</b>과 <b>공감</b>을 담으려 노력하는 프론트엔드
              개발자입니다. 건강 관리, 디지털 접근성, 동물 복지와 같은 사회적
              가치에 공감하며 기술로 이를 해결하는 프로젝트들을 이어왔습니다.
            </p>
          </div>

          <div className='bg-indigo-50 p-6 rounded-2xl rounded-tr-none shadow-md relative border-2 border-indigo-100 ml-6 text-right'>
            <p className='text-gray-700 leading-relaxed'>
              사용자의 관점에서 불편함을 발견하고, 이를 해결하기 위한 아이디어를
              바탕으로 인터랙티브한 웹 애플리케이션을 개발하는 것을 좋아합니다.
              React.js와 Next.js를 활용한 모던 웹 개발 경험이 있습니다.
            </p>
          </div>

          <div className='bg-white p-6 rounded-2xl rounded-tl-none shadow-md relative border-2 border-indigo-100 text-left'>
            <p className='text-gray-700 leading-relaxed'>
              시도하는 것에 두려움보다는{' '}
              <b>&quot;하지 않았을 때보다 성장할 것이다&quot;</b>라는 확신을
              가지고 있습니다. 새로운 도전 앞에서 느리더라도 나아가려고 합니다.
            </p>
          </div>
        </div>
        <div className='flex justify-center space-x-4'>
          <button
            className='px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg'
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
          <button
            className='px-6 py-3 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition duration-300'
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};
