import styles from './Layout.module.scss';
import clsx from 'clsx'

export default function Layout(props) {
  return (
    <section className={clsx(styles.layout)}>
        <figure></figure>

        <div className={clsx(styles.content)}>
            <h1>Sub Page Title</h1>
            {/* 해당 컴포넌트로 특정 컨텐츠를 감싸면 감싸져 있는 내용들이 props.children으로 전달됨 */}
            {props.children}
        </div>
    </section>
  );
}