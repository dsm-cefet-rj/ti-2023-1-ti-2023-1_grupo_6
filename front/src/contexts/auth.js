import { createContext, useContext, useEffect, useState } from "react";
import { UserInformation } from "../services/api/userInformation/UserInformation";
import { ApiException } from "../services/api/ApiException";
import { CarrinhoContext } from "./CarrinhoContext";
import axios from "axios";
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }

    }, []);


    const signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post("http://localhost:3003/usuario/login", { email, senha: password })
                .then((response) => {
                    if (response) {
                        setUser({ email, password });
                        resolve({ success: true });
                    } else {
                        reject("Credenciais inválidas");
                    }
                })
                .catch((error) => {
                    reject("Ocorreu um erro ao autenticar o usuário");
                });
        });
    };


    const signInStore = (cnpj, password) => {
        return new Promise((resolve, reject) => {
            axios
                .get(`http://localhost:3003/lojas/${cnpj}`)
                .then((response) => {
                    if (response) {
                        console.log("response");
                        console.log(response);

                        const user = { cnpj, password }; // Crie o objeto do usuário corretamente
                        setUser(user); // Defina o valor do usuário usando a função setUser
                        resolve({ success: true });
                    } else {
                        reject("Credenciais inválidas");
                    }
                })
                .catch((error) => {
                    reject("Ocorreu um erro ao autenticar o usuário");
                });
        });
    };



    const signUp = (email, password, name, cpf, bornDate) => {
        UserInformation.getAll().then((result) => {
            if (result instanceof ApiException) {
                setMessage(result.message);
            } else {
                const hasUserWithEmail = result?.some((user) => user.email === email);
                const hasUserWithCpf = result?.some((user) => user.cpf === cpf);

                if (hasUserWithEmail) {
                    alert("Já existe uma conta cadastrada com esse e-mail");
                } else if (hasUserWithCpf) {
                    alert("Já existe uma conta cadastrada com esse CPF");
                } else {
                    let newUser = {
                        name: name,
                        cpf: cpf,
                        bornDate: bornDate,
                        email: email,
                        password: password,
                    };
                    UserInformation.create(newUser);
                    alert("Usuário criado com sucesso");
                }
            }
        });
    };

    const signUpStore = (cnpj, nome, email, animaisAtendidos, cep, endereco, url, contato, password) => {
        UserInformation.getAll().then((result) => {
            if (result instanceof ApiException) {
                setMessage(result.message);
            } else {
                const hasUser = result?.filter((user) => user.cnpj === cnpj);

                if (hasUser?.length) {
                    setMessage("Já existe uma conta cadastrada com esse e-mail");
                } else {
                    let newUser = {
                        cnpj: cnpj,
                        nome: nome,
                        animaisAtendidos: animaisAtendidos,
                        cep: cep,
                        endereco: endereco,
                        url: url,
                        contato: contato,
                        password: password,
                    };
                    UserInformation.create(newUser);
                    setMessage("Usuário criado com sucesso");
                }
            }
        });
    }

    const signUpProduct = (id, nameProduct, price, section, quantProdutos, categoriasAnimais) => {
        return new Promise((resolve, reject) => {
            axios
                .post("http://localhost:3003/produtoInfo/adicionarProduto", { nameProduct, price, section, id, quantProdutos, categoriasAnimais })
                .then((response) => {
                    if (response) {
                        console.log("produto postado")
                        resolve({ success: true });
                    } else {
                        reject("Credenciais inválidas");
                    }
                })
                .catch((error) => {
                    reject("Ocorreu um erro ao autenticar o usuário");
                });
        });
    }

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    }

    const deleteAccount = (field, value) => {
        UserInformation.getAll().then((result) => {
            if (result instanceof ApiException) {
                alert(result.message);
            } else {
                const hasUser = result?.filter((user) => user[field] === value);

                if (hasUser.length === 0) {
                    return "A conta não foi encontrada";
                } else {
                    try {
                        UserInformation.deleteById(hasUser[0].id);
                        setUser(null); // <-- set the user state to null after deleting the account
                    } catch (err) {
                        return "Não foi possível excluir a conta!";
                    }
                }
            }
        });
    };


    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signIn, signUp, signOut, deleteAccount, signInStore, signUpStore, signUpProduct }}
        >
            {children}
        </AuthContext.Provider>
    );

};
