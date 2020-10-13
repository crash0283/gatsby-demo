import React from "react"

//import the css module and assign to variable
import styles from "../styles/people.module.css"
//Below, you can use the "styles" variable followed by the class name
//We are also passing props to setup a stand-alone component to reuse
const People = (props) => {
    return (
        <div className={styles.user}>
            <img src={props.avatar} alt="avatar" className={styles.avatar}/>
            <div className={styles.description}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.excerpt}>{props.excerpt}</p>
            </div>
        </div>
    )
}

export default People