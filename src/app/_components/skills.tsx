export const Skills = () => {
  const skillsByCategory = {
    Frontend: [
      'https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black',
      'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white',
      'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    ],
    Styling: [
      'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white',
      'https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
    ],
    'Testing & Tools': [
      'https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white',
      'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
      'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white',
    ],
  };

  return (
    <section id='skills' className='py-20 px-8 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold mb-4'>Skills</h2>
          <div className='w-20 h-1.5 bg-indigo-600 mx-auto rounded-full'></div>
        </div>

        <div className='flex flex-col space-y-8 max-w-4xl mx-auto'>
          {Object.entries(skillsByCategory).map(([category, badges]) => (
            <div key={category} className='bg-white rounded-xl shadow-sm p-6'>
              <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                {category}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {badges.map((badge, index) => (
                  <img
                    key={index}
                    src={badge}
                    alt={`${category} skill ${index + 1}`}
                    className='transition-all duration-300 hover:scale-105'
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
