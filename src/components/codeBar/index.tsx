import styles from './index.less';
export default function CodeBar(props: any) {
  return (
    <div className={styles['code-bar']}>
      <span>送检单号</span>
      <p className={styles['code']}>12345678</p>
    </div>
  );
}
