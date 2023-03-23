import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/ana.jpeg";
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Ana() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Ana Maria Vulpescu</h1>

                <div className={styles.bioContainer}>
                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>Consiliere pentru Dezvoltare Personala (Life Coaching) - 250 ron/50min</li>
                            <li>Training Comunicare - 1000 ron/4 sedinte</li>
                            <li>Consiliere vocationala - 250 ron</li>
                            <li>Ateliere scriere creativa / academica (copii si adolescenti) - 150 lei/sedinta 90 min - minim 4 participanti</li>
                        </ul>
                    </section>
                    <img src={image} alt="Ana Maria Vulpescu" />
                </div>

                <section>
                    <h3 className={styles.subtitle}>Contact:</h3>

                    <ul>
                        <li>Telefon, Whatsapp: 0745.030.331</li>
                        <li>Email: anamariavulpescu@gmail.com</li>
                    </ul>
                </section>

                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">

                        <h3 className={styles.subtitle}>Afiliere:</h3>

                        <section>
                            <ul>
                                <li>
                                    Cercetator la Memory Lab, Facultatea de Psihologie si Stiintele Educatiei, Universitatea
                                    Bucuresti
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Studii:</h3>

                        <section>
                            <ul>
                                <li>
                                    Studii Masterale – Psihologie Organizationala - Facultatea de Psihologie si Stiintele Educatiei,
                                    Universitatea Bucuresti
                                </li>
                                <li>
                                    Studii Postuniversitare – Psihologie Diplomatica si Relatii Internationale
                                </li>
                                <li>
                                    Facultatea de Psihologie si Stiintele Educatiei, Specializarea Psihologie, Universitatea Bucuresti
                                </li>
                                <li>
                                    Facultatea de Comunicare si Relatii Publice, Profilul Stiinte ale Comunicarii, Scoala Nationala de Studii
                                    Politice si Administrative
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Competente si calificari:</h3>

                        <section>
                            <ul>
                                <li>
                                    Editor carte literara – cu experienta de peste 15 ani – editor si coordinator colectia de carte
                                    “Biblioteca pentru toti” – Jurnalul National
                                </li>
                                <li>
                                    Formator acreditat ANC – Training Romania, 2020
                                </li>
                                <li>
                                    Consilier Dezvoltare Personala – Centrul Confident, 2019
                                </li>
                                <li>
                                    Consiliere vocationala - Centrul Confident, 2019
                                </li>
                                <li>
                                    Lucrator prin arte combinate - Centrul Confident, 2020
                                </li>
                                <li>
                                    Course: Interpersonal Relationships, University of North Texas, Denton, Texas
                                </li>
                                <li>
                                    Scoala de Iarna de Psihoterapie Pozitiva, 2022 (https://positum.ro/2022/01/scoala-de-iarna-ppt-2022/)
                                </li>
                                <li>
                                    Atelier de terapie individuala centrata pe emotii, lucrul cu clienti dificili
                                </li>
                                <li>
                                    ”Blocaje in faclitarea experientelor emotionale corective”
                                </li>
                                <li>
                                    ”Experiente emotionale corective prin punerea in scena in terapia de cuplu"
                                </li>
                                <li>
                                    Curs facilitator HOLD ME TIGHT – LET ME GO pentru familii cu adolescenti – EFT Romania
                                </li>
                                <li>
                                    Formare complementara - Terapie individuala centrata pe emotii – Externship + Core skills
                                </li>
                                <li>
                                    EFT - Core Skills Plus (Sinele Terapeutului)
                                </li>
                                <li>
                                    ”Experiente emotionale corective in diverse modalitati terapeutice: terapie individuala, de cuplu si de
                                    familie ”
                                </li>
                                <li>
                                    „Transformation Power of Affect: Emotion Focused Therapy, workshop formativ – Leslie Greenberg,
                                    Institutul de Psihoterape Experientiala Focalizata pe Emotii
                                </li>
                                <li>
                                    Terapia de urgenta bazata pe neurostiinta emotiei, cognitiei si somaticii” - Fundatia „The Wellbeing
                                    Planet”
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