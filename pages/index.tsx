import { GetStaticProps} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[]

}
const Home=({pageInfo, experience, projects, skills, socials}:Props) => {
  return (
    // xl:h-screen xl:snap-y snap-mandatory 
    <div className="bg-white text-dark overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-dark/80">
      <Head>
        <title>Aung Kyaw Htwe</title>
      </Head>
      <Header socials={socials}/>

      <section id="hero" className=''>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section className=''>
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className=''>
        <WorkExperience experience={experience}/>
      </section>

      <section id="skills" className=''>
        <Skills skills={skills}/>
      </section>

      <section id="projects" className=''>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className=''>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src={require('/upp-arrow.png')}
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps : GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] =  await fetchSocials();
  const experience: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  return{
    props:{
      pageInfo,
      projects,
      socials,
      experience,
      skills
    },
    //next js will regenerate the page
    //-when a request comes in
    //-at most once every 10 seconds 
    revalidate:10,
  };
  
};