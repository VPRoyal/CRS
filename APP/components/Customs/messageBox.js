import styles from './messageBox.module.css'
export default function messageBox({message, color="red"}) {
  return (
    <div className={styles.wrap} style={{color:color, outlineColor:color}} >
        <h4>{message}</h4>
    </div>
  )
}
