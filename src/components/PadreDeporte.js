import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeporte extends Component{

    state = {
        deportes : ["Fútbol", "Baloncesto", "Badminton", "Balonmano", "Criquet"],
        favorito : ""
    }

    addFavorite = (nombre) => {
        this.setState({
            favorito: nombre,
        })
    }

    render(){
        return (
            <div>
                <h1>Padre nuestro que estas en los cielos</h1>
                <hr/>
                {
                    this.state.deportes.map((object, index) => {
                        return(<HijoDeporte nombre={object} key={index} Favorite={this.addFavorite}/>)
                    })                    
                }   
                <hr/>
                <h3>Favorito: {this.state.favorito}</h3>             
            </div>
        )
    }
}

export default PadreDeporte;