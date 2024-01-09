import { useEffect, useState } from "react"
import { Spinner } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { Container } from "react-bootstrap"
import '../components/componentsStart/styles.components/style.css'
import { Button } from "@chakra-ui/react"
export const Send = () => {
    const [ load , setLoad ] = useState(false)

    useEffect(()=> {
        setTimeout(()=>{
            setLoad(!load)
        }, 1500)
    }, [])
  return (
        <Container>
                <div className="containerDivSend">
            {
                     !load ? <div className="send">
                    <Spinner
                color="blue.500"
                size='xl'
            />
            <h1>enviando...</h1>
                </div> :
            <div>
                <h1>Enviado</h1>
                <h2>Gracias por contactarte!</h2>
                <Link
                    to={'/home'}
                >
                    <Button
                    colorScheme="blue"
                    >Volver a inicio</Button>
                </Link>
            </div>

}
                </div>
        </Container>
  )
}
