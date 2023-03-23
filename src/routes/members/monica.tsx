import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/monica.jpeg";

import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Monica() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Monica Stanica</h1>

                <div className={styles.bioContainer}>


                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>
                                200 ron/50 minute - Evaluare psihologica clinica pentru incadrarea in handicap copii si adulti (Anexa 8, respectiv Raport psihologic adulti
                                incluzand Q.I., MMSE, Scor GAFS. Se aplica Timbru profesional.
                            </li>
                            <li>
                                200 ron/50 minute - Evaluarea copiilor cu dificultati de invatare specifice (dislexie, disgrafie, discalculie), a problemelor de concentrare a
                                atentiei si de memorare sau a eventualelor probleme emotionale.
                            </li>
                            <li>
                                150 ron/50 minute - AVIZ PSIHOLOGIC (voluntariat isu/smurd/igsu, plasament familial, adoptie, instituire tutela, insotitor/asistent
                                personal, asistent maternal, FIV cuplu (fertilizare in vitro)
                            </li>
                            <li>
                                150 ron/50 minute - Consiliere psihologica/Psihoterapie de scurta durata (copii si adulti)/Psihoterapie cognitiv-comportamentala
                            </li>
                            <li>
                                100 ron/1-2 ore - Dezvoltare personala copii/adolescenti
                            </li>
                        </ul>
                    </section>
                    <img src={image} alt="Monica Stanica" />
                </div>

                <h3 className={styles.subtitle}>Contact:</h3>

                <section>
                    <ul>
                        <li>Telefon, Whatsapp: +40720.333.655</li>
                        <li>Email: mona.stanica@gmail.com</li>
                    </ul>
                </section>


                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">
                        <p>
                            Sunt psiholog clinician si psihoterapeut. Iubesc ceea ce fac si iubesc oamenii. Este un miracol ca fiecare dintre noi exista! Fiecare secunda
                            pe care o traim e pretioasa si un dar minunat primit odata cu viata. Usoara sau grea, viata noastra este complexa si imprevizibila, surprinzandu-ne
                            in fiecare zi. Exista momente in viata fiecaruia dintre noi cand, dupa ce am experimentat un eveniment negativ de viata, sa avem nevoie de
                            cineva care sa ne asculte, sa ne indrume, sa ne readuca la viata, iar acest cineva ar putea fi un psihoterapeut sau psiholog cu care rezonezi. Sa nu
                            lasam ca lucrurile triste, ingrijorarile si bataliile zilnice sa ne opreasca din a reflecta si admira frumusetea acesteia.</p>

                        <h3 className={styles.subtitle}>Afiliere:</h3>
                        <section>
                            <ul>
                                <li>
                                    Membru al Colegiului Psihologilor din România (2016)
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Educatie si formare:</h3>

                        <section>
                            <ul>
                                <li>
                                    Diploma de Master – Psihologia Sanatatii – Cercetare Clinica si Optimizare Comportamentala – Universitatea Bucuresti, Facultatea de
                                    Psihologie si Stiintele Sociale
                                </li>
                                <li>
                                    Diploma de Licenta – Facultatea de Psihologie si Stiintele Sociale, Specializarea Psihologie, Universitatea Bucuresti
                                </li>
                                <li>
                                    Diploma de Licenta – Facultatea de Asigurari Banci si Burse de Valori, Specializarea Management Financiar Contabil, ASE Bucuresti
                                </li>
                                <li>
                                    Formare complementara - Psihoterapii cognitiv – comportamentale – APSC
                                </li>
                                <li>
                                    Formare complementara – Tehnici si proceduri de interventie in Terapia Logopatiilor
                                </li>
                                <li>
                                    Formare complementara – Evaluarea clinica a copilului si adolescentului - TestCentral
                                </li>
                                <li>
                                    Formare complementara – Evaluarea psihologica a copiilor cu TSA – Asociatia Help Autism
                                </li>
                                <li>
                                    Formare complementara – Terapie pentru persoane cu TSA – Asociatia Help Autism
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Participari la conferinte si workshopuri:</h3>

                        <section>
                            <ul>
                                <li>
                                    Conferinta Nationala „Aplicatii practice in Dezvoltarea Psihologiei” – editia a XII-a 26-27 noiembrie 2022, Bucuresti
                                </li>
                                <li>
                                    Conferinta Nationala „Aplicatii practice in Dezvoltarea Psihologiei” – editia a IX-a 23-24 noiembrie 2019, Bucuresti
                                </li>
                                <li>
                                    Conferinta cu participare internationala – editia a XI a – Psihotrauma – Punti intre teorii si aplicatii practice, 6 – 9 aprilie 2017, Brasov
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Articole publicate:</h3>

                        <section>
                            <ul>
                                <li>
                                    “The concept of neurosis in classical psychiatric, psychodynamic and psychoanalytic sense”. M. Stănică, R.A.J. Ramirez (2019). În
                                    volumul Psychodynamic Psychiatry – Clinical Theories. Pag. 100 – 120. Beau Bassin 71504, Mauritius: Editura LAP LAMBERT
                                    Academic Publishing. ISBN: 978-620-0-31198-6
                                </li>
                                <li>
                                    <a href="https://www.researchgate.net/publication/335230664_ACTUALITATEA_CONCEPTULUI_DE_PSIHOZA_ISTERICA">"Actualitatea conceptului de psihoza isterica"</a>
                                </li>
                                <li>
                                    “Emoționalitate înaltă și substrat pulsional. Transgeneraționalul în schizofrenie”. E.B. Dinea, L.M. Stanciu, M. Stănică (Raportaru)
                                    (2018). În volumul Psihiatrie psihodinamică – Studii de caz. Pag. 168 – 184. București: Editura Universitară. ISBN: 978-606-28-0803-7.
                                </li>
                                <li>
                                    “Actualitatea conceptului de psihoză isterică”, S. Trifu, M. Stănică, D. Andronache, A.M. Gutt (2017). În volumul Psihotrauma – Punți
                                    între teorii și aplicații practice. Pag. 147 – 155. București: Editura Universitară. ISBN: 978 – 606 – 28 – 0577 – 7.
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Competente:</h3>

                        <section>
                            <ul>
                                <li>
                                    Psihodiagnostic si evaluare clinica:
                                    <ul>
                                        <li>
                                            investigarea si psihodiagnosticul tulburarilor psihice si al altor conditii de patologie care implica in etiopatogeneza mecanisme
                                            psihologice;
                                        </li>
                                        <li>
                                            evaluare neuropsihologica
                                        </li>
                                        <li>
                                            evaluare complexa a personalitatii (ex.trasaturi caracteriale, de temperament, aptitudinale etc.) si a mecanismelor de
                                            coping/adaptare/defensive;
                                        </li>
                                        <li>
                                            evaluarea starii de sanatate mentala, ca preconditie pentru angajare si/sau desfasurarea unor activitati care impun prin lege examinare
                                            psihologica asociata starii de sanatate (ex.testarea profesorilor, a functionarilor publici etc.)
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Interventie/asistenta/consultanta psihologica:
                                    <ul>
                                        <li>
                                            Terapii standard de relaxare si sugestive;
                                        </li>
                                        <li>
                                            Consiliere (ex.prin tehnici comportamentale) specifica obiectivelor medicale (ex.complianta la tratament, modificarea stilului de viata,
                                            pregatire preoperatorie etc.).
                                        </li>
                                    </ul>
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