import LedCube from './../img/projects/ledcube.jpg';
import MedicineSorter from './../img/projects/medicinesorter.jpg';
import RobotInMaze from './../img/projects/robotinmaze.jpg';
import LineFollowRobot from './../img/projects/robotfollowline.jpg';
import SunTracker from './../img/projects/suntracker.jpg';

const projects = [
    {
        title: 'Led Cube 8x8x8',
        skills: 'Building an 8x8x8 LED cube required meticulous wiring and soldering, as well as precise programming to control each LED individually. The Arduino microcontroller used for this project has limited memory and processing power, making optimization crucial to handle the large number of LEDs. Developing algorithms to animate and display patterns on the cube while considering memory constraints and performance was a significant challenge.',
        img: LedCube,
    },
    {
        title: 'Robot in Maze',
        skills: 'Developing an efficient algorithm for the robot to navigate through the maze while identifying the shortest path to the exit. Implementing a mechanism for the robot to remember its path and avoid retracing steps to optimize navigation efficiency. Creating sensors or algorithms to detect obstacles in the maze and adjust the robots path accordingly to prevent collisions. Designing algorithms to enable the robot to make real-time decisions based on sensor inputs while navigating the maze.',
        img: RobotInMaze,
    },
    {
        title: 'Sun Tracker',
        skills: 'Developing an algorithm to accurately track the suns position throughout the day and adjust the turrets orientation accordingly to maximize solar energy absorption. Integrating sensors, such as light sensors or photodiodes, to accurately detect the suns position relative to the turret and provide feedback for adjustment. Designing a robust and precise mechanical structure for the turret that can smoothly rotate and adjust its angle based on the suns position without encountering mechanical issues or backlash.',
        img: SunTracker,
    },
    {
        title: 'Medicine Sorter',
        skills: 'Developing a system capable of accurately identifying different types of medication based on visual cues, such as shape and color. Designing a sorting mechanism capable of efficiently and accurately segregating medications into their respective compartments or containers based on the identified medication type. Designing a user-friendly interface for inputting medication data and monitoring the sorting process, catering to both healthcare professionals and patients who may interact with the system.',
        img: MedicineSorter,
    },
    {
        title: 'Line Following Robot',
        skills: 'Ensuring the sensors used to detect the line are accurate and reliable, especially in different lighting conditions or on various surfaces. Developing algorithms to guide the robot along the line smoothly and efficiently, including handling curves, intersections, and obstacles along the path. Implementing speed control mechanisms to adjust the robots velocity based on the curvature and complexity of the line, preventing overshooting or veering off-course.',
        img: LineFollowRobot,
    },
]

export {projects}
