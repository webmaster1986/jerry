import React,{Component} from 'react';
import img from "../../assets/user (1).png";

class MakePayment extends Component{

    state={
        selectAmount: 'nextPayment'
    }

    onBack = () => {
        this.props.history.push('/loan-details')
    }

    onMakePayment = () => {
        this.props.history.push('/verify-payment')
    }

    onRadioChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { selectAmount } = this.state;
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
                                                    <div className="back-button"><a id="backButton" className="back" rel="" onClick={this.onBack}><span className="back-arrow pl-0"/></a></div>
                                                </div></h2>
                                        </div>

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="title-content">
                                            <h2 className="payment-header padding-116 padding-16">
                                                <div className="back-prv">
                                                    <div className="back-button left-65"><a id="backButton" className="back" rel="" onClick={this.onBack}><span className="back-arrow"/></a></div>
                                                </div><div className="amazon-header">AMAZON</div> Make a payment</h2>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="payment-content padding-100">
                                                <div className="profile-review-card no-border">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <img src={img} className="profile-user-icon float-left"/>
                                                            <div className="payment-text pl-40 fw-600">Select a date</div>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <div className="text-box mt-20">
                                                                <select
                                                                    name="state"
                                                                    placeholder="State"
                                                                    className="text-box-content"
                                                                >
                                                                    <option value="Today (Dec 27,2019)">Today (Dec 27,2019)</option>
                                                                    <option value="Next due date (Feb 24, 2020)">Next due date (Feb 24, 2020)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom my-20"/>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <img src={img} className="profile-user-icon float-left"/>
                                                            <div className="payment-text pl-40 fw-600">Select an amount</div>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12 mt-20">
                                                                <label className="radio-btn float-left">Upcoming Monthly Payment
                                                                    <input type="radio" name="selectAmount" checked={selectAmount === 'nextPayment'} value="nextPayment" onChange={this.onRadioChange}/>
                                                                        <span className="checkmark"/>
                                                                </label>
                                                                <div className="payment-text float-right">$34.19</div>
                                                            <div className="payment-card-text-header-1 mb-5 float-left ml-35 mt-10 w-100">DUE Jan 24, 2020</div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom my-20"/>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <label className="radio-btn  float-left pl-40">Remaining Balance
                                                                <input type="radio" name="selectAmount" checked={selectAmount === 'RemainingBalance'} value="RemainingBalance" onChange={this.onRadioChange}/>
                                                                <span className="checkmark"/>
                                                            </label>
                                                            <div className="payment-text float-right">$101.29</div>
                                                            <div className="payment-card-text-header-1 color-black mb-5 float-right ml-35 mt-10">
                                                                We've updated your balance to reflect the amount of interest that will accrue by Jan 24,2020. But remember, there are no penalties for paying your balance early!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom my-20"/>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <label className="radio-btn mt-10 float-left">Other Amount <div className="text-box">
                                                            </div>
                                                                <input type="radio" name="selectAmount" checked={selectAmount === 'otherAmount'} value="otherAmount" onChange={this.onRadioChange}/>
                                                                <span className="checkmark"/>
                                                            </label>
                                                            <div className="float-right position-relative">
                                                                <span className="sign">$</span>
                                                                <input
                                                                    name="city"
                                                                    type="text"
                                                                    disabled={selectAmount !== 'otherAmount'}
                                                                    className="payment-text-box-content"
                                                                    prefix={"$"}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom my-20"/>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <img src={img} className="profile-user-icon float-left"/>
                                                            <div className="payment-text pl-40 fw-600">Select a payment method</div>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-12">
                                                            <div className="text-box mt-20">
                                                                <select
                                                                    name="state"
                                                                    placeholder="State"
                                                                    className="text-box-content"
                                                                >
                                                                    <option value="Today (Dec 27,2019)">Bank account .... 9327 - recommended</option>
                                                                    <option value="Bank account .... 8641">Bank account .... 8641</option>
                                                                    <option value="Bank account .... 5384">Bank account .... 5384</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row justify-content-center mt-20">
                                                        <div className="col-md-12 xs-center">
                                                            <div className="float-left xs-no-float">
                                                                <button className="loan-btn" onClick={this.onMakePayment}>Continue</button>
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

export default MakePayment
