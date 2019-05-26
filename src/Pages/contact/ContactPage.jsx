import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Contact.scss"

export function ContactPageComponent(props) {

    return (
        <React.Fragment>
            <Header />
            <div className="contactPage">
                <div className="studio">
                    <div className="contactTitle">
                        STUDIO
                    </div>
                    <div>15 Epping Road</div>
                    <div>Double Bay NSW 2028</div>
                </div>
                <div className="enquiries">
                    <div className="contactTitle">
                        PROJECT ENQUIRIES
                    </div>
                    <div>For project enquiries</div>
                    <a href="mailto:name@email.com">kai@aspacedesign.com.au</a>
                    <a href="tel:0431742640">0431 742 640</a>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default ContactPageComponent;