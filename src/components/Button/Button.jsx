export default function Button({texto,clase}) {
 
 
  function manejarClick() {
    alert('Botón clickeado!');
  }
  return <button className={clase} onClick={manejarClick}>{texto}</button>;

}