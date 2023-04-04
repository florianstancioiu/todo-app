import classes from './Header.module.css';
import MobileDarkBg from '../images/bg-mobile-dark.jpg';
import IconSun from '../images/icon-sun.svg';

const Header = () => {
  return (
    <header
      className={classes.header}
      style={{ backgroundImage: `url(${MobileDarkBg})` }}
    >
      <h1 className={classes.title}>Todo</h1>
      <img src={IconSun} className={classes['switch-theme-icon']} alt='' />
    </header>
  );
};

export default Header;
