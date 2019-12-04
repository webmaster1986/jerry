import React from 'react';
import img from '../../../assets/check-mark-png-scalable-vector-9.png'

const SixStep = props =>{
        return(
                <div className="text-center">
                    <div className="mb-20">
                        <img src={img} className="success-message-img"/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="content">
                                <div className="title-content">
                                    <div className="sub-title-content">Application submitted successfully</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default SixStep

