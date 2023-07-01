import styles from "./ListItems.module.css"
import Image from "next/image";
import Link from "next/link";

const ListItems = (data: any) => {
    return (
        <div className={styles.contentComponent}>
            {
                data.elements.map((el: any) => (
                    <div key={el.nameGrade}>
                        <Link href={"/"} className={styles.block}>
                            <Image src={`/element${el.idGrade}.png`} width={260} height={260} alt={el.nameGrade} />
                            <div className={styles.elementInfo}>
                                <h5 className={styles.elementTitle}>{el.nameGrade}</h5>
                                <p className={styles.elementDescrip}>{el.descriptionGrade}</p>
                            </div>
                        </Link>
                        {
                            !(el.idGrade === 3 || el.idGrade === 6) && <hr className={styles.splitter} />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ListItems