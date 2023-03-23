import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/simona1.jpg";


import { Accordion, AccordionTab } from 'primereact/accordion';


export default function Simona() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Simona Mocioi</h1>
                <h2>Fondator Centrul Animo</h2>

                <div className={styles.bioContainer}>


                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>Consiliere psihologica/Terapie individuala adulti si adolescenti - 200 ron/50 minute</li>
                            <li>Terapie de cuplu si familie - 300 ron/75-90 minute</li>
                            <li>Terapie de cuplu (limba engleza) - 350 ron/75-90 minute</li>
                            <li>Consiliere de discernamant (pentru cupluri aflate in pragul divortului) – 400 lei/1 sedinta</li>
                            <li>Grupuri de dezvoltare personala/suport adulti si adolescenti - 200 ron/3 ore</li>
                            <li>Workshopuri psihoeducatie si socializare - 150 ron/sesiune/pers</li>
                            Toate serviciile pot fi oferite la cabinet sau online, pe Google Meet
                        </ul>
                    </section>


                    <img src={image} alt="Simona Mocioi" />
                </div>

                <h3 className={styles.subtitle}>Contact:</h3>

                <section>
                    <ul>
                        <li>Telefon, Whatsapp: +40743.168.491</li>
                        <li>Email: simona@centrulanimo.com</li>
                        <li>Site: <a target="_blank" href="https://pastiladepsihologie.com/">pastiladepsihologie.com</a></li>
                        <li>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/simonamocioi/">linkedin.com/in/simonamocioi</a></li>
                        <li>Facebook: <a target="_blank" href="https://www.facebook.com/psiholog.mocioi">facebook.com/psiholog.mocioi</a></li>
                        <li>Instagram: <a target="_blank" href=" https://www.instagram.com/psihologsimonam/">instagram.com/psihologsimonam</a></li>
                        <li>Twitter: <a target="_blank" href="https://twitter.com/simonamocioi">twitter.com/simonamocioi</a></li>
                    </ul>
                </section>

                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">
                        <p>
                            Daca ar fi sa definesc cu ajutorul unui singur cuvant ceea ce ma motiveaza si ma pasioneaza cel mai
                            mult, atunci as folosi cuvantul ”relatie”. Relatia cu fiul meu mi-a ”deschis ochii” spre o
                            noua intelegere a vietii, relatia cu sotul si parintii mei m-a ajutat sa dau forma si sa
                            pun in miscare un nou plan pentru cariera mea, relatia cu colegii si prietenii m-a
                            ajutat sa il pun in aplicare. Tot ”relatia” este pasiunea mea si in activitatea
                            de terapeut: vindec relatii, ajut oamenii sa creeze si sa dezvolte relatii
                            sanatoase, incepand de la relatia cu propriul sine.
                        </p>

                        <h3 className={styles.subtitle}>Afiliere:</h3>

                        <section>
                            <ul>
                                <li>
                                    Membru al Colegiului Psihologilor din Romania(2015)
                                </li>
                                <li>
                                    Membru ICEEFT (2018)
                                </li>
                                <li>
                                    Membru EFT Romania (2018)
                                </li>
                                <li>
                                    Membru AHPCC Romania (2015)
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
                                    in Domeniul
                                    Educational
                                    -
                                    Universitatea
                                    Bucuresti, Facultatea de Psihologie si
                                    Stiintele Educatiei
                                    -
                                    2018
                                </li>
                                <li>
                                    Diploma de
                                    Master
                                    -
                                    Psihodiagnoza Cognitiva si
                                    Consiliere Psihologica
                                    -
                                    Universitatea Ecologica
                                    Bucuresti, Facultatea de Psihologie
                                    –
                                    2015
                                </li>
                                <li>
                                    Diploma de Licenta
                                    –
                                    Fa
                                    cultatea de Psihologie si Stiintele Educatiei, Specializarea Psiholo
                                    gi
                                    e,
                                    Universitatea Bucuresti
                                    –
                                    2013
                                </li>
                                <li>
                                    Diploma de Licenta
                                    –
                                    Facultatea de Fizica, specializarea Optica, Spectroscopie, Plasma, Laseri,
                                    Universitatea Bucuresti
                                    -
                                    1994
                                </li>
                                <li>
                                    Formare de baza
                                    -
                                    Consili
                                    ere psihologica cognitiv
                                    –
                                    comportamentala
                                    –
                                    AHPCC, 2016
                                </li>
                                <li>
                                    Formare complementara
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
                                    ICEEFT, EFT Romania, 2018
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Competente si calificari:</h3>

                        <section>
                            <ul>
                                <li>
                                    Couple’s therapy and Borderline Personality Disorder – American Association for Marriage and Family
                                    Therapy – februarie 2023
                                </li>
                                <li>
                                    Discernment Counselling – American Association for Marriage and Family Therapy – februarie 2023
                                </li>
                                <li>
                                    „Eval
                                    uarea si interventia sistemica in adictii
                                    –
                                    psihoterapia dependentei si codependentei”
                                    -
                                    Human
                                    Center
                                    –
                                    2022
                                </li>
                                <li>
                                    Curs facilitator HOLD ME TIGHT
                                    –
                                    LET ME GO pentru familii cu adolescenti
                                    –
                                    EFT Romania 2022
                                </li>
                                <li>
                                    Violenta in cuplu si abordarea
                                    Terapiei Centrat
                                    e
                                    p
                                    e
                                    Emotii
                                    –
                                    EFT Romania, 2021
                                </li>
                                <li>
                                    Trauma si dragonii sai: lucrul cu trauma
                                    in
                                    Terapia Centrata
                                    p
                                    e Emotii
                                    –
                                    EFT Romania, 2021
                                </li>
                                <li>
                                    Terapeutul intre auto si co
                                    -
                                    reglare
                                    –
                                    EFT Romania, 2021
                                </li>
                                <li>
                                    Tratamentul cognitiv al insomniei
                                    -
                                    CSPC
                                    -
                                    2021
                                </li>
                                <li>
                                    Teoria atasamentului in actiune:
                                    drumul spre "ACASA" in psihoterapie
                                    –
                                    EFT Romania, 2020
                                </li>
                                <li>
                                    TERAPIE INDIVIDUALA CENTRATA PE EMOTII: extinderea unui
                                    model bazat pe atasament pentru terapia
                                    individuala
                                    –
                                    EFT Romania, 2019
                                </li>
                                <li>
                                    EFT si cupluri cu tulburare de personalitate
                                    –
                                    EFT Romania, 2019
                                </li>
                                <li>
                                    Metode
                                    s
                                    i tehnici interactive de autocunoastere si
                                    dezvoltare personala utilizate in lucrul cu copii si
                                    adolescenti
                                    –
                                    Asociatia Catharsis, 2020
                                </li>
                                <li>
                                    Managementul Furiei
                                    –
                                    Asociatia Catharsis, 2019
                                </li>
                                <li>
                                    Terapia centrata pe solutii
                                    –
                                    Metoda ”Eu pot”
                                    –
                                    Mindhelp, 2019
                                </li>
                                <li>
                                    Terapie
                                    afirmativa pentru persoanele cu identitate LGBT
                                    –
                                    Rutgers University&Yale School of Public
                                    Health, 2017
                                </li>
                                <li>
                                    Formator acreditat ANC
                                    –
                                    Training Romania, 2020
                                </li>
                                <li>
                                    Certificat de Traducator
                                    –
                                    Ministerul Culturii
                                    -
                                    2007
                                </li>
                            </ul>
                        </section>



                        <p>
                            Pentru toate serviciile se primeste factura si sunt preferate metodele de plata online (transfer bancar,
                            PayPal). Cursul de referinta pentru plata in euro este 5 ron/eur.
                        </p>

                        <p>
                            Toate serviciile pot fi oferite atât la cabinet cat și online, in limba romana si/sau in limba engleza.
                        </p>

                        <p>
                            In situatii justificate se pot apli
                            ca reduceri la tarifele afisate
                        </p>

                        <p>
                            Toate serviciile pot fi oferite
                            atat la cabinet cat si online
                            .
                        </p>
                    </AccordionTab>
                </Accordion>
            </div>
            <Footer />
        </>
    );
}