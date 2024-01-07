import { useColorMode, Switch } from "@chakra-ui/react" ;
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import '../styles/general.css'

export const BtnMode = () => {
    const {toggleColorMode} = useColorMode()

  return (
      <>
      <div className="mode">
      <MoonIcon/>
            <Switch
            onChange={toggleColorMode}
            />
            <SunIcon/>    
      </div>
        </>
    )
}
