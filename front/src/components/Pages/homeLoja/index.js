import React from "react";
import "./style.css";
import HeaderLoja from "../HeaderLoja";
import useAuth from "../../../hooks/useAuth";
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { LojaContext } from '../../../contexts/LojasContext';

export default function HomeLoja() {
  const { buscasLojaNome } = useContext(LojaContext);
  const { nome } = useParams();
  const loja = buscasLojaNome(nome);
  const n = loja.nome;
  console.log('home' + loja); 


  return (
    <div className="homeLoja">
      <HeaderLoja lj={n} />
      {loja.nome}
    </div>
  );
}
