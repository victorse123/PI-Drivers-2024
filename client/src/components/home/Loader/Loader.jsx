import './Loader.css';

// Componente Loader: muestra una serie de tarjetas simulando la carga
function Loader() {
  return (
    <div className='loader'>
      {/* Tarjetas de carga */}
      {[...Array(8)].map((_, index) => (
        <div key={index} className='card_loading'></div>
      ))}
    </div>
  );
}

export default Loader;