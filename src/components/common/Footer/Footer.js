
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/style.scss';


const Footer = () => {
    return (
        <React.Fragment>
            <div className="container-fluid footer-main">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-list">
                            <ul>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Form ADV Part 2</Link></li>
                            </ul>
                            <ul>
                                <li><Link to="#">Terms of use</Link></li>
                                <li><Link to="#">Adviser Agreement</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="footer-middle">
                            <p>NextGen Investment Advisors is a registered Investment Adviser under the rules of the SEC. All data provided by Xignite</p>
                            <p className="copyright">&copy; 2018 NextGen Bank. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-xs-12">
                        <div className="footer-right">
                            <p>Powered by <Link to="#">Jemstep</Link></p>
                        </div>
                    </div>
                </div>
                <br/>

                    <div className="row">
                        <div className="footer-bottom">
                            <p>Past performance is not a guarantee for future results.
                                Investmant returns and principal value will fluctuate. 
                                so that investor shares when sold may be worth more or 
                                less than the original cost Projectin by NextGen Investor Advisors are 
                                based on number of factors beyond our control are in no way guaranteed.
                                NextGen Investor Advisors are not tax advisors and Investor should obtain independent advice on tax consequences of their investments </p>
                        </div>
                    </div>
  </div>
                   
    </React.Fragment>
            )
}
export default Footer;