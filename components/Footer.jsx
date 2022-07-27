import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.title}>
                    Art history:
                    <br></br>
                    <br></br>
                    <p className={styles.motto}>is the study of aesthetic objects and visual expression in historical and stylistic context. Traditionally, the discipline of art history emphasized painting, drawing, sculpture, architecture, ceramics and decorative arts, yet today, art history examines broader aspects of visual culture, including the various visual and conceptual outcomes related to an ever-evolving definition of art.</p>
                    </h2>
                    
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Methodologies</h1>
                    <p className={styles.text}>
                    Art history is an interdisciplinary practice that analyzes the various factors—cultural, political, religious, economic or artistic—which contribute to visual appearance of a work of art. Art historians employ a number of methods in their research into the ontology and history of objects.
                    </p>
                    
                    
                </div>
                <div className={styles.card}>
                <h1 className={styles.title}>CONTACT US</h1>
                <div >
                    <p className={styles.text}>
                    
                    <td onClick={()=> window.open("https://www.facebook.com", "_blank")}>

                    <a href=" " >
                        
                        <Image  src="/img/facebook.png" width={100} height={100} alt="" />

                        </a>
                        </td>
                        <hr color="#222" width ="180px"></hr>                    
                        <td onClick={()=> window.open("https://www.instagram.com", "_blank")}>

                       <a href=" " >
                        <Image src="/img/insta.webp" width={100} height={100} alt="" />
                     </a>
                         </td>
                         <hr color="#222" width ="180px"></hr>


                         
                         <td onClick={()=> window.open("https://www.twitter.com", "_blank")}>

                        <a href="">
                        <Image src="/img/twitter.png" width={100} height={100} alt="" />
                        </a>
                          </td>
                        </p>
                        
                        </div>
                </div>

            </div>
 
        </div>
        
        
        
    )
}
export default Footer