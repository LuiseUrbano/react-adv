import { useState } from 'react';
import { useProduct } from '../hooks/useProduct'; 
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
    product: Product;
}

interface Product {
    id: string;
    title: string;
    description: string;
    img?: string;
}

export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            <img className={styles.productImg} src={product.img || noImage} alt={product.title} />
            <h1>{product.title}</h1>
            <span className={styles.productDescription}>{product.description}</span>

            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>

                <div className={styles.countLabel}>{ counter }</div>

                <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
            </div>
        </div>
    )
}
