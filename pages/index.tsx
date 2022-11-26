import { GetStaticProps} from 'next'
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
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials}/>

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experience={experience}/>
      </section>

      <section id="skills" className='snap-center'>
        <Skills skills={skills}/>
      </section>

      <section id="projects" className='snap-center'>
        <Projects projects={projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps : GetStaticProps = async () => {
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