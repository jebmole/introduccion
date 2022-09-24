

function Tarjeta(props) {
  return (
    <div className="column">
      <div className="card">
        <img
          src={require(`./images/${props.imagen}`)}
          alt="Movie 1"
          className="img"
        />
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Tarjeta;
