
import React from "react";
import Item from "./Item";
import styles from "./index.module.css";
import {useParams, useSearchParams} from "react-router-dom";

const Product = ({ location }) => {
    const [searchParams] = useSearchParams();
    const params = useParams();
    console.log([...searchParams]);
    console.log(params);
    return (
        <div className={styles.div}>
            <Item/>
            <Item/>
        </div>
    )
}

export default Product;