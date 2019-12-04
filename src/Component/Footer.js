import React,{Component} from 'react'

class Footer extends Component{
    render() {
        return(
            <div id="mainFooter" className="footer">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="footer-text-container">
                                <div className="footer-content">
                                    <h6 className="footer-text-h6">Jerry Insurance Agency is a licensed insurance
                                        broker
                                        <a href="/licenses" className="footer-a" rel="">licensed</a>
                                        to do business in all 50 states.</h6>
                                    <h6 className="footer-text-h6">Copyrights © Jerry 2018. All rights reserved.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="align-items-end justify-content-end footer-logo-container">
                                <div className="footer-logo-content"><img src="//d3aut7n3cm71gu.cloudfront.net/assets/bbb-logo-81f300.png" alt="BBB Badge" className="footer-logo"/></div>
                                <div className="footer-logo-content">
                                    <table width="115" cellPadding="2" cellSpacing="0" title="Click to Verify - This site chose Symantec SSL for secure e-commerce and confidential communications.">
                                        <tbody>
                                        <tr>
                                            <td width="115">
                                                <script src="https://seal.websecurity.norton.com/getseal?host_name=getjerry.com&amp;amp;size=M&amp;amp;use_flash=NO&amp;amp;use_transparent=YES&amp;amp;lang=en" async=""></script>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
