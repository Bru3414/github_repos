import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https:/github.com/${nomeUsuario}.png`}/>
            <h3 className={styles.nome}>{nomeUsuario}</h3>
        </header>
    )
}

export default Perfil;