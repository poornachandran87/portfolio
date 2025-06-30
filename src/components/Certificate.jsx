import CertificateImg from '../assets/resume.jpg';

export default function Certificate() {
    const config = {
        link1: 'https://drive.google.com/file/d/1nQ3JAaezYcs3O04mvIaBOieRC6CRzGx7/view?usp=sharing',
        link2: 'https://drive.google.com/file/d/1dASVKGWnSu-PBBO1SutTF_1Lnz_Y0r77/view?usp=sharing'
    }

    return <section id='/certificate' className='flex flex-col md:flex-row justify-center  px-5 py-5 bg-primary' >
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[188px] font-bold'>Certificates</h1>
                <p className='pb-5 flex flex-wrap items-center gap-4 '>Product Engineering – Full Stack Development - School of Accelerated Learning (SOAL)  <a className='btn' href={config.link1} target='blank' rel='noopener noreferrer'> View</a></p>
                <p className='pb-5  '>Python Programming Course - Ameya Data Solution  <a className='btn' href={config.link2} target='blank' download> View</a></p>
            </div>
        </div>



        <img className=' w-[300px]' src={CertificateImg} alt='hero' />
    </section>
}