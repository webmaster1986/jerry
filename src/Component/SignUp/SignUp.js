import React, {Component} from 'react';
import {connect} from "react-redux";
import FirstStep from "./Steps/FirstStep";
import SecondStep from "./Steps/SecondStep";
import ThirdStep from "./Steps/ThirdStep";
import FourthStep from "./Steps/FourthStep";
import FifthStep from "./Steps/FifthStep";
import SixStep from "./Steps/SixStep";
import Header from "../Header";
import Footer from "../Footer";
import {setFormValue} from "../../redux/action/formAction";

class SignUp extends Component {

    onCount = () => {
        const count = this.props.formValue.count + 1;
        this.props.setFormValue({count})
        if (count === 5) {
            setTimeout(() => this.props.setFormValue({count: count + 1}), 5000);
        }
    }

    onBack = () => {
        const count = this.props.formValue.count - 1;
        this.props.setFormValue({count})
    }

    onChangeText = (event) => {
        this.props.setFormValue({[event.target.name]: event.target.value})
    }

    onBankConnected = () => {
        this.props.setFormValue({isBankConnected: !this.props.formValue.isBankConnected});
    }

    onSelectedPlan = (plan) => {
        this.props.setFormValue({selectedPlan: plan});
    }


    render() {
        const {count} = this.props.formValue;
        return (
            <div id="app">
                <div className="main-container">
                    <Header count={count}/>
                    <div className="component-content">
                        <div className="container ">
                        {count === 1 && <FirstStep onCount={this.onCount} onChangeText={this.onChangeText} formValue={this.props.formValue}/>}
                        {count === 2 && <SecondStep onCount={this.onCount} onBack={this.onBack} onBankConnected={this.onBankConnected} formValue={this.props.formValue}/>}
                        {count === 3 && <ThirdStep onCount={this.onCount} onBack={this.onBack} onSelectedPlan={this.onSelectedPlan} formValue={this.props.formValue}/>}
                        {count === 4 && <FourthStep onCount={this.onCount} onBack={this.onBack}/>}
                        {count === 5 && <FifthStep onCount={this.onCount} onBack={this.onBack}/>}
                        {count === 6 && <SixStep/>}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        formValue: state && state.form,
    }
};

const mapDispatchToProps = (dispatch) => ({
    setFormValue: (state) => {
        return dispatch(setFormValue(state))
    }
});
export default connect(mapStateToProps, mapDispatchToProps) (SignUp)
