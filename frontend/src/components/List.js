import React from 'react';
const List = (props) => {
  const { artigos } = props;
  if (!artigos || artigos.length === 0) return <p>Sem artigos, sorry!</p>;
  return (
    <ul>
      {artigos.map((artigo) => {
        return (
          <li key={artigo.slug} className='list'>
            <span className='artigo-text'>{artigo.titulo} </span>
            <span className='artigo-description'>{artigo.descricao} </span>
            <span className='artigo-slug'>{artigo.slug} </span>
            <span className='artigo-autor'>{artigo.autor.username} </span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
