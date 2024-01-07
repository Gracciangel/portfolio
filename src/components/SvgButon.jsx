import { Tooltip } from '@chakra-ui/react';


export const SvgButon = ({cb , state}) => {

    const theme = localStorage.getItem('chakra-ui-color-mode')


    const lin1c = "matrix(-0.5279 0.811948 -0.850176 -0.582463 12.9968 2.28882)" ;
    const lin1a = "matrix(1.0303 0.00127483 -0.00334478 0.9682 1.25464 2.12122)" ;
    const lin2c = "matrix(0.601189 0.837039 -0.800031 0.545791 0 -2)";
    return (
    <Tooltip
     label='Menu'
     bg='green.300'
     >

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="23" viewBox="0 0 16 23" fill="none"
        
        onClick={cb}
        className ={!state ? 'closed' : 'open'}    
        id='menu'   
        >
  <line y1="-1" x2="23.0217" y2="-1" transform={!state ? lin1c : lin1a} stroke={theme == 'light' ? 'black': "white"} stroke-width="1"
  className="line1"
  />
  <line y1="-1" x2="23.0217" y2="-1" transform={!state ? lin2c : lin1a} stroke={theme == 'light' ? 'black': 'white'} stroke-width="2"
    className="line1"
  />

</svg>
    </Tooltip>
        
);
  
}


