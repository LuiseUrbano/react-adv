import styles from '../styles/styles.module.css';

export const ProductCard = () => {
  return (
    <div className={styles.productCard}>
        <img  className={styles.productImg} src="./coffe-mug.png" alt="Taza de Café" />
        <h1>Product card</h1>
    </div>
  )
}
