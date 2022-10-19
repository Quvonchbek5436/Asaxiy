import React from 'react';
import Carosel from "./carosel";

const FirstPage = () => {
    return (
        <div className={'container mt-4'}>
            <div className="row">
                <div className="col-lg-9 col-md-12 mb-3">
                    <Carosel/>
                </div>
                <div className="col-lg-3 col-md-12 mb-3">
                    <img style={{borderRadius:'10px',maxHeight:'400px',width:'100%',objectFit:'cover'}} src="https://assets.asaxiy.uz/uploads/toptoday/mobile/634d4db8c4403.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;