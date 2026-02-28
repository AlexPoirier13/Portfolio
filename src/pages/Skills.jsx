import '../styles/Skills.css'

//Objets skills

const skills_languages = [
    {name: "Python", image:"/src/assets/skills/python.png"},
    {name: "Golang", image:"/src/assets/skills/golang.png"},
    {name: "Kotlin", image:"/src/assets/skills/kotlin.png"},
    {name: "PHP", image:"/src/assets/skills/php.png"},
    {name: "HTML", image:"/src/assets/skills/html.png"},
    {name: "CSS", image:"/src/assets/skills/css.png"},
    {name: "JavaScript", image:"/src/assets/skills/js.png"},
    {name: "MySQL", image:"/src/assets/skills/mysql.png"},
]

const skills_tools = [
    {name: "Linux", image:"/src/assets/skills/linux.png"},
    {name: "IntelliJ", image:"/src/assets/skills/intellij.png"},
    {name: "Git", image:"/src/assets/skills/git.png"},
]

const skills_frameworks = [

    {name: "JavaFX", image:"/src/assets/skills/javafx.png"},
    {name: "CodeIgniter", image:"/src/assets/skills/ci4.png"},
    {name: "React", image:"/src/assets/skills/react.png"},
    {name: "Vite", image:"/src/assets/skills/vite.png"},

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