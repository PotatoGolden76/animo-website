import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/iuliana.jpeg";
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Iuliana() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Iuliana Scutaru</h1>

                <div className={styles.bioContainer}>


                    <section>
                        <h3 className={styles.subtitle}>Servicii si tarife:</h3>
                        <ul>
                            <li>Consiliere psihologică – adulți - 200 ron/ 50 minute</li>
                            <li>Coaching - 250 ron / 50 minute</li>
                            <li>Consiliere psihologică – copii și adolescenți - 200 ron/ 45 minute</li>
                            <li>Consiliere parentala - 250 ron / 50 minute</li>
                            <li>Consilierea carierei / Consiliere vocationala - 200 ron/ 45 minute</li>
                            <li>Consiliere scolara - 200 ron/ 45 minute</li>
                            <li>Consiliere dezvoltare personala – adulți - 200 ron/ 45 minute</li>
                            <li>Consiliere dezvoltare personala – copii și adolescenți - 200 ron/ 45 minute</li>
                            <li>Consiliere / Terapie sistemica (familie / cuplu) - 250 ron/ 75-90 minute</li>
                            <li>Grupuri de dezvoltare personala /suport – adulti, adolescenți, copii - 200 ron/3 ore</li>
                            <li>Workshopuri dezvoltare personala, psihoeducație, socializare - 150 – 750 ron/ sesiune/ persoana (in functie de instrumentele utilizate)</li>
                        </ul>
                    </section>
                    <img src={image} alt="Iuliana Scutaru" />
                </div>

                <section>
                    <p>
                        <b>Servicii personalizate pentru organizatii:</b>
                    </p>
                    <p>
                        Training, Teambuilding, Cunoasterea si dezvoltarea echipei, Assessment & Development Centers, Recrutare si selectie, Evaluari psihologice ocazionale / periodice, Eliberare avize psihologice medicina muncii,Evaluare resurse umane, Studii organizationale (cultura, climat, satisfactia muncii, motivatie, etc), Elaborare proceduri HR.
                    </p>
                    <p>
                        Sedinte individuale sau de grup (ca parte a pachetului de wellbeing oferit de companie pentru salariati):
                        Coaching, Dezvoltare personala, Consiliere psihologica, Consilierea carierei, consultanta in gestionarea
                        conflictelor / imbunatatirea comunicarii in echipa.
                    </p>
                    <p>
                        Pentru tarifele aferente serviciilor organizationale, ma puteti contacta la numarul de telefon de mai jos.
                    </p><br/>
                    <p>
                        Toate serviciile pot fi oferite atat la cabinet cat si online.
                    </p>
                    <p>
                        Servicii le personalizate pentru organizatii pot fi livrate si la sediul acestora.
                    </p>
                    
                </section>


                <h3 className={styles.subtitle}>Contact:</h3>

                <section>
                    <ul>
                        <li>Telefon: +40728.725.617</li>
                        <li>Email: <a href="mailto:psiholog.scutaru@gmail.com">psiholog.scutaru@gmail.com</a></li>
                        <li>Social media: <a href="https://www.facebook.com/Scutaru.Iuliana.Cabinet.Individual.Psihologie/">facebook.com/Scutaru.Iuliana.Cabinet.Individual.Psihologie/</a></li>
                    </ul>
                </section>

                <Accordion className={styles.accHeader} >
                    <AccordionTab header="Despre Mine ►">
                        <p>
                            Dezvolt oameni de la A la Z si-mi place sa fac asta. Vad partea buna a fiecarei persoane
                            intalnite si ma bucur mereu cand observ un progres la cei cu care lucrez.
                            Consider ca fiecare in parte este plin de resurse si rolul meu este sa-i
                            sprijin pe cei care doresc sa-si regaseasca sau sa-si identifice acele resurse
                            interioare ce-i conduc catre gasirea unei solutii care-i ajuta sa treaca
                            de o perioada dificila. De asemenea, dezvolt organizatii, bazandu-ma pe
                            valorificarea experientei profesionale in psihologie si resurse umane,
                            respectiv training si educatie in vederea dezvoltarii personale / profesionale a
                            clientilor si / sau a eficientizarii proceselor si functiilor capitalului uman intr-o
                            organizatie.
                        </p>

                        <h3 className={styles.subtitle}>Afiliere:</h3>

                        <section>
                            <ul>
                                <li>
                                    Membru al Colegiului Psihologilor din Romania (2015)
                                </li>
                                <li>
                                    Membru
                                    NBCC
                                    -
                                    National Board for Certified Counselors
                                    (din 2018)
                                </li>
                                <li>
                                    Membru
                                    NBCC Romania
                                    (din 2018)
                                </li>
                                <li>
                                    Membru
                                    afiliat al Helsinki Brief Therapy Institute
                                    (International Directory of
                                    Certified Kids' Skills
                                    Coaches
                                    aici:
                                    <a href="http://www.kidsskills.org/coaches/"> [click]</a>
                                    )
                                    –
                                    din 2020
                                </li>
                                <li>
                                    Colaborator Persolog Romania (
                                    din
                                    2016)
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
                                    Diploma de
                                    Master
                                    –
                                    Managementul Resurselor Umane
                                    -
                                    SNSPA (Scoala Nationala de Studii
                                    Politice si Administrative)
                                    -
                                    Facultatea de Management si administrare afacerilor, Bucuresti
                                    –
                                    2006
                                </li>
                                <li>
                                    Diploma de Licenta
                                    –
                                    Facultatea de Psihologie si Stiintele Educatiei, Specializarea Psihologie,
                                    Universitatea Bucuresti
                                    –
                                    2002
                                </li>
                                <li>
                                    Formare de baza
                                    -
                                    Consiliere psihologica
                                    –
                                    Terapie scurta colaborativa
                                    orientata pe resurse si
                                    solutii
                                    –
                                    Asociatia Romana de Terapii Scurte Orientate pe Resurse si Solutii (
                                    ARTS & CORS), 2019
                                </li>
                                <li>
                                    Formare complementara
                                    –
                                    Terapie sistemica
                                    –
                                    cuplu, copil, familie
                                    –
                                    Asociatia de Consiliere si
                                    Terapie a Familiei din Romania (ACTF),
                                    2019
                                </li>
                                <li>
                                    Consultant certificat Rezilienta
                                    -
                                    Persolog Romania, 2022
                                </li>
                                <li>
                                    Evaluarea personalitatii de la normalitate la patologie
                                    -
                                    Asociatia Romana de hipnoza clinica,
                                    relaxare si terapie eriksoniana
                                    –
                                    2021
                                </li>
                                <li>
                                    Mindfulness and Self Compassion
                                    -
                                    Center for Mindful Self
                                    -
                                    Compassion USA, 2021
                                </li>
                                <li>
                                    Consultant certificat Managementul stresului
                                    -
                                    Persolog Romania, 2021
                                </li>
                                <li>
                                    Compassion Focused Therapy
                                    –
                                    Centrul pentru Studii de Psihoterapie Cognitiva Metis, 2020
                                </li>
                                <li>
                                    Interventii psihologice pentru dezvoltarea optimala a identitatii in
                                    adolescenta
                                    –
                                    o abordare
                                    pragmatic aplicativa
                                    -
                                    Asociatia Institutul de Neuropsihologie din Bucuresti (AINB), 2020
                                </li>
                                <li>
                                    Kids’ Skills Coach (Metoda EU POT pentru copii)
                                    –
                                    Helsinki Brief Therapy Institute, 2020
                                </li>
                                <li>
                                    Interventie, asistenta, consiliere personala si psihologica (Tehnicile si testele cvasi–proiective si
                                    proiective) -
                                    Asociatia Phoenix, 2020
                                </li>
                                <li>
                                    Metode si tehnici interactive de autocunoastere si dezvoltare personala utilizate in lucrul cu
                                    copii si adolescenti
                                    –
                                    Asociatia Catharsis, 2019
                                </li>
                                <li>
                                    Global Career
                                    Development Facilitator (GCDF)
                                    -
                                    Center for Credentialing & Education (CCE) &
                                    National Board of Certified Counselor (NBCC)
                                    -
                                    North Carolina, USA, 2018
                                </li>
                                <li>
                                    Externship
                                    –
                                    etapa I din formarea in
                                    Terapie de cuplu centrata pe emotii
                                    –
                                    EFT Romania, 2018
                                </li>
                                <li>
                                    Trainer certificat Persolog Romania
                                    -
                                    modelul DISC, 2016
                                </li>
                                <li>
                                    Certificare
                                    Formator
                                    -
                                    Autoritatea Nationala pentru Calificari din Romania (ANC), 2015
                                </li>
                                <li>
                                    Certificare
                                    Consilier Vocational
                                    -
                                    Autoritatea Nationala pentru Calificari din Romania (ANC),
                                    2015
                                </li>
                                <li>
                                    Certificare Consilier dezvoltare personala
                                    -
                                    Autoritatea Nationala pentru Calificari din Romania
                                    (ANC), 2015
                                </li>
                                <li>
                                    Atestare pentru aplicarea si interpretarea instrumentului de evaluare Predictive Index
                                    -
                                    Mindustries Romania & Praendex Europe SA, Elvetia, 2008
                                </li>
                                <li>
                                    Atestare Metodologia de evaluare HOGAN ASSESSMENT SYSTEM
                                    -
                                    Hart Consulting, 2005
                                </li>
                                <li>
                                    Certifcare pentru Centru de Evaluare si Dezvoltare (Assessment and Development Center
                                    Certifcation)
                                    –
                                    Assessment and Development Consultants Ltd ADC, 2004
                                </li>
                                <li>
                                    Licentiere
                                    pentru utilizarea si interpretarea a diverse instrumente de evaluare psihologica
                                    pentru: personalitate, interese vocationale,
                                    atentie,
                                    motivatie, IQ,
                                    functii executive, stiluri de
                                    invatare, tehnici proiective, anxietate, depresie, burnout, stress, leadership,
                                    integritate, stil de munca, rezilienta
                                    -
                                    D&D Consultants Grup, Cognitrom, Persolog, Psihoproiect, 2015
                                    -
                                    prezent
                                </li>
                                <li>
                                    Sunt atestata de Colegiul Psihologilor din Romania in specialitatile:
                                    <ul>
                                        <li>
                                            Consiliere psihologica
                                            –
                                            Terapie scurta colaborativa orientata pe resurse si solutii
                                            (din 2020)
                                        </li>
                                        <li>
                                            Psihologie educationala, consiliere scolara si vocationala (din 2015)
                                        </li>
                                        <li>
                                            Psihologia muncii si organizationala (din 2014)
                                        </li>
                                        <li>
                                            Psihologia aplicata in servicii (din 2014)
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