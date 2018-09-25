import React from 'react';

const About = () => (

            <React.Fragment>
              <div className='after-sign-up'>
                <h2 className='after-sign-up-your'>After signing up, you can...</h2>
                {/* <ul className='numbered-list'>
                  <li >
                    <span className='num'>1</span><span className="tell-us-about">Tell us about yourself and your retirement goals.</span></li>
                  <li>
                    <span className='num'>2</span><span className="tell-us-about"> Get a free, online analysis of your investment portfolio.</span></li>
                  <li>
                    <span className='num'>3</span><span className="tell-us-about"> Open an account with NextGen Bank.</span></li>
                </ul> */}
                 <table border="0" className="rounded-list">
                 <tbody>
        <tr>
            <td>
            <ol>
            <li><p>Tell us about yourself and your retirement goals.</p></li>
            <li><p>Get a free, online analysis of your investment portfolio.</p></li>
            <li><p>Open an account with NextGen Bank.</p></li>
            
            </ol>
            </td>
        </tr>
        </tbody>
    </table>
              </div>
              </React.Fragment>
           
            )
  export default About;