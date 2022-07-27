import React from 'react'
import Image from "next/image";
import styles from "../styles/NewsList.module.css";

const NewsList = () => {
  return (
    <div className={styles.container} id="NewsList">
      <div className={styles.container1}>
                <div className={styles.row}>
                    <div >
                        <div className={styles.titlesection}>
                            <h1>The most important art news</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.row} >
                    <div>
                        <div className={styles.blogimage}><Image src="/img/Mona_Lisa.jpg" width={350} height={262} alt="" /></div>
                        <div className={styles.blogitem}>
                          
                        <h3>Mona Lisa </h3>
                            
                            <p>
                            The painting is probably of the Italian noblewoman Lisa Gherardini the wife of Francesco del Giocondo. It is painted in oil on a white Lombardy poplar panel.
                            Leonardo never gave the painting to the Giocondo family, and later it is believed he left it in his will to his favored apprentice Salaì. It has been on permanent display at the Louvre in Paris since 1797.
                                </p><a href="../allnews">Read More</a>
                        </div>
                    </div>
                    <div>
                    <div className={styles.blogimage}><Image src="/img/WAR.jpg" width={350} height={262} alt="" /></div>
                        <div className={styles.blogitem}>
                        
                        <h3>Theodore Gericault</h3>
                            
                            <p>
                            For sheer impact, it’s hard to top The Raft of the Medusa, in which Géricault took a contemporary news event and transformed it into a timeless icon. The backstory begins with the 1818 sinking of the French naval vessel off the coast of Africa, which left 147 sailors adrift on a hastily constructed raft. Of that number, only 15 remained after a 13-day ordeal at sea that included incidents of cannibalism among the desperate men.</p><a href="../allnews">Read More</a>

                        </div>
                    </div>
                    <div>
                    <div className={styles.blogimage}><Image src="/img/ART10.jpg" width={350} height={262} alt="" /></div>
                        <div className={styles.blogitem}>
                        
                        <h3>The Girl with a Pearl Earring</h3>
                            
                            <p>
                            Johannes Vermeer’s 1665 study of a young woman is startlingly real and startlingly modern, almost as if it were a photograph. This gets into the debate over whether or not Vermeer employed a pre-photographic device called a camera obscura to create the image. </p><a href="../allnews">Read More</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default NewsList