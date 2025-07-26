type Props = {
  scrollToSection: (sectionId: string) => void;
};

export const AboutMe = ({ scrollToSection }: Props) => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center pt-20'
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
        <p className='text-3xl md:text-5xl leading-[1.3] font-bold bg-clip-text'>
          안녕하세요, <br />
          프론트엔드 개발자
        </p>
        <h1 className='text-3xl md:text-5xl leading-[1.3] font-bold mb-10 bg-clip-text'>
          <span className='text-[#007aff]'>이윤경</span>입니다.
        </h1>

        <div className='space-y-6 max-w-2xl mx-auto mb-10'>
          <div className='bg-white p-6 rounded-2xl rounded-tl-none relative border-1 border-indigo-100 text-left'>
            <p className='text-gray-700 leading-relaxed'>
              <b>기술</b>과 <b>공감</b>을 담으려 노력하는 프론트엔드
              개발자입니다. 디지털 접근성, 동물 복지와 같은 사회적 가치에
              공감하며 기술로 이를 해결하는 프로젝트들을 이어왔습니다.
            </p>
          </div>

          <div className='bg-indigo-50 p-6 rounded-2xl rounded-tr-none relative border-1 border-indigo-100 ml-6 text-right'>
            <p className='text-gray-700 leading-relaxed'>
              시도하는 것에 두려움보다는{' '}
              <b>&quot;하지 않았을 때보다 성장할 것이다&quot;</b>라는 확신을
              가지고 있습니다. 이 믿음을 가지고 개발하고 있습니다.
            </p>
          </div>
        </div>
        <div className='flex justify-center space-x-4'>
          <button
            className='px-6 py-3 text-[#007aff] cursor-pointer hover:text-[#4088d4] rounded-full'
            onClick={() => scrollToSection('contact')}
          >
            프로젝트 보기
          </button>
        </div>
      </div>
    </section>
  );
};
