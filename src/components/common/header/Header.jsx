import styles from './Header.module.scss';
import clsx from 'clsx';
import {Link, NavLink} from 'react-router-dom';

export default function Header({isMain}) {
  console.log(isMain)
  return (
    //header메인에서 호출되면 main클래스 추가, 서브에서 호출되면 sub클래스 추가
  <header className={clsx(styles.header, isMain ? styles.main : styles.sub)}>
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