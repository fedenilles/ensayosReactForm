import { useState } from "react";

const App = () => {
  const [value, setValue] = useState({ 
    normal: 'texto inicial', 
    texto: '', 
    select: '', 
    check: false,
    estado: 'feliz' 
  })
  const handleChange = ({ target }) => {
    setValue((state) =>  ({
      ...state,
      [target.name] : target.type === 'checkbox'
        ? target.checked
        : target.value
    }))
  }
  console.log(value)
  return (
    <div>
      {value.length < 5 ? <span>Longitud Minima de 5 </span> : null}
      <input type='text' name = 'normal' value={value.normal} onChange={handleChange}/>
      <textarea name= 'texto' onChange={handleChange} value={value.texto}/>

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">...Seleccione...</option>
        <option value="raul">Raul</option>
        <option value="ruben">Ruben</option>
        <option value="roberto">Roberto</option>
        <option value="rodolfo">Rodolfo</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked= {value.check}
      />
      <div>
        <label>Perro</label>
        <input onChange={handleChange}
          type="radio" 
          value="feliz" 
          name= "estado"
          checked={value.estado === 'feliz'} 
        /> Feliz
        <input 
          onChange={handleChange}
          type="radio" 
          value="triste" 
          name= "estado"
          checked={value.estado === 'triste'} 
        /> Triste
        <input 
          onChange={handleChange} 
          type="radio" 
          value="aburrido" 
          name= "estado"
          checked={value.estado === 'aburrido'} 
        /> Aburrido
      </div>
    </div>
    
    
  );
}

export default App;
