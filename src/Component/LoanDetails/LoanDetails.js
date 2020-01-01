import React,{Component} from 'react';
import dollar from "../../assets/dollar.png";
import setting from "../../assets/gear.png";
import img from "../../assets/user (1).png";

class LoanDetails extends Component{
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
                            <div className="container ">
                                <div className="row justify-content-center">
                                    <div className="col">
                                        <div className="loan-detail-content">
                                            <div className="profile-review-card loan-details">
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12 xs-center">
                                                        <div className="_1mnv6m56 float-left xs-no-float">
                                                            <div className="profile-name fw-600">
                                                                Amazon
                                                            </div>
                                                        </div>
                                                        <div className="float-right xs-no-float mt-18 d-flex xs-loan-content-center">
                                                            <img src={dollar} className="profile-user-icon mr-10"/>
                                                            <div className="profile-text d-flex mr-10">AutoPay: &nbsp; <div className="card-text-header-1">Off</div></div>
                                                            <img src={setting} className="profile-user-icon"/>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="border-bottom my-20"/>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12 xs-center">
                                                        <div className="float-left loan-text xs-no-float">$13.14 due on Jan 24,2020</div>
                                                        <div className="float-right xs-no-float">
                                                            <button className="loan-btn" onClick={this.onMakePayment}>Make payment</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border-bottom my-20"/>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12">
                                                        <img src={img} className="profile-user-icon float-left"/>
                                                        <div className="profile-text mb-20 pl-40">PURCHASE DETAILS</div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-3 pb-15">
                                                        <div className="card-text-header-1 mb-5">Purchase total</div>
                                                        <div className="timeline-text">$100.00</div>
                                                    </div>
                                                    <div className="col-md-3 pb-15">
                                                        <div className="card-text-header-1 mb-5">Total interest (15.35% APR)</div>
                                                        <div className="timeline-text">+$2.57</div>
                                                    </div>
                                                    <div className="col-md-3 pb-15">
                                                        <div className="card-text-header-1 mb-5">Total of payments</div>
                                                        <div className="timeline-text">$102.57</div>
                                                    </div>
                                                    <div className="col-md-3 pb-15">
                                                        <div className="card-text-header-1 mb-5">Loan ID</div>
                                                        <div className="timeline-text">GK5Y-R0OD</div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12">
                                                        <div className="progressbar mt-20">
                                                            <div style={{width: '7%'}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center mt-20">
                                                    <div className="col-md-12">
                                                        <div className="float-left">
                                                            <div className="card-text-header-1 mb-5">PAID</div>
                                                            <div className="timeline-text">$50.00</div>
                                                        </div>
                                                        <div className="float-right">
                                                            <div className="card-text-header-1 mb-5">REMAINING</div>
                                                            <div className="timeline-text">$102.57</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center mt-30">
                                                    <div className="col-md-12">
                                                        <img src={img} className="profile-user-icon float-left"/>
                                                        <div className="profile-text pl-40">LOAN TIMELINE</div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center mt-20">
                                                    <div className="col-md-12">
                                                        <ul className="timeline">
                                                            <li className="active">
                                                                <div className="float-left">
                                                                    <div className="card-text-header-1 d-flex">Processed: &nbsp; <div className="profile-text">Dec 24, 2020</div></div>
                                                                </div>
                                                                <div className="float-right">
                                                                    <div className="timeline-text-active">Loan terms</div>
                                                                </div>
                                                                <br/>
                                                                <br/>
                                                            </li>
                                                            <li>
                                                                <div className="float-left">
                                                                    <div className="card-text-header-1 d-flex">Due: &nbsp; <div className="profile-text">Jan 24, 2020</div></div>
                                                                </div>
                                                                <div className="float-right">
                                                                    <div className="timeline-text-active">$34.19</div>
                                                                </div>
                                                                <br/>
                                                                <br/>
                                                            </li>
                                                            <li>
                                                                <div className="float-left">
                                                                    <div className="card-text-header-1 d-flex">Due: &nbsp; <div className="profile-text">Feb 24, 2020</div></div>
                                                                </div>
                                                                <div className="float-right">
                                                                    <div className="timeline-text">$34.19</div>
                                                                </div>
                                                                <br/>
                                                                <br/>
                                                            </li>
                                                            <li>
                                                                <div className="float-left">
                                                                    <div className="card-text-header-1 d-flex">Due: &nbsp; <div className="profile-text">Mar 24, 2020</div></div>
                                                                </div>
                                                                <div className="float-right">
                                                                    <div className="timeline-text">$34.19</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="row justify-content-center mt-30">
                                                    <div className="col-md-12">
                                                        <div className="profile-text">
                                                            { isViewTerms ? <a onClick={() => this.setState({isViewTerms: !isViewTerms})}>Hide term definitions</a> : <a onClick={() => this.setState({isViewTerms: !isViewTerms})}>What do these terms mean?</a> }
                                                        </div>
                                                    </div>
                                                </div>
                                                { isViewTerms ?
                                                    <div>
                                                        <div className="row justify-content-center mt-10">
                                                            <div className="col-md-12">
                                                                <div className="profile-text">
                                                                    <b className="timeline-text">Merchant Processing
                                                                        Order: </b>
                                                                    <span>Your loan has been confirmed and is pending while your order is being processed. Your loan begins and your payment schedule will be shown when processing is complete.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-center mt-10">
                                                            <div className="col-md-12">
                                                                <div className="profile-text">
                                                                    <b className="timeline-text">Adjustment: </b>
                                                                    <span>part of your all loan has credited back to you, for example, from a returned purchase.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-center mt-10">
                                                            <div className="col-md-12">
                                                                <div className="profile-text">
                                                                    <b className="timeline-text">Charged off: </b>
                                                                    <span>your loan has been charged off because it is more than 120 days overdue. Charged-off loans are generally refereed  to collections.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-center mt-10">
                                                            <div className="col-md-12">
                                                                <div className="profile-text">
                                                                    <b className="timeline-text">Processed: </b>
                                                                    <span>your order has been processed and you loan has begun.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-center mt-10">
                                                            <div className="col-md-12">
                                                                <div className="profile-text">
                                                                    <b className="timeline-text">Paid: </b>
                                                                    <span>you made a payment towards the balance of this loan.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> : null
                                                }
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

export default LoanDetails
