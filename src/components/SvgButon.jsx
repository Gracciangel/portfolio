import { Tooltip } from '@chakra-ui/react';

export const SvgButon = ({ cb, state }) => {
  const theme = localStorage.getItem('chakra-ui-color-mode');

 
  const lin1Cross = "rotate(45 8 11)"; 
  const lin2Cross = "rotate(-45 8 11)"; 


  const linHorizontal1 = "translate(0, 7)"; 
  const linHorizontal2 = "translate(0, 15)"; 

  return (
    <Tooltip label="Menu" bg="green.300">
      <svg
      
        width="50"
        height="73"
        viewBox="0 0 16 23"
        fill="none"
        onClick={cb}
        className={state ? "closed" : "open"}
        id="menu"
      >

        <line
          x1="1"
          x2="15"
          y1="11"
          y2="11"
          transform={!state ? lin1Cross : linHorizontal1}
          stroke={theme === "light" ? "black" : "white"}
          strokeWidth="2"
          className="line1"
        />

        <line
          x1="1"
          x2="15"
          y1="11"
          y2="11"
          transform={!state ? lin2Cross : linHorizontal2}
          stroke={theme === "light" ? "black" : "white"}
          strokeWidth="2"
          className="line2"
          
        />
      </svg>
    </Tooltip>
  );
};
