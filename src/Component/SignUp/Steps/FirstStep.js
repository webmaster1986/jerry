import React from 'react';
import {stateList, monthList} from '../../../utils/constent'
import StepHeader from "./StepHeader";


const FirstStep = props => {
    const {onChangeText} = props;
    const {firstName, lastName, email, phone, street, apt, city, state, zipCode, month, day, year, last4SSN, annualIncome, monthlyHousingCost} = props.formValue
        return(
            <>
                <StepHeader title={'Get Started with Square Installments'} discretion={'This information will verify your identity and eligibility, which does not affect your credit score. If we need more information that could affect your credit score, we will let you know.'}/>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="text-box">
                                        <input
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={firstName}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-box">
                                        <input
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={lastName}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-box">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={email}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-box">
                                        <input
                                            name="phone"
                                            type="text"
                                            placeholder="Phone"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={phone}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="label">Address</div>
                            <div className="row">
                                <div className="col-md-9 pr-5">
                                    <div className="text-box">
                                        <input
                                            name="street"
                                            type="text"
                                            placeholder="Street"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={street}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3 pl-5">
                                    <div className="text-box">
                                        <input
                                            name="apt"
                                            type="text"
                                            placeholder="Apt"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={apt}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-box">
                                        <input
                                            name="city"
                                            type="text"
                                            placeholder="City"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={city}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 pr-5">
                                    <div className="text-box">
                                        <select
                                            name="state"
                                            placeholder="State"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={state}
                                        >
                                            {
                                                stateList.map((x, i)=> {
                                                    return(
                                                        <option value={x} key={i}>{x}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-5">
                                    <div className="text-box">
                                        <input
                                            name="zipCode"
                                            type="text"
                                            placeholder="Zip Code"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={zipCode}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="label"> Date of Birth</div>
                            <div className="row">
                                <div className="col-md-4 pr-5">
                                    <div className="text-box">
                                        <select
                                            name="month"
                                            placeholder="January"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={month}
                                        >
                                            {
                                                monthList.map((x, i)=> {
                                                    return(
                                                        <option value={x} key={i}>{x}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 pr-5 pl-5">
                                    <div className="text-box">
                                        <input
                                            name="day"
                                            type="text"
                                            placeholder="Day"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={day}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 pl-5">
                                    <div className="text-box">
                                        <input
                                            name="year"
                                            type="text"
                                            placeholder="Year"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={year}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="label">  Last 4 SSN</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-box">
                                        <input
                                            name="last4SSN"
                                            type="text"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={last4SSN}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="label">Annual Income</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-box">
                                        <input
                                            name="annualIncome"
                                            type="text"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={annualIncome}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="label"> Monthly Housing Cost</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-box">
                                        <input
                                            name="monthlyHousingCost"
                                            type="text"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            value={monthlyHousingCost}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button onClick={props.onCount} className="btn">Continue
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default  FirstStep;
