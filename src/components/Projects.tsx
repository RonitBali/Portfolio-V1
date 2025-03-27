
import {  FocusCards } from './ui/Focus-card'


const Projects = () => {
    const Projects = [
        {
            title:"ValoDex",
            src:"/Projects/valodex.png",
            link:"https://valo-dex.vercel.app",
            
        },
        {
          title:"ValoDex",
          src:"/Projects/valodex.png",
      },

    ]
    
  return (
    <div className='py-10'>
        <div>
        <h1 className='text-center text-5xl font-bold mb-20 font-sans'>My Work</h1>
      <FocusCards cards={Projects} />
      </div>
    </div>
  )
}

export default Projects