const { Component } = require("react");

class DibujosComplejos extends Component{
    //METODO QUE NOS DEVUELVA UNA SERIE DE NUMEROS
    dibujarNumeros = () =>{
        //DECLARAMOS UNA ARRAY 
        var lista = [];
        for (let i = 0; i < 10; i++) {
            var numero = parseInt(Math.random() * 100) + 1;
            lista.push(<li key={i}>{numero}</li>);            
        }
        return lista;
    }


    render(){
        return(
            <div>
                <h1>Lista de nombre</h1>
                <ul>
                    {this.dibujarNumeros()}
                </ul>
            </div>
        )
    }
}

export default DibujosComplejos;