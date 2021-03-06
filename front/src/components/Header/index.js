import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import UserMenu from 'components/UserMenu';
import HeaderMenu from 'components/HeaderMenu';

import logo from './images/logo.jpg';
import mobileMenuIcon from './images/mobile.png';

export default () => {
    const [showMobileMenu, setMobileMenu] = useState(false);
    const buttonClassName = classnames('header__openmobile', {
        'open-mobile-menu': showMobileMenu,
    });
    const menuClassName = classnames({
        'open-mobile-menu': showMobileMenu,
    });

    return (
        <header className="header-fixed">
            <div className="header-fixed__inner">
                <div className="header">
                    <div className="header__row">
                        <div className="header__phone">
                            <span className="header__phoneicon flaticon-technology" />
                            <a className="header__phonelink" href="tel:+74955395315">
                                (495) 539 53 15
                            </a>
                            <a className="header__phonelink" href="tel:+78001005315">
                                (800) 100 53 15
                            </a>
                        </div>
                        <div className="header__mobilemenu">
                            <button
                                type="button"
                                className={buttonClassName}
                                onClick={() => setMobileMenu(!showMobileMenu)}
                            >
                                <img src={mobileMenuIcon} alt="" />
                            </button>
                        </div>
                        <div className="header__logo">
                            <Link to="/" className="header__logolink">
                                <img
                                    className="header__logolink--img"
                                    src={logo}
                                    title="LaParfumerie.ru"
                                    alt="Laparfumerie.ru - интернет-магазин парфюмерии и косметики"
                                />
                            </Link>
                        </div>
                        <div className="header__icons">
                            <UserMenu />
                        </div>
                    </div>
                </div>
                <HeaderMenu className={menuClassName} />
            </div>
        </header>
    );
};
