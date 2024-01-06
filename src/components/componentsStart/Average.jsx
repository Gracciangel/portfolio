import { Progress } from "@chakra-ui/react" ;
import './styles.components/style.css' ;

export const Average = ({val}) => {

  return (
  
      <div className="average">
    {
      val < 100 ? (
        <Progress
        height={'32px'}
        colorScheme="blue"
        value={val}
        rounded={'15px'}
        />
      ) :(
        <Progress
        height={'32px'}
        colorScheme="blue"
        isIndeterminate
        rounded={'15px'}
        />
      )
    }
    <h1>{val}%</h1>
    </div>
  )
}
