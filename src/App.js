import React, { useState } from 'react';

import './App.css';

import foto from './FOTO/moto.jpg';

import Header from './componentes/Header';

/**
 * componente
propriedade
Estado e imutabilidade
*/

function App(){
    const [projects, setProjects] = useState( ['Desenvolvimento de App', 'Front-end web']);

    //useState retorna uma array com 2 posiçoes:
    //
    //1:variavel com seu valor inicial
    //2:funçao para atualizarmos esse valor

    function handleAddProject(){
        //projects.push(`Novo projeto ${Date.now()}`); obs: altera o projeto nao cria um novo
        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects);
    }
    return (
    <>
        <Header title="Projects" />

        <img width={300} src = {foto} />
            <ul>
               {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
    );
}
export default App;