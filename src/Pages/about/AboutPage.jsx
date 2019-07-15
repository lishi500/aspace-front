import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Image from "../../components/image/Image";

export function AboutPageComponent(props) {

    return (
        <React.Fragment>
            <Header />
            <div className="aboutPage">
                <div className="aboutPageContainer">
                    <div className="aboutPageLeft">
                        <Image
                            name='about.png'
                        />
                    </div>
                    <div className="aboutPageRight">
                        <p className="aboutTitle">ABOUT</p>
                        <p>A Space is an award winning interior design firm with a breadth of experience in the delivery of interior and graphic deliverable across corporate, retail and hospitality sectors. With careful consideration to client needs, the studio designs, directs and executes interiors and graphics from concept through to creation.</p>
                        <p>Since it was founded in 2013, A space has successfully delivered projects to clients nationally and internationally. A Space is accustomed to working to suit various client environments; we have experience working with government, corporate and non government organisations and are adaptable to delivering projects within these different frameworks.</p>
                        <p>While we have a commitment to producing high quality and unique design concepts we also pin our success on maintaining efficiency, cost effectiveness and a high quality of communication and service throughout all of our projects.</p>
                        <p>With a team combining cross disciplinary experience throughout interiors architecture and graphic design, we offer a broad approach to solving design problems. We are skilled in addressing project requirements, developing effective design concepts, as well as displaying a high degree of verbal and visual communication; we also specialise in documentation as well as CGIs for any interior & exterior projects.</p>
                        <p>Our multi – disciplinary skills, collective knowledge and professionalism deliver outcomes that are enduring, personal and distinctive.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default AboutPageComponent;