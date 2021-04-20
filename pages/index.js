import Layout from "../components/Layout";
import {skills, experiences, projects} from '../profile'

const Index = () => (
    <Layout>
        {/* Header */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-fluid" src="img.png" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h1>Saúl Vega</h1>
                            <h3>FullStack Developer</h3>
                            <p>
                                Systems and informatics engineer, fullstack developer, app developer, 
                                self-learning and likes reading.
                            </p>
                            <br />
                            <p>
                                Check my portfolio at the botton of the page!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Middle Section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(( {skill, number}, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div 
                                            className="progess-bar bg-primary"
                                            role="progressbar"
                                            style={{ width:`${number}%` }}
                                        >
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map( ({title, from, to, description, link}, i) => (
                                    <li key={i}>
                                        <h3>{ title }</h3>
                                        <h5>{ from } - { to }</h5>
                                        <p> 
                                            { description }
                                            <br />
                                            <br />
                                            <a href={link} target="_blank">
                                                {' See website'}
                                            </a> 
                                        </p>
                                    </li>
                                ) )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
        {/* End Section */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map( ({title, description, img, link}, i) => (
                                <div className="col-md-4 p-2">
                                    <div className="card h-100" key={i}>
                                        <div className="overflow">
                                            <img className="card-img-top" src={img} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{ title }</h3>
                                            <p>{ description }</p>
                                            <a href={ link } target="_blank">See project</a>
                                        </div>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default Index;