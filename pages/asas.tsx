import styles from "../styles/Asas.module.css"
import { testData } from '../queries/data'
import styled from "styled-components";

import { gql, useQuery, useLazyQuery } from "@apollo/client";


const AllAsasData = gql`
    query MyQuery {
        asalist {
        result {
            logo
            name
            available
        }
        }
    } 

`

const Availability = styled.div`
    width: 150px;
    height: 100px;
`


const Asas = (e: any) => {
       
    const [getAsasData, {loading, error, data = { asalist: { result: []} }, called}] = useLazyQuery(AllAsasData, { fetchPolicy: 'cache-and-network' });

    console.log( error, loading,  data.asalist, called )

    return (
        <div className={styles.pageContainer}>
            
            {loading && <div>Spinner....</div>}=
            <div>
                <div className={styles.headers}>
                    <div className={styles.logo}>
                        <img src="Vector 2.png" alt="" />
                        <img src="SAlytics.png" alt="" />
                    </div>
                    <div className={styles.buttonDiv}>
                        <button onClick={() => getAsasData()} className={styles.button}>ANALYSE ASAs</button>
                    </div>
                </div>
                <div className={styles.title}>List of Algorand Standard Assets <br/> on ASAlytics</div>
                <div className={styles.Asas}> 
                    {testData.map((value: any) => (
                    <div className={styles.AsaDatas}>
                        <img className={styles.Logo} src={value.logo}/>
                        <div className={styles.Name}>{value.name}</div> 
                        <Availability className={styles.Availability}>{value.available }</Availability>
                    </div>
                    ))}
                </div>      
            </div>    
        </div>
   
  )

}

// const getStaticProps = async () => {
//     const response =  await fetch(" https://analytics-api.herokuapp.com/analytics");
//     const result = await response.json()

//     console.log(result)
// }

export default Asas;