import { useColorMode } from "@chakra-ui/react"
import { Switch, Text } from "@chakra-ui/react"



export const BtnMode = () => {
    const {toggleColorMode} = useColorMode()

  return (
        <>
            <Switch
            onChange={toggleColorMode}
            />
        </>
    )
}
