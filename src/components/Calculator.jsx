import React, { useState } from "react";
import "./Calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) { // Para registrar os números
        var input=e.target.value;
        if(num===0){
            setNum(input);
        }
        else {
            setNum(num + input);
        }
    }

    function clear() { // Para apagar os números da tela
        setNum(0);
    }

    function porcentagem() { // Operador de divisão
        setNum(num / 100);
    }

    function mudarSinal() { // Para mudar de sinal
        if(num>0) {
            setNum(-num);
        }
        else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        var operadorInput = e.target.value;
        setOperator(operadorInput);
        setOldNum(num);
        setNum(0);
    }

    function calcular() {
        if(operator==="/") {
            setNum(oldNum/num);
        }
        else if (operator==="X") {
            setNum(oldNum*num);
        }
        else if (operator==="-") {
            setNum(oldNum - num);
        }    
        else if (operator==="+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }

    return (
        <div>
            <Box/>
            <Container maxWidth="xs">
                <div className='wrap'>
                    <Box />
                    <h1 className="resultado">{num}</h1>
                    <button className="auxiliares" onClick={clear}>AC</button>
                    <button className="auxiliares" onClick={mudarSinal}>+/-</button>
                    <button className="auxiliares" onClick={porcentagem}>%</button>
                    <button className="operadores" onClick={operatorHandler} value={"/"}>/</button>
                    <button className="numeros" onClick={inputNum} value={1}>1</button>
                    <button className="numeros" onClick={inputNum} value={2}>2</button>
                    <button className="numeros" onClick={inputNum} value={3}>3</button>
                    <button className="operadores" onClick={operatorHandler} value={"X"}>X</button>
                    <button className="numeros" onClick={inputNum} value={4}>4</button>
                    <button className="numeros" onClick={inputNum} value={5}>5</button>
                    <button className="numeros" onClick={inputNum} value={6}>6</button>
                    <button className="operadores" onClick={operatorHandler} value={"-"}>-</button>
                    <button className="numeros" onClick={inputNum} value={7}>7</button>
                    <button className="numeros" onClick={inputNum} value={8}>8</button>
                    <button className="numeros" onClick={inputNum} value={9}>9</button>
                    <button className="operadores" onClick={operatorHandler} value={"+"}>+</button>
                    <button className="numeros" onClick={inputNum} value={0}>0</button>
                    <button className="numeros" onClick={inputNum} value={"."}>,</button>
                    <button className="operadores" onClick={calcular}>=</button>
                </div>
            </Container>
        </div>
    )
}