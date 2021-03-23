import styles from './index.less';
interface propsType{
  orderNum:string
}
export default function CodeBar({orderNum}:propsType) {
  return (
    <div className={styles['code-bar']}>
      <span>送检单号</span>
      <p className={styles['code']}>{orderNum?orderNum:'未知单号'}</p>
    </div>
  );
}
