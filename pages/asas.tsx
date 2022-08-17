import styles from "../styles/Asas.module.css"
//import { testData } from '../queries/data'
import styled from "styled-components";
import { gql, useLazyQuery } from "@apollo/client";
import Spinner from "../components/spinner"
import Image from 'next/image'
import vector from "../public/Vector2.png";
import asalytics from "../public/SAlytics.png";

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
    height: 35px;
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
            <div>
                <div className={styles.headers}>
                    <div className={styles.logo}>
                        <Image src={vector} alt="Hello"  />
                        <Image src={asalytics} alt="Hello" />
                    </div>
                    <div className={styles.buttonDiv}>
                        <button onClick={() => getAsasData()} className={styles.button}>ANALYSE ASAs</button>
                    </div>
                </div>
                <div className={styles.title}>List of Algorand Standard Assets <br/> on ASAlytics</div>
                <div className={styles.Asas}> 
                    {data.asalist.result.map((value: any) => (
                    <div key={value.id} className={styles.AsaDatas}>
                        <Image className={styles.Logo} src={value.logo} alt="Hello"/>
                        <div className={styles.Name}>{value.name}</div> 
                        <Shadowed isDragActive={value.available} >{value.available ? "Available" : "Unavailable"}</Shadowed>
                    </div>
                    ))}
                </div>      
            </div>
            {loading && <div><Spinner /></div> }   

        </div>  
    )

}




export default Asas;