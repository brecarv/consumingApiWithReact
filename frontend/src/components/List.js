import React from 'react';
const List = (props) => {
  const { artigos } = props;
  if (!artigos || artigos.length === 0) return <p>Sem artigos, sorry!</p>;
  return (
    <ul>
      <h2 className='list-head'>Artigos Cadastrados</h2>
      {artigos.map((artigo) => {
        return (
          <li key={artigo.slug} className='list'>
            <span className='artigo-text'>{artigo.titulo} </span>
            <span className='artigo-description'>{artigo.descricao}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
