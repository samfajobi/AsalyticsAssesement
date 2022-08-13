import styles from "../styles/Asas.module.css"
import { data } from '../components/data'

const Asas = () => {
    return (
       
        <div className={styles.pageContainer}>
            <div>
                <div className={styles.headers}>
                    <div className={styles.logo}>
                        <img src="Vector 2.png" alt="" />
                        <img src="SAlytics.png" alt="" />
                    </div>
                    <div className={styles.buttonDiv}>
                        <button className={styles.button}>ANALYSE ASAs</button>
                    </div>
                </div>
                <div className={styles.title}>List of Algorand Standard Assets <br/> on ASAlytics</div>
                <div className={styles.Asas}>
                    {data.map((value) => (
                    <div className={styles.AsaDatas}>
                        <img className={styles.Logo}src={value.logo}/>
                        <div className={styles.Name}>{value.name}</div>
                        <div className={styles.Availability}>{value.available}</div>
                    </div>
                    ))}
                </div>
            </div>    
        </div>
   
  )

}

const getStaticProps = async () => {
    const response =  await fetch(" https://analytics-api.herokuapp.com/analytics");
    const result = await response.json()

    console.log(result)
}

export default Asas;