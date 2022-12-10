import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/maria.jpeg";

export default function Maria() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Maria Spataru</h1>

                <div className={styles.bioContainer}>

                    <img src={image} alt="Simona Mocioi" />
                </div>

                <h3 className={styles.subtitle}>Afiliere:</h3>

                <section>
                    <ul>
                        <li>
                            Membru al Colegiului Psihologilor din Romania (2013)
                        </li>
                        <li>
                            Membru AHPCC Romania (2016)
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Educatie si formare:</h3>

                <section>
                    <ul>
                        <li>
                            Diplomă de
                            Master
                            -
                            Evaluare si Interventie Psihologica
                            in Domeniul Educational
                            -
                            Universitatea
                            Bucuresti, Facultatea de Psihologie si
                            Stiintele Educatiei
                            -
                            2018
                        </li>
                        <li>
                            Diplomă de Master
                            -
                            Psihodiagnoza Cognitiva si
                            Consiliere Psihologica
                            -
                            Universitatea Ecologica
                            Bucuresti, Faculta
                            tea de Psihologie
                            –
                            2015
                        </li>
                        <li>
                            Diplomă de Licență
                            –
                            Facultatea de Psihologie și Științele Educației, Specializarea Psihologie,
                            Universitatea București
                            –
                            2011
                        </li>
                        <li>
                            Formare de bază
                            -
                            Consiliere psihologica cognitiv
                            –
                            comportamentală
                            –
                            AHPCC, 2016
                        </li>
                        <li>
                            Formare complementar
                            ă
                            –
                            Terapie sistemică
                            –
                            cuplu, copil, familie
                            –
                            ACTF, 2017
                        </li>
                        <li>
                            Formare complementară
                            –
                            Terapie de cuplu centrată pe emoții
                            –
                            ICEEFT, EFT Romania, 2019
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Competențe și calificări:</h3>

                <section>
                    <ul>
                        <li>
                            TERAPIE INDIVIDUALĂ CENTRATĂ PE EMOŢII: extinderea unui
                            model bazat pe ataşament
                            pentru terapia
                            individuală
                            –
                            EFT Romania, 2019
                        </li>
                        <li>
                            Terapia centrata pe soluții
                            –
                            Metoda ”Eu pot”
                            –
                            Mindhelp, 2019
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Servicii si tarife:</h3>

                <section>
                    <ul>
                        <li>
                            200 ron/50 minute - Consiliere psihologică/ Terapie individuală
–
copii și adolescenți
                        </li>
                        <li>
                            200 ron/50 minute - Consiliere școlară și educațională
                        </li>
                        <li>
                            250 ron/75-90 minute - Consiliere parentala
                        </li>
                        <li>
                            300 ron/90 minute - Terapie de familie
                        </li>
                        
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Contact:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis sequi reprehenderit illum nisi veniam ullam vel voluptatem. Fuga tenetur dignissimos qui consectetur laborum accusamus nemo quia sit beatae culpa.</p>
                {/* TODO: Add social media and spellcheck --> */}
            </div>
            <Footer />
        </>
    );
}