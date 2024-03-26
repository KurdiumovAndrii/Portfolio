import SimpleSlider from "../components/slider/SimpleSlider";

function About () {
    return (  
        
        <div className="container">
          <SimpleSlider />
                <ul className="content-list-about">
                  <li className="content-list__item">
                    <h2 className="title-2">About me</h2>
                    <p className = "about-p">I am a computer science student with a passion for exploring various programming languages such as C#, C++, Java, and JavaScript. With a strong foundation in designing, modeling, and programming robots, I have developed valuable skills in both software and hardware domains.
                      I am deeply motivated to continuously learn and adopt new technologies in programming, and I thrive in collaborative team environments where I can contribute my skills and learn from others.
                </p>
                  </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Intresting in</h2>
                        <p>Programing, microcontrolers, science, board games, music</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Hobbies</h2>
                        <p>I am a student who is passionate about tabletop games, with a particular love for the creative tabletop game 'Dungeons and Dragons'. In addition to gaming, I play electric guitar and have a few recordings of my tracks.
                             I have a keen interest in music and enjoy spending my free time exploring something new, such as discovering new programming libraries, 3D modeling and brainstorming creative ideas for D&D campaigns, while also being committed to continuous learning.
                        </p>
                    </li>
                </ul>

        </div>
    )
}
 
export default About;