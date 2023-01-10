import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/augustina.jpeg";

export default function Augustina() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Augustina Elena Purda</h1>
{/* TODO: add new description */}
                <div className={styles.bioContainer}>
                    <p>
                        Sunt psiholog consilier cu Drept de liberă practică eliberat de Colegiul Psihologilor din România.
                        Am absolvit Facultatea de Psihologie și Masterul în Psihodiagnoza cognitivă
                        și consiliere psihologică la Universitatea Ecologică, Bucuresti.
                        Sunt un om fascinat de oameni și cred in potentialul de schimbare al celor care inteleg si isi
                        doresc o viata traita constient, sanatos si echilibrat. Mă descriu ca o persoană
                        blândă, empatică, iar deschiderea mea este una plină de căldură și acceptare ca de la om la om, 
                        cu toleranță și respect pentru persoana celulilalt. Menirea mea este să îi ajut pe
                        oameni să își descopere propriile drumuri ghidate de valorile personale
                        și să îi susțin în îndepărtarea obstacolelor care le apar în cale.
                    </p>
                    <img src={image} alt="Augustina Elena Purda" />
                </div>
                <p>
                    Abilitatea de a fi în acord cu sentimentele, gândurile și acțiunile tale te ajută să alegi 
                    liber și conștient soluții la situațiile cu care te întâlneșți în viața de zi cu zi.
                    Sănătatea psihică și cea emoțională sunt factori cheie ce determină calitatea vieții.
                    Îmi place să lucrez cu oameni de toate vârstele, abordând tematici precum:
                    anxietate, depresie, atacuri de panică, descoperirea resurselor proprii,
                    îmbunătățirea imaginii de sine, gestionarea relațiilor interpersonale,
                    gestionarea timpului și gestionarea unor situații de criză, precum și multe altele.
                    Putem explora împreună moduri prin care poți avea o viață armonioasă, relații sănătoase 
                    și o evoluție continuă ca om. Primul pas este drumul spre conștientizare și vindecarea 
                    rănilor emoționale, hrănirea încrederii în forțele proprii prin în vățare, dedicare și iubire.
                </p>

                <h3 className={styles.subtitle}>Educatie:</h3>

                <section>
                    <ul>
                        <li>
                            Master “Psihodiagnoza cognitivă și consiliere psihologică”
                            - Universitatea Ecologică, Bucuresti
                        </li>
                        <li>
                            Universitatea Ecologica, Bucuresti
                            - Facultatea de Psihologie
                        </li>
                        <li>
                            Universitatea Ecologica, Bucuresti
                            - Facultatea de Drept
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Formari si cursuri de specialitate:</h3>

                <section>
                    <ul>
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
                            Areop
                            a
                            gus
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Servicii si tarife:</h3>

                <section>
                    <ul>
                        <li>
                            200 ron/50 minute - Consiliere psihologica
                        </li>
                        <li>
                            200 ron/50 minute - Consiliere dezvoltare personala (individual)
                        </li>
                        <li>
                            200 ron/2 ore - Dezvoltare personala de grup (adulti si copii)
                        </li>
                        <li>
                            150 ron/2 ore - Club de activitati/relaxare pentru copii
                        </li>
                        <li>
                            250 ron/1 ora - Consiliere parentala
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Contact:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis sequi reprehenderit illum nisi veniam ullam vel voluptatem. Fuga tenetur dignissimos qui consectetur laborum accusamus nemo quia sit beatae culpa.</p>
                {/* TODO: Add social media --> */}
            </div>
            <Footer />
        </>
    );
}