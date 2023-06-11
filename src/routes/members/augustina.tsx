import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/augustina.jpeg";
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Augustina() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Augustina Elena Purda</h1>
                <div className={styles.bioContainer}>


                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>Consiliere psihologică (copii si adolescenti) – 200 ron/50 minute</li>
                            <li>Consiliere dezvoltare personala (copii si adolescenti) – 200 ron/50 minute</li>
                            <li>Dezvoltare personală de grup (copii si adolescenti) – 200 ron/2 ore</li>
                            <li>Ateliere pentru copii si adolescenti – 100 ron/50 minute</li>
                        </ul>

                        <h3 className={styles.subtitle}>Contact:</h3>

                        <ul>
                            <li>Telefon, Whatsapp: +40771223760</li>
                            <li>Email: augustinaelena.purda@gmail.com</li>
                        </ul>
                    </section>
                    <img src={image} alt="Augustina Elena Purda" />
                </div>



                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">
                        <p>
                            Sunt psiholog consilier cu Drept de libera practica eliberat de Colegiul Psihologilor din Romania.
                            Am absolvit Facultatea de Psihologie si Masterul in Psihodiagnoza cognitiva si consiliere
                            psihologica la Universitatea Ecologica, Bucuresti.
                        </p>
                        <p>
                            Cred in potentialul de schimbare al celor care inteleg si isi doresc o viata traita constient, sanatos
                            si echilibrat. Sunt o persoana blanda, empatica, iar deschiderea mea este una plina de caldura si
                            acceptare, cu toleranta si respect pentru ceilalti.
                        </p>
                        <p>
                            Dorinta mea este sa ajut oamenii sa isi descopere propriile drumuri ghidate de valorile personale
                            si sa ii sustin in depasirea obstacolelor care le apar in cale. Abilitatea de a fi in acord cu
                            sentimentele, gandurile si actiunile tale te ajuta sa alegi liber si constient solutii la situatiile cu
                            care te intalnesti in viata de zi cu zi. Sanatatea psihica si cea emotionala sunt factori cheie care
                            determina calitatea vietii.
                        </p>
                        <p>
                            Imi place sa lucrez cu oameni de toate varstele, abordand tematici precum: anxietate, depresie,
                            atacuri de panica, descoperirea resurselor proprii, imbunatatirea imaginii de sine, gestionarea
                            relatiilor interpersonale, a timpului, a unor situatii de criza, precum si multe altele.
                        </p>
                        <p>
                            Putem explora impreuna moduri prin care se poate avea o viata armonioasa, relatii sanatoase si o
                            evolutie continua ca om. Primul pas este drumul spre constientizare si acceptare, vindecarea
                            ranilor emotionale si hranirea increderii in fortele proprii prin invatare, dedicare si iubire.
                        </p>

                        <h3 className={styles.subtitle}>Educatie:</h3>

                        <section>
                            <ul>
                                <li>
                                    Master “Psihodiagnoza cognitiva si consiliere psihologica”
                                    - Universitatea Ecologica, Bucuresti
                                </li>
                                <li>
                                    Universitatea Ecologica, Bucuresti
                                    - Facultatea de Psihologie
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Formari si cursuri de specialitate:</h3>

                        <section>
                            <ul>
                                <li>Curs ‘’EXPERIENȚE EMOȚIONALE CORECTIVE ÎN DIVERSE MODALITĂȚI TERAPEUTICE: TERAPIE INDIVIDUALĂ, DE CUPLU ȘI FAMILIE”</li>
                                <li>Curs “VALUAREA EXPERIENȚIALĂ A RELAȚIEI PĂRINTE-COPIL”</li>
                                <li>Curs “CONCEPTUALIZAREA CAZULUI ȘI PLANIFICAREA INTERVENȚIEI TERAPEUTICE PRIN JOC”</li>
                                <li>Curs “INTERVENȚII TERAPEUTICE PRIN JOC DIRECTIV ÎN TERAPIA COPILULUI ȘI A FAMILIEI”</li>
                                <li>Curs “INTERVENȚII TERAPEUTICE PRIN JOC NON-DIRECTIV ÎN TERAPIA COPILULUI ȘI A FAMILIEI”</li>
                                <li>Curs “TEHNICI DE AUTOREGLARE ÎN TERAPIA COPIILOR”</li>
                                <li>Curs “TRAUMA DE DEZVOLTARE LA COPII- EVALUARE ȘI INTERVENȚIE TERAPEUTICĂ”</li>
                                <li>
                                    Psihoterapii scurte colaborative orientate pe resurse si solutii
                                    -
                                    Institutul de Terapie
                                    Familiala si Practica Sistemica Areopgus
                                </li>
                                <li>
                                    Consiliere
                                    Colaborativa orientata pe resurse si solutii
                                    -
                                    Institutul de Terapie Familiala si
                                    Practica Sistemica Areopgus
                                </li>
                                <li>
                                    Curs „TERAPIA DE CUPLU CENTRATA PE EMOTII
                                    –
                                    COMPETENTE DE BAZA”
                                </li>
                                <li>
                                    Curs „TERAPIE INDIVIDUALA CENTRATA PE EMOTII: EXTINDERA UNUI
                                    MODEL BAZAT PE ATAS
                                    AMENT PENTRU TERAPIA INDIVIDUALA”
                                </li>
                                <li>
                                    Curs „LUCRAND CU EMOTIILE
                                    –
                                    Cum accesam, extindem si reorganizam emotiile in
                                    terapie
                                </li>
                                <li>
                                    Workshop „TEORIA ATASAMENTULUI IN ACTIUNE: DRUMUL SPRE „ACASA”
                                    IN PSIHOTERAPIE”
                                    -
                                    Institutul de Terapie Familiala si Practica Sistemica
                                    Areopagus
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