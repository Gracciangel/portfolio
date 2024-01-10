import { Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Idioma = () => {
  const [isEN, setIsEN] = useState(false);

  useEffect(() => {
    const storageIdioma = localStorage.getItem('idioma');
    if (storageIdioma) {
      setIsEN(storageIdioma === 'en');
    }
  }, []);

  const changeIdioma = () => {
    setIsEN(!isEN);
    localStorage.setItem('idioma', isEN ? 'es' : 'en');
  };

  

  return (
    <Switch onChange={changeIdioma} isChecked={isEN}>
      {/* Aquí puedes agregar elementos dependiendo del estado isEN */}
    </Switch>
  );
};
