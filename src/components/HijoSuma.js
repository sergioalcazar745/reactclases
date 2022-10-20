import { Component } from "react";

class HijoSuma extends Component{
    numero = this.props.numero;
    metodoSumar = this.props.metodoSumar;

    render(){
        return(
            <div>
                <h1 style={{color: "blue"}}>Numero hijo: {this.numero}</h1>
                <button onClick={() => this.metodoSumar(this.numero)}>Sumar {this.numero}</button>
            </div>
        )
    }
}

export default HijoSuma;