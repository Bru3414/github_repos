import { useState, useEffect } from 'react';

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou');

        return () => {
            console.log('O componente finalizou');
        }
    }, [])

    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            // console.log(estadoAnterior);

            return evento.target.value;
        })


    }

    const renderizaResultado = () => {
        const media = (materiaA + materiaB + materiaC) / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder='Seu nome' onChange={alteraNome} />
            <input min="0" max="10" type="number" placeholder='Nota materia A' onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input min="0" max="10" type="number" placeholder='Nota materia B' onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input min="0" max="10" type="number" placeholder='Nota materia C' onChange={({ target }) => setMateriaC(parseInt(target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;