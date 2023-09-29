import { Link } from 'react-router-dom'
import React from 'react'

// import { List, X } from "@phosphor-icons/react"

import Logo_Header from "../../img/logoheader.png"
import Cartinha from "../../img/Cartinha.png"
import styles from './Header.module.css'
import Caminus from './../../img/Caminus.png'

function Header() {
    // const [abrirFechar, setAbrirFechar] = useState(false)

    // function handleAbrirFecharMenu() {
    //     if(abrirFechar) {
    //         setAbrirFechar(false)
    //         return
    //     }

    //     setAbrirFechar(true)
    // }

    return (
        <header>
            <div className={styles.menu_desktop}>
                <div className={styles.menun}>
                <div className={styles.imagens_logo}>
                    <div className={styles.logo}></div>
                        <img src={Logo_Header} alt="Logo Caminus" />
                </div>

                <div id={styles.navegacao}>
                    <nav>
                        <ul>
                            <li><a href={'/'}>Tela Inicial</a></li>
                            <li><a href={'/ideia'}>Ideia</a></li>
                            <li><a href={'/objetivo'}>Objetivo</a></li>
                            <li><a href={'/explicacao'}>Explicação</a></li>
                            <li><a href={'/equipamentos'}>Equipamentos</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.cartinha}>
                    <a href={'/contato'}><img src={Cartinha} alt="Imagem de carta" /></a>
                </div>
                </div>
            </div>

            {/* <div className={styles.menu_mobile}>
                <div className={styles.mobile}>
                    <img src={Caminus} alt="Texto Caminus" />
                    <img src={Logo_Header} alt="Logo Caminus" />

                    <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} />}</button>
                </div>

                <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                    <nav>
                        <ul>
                            <li>Tela Inicial</li>
                            <li>Ideia</li>
                            <li>Objetivo</li>
                            <li>Explicação</li>
                            <li>Equipamentos</li>
                            <li>Contato</li>
                        </ul>
                    </nav>
                </div>

                <a href="https://doc-0k-30-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/bbcunj2h3o3odbcl8mq10gcfod80dgdk/f2vipai2f9cbs161v3glap25io74m0e9/1695942975000/3/107439570428730947018/APznzaZO92KL9EQdCxye3yIklaf-Kd9e-E-TfQE9ztNlySuddTpUQ0ItgyBHM9tCsp2Ix_8rORVhCbjogI28pLAOU4YRupjLNrIMHgoPpi7KiF3danBeNlUigdmW27xdVaGDXcMV9A00irUAc6rJJTqbP0l0d39yjsvrQ4PybP-tE2I5YL90JP2NFTYqtZ1FORjD0y7y4yuP7pRgB45QyJe_K_MEBE81ftP9PQtSrfYEGSUH9cfgqDYYr1MaMVO69i1EOywdozSY0PyH12YuKM7I9ntL7M-S_ltmWhAVm3ADFHVxzJXqyBXjUqpioc1o7Yfw2f6AyzqIzsc6VIU7S3zK0kQ_-BAugTnWRrc-noQGHR6dnfWsQTDP7kAGogFcvpCHyeQJ24UASZ7aVapexkelLbSiTaSN-g==?authuser=1&nonce=r89i4cldifot6&user=109800052517321484114&hash=2qk9tg3i1g0q3pullq1fd160s1cflkr1">PDF DO PROJETO</a>
            </div> */}
        </header>
    )
}

export default Header