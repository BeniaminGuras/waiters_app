import { Button } from "react-bootstrap"
import styles from './Table.module.scss';

const Table = props => {

  return(
  <div className={styles.wrapper}>
    <div className={styles.info}>
      <div className={styles.title}>
        <h3>Table {props.id}</h3>
      </div>
      <div className={styles.status}>
        <p><span>Status:</span> {props.status}</p>
      </div>
    </div>
    <div className={styles.buttonWrapper}>
      <Button as="input" type="button" value="Show more" />
    </div>
  </div>
  )
}

export default Table;