import img from './assets/images/illustration-article.svg'
import pp from './assets/images/image-avatar.webp'
function App() {

  return (
    <div className='flex justify-center font-font pb-4 bg-yellow'>
      <header className='hidden'>
        CARD DESIGN
      </header>
      <div id="card" className='border border-black mt-[13.6rem] rounded-[1.3rem] py-[24px] px-[24px] bg-white shadow-[8px_8px_0px_0px_black] text-[14px] md:text-[16px] w-[327px] md:w-[24rem] md:h-[522px]'>
        <img src={img} alt="image" className='rounded-xl mb-[25px] w-[279px] h-[200px] md:w-[336px] md:h-[200px] object-cover'/>
        <span className='bg-yellow px-[12px] font-bold rounded py-[4px] text-[12px] md:text-[0.9rem]'>Learning</span> <br />
        <p className='pt-4 font-semibold text-[12px] md:text-[0.9rem] tracking-[-0.3px]'>Published 21 Dec 2023</p>
        <h2 className='text-[20px] md:text-[24px] font-extrabold pt-[12px] cursor-pointer hover:text-[#F4D04E] '>HTML & CSS foundations</h2>
        <p className='pt-3 font-medium text-gray-500'>
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className='flex pt-[24px] items-center gap-3'>
          <img src={pp} alt="profile picture" className='w-8'/>
          <p className='text-sm font-extrabold'>Greg Hooper</p>          
        </div>
      </div>
    </div>
  )
}

export default App
