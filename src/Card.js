import React from 'react';

const Card = ({ nome, posicao, imageUrl, idade }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-nome">{nome}</h5>
        <p className="card-posicao">{posicao}</p>
        <p className="card-idade">{idade}</p>
      </div>
    </div>
  );
};

export default Card;