import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/vera.jpeg";
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Vera() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Vera Constantinescu</h1>

                <div className={styles.bioContainer}>
                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>Consiliere psihologica/ Terapie individuala adulti - 170 ron/50min</li>
                            <li>Evaluare neurocognitiva varstnici pentru incadrarea in grad de handicap - la domiciliul clientului - 250</li>
                            <li>ron</li>
                            <li>Aviz psihologic - asistent maternal, asistent personal, etc. - 150 ron</li>
                            <li>Aviz psihologic - obtinere permis ambarcatiune cu motor si velier.- 150 ron</li>
                            <li>Aviz psihologic - obtinere permis categ A, B. - 100 ron</li>
                            <li>Aviz psihologic - angajare( medicina muncii) - 100 ron</li>
                        </ul>
                    </section>
                    <img src={image} alt="Vera Constantinescu" />
                </div>

                <section>
                    <h3 className={styles.subtitle}>Contact:</h3>

                    <ul>
                        <li>Telefon, Whatsapp: +40723.332.916</li>
                        <li>Email: veraconstantinescu@yahoo.com</li>
                    </ul>
                </section>

                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">
                        <p>
                            Sunt o persoana calda empatica, un bun ascultator, discreta, diplomata si iubesc oamenii.
                            Cred in puterea si resursele personale pe care fiecare dintre noi le avem
                            iar experienta de aprox 20 ani cu copii si adulti bolnavi, cu clientii
                            la policlinica si in cabinet m-au facut sa inteleg unicitatea Omului, a
                            destinelor si relatiilor. Te pot ajuta in procesul terapeutic individual
                            pentru confirmarea/infirmarea unor ipoteze si abordari de lucru si, ulterior
                            pentru a monitoriza procesul. Pentru a radiografia percept ia ta asupra trecutului
                            personal si a identifica schemele de gandire si tiparele de comportament pe care le
                            accesezi automat in viata de zi cu zi. Evaluarea neurocognitiva a persoanelor varstnice
                            pentru incadrarea in grad de handicap pt Comisia de Expertiza.
                        </p>
                        <h3 className={styles.subtitle}>Afiliere:</h3>

                        <section>
                            <ul>
                                <li>
                                    Membru
                                    -
                                    Colegiul Psihologilor Din Romania
                                    -
                                    2010
                                </li>
                                <li>
                                    Membru
                                    -
                                    Asociatia Psihologilor din Transporturi, Munciisi Servicii
                                    –
                                    2009
                                </li>
                                <li>
                                    Membru AHPCC
                                    –
                                    2015
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Educatie si formare:</h3>

                        <section>
                            <ul>
                                <li>
                                    Diploma de Master
                                    –
                                    Psihodiagnoza Cognitiva
                                    si Consiliere Psihologica
                                    –
                                    Bucuresti
                                    –
                                    2015
                                </li>
                                <li>
                                    Diploma de
                                    Licenta
                                    –
                                    Universitatea de Psihologie si Sociologie
                                    ,
                                    Specializarea Psihologie
                                    Bucuresti
                                    -
                                    2009
                                </li>
                                <li>
                                    Formare complementar
                                    a
                                    -
                                    Psihologia Muncii, Organizationala
                                    si Transporturi APTMS
                                    -
                                    2011
                                </li>
                                <li>
                                    Formare de baza
                                    –
                                    Consiliere Cognitiv
                                    -
                                    comportamentala
                                    –
                                    AHPCC
                                    –
                                    2016
                                </li>
                                <li>
                                    Formare complementara
                                    -
                                    Terapie sistemica
                                    -
                                    cuplu, copil, familie ACTF
                                    -
                                    2018
                                </li>
                                <li>
                                    Formare complementara
                                    -
                                    Psihooncologie Smart PSI
                                    -
                                    2019
                                </li>
                            </ul>
                        </section>

                        <h3 className={styles.subtitle}>Competente si calificari:</h3>

                        <section>
                            <ul>
                                <li>
                                    Consilierea cuplurilor si psihosexologie
                                    -
                                    Confident Training
                                    -
                                    2022
                                </li>
                                <li>
                                    Evaluarea
                                    si intervent
                                    ia sistemica
                                    in adictii
                                    –psihoterapia dependentei si codependentei
                                    –
                                    Human Center 2022
                                </li>
                                <li>
                                    Evaluarea neurocognitiva
                                    la persoanele varstnice si redactarea raportului pentru Comisia de
                                    Expertiza
                                    a persoanelor cu handicap
                                    –
                                    IPADSM
                                    –
                                    2022
                                </li>
                                <li>
                                    Evaluarea
                                    si interpretarea simptomelor
                                    psihice
                                    cu ajutorul testului MCMI III
                                    –
                                    IPADSM
                                    2022
                                </li>
                                <li>
                                    Terapie individuala
                                    centrata pe emotii: extinderea unui model bazat pe atasament pentru
                                    terapia individuala
                                    EFT
                                    -
                                    2019
                                </li>
                                <li>
                                    Teoria atssamentuluiin actiune: Drumul spre ACASA
                                    in psihoterapie
                                    -
                                    2020
                                </li>
                                <li>
                                    Curs de
                                    formare continua
                                    –
                                    Evaluare
                                    si strategii de interventie la adolescent
                                    –
                                    Asociatia ASIST
                                    -
                                    2015
                                </li>
                                <li>
                                    Formare profesionala
                                    in domeniul managementului si antreprenoriatului
                                    –
                                    Scoala Nationala a
                                    Femeilor Manager
                                    –
                                    2013
                                </li>
                                <li>
                                    Formator acreditat
                                    ANC Younique Advisers
                                    -
                                    2013
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