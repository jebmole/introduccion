import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <div className="comentario">
        <div className="comentarioImagen">
          <img
            src={require("./images/user.png")}
            alt="usuario"
            className="img"
          />
        </div>
        <div className="comentarioTexto">
          <h1>{this.props.nombre}</h1>
          <p>{this.props.comentario}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
