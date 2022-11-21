import styles from '../styles/about.module.scss';
import classNames from 'classnames';
import Header from '../components/header';
import Footer from '../components/footer';

export default function About() {
  const containerTStyle = "container";
  //TODO: proofread this
  return (
    <>
      <Header />

      <section className={classNames(containerTStyle, styles.infoContainer)}>
        <h1>Despre Noi</h1>
        <p>
          Centrul Animo a apărut, în 2019, din dorința de a aduce la un loc, psihologi cu specializări cât mai          diverse, care să ofere servicii de calitate și accesibile locuitorilor din zonă (sectorul 1) și nu doar          acestora.          Oferim servicii psihologice din domeniul          clinic (evaluare          psihologică          , co          nsiliere si psihoterapie),         domeniul educațional (consiliere școlară și vocațională)          și din domeniul dezvoltării personale (dezvoltare          personală, coaching și training)         . Ne dorim să diversificăm serviciile        oferite          și, de aceea          ,          suntem deschiși          spre noi colaborăr          i și         cu specialiști din celelalte domenii (psihologia muncii, transporturi, servicii etc).
        </p>
        <p>
          Suntem pasionați de
          ceea ce facem și înțelegem
          nevoia crescândă, mai ales în contextul actual, de
          popularizare a serviciilor psih
          ologice si a psihologiei ca știință. Ca urmare, am inclus în domeniul nostru
          de activitate și o serie de workshopuri destinate publicului larg
          .
          (Workshopurile pentru adulți pot fi
          oferite atât live cât și online, în funcție de preferința participanților.
          Temele abordate vor fi diverse și pot
          fi propuse teme incl
          u
          siv de către participanți
          )
          .
        </p>
        <p>
          De asemenea
          ,
          știm că o viață împlinită se construiește din primii ani de viață așa că ne propunem să
          ajutăm la creșterea următoarelor generații oferind activități de dez
          voltare personală, ateliere de
          socializare prin joc, cercuri de scriere creativă pentru copii de diferite vârste
          ș.a.
          , activitățile fiind
          adaptate vârstei participanților. Grupurile nu vor avea mai mult de 6 participanț
          i astfel încât copiii să
          beneficieze
          de toată atenția facilitatorului.
        </p>
        <p>
          Ne dorim să oferim servicii de încredere, care să răspundă exact nevoilor oamenilor
          –
          chiar și atunci
          când aceștia doresc o consultație pentru o anumită problemă și nu doresc să inceapă un proces
          terapeutic. Ne dorim să f
          im văzuți ca fiind ”psihologul de familie”
          –
          adică acel specialist la care mergi
          atunci când ai nevoie, doar pentru ce ai nevoie.
        </p>
        <p>
          nțelegem foarte bine faptul că trăim vremuri dificile și din punct de vedere financiar de aceea , în
          funcție de posibilitățil
          e reale ale clienților noștri, se pot găsi forme de colaborare care să facă mai
          accesibile serviciile psihologice.
        </p>
        <p>
          Vă așteptăm !
        </p>
        
        
        {//TODO: check if this is ok
        }
        <section className={styles.disclaimer}>

        <h1>Disclaimer:</h1>
        <p>Colaboratorii nostri au forme legale de funcționa
          re (Cabinete individuale, PFA) și
          sunt atestați de
          Colegiul
          Psihologilor sau de alte autorități naționale (A.N.C.
          etc
          )
          .</p>
        <p>Aceștia pot fi contactați direct prin mijloacele oferite pe site și sunt pe deplini responsabili de
          informațiiile oferite,
          calitatea serviciilor, de tarife, pr
          o
          gramări etc.
        </p>
        <p>
          Centrul Animo este o c
          omunitate de specialiști, nu o companie cu personalitate juridică.
        </p>

        </section>
      </section>
      <Footer/>
    </>
  );
}

