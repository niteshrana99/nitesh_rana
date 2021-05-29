import React from 'react';
import mindtreeLogo from "../../assets/images/mindtree-logo_bw.png";
import oracleLogo from "../../assets/images/oracle-symbol.jpg";
import preqinLogo from "../../assets/images/preqin.png";

const Brands = () => {
    return (
        <div className="brands">
            <div className="brands_container">
                <img src={mindtreeLogo} style={{width:'100%'}} />
            </div>
            <div className="brands_container">
                <img src={oracleLogo} style={{width:'100%'}} />
            </div>
            <div className="brands_container">
            <img src={preqinLogo} style={{width:'100%'}} />
            </div>
        </div>
    )
}

export default Brands
