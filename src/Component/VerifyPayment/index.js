import React,{Component} from 'react';
import img from "../../assets/user (1).png";

class VerifyPayment extends Component{
    constructor(props){
        super(props)
        this.state = {
            isViewTerms: false
        }
    }

    onMakePayment = () => {
        this.props.history.push('/make-payment')
    }



    render() {
        const { isViewTerms } = this.state
        return(
            <div>
                <div id="mainNavigation">
                    <div className="main-nav">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                            </div>
                        </div>
                    </div>
                </div>
                <div id="app">
                    <div className="main-container">
                        <div className="component-content">
                            <div >
                                <div className="row back-button-show">
                                    <div className="col-md-8">
                                        <div className="title-content">
                                            <h2 className="payment-header padding-116 padding-16">
                                                <div className="back-button-show">
                                                    <div className="back-button"><a id="backButton" className="back" rel="" onClick={() => this.props.history.push('/make-payment')}><span className="back-arrow pl-0"/></a></div>
                                                </div></h2>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="title-content">
                                            <h2 className="payment-header padding-116 padding-16">
                                                <div className="back-prv">
                                                    <div className="back-button left-65"><a id="backButton" className="back" rel="" onClick={() => this.props.history.push('/make-payment')}><span className="back-arrow"/></a></div>
                                                </div><div className="amazon-header">AMAZON</div>Verify Payment</h2>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="payment-content padding-100" style={{maxWidth: 600}}>
                                                <div className="profile-review-card no-border">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={img} className="profile-user-icon float-left"/>
                                                            <div className="payment-text pl-40 fw-600">Please review your payment information</div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom my-20"/>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <label className="radio-btn float-left" style={{paddingLeft: 0}}>Payment amount</label>
                                                            <div className="payment-text float-right">$34.19</div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom my-20"/>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <label className="radio-btn float-left" style={{paddingLeft: 0}}>Payment method</label>
                                                            <div className="payment-text float-right">Bank account *9327</div>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center mt-20">
                                                        <div className="col-md-12">
                                                            <div className="profile-text">
                                                                Your payment method will be charged on Dec 27, 2019
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center mt-20">
                                                        <div className="col-md-12">
                                                            <div className="profile-text">
                                                                By continuing, you authorize this payment and agree to the <br/>
                                                                <a>One-Time Payment Authorization</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center mt-20">
                                                        <div className="col-md-12 xs-center">
                                                            <div className="float-left xs-no-float">
                                                                <button className="loan-btn" onClick={() => this.props.history.push('/loan-details')}>Submit Payment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default VerifyPayment
