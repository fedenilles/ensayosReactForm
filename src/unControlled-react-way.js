import { useRef } from "react";

function App() {
  const input = useRef()
  const file = useRef()
  const submit = () => {
      const form = new FormData()
      form.append('archivo', file.current.files[0])
      form.append('campo', input.current.value)
      fetch ('/noExiste', { method: 'POST', body: form})
  }

  return (
    <div>
      <div>
        <span>
          lala
          <input type='text' name='campo' ref={input}/>
          <input type='file' ref={file}/>
        </span>
      </div>
      <input type='submit' value='Enviar' onClick={submit}/>
    </div>
    
  );
}

export default App;
