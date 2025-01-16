import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/mihaela.jpeg";


import {Accordion, AccordionTab} from 'primereact/accordion';


export default function Mihaela() {
    return (
        <>
            <Header/>
            <div className={classNames("container", styles.container)}>
                <h1>Mihaela Raduta</h1>

                <div className={styles.bioContainer}>


                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>Psihoterapie psihanalitica individuala adulti si adolescenti - 200 ron/50 minute</li>
                        </ul>
                    </section>


                    <img src={image} alt="Mihaela Raduta"/>
                </div>

                <h3 className={styles.subtitle}>Contact:</h3>

                <section>
                    <ul>
                        <li>Telefon, Whatsapp: +40749.067.961</li>
                        <li>Email: cabinetpsi@mihaelaraduta.ro</li>
                        <li>Site: <a target="_blank" href="https://www.mihaelaraduta.ro">mihaelaraduta.ro</a></li>
                        <li>Facebook: <a target="_blank"
                                         href="https://www.facebook.com/mihaelaradutapsi">facebook.com/mihaelaradutapsi</a>
                        </li>
                        <li>Instagram: <a target="_blank"
                                          href=" https://www.instagram.com/psiholog_mihaela.raduta/">instagram.com/psiholog_mihaela.raduta</a>
                        </li>
                    </ul>
                </section>

                <Accordion className={styles.accHeader}>
                    <AccordionTab header="Despre Mine ►">
                        <p>
                            Sunt Mihaela Răduță, psiholog si psihoterapeut de orientare psihanalitică, membru al
                            Colegiului Psihologilor din Romania.
                        </p>
                        <p>
                            Cred profund în puterea relației terapeutice de a oferi un spațiu de vindecare și speranță.
                            În munca mea,
                            am descoperit că, în dezvoltarea înțelegerii de sine și în explorarea semnificațiilor mai
                            profunde a ceea
                            ce se observă în relații, există un mare potențial de a trece prin dificultăți și de a
                            descoperi un loc în care
                            ne putem regăsi și reîntregi. Curiozitatea și prezența sunt ingrediente cheie în îmbogățirea
                            unei astfel de
                            călătorii terapeutice. Sunt alături de clienții mei în procesul de a-și construi punctele
                            forte și îi sprijin
                            pentru a crea noi posibilități în ei înșiși, în relațiile lor și în comunitățile în care
                            trăiesc.
                        </p>
                        <p>
                            Te invit sa parcurgem împreună această călătorie, uneori anevoioasă, alteori dureroasă, dar
                            niciodată
                            lipsită de uimire, interes, curiozitate și încredere.
                        </p>

                        <h3 className={styles.subtitle}>Afiliere:</h3>

                        <section>
                            <ul>
                                <li>
                                    Membră în Colegiul Psihologilor (cod personal și parafă: 23263)
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Educatie si formare:</h3>

                        <section>
                            <ul>
                                <li>
                                    Formare în psihoterapie psihanalitică la INSIGHT- Asociatia pentru promovarea
                                    psihanalizei teoretice si clinice, cu o durată de 4 ani, ce presupune o formare
                                    teoretica centrata pe
                                    abordarea psihanalitica relationala, seminarii clinice, grupuri de lucru,
                                    conferinte, ateliere si
                                    supervizarea activitatii clinice: supervizare individuala, supervizare de grup.
                                </li>
                                <li>
                                    Master de psihanaliză la Universitatea Titu Maiorescu, cu o durată de 2 ani
                                </li>
                                <li>
                                    Absolventă a facultății de Psihologie
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Câteva dintre probleme cu care te pot ajuta sunt:</h3>

                        <section>
                            <ul>
                                <li>Depresie</li>
                                <li>Anxietate</li>
                                <li>Fricaă</li>
                                <li>Singurătate</li>
                                <li>Furie</li>
                                <li>Tristețe</li>
                                <li>Doliu</li>
                                <li>Dificultăți de relaționare</li>
                                <li>Dificultăți post traumatice</li>
                                <li>Sindromul burnout</li>
                                <li>Dificultăți de cuplu</li>
                                <li>Traume emoționale</li>
                                <li>Probleme de identitate</li>
                                <li>Probleme de stimă de sine</li>
                                <li>Tulburări psihosomatice</li>
                                <li>Comportament autodistructiv</li>
                                <li>Probleme sexuale</li>
                                <li>Adicții</li>
                                <li>Insomnie</li>
                                <li>Abuz și violență domestică</li>
                                <li>Dificultăți în gestionarea emoțiilor</li>
                                <li>Problemele alimentare</li>
                                <li>Tulburare afectivă bipolară</li>
                            </ul>
                        </section>
                    </AccordionTab>
                </Accordion>
            </div>
            <Footer/>
        </>
    );
}