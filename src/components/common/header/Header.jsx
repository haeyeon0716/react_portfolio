import styles from './Header.module.scss';
import clsx from 'clsx';
import {Link, NavLink} from 'react-router-dom';

export default function Header() {
  return (
  <header className={clsx(styles.header, 'on')}>
    <h1>
      <Link to='/'>LOGO</Link>
    </h1>

    <ul>
        <li>
          <NavLink to='/department' activeClassName={styles.active}>Department</NavLink>
        </li>
        <li>
        <NavLink to='/Gallery' activeClassName={styles.active}>Gallery</NavLink>
        </li>
        <li>
        <NavLink to='/Youtube' activeClassName={styles.active}>Youtube</NavLink>
        </li>
        <li>
        <NavLink to='/Members' activeClassName={styles.active}>Members</NavLink>
        </li>
        <li>
        <NavLink to='/Contact' activeClassName={styles.active}>Contact</NavLink>
        </li>
    </ul>

  </header>
  );
}
