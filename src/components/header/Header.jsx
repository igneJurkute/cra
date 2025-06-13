import { BsBellFill } from 'react-icons/bs';
import logo from '../../img/logo.png';
import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.left}>
                <img className={style.logo} src={logo} alt='Logo' />
                <form className={style.search}>
                    <input type="search" />
                </form>
            </div>
            <nav className={style.nav}>
                <a className={style.active} href="/">Projects</a>
                <a href="/">Settings</a>
                <a href="/">Help</a>
            </nav>
            <div className={style.right}>
                <BsBellFill size='1.5rem' color='#aaa' />
            </div>
        </header>
    );
}