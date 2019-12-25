import React,{Component} from 'react'
import {setProfileValue} from "../../redux/action/profileAction";
import {connect} from "react-redux";

class AddPaymentMethod extends Component{

    state ={
        paymentMethodType: '',
        name: '',
        routingNumber: '',
        accountNumber: '',
        fullName: '',
        cardNumber: '',
        mmyy: '',
        cvc: '',
        zip: '',

    }

    onBackProfile = () => {
       this.props.history.push('/profile')
    }

    onChange = (event) => {
        let { name, value } = event.target
        const errors = {};
        if (name === "paymentMethodType"){
            this.props.setProfileValue({errors});
        }
        if (name === "cardNumber"){
            if (value.length > 19) {
                return;
            }
            if (value.length && value.length < 16 && value.replace(/ /g, '').length % 4 === 0 && value.length > this.state.cardNumber.length) {
                value = `${value} `;
            }
        }
        if (name === "mmyy"){
            if (value.length > 5) {
                return;
            }
            value = value.replace(/ /g, '');
            if (value.length === 2 && this.state.mmyy.length < 3) {
                value = `${value}/`;
            }
        }
        this.setState({
            [name]: value
        })
    }


    onSubmitBankAccount = () => {
        const fields = ['name', 'accountNumber', 'routingNumber'];
        const errors = {};
        fields.forEach(x => {
            if (!this.state[x]) {
                errors[x] = true;
            }
        });
        if (Object.keys(errors).length) {
            this.props.setProfileValue({errors});
        } else {
            const {paymentMethodType, name, accountNumber, routingNumber} = this.state;
            const {bankAccountList} = this.props.profile
            const obj = {paymentMethodType, name, accountNumber, routingNumber};
            bankAccountList.push(obj);
            this.props.setProfileValue({bankAccountList})
            this.props.history.push('/profile')
        }
    }

    onSubmitDebitCard = () => {
        const fields = ['cardNumber', 'cvc', 'fullName', 'mmyy', 'zip'];
        const errors = {};
        fields.forEach(x => {
            if (!this.state[x]) {
                errors[x] = true;
            }
        });
        if (Object.keys(errors).length) {
            this.props.setProfileValue({errors});
        } else {
            const {paymentMethodType, cardNumber, cvc, fullName, mmyy, zip} = this.state;
            const {debitCardList} = this.props.profile
            const obj = {paymentMethodType, cardNumber, cvc, fullName, mmyy, zip};
            debitCardList.push(obj);
            this.props.setProfileValue({debitCardList})
            this.props.history.push('/profile')
        }
    }

    onBlur = (event) => {
        if(event.target.value){
            const { errors } =  this.props.profile;
            delete errors[event.target.name];
            this.props.setProfileValue({errors});
        } else {
            const errors =  this.props.profile.errors;
            errors[event.target.name] = true;
            this.props.setProfileValue({errors});
        }
    }

    render() {
        const {paymentMethodType, name, accountNumber, cardNumber, cvc, fullName, mmyy, routingNumber, zip} = this.state;
        const {errors} = this.props.profile;
        return(
            <div id="app">
                <div className="main-container">
                    <div className="component-content">
                        <div className="container ">
                            <div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <div className="title-content"><h2 className="title-tag">
                                            <div className="back-prv">
                                                <div className="back-content-profile"><a id="backButton" className="back" rel="" onClick={this.onBackProfile}><span className="back-arrow"/></a></div>
                                            </div>Add a payment method</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col">
                                        <div className="content">

                                            <div className="row">
                                                <div className="col-md-12 pr-5">
                                                    <div className="text-box">
                                                        <select
                                                            name="paymentMethodType"
                                                            placeholder="Payment method"
                                                            className="text-box-content"
                                                            value={paymentMethodType}
                                                            onChange={this.onChange}
                                                            onBlur={this.onBlur}
                                                        >
                                                            <option value=''>Payment method</option>
                                                            <option value='Bank Account'>Add bank account (ACH) - recommended</option>
                                                            <option value='Debit Card'>Add debit card</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                paymentMethodType === "Bank Account" ?
                                                    <div className="row">
                                                        <div className="col-md-12 pr-5">
                                                            <div className="text-box">
                                                                <input
                                                                    name="name"
                                                                    type="text"
                                                                    placeholder="Name"
                                                                    className="text-box-content"
                                                                    value={name}
                                                                    onChange={this.onChange}
                                                                    onBlur={this.onBlur}
                                                                />
                                                                {errors.name ? <span className="error">Name required</span> : null }
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 pr-5">
                                                            <div className="text-box">
                                                                <input
                                                                    name="routingNumber"
                                                                    type="text"
                                                                    placeholder="Routing number"
                                                                    className="text-box-content"
                                                                    value={routingNumber}
                                                                    onChange={this.onChange}
                                                                    onBlur={this.onBlur}
                                                                />
                                                                {errors.routingNumber ? <span className="error">Routing number required</span> : null }
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 pr-5">
                                                            <div className="text-box">
                                                                <input
                                                                    name="accountNumber"
                                                                    type="text"
                                                                    placeholder="Account number"
                                                                    className="text-box-content"
                                                                    value={accountNumber}
                                                                    onChange={this.onChange}
                                                                    onBlur={this.onBlur}
                                                                />
                                                                {errors.accountNumber ? <span className="error">Account number required</span> : null }
                                                            </div>
                                                        </div>
                                                    </div> : null
                                            }
                                            {
                                                paymentMethodType === "Debit Card" ?
                                                    <div className="row">
                                                        <div className="col-md-12 pr-5">
                                                            <div className="text-box">
                                                                <input
                                                                    name="fullName"
                                                                    type="text"
                                                                    placeholder="Full name"
                                                                    className="text-box-content"
                                                                    value={fullName}
                                                                    onChange={this.onChange}
                                                                    onBlur={this.onBlur}
                                                                />
                                                                {errors.fullName ? <span className="error">Full name required</span> : null }
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 pr-5">
                                                            <div className="text-box">
                                                                <input
                                                                    name="cardNumber"
                                                                    type="text"
                                                                    placeholder="Card number"
                                                                    className="text-box-content"
                                                                    value={cardNumber}
                                                                    onChange={this.onChange}
                                                                    onBlur={this.onBlur}
                                                                />
                                                                {errors.cardNumber ? <span className="error">Card number invalid</span> : null }
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 pr-5">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className="text-box">
                                                                        <input
                                                                            name="mmyy"
                                                                            type="text"
                                                                            placeholder="MM/YY"
                                                                            maxlength={5}
                                                                            className="text-box-content"
                                                                            value={mmyy}
                                                                            onChange={this.onChange}
                                                                            onBlur={this.onBlur}
                                                                        />
                                                                        {errors.mmyy ? <span className="error">Required</span> : null }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-box">
                                                                        <input
                                                                            name="cvc"
                                                                            type="text"
                                                                            placeholder="CVC"
                                                                            maxlength={3}
                                                                            className="text-box-content"
                                                                            value={cvc}
                                                                            onChange={this.onChange}
                                                                            onBlur={this.onBlur}
                                                                        />
                                                                        {errors.cvc ? <span className="error">CVC required</span> : null }
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="text-box">
                                                                        <input
                                                                            name="zip"
                                                                            type="text"
                                                                            placeholder="ZIP"
                                                                            className="text-box-content"
                                                                            value={zip}
                                                                            onChange={this.onChange}
                                                                            onBlur={this.onBlur}
                                                                        />
                                                                        {errors.zip ? <span className="error">ZIP required</span> : null }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> : null
                                            }

                                            <button  className="profile-btn" onClick={paymentMethodType === "Bank Account" ? this.onSubmitBankAccount : paymentMethodType === "Debit Card" ? this.onSubmitDebitCard : null}>Continue</button>
                                            <div className="prv-back"><a className="back" rel="" onClick={this.onBackProfile}><span className="back-arrow"></span><div className="prv-text">Previous step</div>
                                            </a></div>
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
const mapStateToProps = (state) => {
    return{
        profile: (state && state.profile) || {},
    }
};

const mapDispatchToProps = (dispatch) => ({
    setProfileValue: (state) => {
        return dispatch(setProfileValue(state))
    }
});
export default connect(mapStateToProps, mapDispatchToProps) (AddPaymentMethod)
