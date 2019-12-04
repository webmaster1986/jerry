import React from 'react';
import StepHeader from "./StepHeader";

const SecondStep = props => {
    const {formValue, onBankConnected, onCount, onBack} = props;
    const {isBankConnected} = formValue;
    return(
        <>
            <StepHeader title={'Connect a bank account'} discretion={'We use Plaid to verify your bank account in a secure way'}/>
            <div className="row justify-content-center">
                <div className="col">
                    <div className="content">
                        <div className="back-prv">
                            <div className="back-content"><a id="backButton" className="back" rel="" onClick={onBack}><span className="back-arrow"/></a></div>
                        </div>
                        <button onClick={onBankConnected} className={`connect-bank-btn ${isBankConnected ? 'active' : null}`}>Connect your bank</button>
                       { isBankConnected &&  <button onClick={onCount} className="btn">Continue</button> }
                        <div className="prv-back">
                            <a className="back" rel="" onClick={onBack}>
                                <span className="back-arrow"></span>
                                <div className="prv-text">Previous step</div>
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondStep

