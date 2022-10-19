import { Component } from "react";

class DibujoComplejoArray extends Component{
    state = {
        nombres: ["Lucia", "Diana", "Adrian", "Marcos", "Carlos"]
    }

    nuevoNombre = () =>{
        // this.state.nombres.push("NUEVO NOMBRE");
        this.state.nombres.push("Sergio");
        this.setState({
           nombres: this.state.nombres,
        })
    }

    render(){
        return(
            <div>
                <h1>Dibujo de Array</h1>
                <button onClick={this.nuevoNombre}>
                    Añadir
                </button>
                {
                    this.state.nombres.map((object, index) => {
                        //SIEMPRE TIENE QUE DEVOLVER UN RETURN
                        return (<h3 key={index} style={{color: "green"}}>{object}</h3>)
                    })
                }
            </div>
        )
    }
}

export default DibujoComplejoArray;