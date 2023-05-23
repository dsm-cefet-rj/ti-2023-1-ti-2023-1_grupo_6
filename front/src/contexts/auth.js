import { createContext, useContext, useEffect, useState } from "react";
import { UserInformation } from "../services/api/userInformation/UserInformation";
import { ApiException } from "../services/api/ApiException";
import { CarrinhoContext } from "./CarrinhoContext";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if(userToken && usersStorage){
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if(hasUser) setUser(hasUser[0]);
        }

    }, []);

    const signIn = (email, password) => {
        return new Promise((resolve, reject) => {
            UserInformation.getAll().then((result)=>{
                if(result instanceof ApiException){
                    reject(result.message);
                }else{
                    const hasUser = result?.filter((user) => user.email === email);
                
                    if(hasUser?.length){
                        if(hasUser[0].email === email && hasUser[0].password === password) {
                            const token = Math.random().toString(36).substring(2);
                            localStorage.setItem("user_token", JSON.stringify({ email, token }));
                            setUser({ email, password });
                            resolve({success: true});
                        } else {
                            reject("Senha incorreta");
                        }
                    } else {
                        reject("E-mail não cadastrado");
                    }
                }
            });
        });
    };


    const signInStore = (cnpj, password) => {
        return new Promise((resolve, reject) => {
            UserInformation.getAll().then((result)=>{
                if(result instanceof ApiException){
                    reject(result.message);
                }else{
                    const hasUser = result?.filter((user) => user.cnpj === cnpj);
                
                    if(hasUser?.length){
                        if(hasUser[0].cnpj === cnpj && hasUser[0].password === password) {
                            const token = Math.random().toString(36).substring(2);
                            localStorage.setItem("user_token", JSON.stringify({ cnpj, token }));
                            setUser({ cnpj, password });
                            resolve({success: true});
                        } else {
                            reject("Senha incorreta");
                        }
                    } else {
                        reject("CNPJ não cadastrado");
                    }
                }
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
        UserInformation.getAll().then((result)=>{
            if(result instanceof ApiException){
                setMessage(result.message);
            }else{
                const hasUser = result?.filter((user) => user.cnpj === cnpj);
        
                if(hasUser?.length){
                    setMessage("Já existe uma conta cadastrada com esse e-mail");
                } else{
                    let newUser= {
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

    const signUpProduct = (id, nameProduct, price, section) => {
        return new Promise((resolve, reject) => {
            UserInformation.getAll().then((result)=>{
                if(result instanceof ApiException){
                    reject(result.message);
                }else{
                    const hasUser = result?.filter((user) => user.id === id);
            
                    if(hasUser?.length){
                        reject("Esse produto já foi cadastrado");
                    } else{
                        let newUser= {
                            id: id,
                            nameProduct: nameProduct,
                            price: price,
                            section: section,
                        };
                        UserInformation.create(newUser);
                        resolve({success: true});
                        setMessage("Produto criado com sucesso");
                    }
                }
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
        value = { { user, signed: !!user, signIn, signUp, signOut, deleteAccount, signInStore, signUpStore, signUpProduct} }
    >
        {children}
    </AuthContext.Provider>
    );

};
