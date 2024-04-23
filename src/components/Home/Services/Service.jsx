import React from 'react';
import './index.css';
import img from '../../../images/doc/doc1.jpg'
import img2 from '../../../images/doc/doc4.jpg'
import img3 from '../../../images/doc/doctor 5.jpg'
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <section className="container" style={{marginTop: 200, marginBottom:200}}>
            <div className='mb-5 section-title text-center'>
                <h2>Services</h2>
                <p className='m-0'>Experience our dedication firsthand</p>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img">
                            <img src={img} alt="" className="img-fluid" />
                            <img src={img2} alt="" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            <img src={img3} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-content ps-4 mt-4 mt-lg-0">
                            <h2>Home care <br />Clean living</h2>
                            <p className="mt-4 mb-5 text-secondary form-text">Transform your outdoor space with our expert garden cleaning services. Revitalize your home's exterior and enhance its curb appeal</p>
                            <Link to={'/service'} className="btn-get-started scrollto">Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service