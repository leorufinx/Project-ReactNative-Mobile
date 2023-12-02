import { Container, List } from "@mui/material";
import React, { useState } from "react";
import TodoItem from "../components/TodoItem";
import { InputField, InputArea } from "../components/Input";
import { Button, Link } from "../components/Link";

export default function Login() {
   const [getNome, setNome] = useState('');
   const [getSenha, setSenha] = useState('');

   const fazerLogin = (nome, senha) => {



      document.getElementById("nome").value = "";
      document.getElementById("senha").value = "";
   };

   return (
      <div className="form">

         <div className="h1">Login</div>

         <div className="row">
            <InputField id="nome" title="Nome" type="text" value={getNome} onChange={setNome} />
         </div>

         <div className="row">
            <InputField id="senha" title="Senha" type="password" value={getSenha} onChange={setSenha} />
         </div>

         <Link href="Cadastro" setPage={setPage} />
         <input type="button" className="btn" value="Entrar" onClick={() => fazerLogin(getNome, getSenha)} />

      </div>
   );
}
