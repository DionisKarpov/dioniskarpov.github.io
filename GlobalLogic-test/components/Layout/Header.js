/**
 * React App SDK (https://github.com/kriasoft/react-app)
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

function Header() {
  return (
    <header>
      <div className={s.container}>
        <div className="logo"><a href="#">&#60;&#47;&#62;</a></div>
        <Navigation />
        <div className="name">
          <div className="title-h1">Name Surname</div>
          <div className="title-h2">Front-End Developer</div>
        </div>
      </div>
    </header>
  );
}

export default Header;