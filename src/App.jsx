import { useState } from 'react';
import Formulario from './Componentes/Formulario';
import Perfil from './Componentes/Perfil';
import ReposList from './Componentes/ReposList';
import './global.css';

function App() {

  const [exibeForm, setExibeForm] = useState(true);
  const [userName, setUserName] = useState('');

  return (
    <>
      <input placeholder='Digite um usuário Github' className='input' type="text" onBlur={evento => setUserName(evento.target.value)} />

      {(userName.length >= 4) && (
        <>
          <Perfil nomeUsuario={userName} />
          <ReposList userName={userName} />
        </>
      )}
      {/* {exibeForm && (
        <Formulario />
      )}
      <button type='button' onClick={() => setExibeForm(!exibeForm)}>Toggle Form</button> */}
    </>
  )

}

export default App
