import React from 'react';

const FourthStep = props =>{
   const {onCount, onBack} = props;
        return(
            <>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="title-content"><h2 className="title-tag">Review Your Terms</h2></div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="content">
                            <div className="back-prv">
                                <div className="back-content"><a id="backButton" className="back" rel="" onClick={onBack}><span className="back-arrow"/></a></div>
                            </div>
                            <div className="review-card">
                                <div>
                                    <div className="_1mnv6m56"><div className="title-tag-1">$356.00 </div></div>
                                    <div className="card-text-header-1 mb-20">Monthly Payments 6 Months</div>
                                    <div className="_1mnv6m56"><div className="title-tag-1">$2,186.44 </div></div>
                                    <div className="card-text-header-1 mb-20">Total (principle + Interest)</div>
                                    <div className="_1mnv6m56"><div className="title-tag-1">14% </div></div>
                                    <div className="card-text-header-1 mb-20">Discounted Interest Rate</div>
                                </div>
                            </div>
                            <button onClick={onCount} className="btn">Submit Application
                            </button>
                            <div className="prv-back"><a className="back" rel="" onClick={onBack}><span className="back-arrow"></span><div className="prv-text">Previous step</div>
                            </a></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
export default FourthStep
