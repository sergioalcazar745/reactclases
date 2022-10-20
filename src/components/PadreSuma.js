import { Component } from "react";
import HijoSuma from "./HijoSuma";

function getRandom(){
    return parseInt((Math.random() * 100) + 1);
}

class PadreSuma extends Component{

    state = {
        //lista: [parseInt((Math.random() * 100) + 1), parseInt((Math.random() * 100) + 1)],
        lista : [getRandom(), getRandom()],
        resultado: 0
    }

    sumarHijo = () => {
        this.state.lista.push(getRandom())
        this.setState({
            lista: this.state.lista
        })
    }

    sumarResultado = (sumarNumero) => {
        var resultado = this.state.resultado + sumarNumero;
        this.setState({
            resultado: resultado
        })
    }

    render(){
        return(            
            <div>
                <h1>Numeros Padre</h1>
                <h2 style={{color: "red"}}>La suma es: {this.state.resultado}</h2>
                <button onClick={this.sumarHijo}>Nuevo hijo</button>
                {
                    this.state.lista.map((numero, index) => {
                        return (<HijoSuma numero={numero} metodoSumar={this.sumarResultado} key={index}/>)
                    })
                }
            </div>
        )
    }
}

export default PadreSuma;