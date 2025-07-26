import { Github, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id='contact' className='py-20 px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold mb-4'>감사합니다</h2>
          <div className='w-20 h-1.5 bg-[#007aff] mx-auto rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='bg-indigo-100 p-3 rounded-md text-[#007aff] mr-4'>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className='font-medium mb-1'>이메일</h4>
                  <p className='text-gray-600'>kyung3098@naver.com</p>
                  <p className='text-gray-600'>dbsrud0872po@gmail.com</p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='bg-indigo-100 p-3 rounded-md text-[#007aff] mr-4'>
                  <Github size={20} />
                </div>
                <div>
                  <h4 className='font-medium mb-1'>GitHub</h4>
                  <a
                    href='https://github.com/ktoo23'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#007aff] hover:underline'
                  >
                    https://github.com/ktoo23
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
