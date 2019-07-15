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
                <Image
                    name='client-logos-webpage.png'
                />
            </div>
            <Footer/>
        </React.Fragment>

    );
}

export default ClientPageComponent;