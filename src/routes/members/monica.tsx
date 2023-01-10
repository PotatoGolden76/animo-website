import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/monica.jpeg";

export default function Monica() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Monica Stanica</h1>

                <div className={styles.bioContainer}>
                    <p>
                        Sunt psiholog clinician cu Drept de liberă practică eliberat de Colegiul
                        Psihologilor din România, psihoterapeut, consilier vocațional
                        și logoped. Ca psiholog, am competențe și
                        Atestat de liberă practică în „Psihologie clinică”
                        – COD 18679.
                        Iubesc ceea ce fac și iubesc oamenii. Este un miracol că fiecare dintre
                        noi există! Fiecare secundă pe care o trăim e prețioasă și un dar minunat
                        primit odată cu viața. Ușoară sau grea, viața noastră este complexă și
                        imprevizibilă, surprinzându-ne în fiecare zi. Să nu lăsăm ca
                        lucrurile triste, îngrijorările și bătăliile zilnice să ne oprească din a
                        reflecta și admira frumusețea acesteia.
                        Există momente în viața fiecăruia dintre noi când, după ce am experimentat un eveniment
                        negativ de viață, să avem nevoie de cineva care să
                        ne asculte, să ne îndrume, să ne readucă la
                        viață, iar acest cineva ar putea fi un psihoterapeut sau psiholog cu care rezonezi, aș putea fi
                        chiar eu acela.
                    </p>
                    <img src={image} alt="Monica Stanica" />
                </div>

                <h3 className={styles.subtitle}>Educatie:</h3>

                <section>
                    <ul>
                        <li>
                            Facultatea
                            de Psihologie și
                            Master în Psihologia clinică
                            –
                            Universit
                            atea din
                            București
                        </li>
                        <li>
                            Formări și cursuri de specialitate:
                            <ul>
                                <li>
                                    Psihoterapii cognitiv
                                    –
                                    comportamentale la Asociația de Psihofarmacoterapie și
                                    Ș
                                    tiințe Cognitive
                                </li>
                                <li>
                                    Evaluarea clinică a copilului și adolescentului
                                    –
                                    Test Central
                                </li>
                                <li>
                                    Terapia Cognitiv
                                    –
                                    Comportamentală, Evaluarea și Terapia p
                                    ersoanelor cu TSA
                                    –
                                    Help Autism București
                                </li>
                                <li>
                                    Terapia Logopedică
                                    –
                                    Asociația Logopezilor din România
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Servicii si tarife:</h3>

                <section>
                    <ul>
                        <li>
                            150 ron/50 minute - Evaluare psihologică clinică pentru încadrarea în handicap copii și adulți
                        </li>
                        <li>
                            150 ron/50 minute - Evaluarea copiilor cu dificultati de invatare
                        </li>
                        <li>
                            130 ron/50 minute - Logopedie
                        </li>
                        <li>
                            130 ron/50 minute - Consiliere psihologica/Psihoterapie
                        </li>
                        <li>
                            130 ron/50 minute - Terapie comportamentală pentru copilul cu ADHD
                        </li>
                        <li>
                            Testare psihologica:
                            <ul>
                                <li>
                                    Nivel Inteligenta (IQ)
                                </li>
                                <li>
                                    Personalitate
                                </li>
                                <li>
                                    Aptitudini profesionale și Orientare în carieră
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Contact:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis sequi reprehenderit illum nisi veniam ullam vel voluptatem. Fuga tenetur dignissimos qui consectetur laborum accusamus nemo quia sit beatae culpa.</p>
                {/* TODO: Add social media and spellcheck --> */}
            </div>
            <Footer />
        </>
    );
}