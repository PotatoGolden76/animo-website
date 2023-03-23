import styles from '../styles/about.module.scss';
import classNames from 'classnames';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
  const containerTStyle = "container";
  return (
    <>
      <Header />

      <section className={classNames(containerTStyle, styles.infoContainer)}>
        <h1>Despre Noi</h1>
        <p>
          Centrul Animo a aparut, in 2019, din dorinta de a aduce la un loc, psihologi
          cu specializari cat mai diverse, care sa ofere servicii de calitate si accesibile
          locuitorilor din zona (sectorul 1) si nu doar acestora. Oferim servicii psihologice
          din domeniul clinic (evaluare psihologica, consiliere si psihoterapie), domeniul
          educational (consiliere scolara si vocationala) si din domeniul dezvoltarii personale
          (dezvoltare personala, coaching si training). Ne dorim sa diversificam serviciile oferite si, de aceea, suntem deschisi spre noi colaborari si
          cu alti specialisti
        </p>
        <p>
          Suntem pasionati de ceea ce facem si intelegem nevoia crescanda,
          mai ales in contextul actual, de popularizare a serviciilor psihologice
          si a psihologiei ca stiinta. Ca urmare, am inclus in domeniul nostru de
          activitate si o serie de workshopuri destinate publicului larg.
          (Workshopurile pentru adulti pot fi oferite atat live cat si online,
          in functie de preferinta participantilor. Temele abordate vor fi diverse
          si pot fi propuse teme inclusiv de catre participanti).
        </p>
        <p>
          De asemenea, stim ca o viata implinita se construieste din primii ani de viata asa ca ne propunem sa
          ajutam la cresterea urmatoarelor generatii oferind activitati de dezvoltare personala, ateliere de
          socializare prin joc, cercuri de scriere creativa pentru copii de diferite varste s.a., activitatile fiind
          adaptate varstei participantilor. Grupurile nu vor avea mai mult de 6 participanti
          astfel incat copiii sa beneficieze de toata atentia facilitatorului.
        </p>
        <p>
          Ne dorim sa oferim servicii de incredere, care sa raspunda exact nevoilor oamenilor – chiar
          si atunci cand acestia doresc o consultatie pentru o anumita problema si nu doresc sa inceapa
          un proces terapeutic. Ne dorim sa fim vazuti ca fiind ”psihologul de familie” – adica acel
          specialist la care mergi atunci cand ai nevoie, doar pentru ce ai nevoie.
        </p>
        <p>
          Intelegem foarte bine faptul ca traim vremuri dificile si din punct de vedere financiar de aceea,
          in functie de posibilitatile reale ale clientilor nostri, se pot gasi forme de colaborare care sa faca mai
          accesibile serviciile psihologice.
        </p>
        <p>
          Va asteptam!
        </p>

        <section className={styles.disclaimer}>

          <h1>Disclaimer:</h1>
          <p>Colaboratorii nostri au forme legale de functionare (Cabinete individuale, PFA) si
            sunt atestati de Colegiul Psihologilor sau de alte autoritati nationale (A.N.C., etc).
          </p>
          <p>Acestia pot fi contactati direct prin mijloacele oferite pe site si sunt pe deplini responsabili de
            informatiiile oferite, calitatea serviciilor, de tarife, programari etc.
          </p>
          <p>
            Centrul Animo este o comunitate de specialisti, nu o companie cu personalitate juridica.
          </p>

        </section>
      </section>
      <Footer />
    </>
  );
}

