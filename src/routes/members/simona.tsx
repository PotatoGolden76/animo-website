import classNames from "classnames";
import Footer from "../../components/footer";
import Header from "../../components/header";

import styles from "../../styles/member.module.scss";
import image from "../../assets/profiles/simona1.jpg";

export default function Simona() {
    return (
        <>
            <Header />
            <div className={classNames("container", styles.container)}>
                <h1>Simona Mocioi</h1>
                <h2>Fondator Centrul Animo</h2>

                <div className={styles.bioContainer}>
                    <p>
                        Dacă ar fi să definesc cu ajutorul unui singur cuvânt ceea ce mă motivează și mă pasionează cel mai
                        mult, atunci aș folosi cuvântul ”relație”.
                        Relația cu fiul meu mi
                        -
                        a ”deschis ochii” spre o nouă înțelegere
                        a vieții, relația cu soțul și părinții mei m
                        -
                        a ajutat să dau formă și să pun în mișcare un nou plan pentru
                        cariera mea, relația cu colegii și prietenii m
                        -
                        a ajutat să îl pun in
                        aplicare
                        .
                        Tot ”
                        relația” este pasiunea mea și în activitatea de terapeut: vindec relații, ajut oamenii sa creeze și să
                        dezvolte relații sănătoase, începând de la relația cu propriul sine.
                    </p>
                    <img src={image} alt="Simona Mocioi" />
                </div>

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
                            Diplomă de
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
                            Diplomă de
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
                            Diplomă de Licență
                            –
                            Fa
                            cultatea de Psihologie și Științele Educației, Specializarea Psiholo
                            gi
                            e,
                            Universitatea București
                            –
                            2013
                        </li>
                        <li>
                            Diplomă de Licență
                            –
                            Facultatea de Fizica, specializarea Optică, Spectroscopie, Plasmă, Laseri,
                            Universitatea București
                            -
                            1994
                        </li>
                        <li>
                            Formare de bază
                            -
                            Consili
                            ere psihologica cognitiv
                            –
                            comportamentală
                            –
                            AHPCC, 2016
                        </li>
                        <li>
                            Formare complementară
                            –
                            Terapie sistemică
                            –
                            cuplu, copil, familie
                            –
                            ACTF, 2017
                        </li>
                        <li>

                            Formare complementară
                            –
                            Terapie de cuplu centrată pe emoții
                            –
                            ICEEFT, EFT Romania, 2018
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Competente si calificari:</h3>

                <section>
                    <ul>
                        <li>
                            „Eval
                            uarea și intervenția sistemică în adicții
                            –
                            psihoterapia dependenței și codependenței”
                            -
                            Human
                            Center
                            –
                            2022
                        </li>
                        <li>
                            Curs facilitator HOLD ME TIGHT
                            –
                            LET ME GO pentru familii cu adolescenți
                            –
                            EFT Romania 2022
                        </li>
                        <li>
                            Violența în cuplu și abordarea
                            Terapiei Centrat
                            e
                            p
                            e
                            Emoții
                            –
                            EFT Romania, 2021
                        </li>
                        <li>
                            Trauma și dragonii săi: lucrul cu trauma
                            în
                            Terapia Centrată
                            p
                            e Emoții
                            –
                            EFT Romania, 2021
                        </li>
                        <li>
                            Terapeutul între auto și co
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
                            Teoria atașamentului în acțiune:
                            drumul spre "ACASĂ" în psihoterapie
                            –
                            EFT Romania, 2020
                        </li>
                        <li>
                            TERAPIE INDIVIDUALĂ CENTRATĂ PE EMOŢII: extinderea unui
                            model bazat pe ataşament pentru terapia
                            individuală
                            –
                            EFT Romania, 2019
                        </li>
                        <li>
                            EFT și cupluri cu tulburare de personalitate
                            –
                            EFT Romania, 2019
                        </li>
                        <li>
                            Metode
                            ș
                            i tehnici interactive de autocunoaștere și
                            dezvoltare personală utilizate în lucrul cu copii și
                            adolescenți
                            –
                            Asociatia Catharsis, 2020
                        </li>
                        <li>
                            Managementul Furiei
                            –
                            Asociatia Catharsis, 2019
                        </li>
                        <li>
                            Terapia centrata pe soluții
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
                            Certificat de Traducător
                            –
                            Ministerul Culturii
                            -
                            2007
                        </li>
                    </ul>
                </section>

                <h3 className={styles.subtitle}>Servicii si tarife:</h3>

                <section>
                    <ul>
                        <li>
                            200 ron/50 minute - Consiliere psihologica/Terapie individuala adulti si adolescenti
                        </li>
                        <li>
                            250 ron/75-90 minute - Terapie de cuplu
                        </li>
                        <li>
                            300 ron/90 minute - Terapie de familie
                        </li>
                        <li>
                            300 ron/75-90 minute - Terapie de cuplu (limba engleza)
                        </li>
                        <li>
                            150 ron/3 ore - Grupuri de dezvoltare personala/suport adulti și adolescenți
                        </li>
                        <li>
                            50 ron/sesiune - Grupuri de intervizare
                        </li>
                        <li>
                            100 ron/sesiune/pers - Workshopuri psihoeducație și socializare
                        </li>
                    </ul>
                </section>

                <p>
                    In situații justificate se pot apli
                    ca reduceri la tarifele afișate
                </p>

                <p>
                    Toate serviciile pot fi oferite
                    atât la cabinet cat și online
                    .
                </p>

                <h3 className={styles.subtitle}>Contact:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis sequi reprehenderit illum nisi veniam ullam vel voluptatem. Fuga tenetur dignissimos qui consectetur laborum accusamus nemo quia sit beatae culpa.</p>
                {/* TODO: Add social media and spellcheck --> */}
            </div>
            <Footer />
        </>
    );
}