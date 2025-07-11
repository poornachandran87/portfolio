import websiteImg1 from '../assets/upwan.png';
import websiteImg2 from '../assets/chat-app.png'



export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: ' http://52.193.203.240/',
                code:' https://github.com/poornachandran87/upwan.git'
            },
            {
                image: websiteImg2,
                description: 'A Real time chat Web app for desktop. Built with MERN Stack and Socket.io.',
                link: ' https://chat-app-mern-1dhz.onrender.com/',
                code:' https://github.com/poornachandran87/chat-app-mern'
            }
        ]
    }
   

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-primary mb-5 w-[148px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with MERN and Tailwind CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project,key) => (
                     <div className='relative' key={key}>
                        <img className='h-[200px] w-[500px]' src={project.image} alt='upwan'/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex flex-col items-center gap-5'>
                                <a className='btn' target='blank' href={project.link}>View Project</a>
                                <a className='btn' target='blank' href={project.code}>View Code</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}