import { Link } from "react-router-dom" ;
import '../styles/general.css' ;
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import './componentsStart/styles.components/style.css'
import { Average } from "./componentsStart/Average";
import { motion } from 'framer-motion' ;
import './componentsStart/styles.components/style.css'

export const Start = () => {
const [progress, setProgress] = useState(0)
const [showBtn , setShowBtn] = useState(false)


useEffect(()=>{
    const interval = setInterval(()=>{
        setProgress(prevProgress => {
            if(prevProgress === 100){
                clearInterval(interval)
                setTimeout(()=>{
                    setShowBtn(true)
                }, 2000)
                return prevProgress
            }
            return prevProgress + Math.round(Math.random(3))
        })
    }, 400)
})
  return (
    <>
    <Container >
    {
        !showBtn &&(
        
     <motion.div
     animate={{opacity : 0}}
     transition={{delay: 6}}
     >
            <Average
    val={progress}
    />
     </motion.div>
        
        )
    }
    {
        showBtn && (
        
            <Link
            
        to={'/home'}
        >
            <motion.div
             initial={{opacity: 0}}
             animate={{
                opacity: 1
             }}
             transition={{
                delay: .3
             }}
            >
                <button
                className="btnStart">
                Empezar
            </button>
                    </motion.div>
        </Link>
        
        )
    }
    </Container>
    </>
  )
}
