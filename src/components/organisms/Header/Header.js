import React from 'react';
import { Logo } from '../../../components';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('header')}>
      <div className={cx('responsive')}>
          <Logo/>
      </div>
    </div>
  )
};

export default Header;