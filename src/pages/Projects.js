
import BudgetPlaningApp from './../img/projects/budgetplaning.jpg';

import Project from '../components/project/Project';
import {projects} from "./../helper/projectsList"

const Projects = () => {
    return (  
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">

                {projects.map((project, index) => {
                    return <Project key ={index} title={project.title} img = {project.img} index = {index}/>;
                })}
            </ul>
            <h2 className="title-1"> Working on ... <br /></h2>
                <ul className = "projects" >
                <li className="project">
                    <a href="./project-page.html">
                        <img src={BudgetPlaningApp} alt="Project img" className="project__img" />
                        <h3 className="project__title">Budget planing app</h3>
                    </a>
                </li>
                </ul>
        </div>
    </main>
    );
};
 
export default Projects;