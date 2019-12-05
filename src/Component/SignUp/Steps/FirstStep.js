import React from 'react';
import {stateList, monthList} from '../../../utils/constent'
import StepHeader from "./StepHeader";


const FirstStep = props => {
    const {onChangeText, onSubmit, onBlur} = props;
    const {firstName, lastName, email, phone, street, apt, city, state, zipCode, month, day, year, last4SSN, annualIncome, monthlyHousingCost, errors} = props.formValue;
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
                                            onBlur={onBlur}
                                        />
                                        {errors.firstName ? <span className="error">First Name Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={lastName}
                                        />
                                        {errors.lastName ? <span className="error">Last Name Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={email}
                                        />
                                        {errors.email ? <span className="error">Email Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={phone}
                                        />
                                        {errors.phone ? <span className="error">Phone Required</span> : null }
                                    </div>
                                </div>
                            </div>
                            <div className="label">Address</div>
                            <div className="row">
                                <div className="col-md-8 pr-5">
                                    <div className="text-box">
                                        <input
                                            name="street"
                                            type="text"
                                            placeholder="Street"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            onBlur={onBlur}
                                            value={street}
                                        />
                                        {errors.street ? <span className="error">Street Required</span> : null }
                                    </div>
                                </div>
                                <div className="col-md-4 pl-5">
                                    <div className="text-box">
                                        <input
                                            name="apt"
                                            type="text"
                                            placeholder="Apt"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            onBlur={onBlur}
                                            value={apt}
                                        />
                                        {errors.apt ? <span className="error">Apt Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={city}
                                        />
                                        {errors.city ? <span className="error">City Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={state}
                                        >
                                            <option value='' >State</option>
                                            {
                                                stateList.map((x, i)=> {
                                                    return(
                                                        <option value={x} key={i}>{x}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {errors.state ? <span className="error">State Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={zipCode}
                                        />
                                        {errors.zipCode ? <span className="error">Zip Code Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={month}
                                        >
                                            <option value='' >Month</option>
                                            {
                                                monthList.map((x, i)=> {
                                                    return(
                                                        <option value={x} key={i}>{x}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                        {errors.month ? <span className="error">Month Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={day}
                                        />
                                        {errors.month ? <span className="error">Day Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={year}
                                        />
                                        {errors.month ? <span className="error">Year Required</span> : null }
                                    </div>
                                </div>
                            </div>
                            <div className="label">Last 4 SSN</div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-box">
                                        <input
                                            name="last4SSN"
                                            type="text"
                                            className="text-box-content"
                                            onChange={onChangeText}
                                            onBlur={onBlur}
                                            value={last4SSN}
                                        />
                                        {errors.last4SSN ? <span className="error">Last 4 SSN Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={annualIncome}
                                        />
                                        {errors.annualIncome ? <span className="error">Annual Income Required</span> : null }
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
                                            onBlur={onBlur}
                                            value={monthlyHousingCost}
                                        />
                                        {errors.monthlyHousingCost ? <span className="error">Monthly Housing Cost Required</span> : null }
                                    </div>
                                </div>
                            </div>
                            <button onClick={props.onSubmit} className="btn">Continue
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }


export default  FirstStep;
