import '../styles/Skills.css'


// Images - Languages
import pythonImg from '../assets/skills/python.png'
import golangImg from '../assets/skills/golang.png'
import kotlinImg from '../assets/skills/kotlin.png'
import phpImg from '../assets/skills/php.png'
import htmlImg from '../assets/skills/html.png'
import cssImg from '../assets/skills/css.png'
import jsImg from '../assets/skills/js.png'
import mysqlImg from '../assets/skills/mysql.png'

// Images - Tools
import linuxImg from '../assets/skills/linux.png'
import intellijImg from '../assets/skills/intellij.png'
import gitImg from '../assets/skills/git.png'

// Images - Frameworks
import javafxImg from '../assets/skills/javafx.png'
import ci4Img from '../assets/skills/ci4.png'
import reactImg from '../assets/skills/react.png'
import viteImg from '../assets/skills/vite.png'

//Objets skills

const skills_languages = [
    { name: "Python", image: pythonImg },
    { name: "Golang", image: golangImg },
    { name: "Kotlin", image: kotlinImg },
    { name: "PHP", image: phpImg },
    { name: "HTML", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "JavaScript", image: jsImg },
    { name: "MySQL", image: mysqlImg },
]
const skills_tools = [
    { name: "Linux", image: linuxImg },
    { name: "IntelliJ", image: intellijImg },
    { name: "Git", image: gitImg },
]
const skills_frameworks = [
    { name: "JavaFX", image: javafxImg },
    { name: "CodeIgniter", image: ci4Img },
    { name: "React", image: reactImg },
    { name: "Vite", image: viteImg },
]


function Skills(){

    return(
        <>
        
        <section id="skills">

            <div className="skills_block">

                <h1 className="title"><span>Skills</span></h1>

                <div className="skills_languages_block">
                    {skills_languages.map((skill) => (
                        <div className="skill_square" key={skill.name}>
                            <img src={skill.image} alt={skill.name} />
                            <span className="tooltip">{skill.name}</span>
                        </div> 
                    ))}
                </div>

                <div className="skills_languages_block">
                    {skills_tools.map((skill) => (
                        <div className="skill_square" key={skill.name}>
                            <img src={skill.image} alt={skill.name} />
                            <span className="tooltip">{skill.name}</span>
                        </div> 
                    ))}
                </div>

                <div className="skills_languages_block">
                    {skills_frameworks.map((skill) => (
                        <div className="skill_square" key={skill.name}>
                            <img src={skill.image} alt={skill.name} />
                            <span className="tooltip">{skill.name}</span>
                        </div> 
                    ))}
                </div>

            </div>

        </section>
        
        </>
    )

}

export default Skills