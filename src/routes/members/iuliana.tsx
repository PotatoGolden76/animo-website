import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/iuliana.jpeg";

export default function Iuliana() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Iuliana Scutaru</h1>

                <div className={styles.bioContainer}>
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
                    <img src={image} alt="Iuliana Scutaru" />
                </div>

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
                            (
                            din
                            2018)
                        </li>
                        <li>
                            Membru
                            NB
                            CC Romania
                            (
                            din
                            201
                            8
                            )
                        </li>
                        <li>
                            Membru
                            afiliat al Helsinki Brief Therapy Institute
                            (
                            International Directory of
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
                            Diplomă de
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
                            Diplomă de
                            Master
                            –
                            Managementul Resurselor Umane
                            -
                            SNSPA (Scoala Nationala de Studii
                            Politice si Administrative)
                            -
                            Facultatea de Management si administr
                            are afacerilor, București
                            –
                            20
                            06
                        </li>
                        <li>
                            Diplomă de Licență
                            –
                            Facultatea de Psihologie și Științele Educației, Specializarea Psiholo
                            gi
                            e,
                            Universitatea București
                            –
                            20
                            02
                        </li>
                        <li>
                            Formare de bază
                            -
                            Consiliere psihologica
                            –
                            Terapie scurtă colaborativă
                            orientată pe resurse și
                            soluții
                            –
                            Asociatia Romana de Terapii Scurte Orientate pe Resurse si Solutii (
                            A
                            RTS &
                            C
                            ORS
                            )
                            ,
                            20
                            19
                        </li>
                        <li>
                            Formare complementară
                            –
                            Terapie sistemică
                            –
                            cuplu, copil, familie
                            –
                            Asociatia de Consiliere si
                            Terapie a Familiei din Romania (ACTF)
                            ,
                            20
                            19
                        </li>
                        <li>
                            Consultant certificat Rezilienta
                            -
                            Persolog Romania, 2022
                        </li>
                        <li>
                            Evaluarea personalitatii de la normalitate la patologie
                            -
                            Asociația Romana de hipnoza clinica,
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
                            Intervenții psihologice pentru dezvoltarea optimală a identității în
                            adolescență
                            –
                            o abordare
                            pragmatic aplicativa
                            -
                            Asociația Institutul de Neuropsihologie din București (AINB), 2020
                        </li>
                        <li>
                            Kids’ Skills Coach (Metoda EU POT pentru copii)
                            –
                            Helsinki Brief Therapy Institute, 2020
                        </li>
                        <li>
                            Intervenție, asistență, consiliere personală și psih
                            ologică (
                            Tehnicile si testele cvasi
                            –
                            proiective si
                            proiective
                            )
                            -
                            Asociația Phoenix, 2020
                        </li>
                        <li>
                            Metode și tehnici interactive de autocunoaștere și dezvoltare personală utilizate în lucrul cu
                            copii și adolescenți
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
                            North Carolina, USA
                            , 201
                            8
                        </li>
                        <li>
                            Externship
                            –
                            etapa I din formarea in
                            Terapie de cuplu centrată pe emoții
                            –
                            EFT Romania, 2018
                        </li>
                        <li>
                            Trainer cert
                            ificat Persolog Romania
                            -
                            modelul DISC, 2016
                        </li>
                        <li>
                            Certificare
                            Formator
                            -
                            Autoritatea Nationala pentru Calificari din Romania (
                            ANC
                            )
                            , 2015
                        </li>
                        <li>
                            Certificare
                            C
                            onsilier Vocational
                            -
                            Autoritatea Nationala pentru Calificari din Romania (ANC),
                            2015
                        </li>
                        <li>
                            Certificare Consilier dez
                            voltare personala
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
                            Atestare Metodologia de eva
                            luare HOGAN ASSESSMENT SYSTEM
                            -
                            Hart Consulting, 200
                            5
                        </li>
                        <li>
                            Certifcare pentru Centru de Evaluare si Dezvoltare (Assessment and Development Center
                            Certifcation)
                            –
                            Assessment and Development Consultants Ltd ADC, 2004
                        </li>
                        <li>
                            Licentie
                            re
                            pentru utilizarea si interpretarea a diverse instrumente de evaluare psihologica
                            pentru: personalitate, interese vocationale,
                            atentie,
                            motivatie, IQ,
                            functii executive, stiluri de
                            invatare, tehnici proiective
                            , anxietate, depresie, burnout, stress, leade
                            rship,
                            integritate, stil de
                            munca,
                            rezilienta
                            -
                            D&D Consultants Grup
                            , Cognitrom, Persolog, Psihoproiect, 2015
                            -
                            prezent
                        </li>
                        <li>
                            Sunt atestata de Colegiul Psihologilor din Romania in specialitatile:
                            <ul>
                                <li>
                                    Consiliere psihologica
                                    –
                                    Terapie scurtă colaborativă orientată p
                                    e resurse și soluții
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

                <h3 className={styles.subtitle}>Servicii si tarife:</h3>

                <section>
                    <ul>
                        <li>
                            200 ron/50 minute - Consiliere psihologică pentru adulti
                        </li>
                        <li>
                            230 ron/50 minute - Coaching
                        </li>
                        <li>
                            200 ron/45 minute - Consiliere psihologica pentru copii si adolescenti
                        </li>
                        <li>
                            200 ron/45 minute - Consilierea carierei si vocationala
                        </li>
                        <li>
                            200 ron/45 minute - Consiliere scolara
                        </li>
                        <li>
                            200 ron/45 minute - Consiliere dezvoltare personala pentru adulti
                        </li>
                        <li>
                            200 ron/45 minute - Consiliere dezvoltare personala pentru copii si adolescenti
                        </li>
                        <li>
                            250 ron/75-90 minute - Consiliere/Terapie sistemica (familie/cuplu)
                        </li>
                        <li>
                            150 ron/3 ore - Grupuri de dezvoltare personala/suport pentru adulti, copii si adolescenti
                        </li>
                        <li>
                            100 ron/sesiune/pers - Workshopuri dezvoltare personala, psihoeducatie, socializare
                        </li>
                    </ul>
                </section>

                <p>
                    <b>Servicii personalizate pentru organizatii:</b>
                </p>
                <p>
                    Training, Teambuilding, Cunoasterea si dezvoltarea echipei, Assessment & Development Centers, Recrutare si selectie, Evaluari psihologice ocazionale / periodice, Eliberare avize psihologice medicina muncii,Evaluare resurse umane, Studii organizationale (cultura, climat, satisfactia muncii, motivatie, etc), Elaborare proceduri HR.
                </p>
                <p>
                    Sedinte individuale sau de grup (ca parte a pachetului de wellbeing oferit de companie pentru salariati): Coaching, Dezvoltare personala, Consiliere psihologica,Consilierea carierei

                </p>
                <p>
                    Toate serviciile pot fi oferite atât la cabinet cat și online.
                </p>
                <p>
                    Servicii le personalizate pentru organizatii pot fi livrate si la sediul acestora.
                </p>

                <h3 className={styles.subtitle}>Contact:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis sequi reprehenderit illum nisi veniam ullam vel voluptatem. Fuga tenetur dignissimos qui consectetur laborum accusamus nemo quia sit beatae culpa.</p>
                {/* TODO: Add social media and spellcheck --> */}
            </div>
            <Footer />
        </>
    );
}