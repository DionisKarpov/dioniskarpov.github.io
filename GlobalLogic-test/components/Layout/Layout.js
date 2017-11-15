/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';
import s from './Layout.css';
import RegistrationForm from './RegistrationForm';

function Layout(props) {
  return (
    <div className={s.root}>
      <Header />
      <main>
        <div className="container">
        <div className="about">
          <div className="title-h2">About</div>
          <div className="goals">
            <div className="title-h3">Goals</div>
            <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.</p>
          </div>
          <div className="avatar">
            <img src="images/avatar.png" alt="avatar" />
          </div>
          <div className="dreams">
            <div className="title-h3">Dreams</div>
            <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="skills">
          <div className="title-h2 title-h2-wtht-mrgn">Skills</div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="contact">
          <div className="title-h2 title-h2-wtht-mrgn">Contact</div>
          <div className="contacts">
            <ul>
              <li><b>Phone number:</b> +38066-66-66-666</li>
              <li><b>Email:</b> mail@gmail.com</li>
              <li><b>Skype:</b> mySkypeAcc</li>
            </ul>
          </div>

          <div className="form">
            <RegistrationForm />

          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}




Layout.propTypes = { className: PropTypes.string };

export default Layout;
