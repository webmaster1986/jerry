import React from 'react';
import StepHeader from "./StepHeader";
import {planList} from '../../../utils/constent'
const ThirdStep = props => {
    const {onBack, onCount, onSelectedPlan, formValue} = props;
    const {selectedPlan} = formValue;
        return(
            <>
                <StepHeader title={'Choose the plane that\'s right for your budget'} discretion={'Play less interest with Auto Pay, and prepay anytime with no fee.'}/>
                <div className="row">
                    <div className="col">
                        <div className="content">
                            {
                                planList.map((x, i)=> {
                                    return(
                                        <div className={`card ${selectedPlan === x.month ? 'active' : ''}`} onClick={() => onSelectedPlan(x.month)}>
                                            <div>
                                                <div className="card-text-header mb-20">{x.month} Monthly Payments</div>
                                                <div className="card-text-content d-flex mb-10"><div className="title-tag">${x.mo} </div><div className="right-text-lbl">/mo*</div></div>
                                                <div>${x.total} Total Interest</div>
                                            </div>
                                            <div className="card-text-header">{x.apr}% APR</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="back-prv">
                                <div className="back-content"><a id="backButton" className="back" rel="" onClick={onBack}><span className="back-arrow"/></a></div>
                            </div>

                            <button onClick={onCount} className="btn">Continue</button>
                            <div className="prv-back"><a className="back" rel="" onClick={onBack}><span className="back-arrow"></span><div className="prv-text">Previous step</div>
                            </a></div>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default ThirdStep
