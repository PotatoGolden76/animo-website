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
                            <li>Psihoterapie și consiliere psihologică - 250 ron/60min</li>
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

                        <h3 className={styles.subtitle}>Studii:</h3>

                        <section>
                            <ul>
                                <li>
                                    Studii Masterale – Psihologia traumei – evaluare clinică și intervenție terapeutică, Facultatea de
                                    Psihologie si Științele Educației, Universitatea din București
                                </li>
                                <li>
                                    Studii Masterale – Psihologie educațională și consiliere psihologică, Facultatea de Psihologie si Științele
                                    Educației, Universitatea din București
                                </li>
                                <li>
                                    Studii Masterale – Psihologie Organizațională - Facultatea de Psihologie si Științele Educației,
                                    Universitatea din București;
                                </li>
                                <li>
                                    Studii Postuniversitare – Psihologie aplicată în Diplomație și Relații Internaționale
                                </li>
                                <li>
                                    Facultatea de Psihologie și Științele Educației, Specializarea Psihologie, Universitatea din București
                                </li>
                                <li>
                                    Facultatea de Comunicare și Relații Publice, Specializarea Științe ale Comunicării, Școala Națională de
                                    Studii Politice și Administrative
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Competente si calificari:</h3>

                        <section>
                            <ul>
                                <li>
                                    Psihoterapie adleriană
                                </li>
                                <li>
                                    Terapia traumei
                                </li>
                                <li>
                                    Psiholog clinician, educațional, organizațional
                                </li>
                                <li>
                                    Formare complementară - Terapie centrată pe emoții
                                </li>
                                <li>
                                    Școala de Iarnă de Psihoterapie Pozitivă
                                </li>
                                <li>
                                    Curs facilitator HOLD ME TIGHT – LET ME GO pentru familii cu adolescenți – EFT Romania
                                </li>
                                <li>
                                    „Experiențe emoționale corective în diverse modalități terapeutice: terapie individuala, de cuplu si de
                                    familie”
                                </li>
                                <li>
                                    „Transformation Power of Affect: Emotion Focused Therapy, workshop formativ – Leslie Greenberg,
                                    Institutul de Psihoterapie Experiențială Focalizată pe Emoții
                                </li>
                                <li>
                                    Coordonator de proiecte culturale și educaționale și editor de carte literară - experiență de peste 15 ani;
                                    Editor și coordonator al colecțiilor de carte „Biblioteca pentru toți” și „Nobel” – Jurnalul Național
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