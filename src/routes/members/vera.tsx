import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/vera.jpeg";

export default function Vera() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Vera Constantinescu</h1>

                <div className={styles.bioContainer}>
                    <p>
                        Sunt o persoană caldă empatică, un bun ascultător, discretă, diplomată și iubesc oamenii.
                        Cred în puterea și resursele personale pe care fiecare dintre noi le avem
                        iar experiența de aprox 20 ani cu copii si adulți bolnavi, cu clienții
                        la policlinică și în cabinet m-au făcut sa înțeleg unicitatea Omului, a
                        destinelor si relațiilor. Te pot ajuta în procesul terapeutic individual
                        pentru confirmarea/infirmarea unor ipoteze si abordari de lucru si, ulterior
                        pentru a monitoriza procesul. Pentru a radiografia percepț ia ta asupra trecutului
                        personal și a identifica schemele de gândire si tiparele de comportament pe care le
                        accesezi automat în viața de zi cu zi. Evaluarea neurocognitivă a persoanelor vârstnice
                        pentru încadrarea in grad de handicap pt Comisia de Expertiză.
                    </p>
                    <img src={image} alt="Vera Constantinescu" />
                </div>
                <p>
                    Avize psihologice pentru: obținere permis categorie A, B; obținere permis ambarcațiuni cu motor si velier.
                </p>
                <p>
                    Avize psihologice pt medicina muncii
                </p>
                <p>
                    Aviz psihologic pt asistent maternal, asistent personal
                </p>

                <h3 className={styles.subtitle}>Afiliere:</h3>

                <section>
                    <ul>
                        <li>
                            Membru
                            -
                            Colegiul Psihologilor Din România
                            -
                            2010
                        </li>
                        <li>
                            Membru
                            -
                            Asociația Psihologilor din Transporturi, Munciiși Servicii
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
                            Psihodiagnoza Cognitivă
                            și Consiliere Psihologică
                            –
                            București
                            –
                            2015
                        </li>
                        <li>
                            Diploma de
                            Licență
                            –
                            Universitatea de Psihologie si Sociologie
                            ,
                            Specializarea Psihologie
                            București
                            -
                            2009
                        </li>
                        <li>
                            Formare complementar
                            ă
                            -
                            Psihologia Muncii, Organizațională
                            si Transporturi APTMS
                            -
                            2011
                        </li>
                        <li>
                            Formare de bază
                            –
                            Consiliere Cognitiv
                            -
                            comportamentală
                            –
                            AHPCC
                            –
                            2016
                        </li>
                        <li>
                            Formare complementară
                            -
                            Terapie sistemică
                            -
                            cuplu, copil, familie ACTF
                            -
                            2018
                        </li>
                        <li>
                            Formare complementară
                            -
                            Psihooncologie Smart PSI
                            -
                            2019
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Competențe si calificări:</h3>

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
                            si intervenț
                            ia sistemică
                            în adicții
                            –psihoterapia dependenței si codependenței
                            –
                            Human Center 2022
                        </li>
                        <li>
                            Evaluarea neurocognitivă
                            la persoanele vârstnice si redactarea raportului pentru Comisia de
                            Expertiză
                            a persoanelor cu handicap
                            –
                            IPADSM
                            –
                            2022
                        </li>
                        <li>
                            Evaluarea
                            și interpretarea simptomelor
                            psihice
                            cu ajutorul testului MCMI III
                            –
                            IPADSM
                            2022
                        </li>
                        <li>
                            Terapie individuală
                            centrată pe emoții: extinderea unui model bazat pe atașament pentru
                            terapia individuală
                            EFT
                            -
                            2019
                        </li>
                        <li>
                            Teoria atșsamentuluiîn acțiune: Drumul spre ACASĂ
                            in psihoterapie
                            -
                            2020
                        </li>
                        <li>
                            Curs de
                            formare continuă
                            –
                            Evaluare
                            și strategii de intervenție la adolescent
                            –
                            Asociația ASIST
                            -
                            2015
                        </li>
                        <li>
                            Formare profesională
                            in domeniul managementului si antreprenoriatului
                            –
                            Școala Națională a
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


                <h3 className={styles.subtitle}>Contact:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis sequi reprehenderit illum nisi veniam ullam vel voluptatem. Fuga tenetur dignissimos qui consectetur laborum accusamus nemo quia sit beatae culpa.</p>
                {/* TODO: Add social media and spellcheck --> */}
            </div>
            <Footer />
        </>
    );
}