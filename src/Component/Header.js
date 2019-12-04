import React,{Component} from 'react'

class Header extends Component{
    render() {
        const {count} = this.props;
        return(
            <div id="mainNavigation">
                <div className="main-nav">
                    <div className="progress">
                        <div className="active-progress" style={{width: count === 1 ?  "20%" : count === 2 ? "40%" : count === 3 ? "60%" : count === 4 ? "80%" : count === 5 ? "100%"  : ""}}/>
                    </div>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-2"><a href="/" className="header-faq" rel=""><div className="header-logo"></div></a></div>
                            <div className="col-10">
                                <div className="header">
                                    <ul className="header-ul">
                                        <li className="header-li"><a className="header-faq" rel="">FAQ</a></li>
                                        <li className="header-li">Help? (833) 445-3779</li>
                                        <li className="header-li"><div className="header-profile-name">Hi, Jerry Mar</div></li>
                                    </ul>
                                </div>
                                    <div className="header-res-center">
                                    <div className="header-res-content">
                                        <div className="header-res-phone">(833) 445-3779</div>
                                        <div className="header-res-faq"><a className="header-faq" rel="">FAQ</a></div>
                                        <div className="header-res-faq">Jerry Mar</div>
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

export default Header
