import { Component } from "react";

class HijoDeporte extends Component{
    
    // state = {
    //     favorito: ""
    // }

    // seleccionarFavorito = () => {
    //     this.setState({
    //         favorito:this.props.nombre
    //     })
    // }

    render(){
        return (
            <div>
                <h2>Hijo - {this.props.nombre}</h2>
                <button onClick={() => {this.props.Favorite(this.props.nombre)}}>
                    Favorito
                </button>
            </div>
        )
    }
}

export default HijoDeporte;