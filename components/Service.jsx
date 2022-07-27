import React from 'react'
import styles from "../styles/Service.module.css";
import { BiSlideshow } from "react-icons/bi";
import { TiBrush } from "react-icons/ti";
import { FaRegClone } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
const Service = () => {
  return (
    <div className={styles.servicesection} id="service">
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.rows}>
                        <div className={styles.serviceitem}>
                        <div className={styles.serviceicon}><BiSlideshow size={70}/></div>
                            <h3>courses</h3>
                            <p>Free courses aim to create a unique experience for those interested in art, to find everything they need to incubate and develop their skills in one place.</p>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.serviceitem}>
                        <div className={styles.serviceicon}><TiBrush size={70}/></div>
                            <h3>types of art</h3>
                            <p>If you are a fan of art, you can learn about art types such as drawing, sculpture, printing, or architecture, and we aim to present art in the development of society like other fields.</p>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.serviceitem}>
                        <div className={styles.serviceicon}><FaRegClone size={70}/></div>
                            <h3>artists paintings</h3>
                            <p>The concept of painting paintings has evolved further with the development of oil painting tools and methods. Among the most famous paintings is the Mona Lisa by the Italian artist Leonardo Da Vinci, and among the most famous contemporary paintings is the Scream by the Norwegian painter Edvart Monk. </p>
                        </div>
                    </div>
                    <div className={styles.rows}>
                        <div className={styles.serviceitem}>
                        <div className={styles.serviceicon}><FaOpencart size={70}/></div>
                            <h3>Art Shop</h3>
                            <p>Art store is characterized by everything related to art, from paintings, drawing tools, etc. from the tools, browse the store search for what you want.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Service;