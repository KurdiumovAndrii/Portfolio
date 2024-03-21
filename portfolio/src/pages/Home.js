import Header from "./../components/header/Header";

function Home () {
    return ( 
        <>
        <Header />

        <main className="section">
            <div className="container">
    
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 class="title-2">Languages</h2>
                            <p>C++, C#, JavaScript, Java</p>
                        </li>
                        <li className="content-list__item">
                            <h2 class="title-2">Technologies</h2>
                            <p>STL, .NET Framework, ASP.NET, Entity Framework, Blazor, NodeJS, React.js, Apache Kafka</p>
                        </li>
                        <li className="content-list__item">
                            <h2 class="title-2">3D Graphics</h2>
                            <p>AutoCad, FreeCad, SolidWorks</p>
                        </li>
                    </ul>
    
            </div>
        </main>
        </>
     )
}
 
export default Home;