import React,{Component} from 'react';
import img from '../../../src/assets/user (1).png';
import imgCard from '../../../src/assets/id-card.png';
import imgPluse from '../../../src/assets/plus-sign-in-circle.png';
import bankAccount from '../../../src/assets/bank-account.png';
import deleteButton from '../../../src/assets/delete-button.png';
import question from '../../../src/assets/question.png';
import wallet from '../../../src/assets/wallet.png';
import debitCard from '../../../src/assets/debit-card.png';
import {connect} from "react-redux";
import {setProfileValue} from "../../redux/action/profileAction";

function Profile(props) {

    const onAddPaymentMethod = () => {
        props.history.push('/profile/add-payment-method')
    }

    const onDeleteBankAccount = (accountNumber) => {
        let {bankAccountList} = props.profile;
        bankAccountList = bankAccountList.filter((x) => x.accountNumber !== accountNumber);
        props.setProfileValue({bankAccountList})
    }

    const onDeleteDebitCard = (cardNumber) => {
        let {debitCardList} = props.profile;
        debitCardList = debitCardList.filter((x) => x.cardNumber !== cardNumber);
        props.setProfileValue({debitCardList})
    }

    const {bankAccountList, debitCardList} = props.profile;
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
                        <div>
                            <div className="row justify-content-center">
                                <div className="col">
                                    <div className="profile-content">
                                        <div className="profile-review-card">
                                            <div className="row justify-content-center">
                                                <div className="col-md-12">
                                                    <img src={img} className="profile-user-icon float-left"/>
                                                    <div className="profile-text mb-20 pl-40">PERSONAL INFORMATION</div>
                                                </div>
                                            </div>
                                            <div className="row mt-20 justify-content-center">
                                                <div className="col-md-4 text-align">
                                                    <div className="profile-initial">
                                                        DC
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="_1mnv6m56"><div className="profile-name">Da Che </div></div>
                                                </div>
                                            </div>
                                            <div className="row mt-30 justify-content-center">
                                                <div className="col-md-4"/>
                                                <div className="col-md-6">
                                                    <div className="card-text-header-1 mb-5">PHONE NUMBER</div>
                                                    <div className="profile-text">+1-888-888-999</div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mt-10 edit-text">Edit</div>
                                                </div>
                                            </div>
                                            <div className="row mt-30 mb-20 justify-content-center">
                                                <div className="col-md-4"/>
                                                <div className="col-md-6">
                                                    <div className="card-text-header-1 mb-5">EMAIL ADDRESS</div>
                                                    <div className="profile-text">dache@gmail.com</div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="mt-10 edit-text">Edit</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-20">
                                <div className="col">
                                    <div className="profile-content">
                                        <div className="profile-review-card">
                                            <div className="row justify-content-center">
                                                <div className="col-md-12">

                                                    <div className="profile-text payment-method mb-20">
                                                        <img src={imgCard} className="profile-user-icon card-icon"/>
                                                        <div className="pl-21 payment-method-text">PAYMENT METHODS
                                                            <img src={question} className="profile-info-icon ml-20"/>
                                                        </div>
                                                        <img src={imgPluse} className="profile-user-icon" onClick={onAddPaymentMethod}/>
                                                    </div>

                                                </div>
                                            </div>
                                            {
                                                (bankAccountList && bankAccountList.length) || (debitCardList && debitCardList.length) > 0 ?
                                                    <div>
                                                        <div className="row mt-20 justify-content-center">
                                                            {
                                                                (bankAccountList || []).map((x, i) => {
                                                                    return(
                                                                        <>
                                                                            {
                                                                                x.paymentMethodType === "Bank Account" ?
                                                                                    <div className="col-md-12">
                                                                                        <img src={bankAccount} className="profile-bank-icon float-left"/>
                                                                                        <div className="mb-20 mt-5 pl-100">
                                                                                            <div>
                                                                                                <div className="card-text-header-1">
                                                                                                    {x.paymentMethodType.toUpperCase()}
                                                                                                    <img src={deleteButton} className="profile-user-icon float-right" onClick={() => onDeleteBankAccount(x.accountNumber)}/>
                                                                                                </div>
                                                                                                <div className="account-text">{x.accountNumber.replace(/.(?=.{4})/g, '*')}</div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div> : null
                                                                            }

                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className="row mt-20 justify-content-center">
                                                            {
                                                                (debitCardList || []).map((x, i) => {
                                                                    return (
                                                                        <>
                                                                            {
                                                                                x.paymentMethodType === "Debit Card" ?
                                                                                    <div className="col-md-12">
                                                                                        <img src={debitCard}
                                                                                             className="profile-bank-icon float-left"/>
                                                                                        <div
                                                                                            className="mb-20 mt-5 pl-100">
                                                                                            <div>
                                                                                                <div
                                                                                                    className="card-text-header-1">
                                                                                                    {x.paymentMethodType.toUpperCase()}
                                                                                                    <img
                                                                                                        src={deleteButton}
                                                                                                        className="profile-user-icon float-right"
                                                                                                        onClick={() => onDeleteDebitCard(x.cardNumber)}/>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="account-text">{x.cardNumber.replace(/.(?=.{4})/g, '*')}</div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div> : null
                                                                            }

                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    : <div className="row mt-20 justify-content-center">
                                                        <div className="col-md-12 text-align">
                                                            <img src={wallet} className="profile-wallet-icon"/>
                                                        </div>
                                                        <div className="col-md-12 text-align">
                                                            <div className="card-text-header-1 mb-20">
                                                                No payment methods set up
                                                            </div>
                                                        </div>
                                                    </div>
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
        </div>
    )

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


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
