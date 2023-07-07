import { useState, useEffect } from "react";
import styles from './ReposList.module.css';

const ReposList = ({ userName }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 1500)
            })
    }, [userName])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                    <ul className={styles.list}>
                        {repos.map(item => (
                            <li className={styles.listItem} key={item.id}>
                                <div className={styles.listName}>
                                    <b>Nome: </b> {item.name}
                                </div>
                                <div className={styles.listLanguage}>
                                    <b>Linguagem: </b> {item.language}
                                </div>
                                <a className={styles.listLink} target="_blank" href={item.html_url}>Ver no Github</a>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default ReposList;