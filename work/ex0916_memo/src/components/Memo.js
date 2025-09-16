
export default function item(props){
    const {
        idx,
        writer,
        content,
        reg_date
    } = props.memo;
    return(
        <>
            <div className={styles.wrap}>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{name}</strong>
                    <strong className={styles.num_price}>{price}</strong>
                    <span className={styles.txt_info}>
                        {/* 카테고리가 있을 때는 출력하고 없으면 공백 출력 */}
                        {category? `${category}/`:""}
                        {product_type}
                    </span>
                </div>
            </div>
        </>
    )
};