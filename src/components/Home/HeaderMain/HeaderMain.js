import React from 'react';
import headerbg from '../../../images/logos/Frame.png'


const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:'700px'}}>
        <div className="col-md-4 offset-md-1">
            <h1>Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </div>
            <button className="btn btn-design mt-3"><strong>Hire us</strong></button>
        </div>
        <div className="col-md-6">
            <img className="img-fluid" style={{ height: '420px', width:'624'}} src={headerbg} alt="" />
        </div>
    </main>
    );
};

export default HeaderMain;
