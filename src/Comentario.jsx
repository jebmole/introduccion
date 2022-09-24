function Comentario({ nombre, comentario }) {
  return (
    <div className="comentario">
      <div className="comentarioImagen">
        <img src={require("./images/user.png")} alt="usuario" className="img" />
      </div>
      <div className="comentarioTexto">
        <h1>{nombre}</h1>
        <p>
          {comentario}
        </p>
      </div>
    </div>
  );
}

export default Comentario;
