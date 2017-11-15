/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

function Footer() {
  return (
    <footer>
      <div className="foo">
        <div className="footer-contacts">
          <ul>
            <li><b>Mobile:</b>&nbsp;&nbsp;&nbsp;+38066-66-66-666</li>
            <li><b>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mail@gmail.com</li>
            <li><b>Skype:</b>&nbsp;&nbsp;&nbsp;&nbsp;mySkypeAcc</li>
          </ul>
        </div>
        <div className="footer-logo"><a href="#">&#60;&#47;&#62;</a></div>
      </div>
    </footer>
  );
}

export default Footer;