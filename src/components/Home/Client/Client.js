import React from 'react';
import google from '../../../images/logos/google.png'
import slack from '../../../images/logos/slack.png'
import airbnb from '../../../images/logos/airbnb.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'

const Client = () => {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-around row">
                <div className="col-md-auto col-6 mt-2 mb-5" ><img style={{width:'140px', height:'36px'}} className="Client" src={slack} alt="" /></div>
                <div className="col-md-auto col-6 mt-2" ><img style={{width:'129px', height:'44px'}} className="Client" src={google} alt="" /></div>
                <div className="col-md-auto col-6 mt-2" ><img style={{width:'99px', height:'45px'}} className="Client" src={uber} alt="" /></div>
                <div className="col-md-auto col-6 mt-2"><img style={{width:'120px', height:'50px'}} className="Client" src={netflix} alt="" /></div>
                <div className="col-md-auto col-6 mt-2" ><img style={{width:'161px', height:'51px'}} className="Client" src={airbnb} alt="" /></div>
            </div>
        </div>
    );
};

export default Client;