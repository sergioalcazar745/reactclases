import { Component } from "react";

class Comic extends Component {
    render() {
        return (
            <div>
                <h1 style={{color: "red" }}>{this.props.comic.titulo}</h1>
                <h3 style={{color: "blue"}}>{this.props.comic.descripcion}</h3>
                <img src={this.props.comic.imagen} style={{width: "150px", height: "150px"}} alt="Comic"/>
                <button onClick={() => this.props.seleccionarFavorito(this.props.comic)}>Seleccionar favorito</button>
                <button style={{color: "orange"}} onClick={() => this.props.eliminarComic(this.props.index)}>Eliminar comic</button>
            </div>
        )
    }
}

export default Comic;