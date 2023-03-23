import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/maria.jpeg";
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Maria() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Maria Spataru</h1>

                <div className={styles.bioContainer}>
                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>
                                200 ron/50 minute - Consiliere psihologica/ Terapie individuala
                                –
                                copii si adolescenti
                            </li>
                            <li>
                                200 ron/50 minute - Consiliere scolara si educationala
                            </li>
                            <li>
                                250 ron/75-90 minute - Consiliere parentala
                            </li>
                            <li>
                                300 ron/90 minute - Terapie de familie
                            </li>

                        </ul>

                        <h3 className={styles.subtitle}>Contact:</h3>
                        <ul>
                            <li>Telefon, Whatsapp: +40744.784.873</li>
                        </ul>
                    </section>
                    <img src={image} alt="Maria Spataru" />
                </div>

                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">
                        <p></p>

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
                                    Diploma de
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
                                    Diploma de Master
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
                                    Diploma de Licenta
                                    –
                                    Facultatea de Psihologie si Stiintele Educatiei, Specializarea Psihologie,
                                    Universitatea Bucuresti
                                    –
                                    2011
                                </li>
                                <li>
                                    Formare de baza
                                    -
                                    Consiliere psihologica cognitiv
                                    –
                                    comportamentala
                                    –
                                    AHPCC, 2016
                                </li>
                                <li>
                                    Formare complementar
                                    a
                                    –
                                    Terapie sistemica
                                    –
                                    cuplu, copil, familie
                                    –
                                    ACTF, 2017
                                </li>
                                <li>
                                    Formare complementara
                                    –
                                    Terapie de cuplu centrata pe emotii
                                    –
                                    ICEEFT, EFT Romania, 2019
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Competente si calificari:</h3>

                        <section>
                            <ul>
                                <li>
                                    TERAPIE INDIVIDUALA CENTRATA PE EMOTII: extinderea unui
                                    model bazat pe atasament
                                    pentru terapia
                                    individuala
                                    –
                                    EFT Romania, 2019
                                </li>
                                <li>
                                    Terapia centrata pe solutii
                                    –
                                    Metoda ”Eu pot”
                                    –
                                    Mindhelp, 2019
                                </li>
                            </ul>
                        </section>
                    </AccordionTab>
                </Accordion>



            </div>
            <Footer />
        </>
    );
}