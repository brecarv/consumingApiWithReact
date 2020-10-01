import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    artigos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    //const apiUrl = `https://api.github.com/users/brecarv/`;
    //
    
    const apiUrl = `https://carnvnode.herokuapp.com/api/artigos`;
    //const apiUrl = `http://localhost:3000/api/artigos/`
    /* fetch(apiUrl)
    .then((res) => res.json())
    .then((artigos) => {
    setAppState({ loading: false, artigos: artigos });
    }); */
    axios.get(apiUrl).then((artigos) => {
      const todosArtigos = artigos.data.artigos;
      setAppState({loading: false, artigos: todosArtigos});
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>Artigos</h1>
      </div>
      <div className='artigo-container'>
        <ListLoading isLoading={appState.loading} artigos={appState.artigos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
      </footer>
    </div>
  );
}
export default App;
