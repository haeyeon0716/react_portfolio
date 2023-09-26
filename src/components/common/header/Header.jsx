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
          <NavLink to='/department'>Department</NavLink>
        </li>
        <li>
        <NavLink to='/Gallery'>Gallery</NavLink>
        </li>
        <li>
        <NavLink to='/Youtube'>Youtube</NavLink>
        </li>
        <li>
        <NavLink to='/Members'>Members</NavLink>
        </li>
        <li>
        <NavLink to='/Contact'>Contact</NavLink>
        </li>
    </ul>

  </header>
  );
}
