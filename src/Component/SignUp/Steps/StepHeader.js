import React from 'react';


const StepHeader = props => {
    const {title, discretion} = props;
    return(
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="title-content"><h2 className="title-tag">{title}</h2>
                    <div className="sub-title-content">{discretion}</div>
                </div>
            </div>
        </div>
    )
}

export default StepHeader
