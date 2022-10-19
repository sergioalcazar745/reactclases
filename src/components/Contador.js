import { Component } from "react";

function miFunction(){
    console.log("Saludos desde mi función")
}

class Contador extends Component{

    numero=1;
    incrementarNumero = () => {
        console.log("Numero" + this.numero);
        this.numero = this.numero + 1
    }

    state = {
        valor: parseInt(this.props.Inicio),
    }

    incrementarValor = () => {
        this.setState({
            valor : this.state.valor + 1,
        });
    }
    
    render(){
        return(
            <div>
                <h1>Contador JSX ES6</h1>
                <h2>Inicio{this.props.Inicio}</h2>
                <h2 style={{color: "red"}}>Valor del state {this.state.valor}</h2>
                <button onClick={this.incrementarValor}>Incrementar valor State</button>
                <button onClick={ () => {
                    miFunction();
                    this.incrementarNumero();
                }}>Pulsa</button>
            </div>
            
            
        )
    }
}

export default Contador;