import styles from "../styles/Asas.module.css"
import { testData } from '../queries/data'
import styled from "styled-components";

import { gql, useLazyQuery } from "@apollo/client";


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

interface ShadowedProps {
    readonly isDragActive: boolean;
   
  };
  
  
  
  const Shadowed = styled.div<ShadowedProps>`
    width: 100px;
    height: 40px;
    background-color: ${(props) => props.isDragActive ? '#6FD791' : '#BC3131' };
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 10px;
`




const Asas = () => {
       
    const [getAsasData, {loading, error, data = { asalist: { result: []} }, called}] = useLazyQuery(AllAsasData, { fetchPolicy: 'cache-and-network' });

    console.log( error, loading,  data, called )

    return (
        <div className={styles.pageContainer}>
            
            {loading && <div>Spinner....</div>}
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
                        <Shadowed isDragActive={value.available} >{value.available ? "Available" : "Unavailable"}</Shadowed>
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