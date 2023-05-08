import './css/About.css'
import code from '../assets/icons/code.png'
import cloud from '../assets/icons/cloud.png'
import tick from '../assets/icons/tick.png'

function About() {

    return (
        <>
            <div className="about">
                <div className="lightcircle"></div>
                <div className="container">
                    <div className="title">
                        <div className="heading">About me</div>
                        <div className="subheading">
                            <p>my journey</p>
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="photo"></div>
                        <div className="content">
                            <p>I'm Junaid Parkar, a skilled and passionate web developer. With a deep love for crafting exceptional online experiences, I bring your digital visions to life.</p>
                            <div className="box-tile">
                                <div className="card">
                                    <div className="card-bar">
                                        <img width='30' src={code} alt="" />
                                        <p>Coding</p>
                                    </div>
                                    <div className="card-content">
                                    I provide comprehensive web development services, including code writing and analysis, to ensure a seamless online presence for your brand
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-bar">
                                        <img width='30' src={cloud} alt="" />
                                        <p>Deployment</p>
                                    </div>
                                    <div className="card-content">
                                    With expertise in deploying web applications, mobile apps, or software solutions, I handle the technical aspects and configurations required for a seamless deployment
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-bar">
                                        <img width='30' src={tick} alt="" />
                                        <p>Maintanance</p>
                                    </div>
                                    <div className="card-content">
                                    I also provide comprehensive maintenance services for your brand's projects to ensure their smooth operation and longevity. Fr
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box box2">
                        <p>My journey started from my phone, where I developed my first basic website. Since then, I have come a long way, honing my skills to create high-quality websites. Over time, I have gained expertise in various frameworks and acquired extensive knowledge about databases. With my experience and proficiency, I am capable of delivering websites that meet the highest standards while also considering the employment aspect of web development.</p>
                        <div className="photo photo2"></div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </>

    )
}

export default About