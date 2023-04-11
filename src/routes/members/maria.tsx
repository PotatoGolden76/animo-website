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
                            <li>Consiliere psihologica/ Terapie individuala – copii si adolescenti - 150 ron/50 minute</li>
                            <li>Consiliere scolara si educationala - 150 ron/50 minute</li>
                            <li>Consiliere parentala/ Terapie de familie – 200 RON/90 minute</li>
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
                                <li>
                                    Membru EFT Romania
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Educatie si formare:</h3>

                        <section>
                            <ul>
                                <li>Diploma de Master - Evaluare si Interventie Psihologica in Domeniul Educational - Universitatea</li>
                                <li>Bucuresti, Facultatea de Psihologie si Stiintele Educatiei - 2018</li>
                                <li>Diploma de Master - Psihodiagnoza Cognitiva si Consiliere Psihologica - Universitatea Ecologica</li>
                                <li>Bucuresti, Faculta tea de Psihologie – 2015</li>
                                <li>Diploma de Licenta – Facultatea de Psihologie si Stiintele Educatiei, Specializarea Psihologie,</li>
                                <li>Universitatea Bucuresti – 2011</li>
                                <li>Formare de baza - Consiliere psihologica cognitiv – comportamentala – AHPCC, 2016</li>
                                <li>Formare complementar a – Terapie sistemica – cuplu, copil, familie – ACTF, 2017</li>
                                <li>Formare complementara – Terapie de cuplu centrata pe emotii – ICEEFT, EFT Romania, 2019</li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Competente si calificari:</h3>

                        <section>
                            <ul>
                                <li>Evaluare si Strategii de Interventie in Psihoterapia Copilului si Adolescentului – Asociatia ASIST 2013</li>
                                <li>Evaluarea Clinica a Copilului – Societatea de Psihoterapie Experientiala din Romania 2013</li>
                                <li>Gestionarea Situatiilor de Criza din Scoala – Casa Corpului Didactic a Municipiului Bucuresti 2014</li>
                                <li>Evaluarea si interventia psihologica la copii si adolescenti – Asociatia de Consiliere si Terapie a Familiei 2016</li>
                                <li>Educatia Rational Emotiva: Aplicatii in Context Clinic – Asociatia de Psihoterapii Cognitive si</li>
                                <li>Comportamentale din Romania 2016</li>
                                <li>Terapie Sistemica: Cuplu, Copil, Familie – Asociatia de Consiliere si Terapie a Familiei 2016</li>
                                <li>Trauma in Early Childhood – MSW, IMH-E IV 2018</li>
                                <li>Predarea Bazata pe Atasament – PSIRIS 2019</li>
                                <li>TERAPIE INDIVIDUALA CENTRATA PE EMOTII: extinderea unui model bazat pe atasament pentru terapia individuala – EFT Romania, 2019</li>
                                <li>Terapia centrata pe solutii – Metoda ”Eu pot” – Mindhelp, 2019</li>
                                <li>Evaluarea Personalitatii – ARHCRTE 2020-2021</li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Conferinte si Congrese:</h3>

                        <section>
                            <ul>
                                <li>Psihoterapia si Conditia Umana – Asociatia de Psihoterapie Integrativa si Psihologie Clinica 2016</li>
                                <li>Congresul National de Toxicologie – siguranta xenobioticelor si sanatatea omului – provocari actuale 2017</li>
                                <li>Conferinta Internationala Neuropsihologia Tulburarilor Specifice de Invatare 2017</li>
                                <li>Psihoterapia si Conditia Umana – Asociatia de Psihoterapie Integrativa si Psihologie Clinica 2018</li>
                                <li>ADHD-ul la Copii, Adolescenti si Adulti – FPSE 2018</li>
                                <li>Conferinta Internationala Neuropsihologia si Tulburarile de Limbaj – FPSE 2018</li>
                                <li>The Cyber Effect – Asociatia EKA 2019</li>
                                <li>50 Shades of Bullying – FPSE 2019</li>
                            </ul>
                        </section>
                    </AccordionTab>
                </Accordion>



            </div>
            <Footer />
        </>
    );
}