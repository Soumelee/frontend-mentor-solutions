
import pfp from '/images/image-jeremy.png'
const Sidebar = () => {
    
    return (
        <header className='flex gap-4 justify-center items-center md:block bg-Blue p-8 rounded-xl z-0 relative'>
            <img src={pfp} alt="" className='w-20 border-2 rounded-full' />
            <div className='py-6'>
                <span>Report for</span>
                <h1 className='text-3xl md:text-5xl mt-4'>Jeremy Robson</h1>
            </div>
        </header>
    )
}

export default Sidebar