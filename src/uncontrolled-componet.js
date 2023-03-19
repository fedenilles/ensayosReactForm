const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  }
  
  function Uncontrolled() {
    return (
      <form onSubmit={submit}>
        <div>
          <spam>
            lala
          </spam>
          <input name= 'campo'/>
        </div>
        <input name= 'otroCampo'/>
        <input type='file' name= 'archivo'/>
        <input type= 'submit' value='Enviar'/>
      </form>
      
    );
  }
  
  export default Uncontrolled;