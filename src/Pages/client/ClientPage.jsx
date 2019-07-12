import React from 'react';
import Image from "../../components/image/Image";
import './ClientPage.scss';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export function ClientPageComponent() {
    return (
        <React.Fragment>
            <Header/>
            <div className="clientPage">
                <div className="enterFront">
                    <Image
                        className="enterImage"
                        name='client-logos-webpage.jpg'
                    />
                </div>
            </div>
            <Footer/>
        </React.Fragment>

    );
}

export default ClientPageComponent;