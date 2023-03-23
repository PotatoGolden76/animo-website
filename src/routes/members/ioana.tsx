import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/ioana.jpeg";

import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Ioana() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Ioana Venera Costache</h1>

                <div className={styles.bioContainer}>

                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>

                        <ul>
                            <li>
                                200 ron/50 minute - Terapie individuala adulti (cabinet si online platforma Zoom)
                            </li>
                        </ul>


                        <h3 className={styles.subtitle}>Contact:</h3>
                        <ul>
                            <li>Telefon, Whatsapp: +40723.364.165</li>
                            <li>Email: venera.costache@gmail.com</li>
                        </ul>
                    </section>
                    <img src={image} alt="Ioana Venera Costache" />
                </div>

                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">
                        <p>
                            Daca citesti aceste randuri, inseamna ca nu ne-am intalnit si poate ai vrea sa stii cate
                            ceva despre mine. Asadar, numele meu este Costache Venera Ioana, sunt psihoterapeut,
                            am 46 ani, sunt casatorita, am 2 copii, locuiesc in Bucuresti, dar fiind nascuta in Constanta.
                            In adolescenta, cautam sa ma cunosc, sa inteleg ce simt si de ce simt asa, apoi cum
                            pot sa ma ajut. Asa a inceput drumul meu catre psihoterapie, cu dorinta de a intelege ce simt
                            eu, ce simt oamenii si ce-i determina sa se comporte intr-un fel sau altul.
                            Parcursul meu profesional incepe cu multi ani in urma, in anul 2005 cand am absolvit
                            Facultatea de Psihologie, apoi am pornit pe acest drum ca psiholog, mai intai in cadrul unui
                            cabinet psihologic din Constanta, apoi in Bucuresti unde am continuat studiile complementare
                            si am infiintat Cabinetul de psihoterapie in anul 2016. Ulterior, in anul 2019, m-am alaturat
                            Asociatiei Animo, unde sunt in prezent.
                        </p>
                        <h3 className={styles.subtitle}>Afiliere:</h3>

                        <section>
                            <ul>
                                <li>
                                    Membru Colegiul Psihologilor din Romania
                                    –
                                    2016
                                </li>
                                <li>
                                    Membru EMDR Romania
                                    –
                                    2019
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Educatie si formare complementara:</h3>

                        <section>
                            <ul>
                                <li>
                                    Training EMDR “Eye Movement Desensitization and Reprocessing Therapy”(EMDR
                                    Europe Association) - (2019-2020)
                                </li>
                                <li>Training “Schema Therapy” (Asociatia de Hipnoterapie si Psihoterapie Cognitiv
                                    – Comportamentala) – (2019)
                                </li>
                                <li>
                                    Master Class in Schema Therapy
                                    –
                                    Integrarea elementelor de baza si a celor avansate
                                    in terapia cazurilor dificile
                                    –
                                    IRST (2019)
                                </li>
                                <li>
                                    Training “Dialectical Beahvior Therapy”
                                    -
                                    Asociatia Romana de Terapie Dialectic
                                    -
                                    Comportamentala
                                    –
                                    (2019)
                                </li>
                                <li>
                                    Training “Abordrea ter
                                    apeutica a tulburarilor cauzate de abuzul de substante”.
                                    –
                                    Asociatia Catharsis
                                    2019
                                </li>
                                <li>
                                    Training “
                                    Managementul furiei
                                    ”.
                                    –
                                    Asociatia Catharsis
                                    -
                                    2019
                                </li>
                                <li>
                                    Externship in Emotionally Focused Therapy (2018)
                                </li>
                                <li>
                                    Formare complementara
                                    –
                                    Terapie sistemica: culpu, copil, famil
                                    ie
                                    –
                                    (2016
                                    -
                                    2017)
                                    Asociatia de Consiliere si Terapie a familiei
                                </li>
                                <li>
                                    Diploma de
                                    Master
                                    “
                                    Psihoterapie Cognitiv
                                    –
                                    Comportamentala
                                    ”
                                    –
                                    Universitatea Titu
                                    Maiorescu, Bucuresti
                                    –
                                    (2015
                                    –
                                    2016)
                                </li>
                                <li>
                                    Curs Formator
                                    -
                                    Acreditat Ministerul muncii, familiei si protectiei soci
                                    ale, (2015)
                                </li>
                                <li>
                                    Diploma de Licenta “Facultatea de Psihologie si Asistenta sociala”
                                    –
                                    Universiatatea
                                    Bucuresti (2005)
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Formare continua:</h3>

                        <section>
                            <ul>
                                <li>
                                    Workshop
                                    –
                                    “Sinele Respins”
                                    EMDR Romania (
                                    2022
                                    )
                                </li>
                                <li>
                                    Workshop
                                    -
                                    Use of Ego state techniques in EMDR therapy
                                    –
                                    EMDR Romania 2021
                                </li>
                                <li>
                                    Workshop
                                    -
                                    Trauma de atasament
                                    -
                                    EMDR Romania 2021
                                </li>

                                <li>
                                    Workshop
                                    -
                                    “Cum lucram cu modurile critice interne in terapia schemelor”
                                    –
                                    IRST
                                    (2021)
                                </li>

                                <li>
                                    Workshop
                                    -
                                    Tratamentul tulburarii de personalitate borderline. Introducere in terapia
                                    comportamentala dialectica (
                                    2019)
                                </li>

                                <li>
                                    Workshop
                                    –
                                    Mintea Obsesiva: Cum sa intelegem si sa tratam tulburarea obsesiv
                                    compulsiva
                                    -
                                    ARTCC (2017)
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