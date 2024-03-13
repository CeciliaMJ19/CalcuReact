import { useState } from "react";
import './index.css'; 




function App(){
  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  };
  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  };

  const handleSumar = (event) => {
    setResultado(parseFloat (numeroUno) + parseFloat(numeroDos));
  }

  const handRestar = (event) => {
    setResultado(parseFloat (numeroUno) - parseFloat(numeroDos));
  }

  const handMultiplicar = (event) => {
    setResultado(parseFloat (numeroUno) * parseFloat(numeroDos));
  }

  const handDividir = (event) => {
    setResultado(parseFloat (numeroUno) / parseFloat(numeroDos));
  }

  return(
   <>
      <h1>Calculadora</h1>
      <input 
        type="text" 
        placeholder="Numero 1" 
        value={numeroUno} 
        onChange={handleChangeUno}
      />

      <input 
        type="text" 
        placeholder="Numero 2" 
        value={numeroDos} 
        onChange={handleChangeDos}
      />

      <hr /> 
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handRestar}>Restar</button>
      <button onClick={handMultiplicar}>Multiplicar</button>
      <button onClick={handDividir}>Dividir</button>
      <hr />
      <p>Resultado: {resultado} </p>
   </> 

  ); 
}

export default App
