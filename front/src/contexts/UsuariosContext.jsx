import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const initialState = [
    {
        cnpj: "66735931",
        id: "1",
        nome: "Gato pra Cachorro Pet Shop",
        animaisAtendidos: "Gato • Cachorro • Coelho • Hamster",
        contato: "(21) 9 999-9999",
        endereco: "Avenida Gato Fofo, 164",
        descricao: "Usuario!",
        url: "/Usuario-gato-pra-cachorro-pet-shop",
        produtos: [
        {
            nome: "de",
            preco: 31.22,
            id: "1",
            UsuarioNome: "Gato pra Cachorro Pet Shop",
        },
        ],
        password: "3",
    },
    {
        cnpj: "23131931",
        id: "2",
        nome: "Cachorro Pet Shop",
        animaisAtendidos: "Cachorro • Coelho • Hamster",
        contato: "(21) 9 999-9999",
        endereco: "Rua Gatinho Fofinho, 277",
        descricao: "Usuario!",
        url: "/Usuario-cachorro-pet-shop",
    },
];

export const UsuariosContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [Usuarios, setUsuarios] = useState(() => {
        const localData = axios
        .get(`http://localhost:3003/usuario/${1}`)
        .then((response) => {
            setProdutosUsuario(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
        return localData ? JSON.parse(localData) : initialState;
    });

    useEffect(() => {
        localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
    }, [Usuarios]);

    const adicionarUsuarios = (Usuario) => {
        const novoUsuario = { id: uuidv4(), ...Usuario };
        setUsuarios([...Usuarios, novoUsuario]);
        localStorage.setItem("Usuarios", JSON.stringify([...Usuarios, novoUsuario]));
    };

    const removerUsuario = (id) => {
        setUsuarios(Usuarios.filter((Usuario) => Usuario.id !== id));
    };

    const buscasUsuario = (id) => {
        const localData = JSON.parse(localStorage.getItem("Usuarios"));
        const UsuarioProcuradaId = localData.find((Usuario) => Usuario.id === id);
        return UsuarioProcuradaId;
    };

    const buscasUsuarioCNPJ = (cnpj) => {
        const localData = JSON.parse(localStorage.getItem("Usuarios"));
        const UsuarioProcuradaId = localData.find((Usuario) => Usuario.cnpj === cnpj);
        return UsuarioProcuradaId;
    };

    const buscasUsuarioNome = (nome) => {
        const localData = JSON.parse(localStorage.getItem("Usuarios"));
        const UsuarioProcuradaId = localData.find((Usuario) => Usuario.nome === nome);
        return UsuarioProcuradaId;
    };

    const allUsuarios = () => {
        return Usuarios;
    };

    return (
        <UsuarioContext.Provider
        value={{
            allUsuarios,
            adicionarUsuarios,
            removerUsuario,
            buscasUsuario,
            buscasUsuarioCNPJ,
            buscasUsuarioNome,
        }}
        >
        {children}
        </UsuarioContext.Provider>
    );
    };
