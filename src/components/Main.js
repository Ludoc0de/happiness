import Offer from "../components/Offer"
import Prestation from "../components/Prestation"
import seminaire1 from "../images/Seminaire91.png"
import seminaire2 from "../images/Seminaire21.png"
import seminaire3 from "../images/Samuserauyoga.png"
import sqvt from "../images/sqvt.png"

const Main = () => {
  return (
    <section>
            <Prestation
            firstTitle={`Nos offres pour accompagner vos salariés`}
            secTitle={`Offrez une expérience collaborateur unique centrée sur l'humain`}
            text={`
                    Mademoiselle Happiness vous accompagne dans l'amélioration des conditions de travail et plus généralement le bonheur de vos salariés.
                    Nos experts vous proposent des méthodes axées sur le développement de l'individu et l'intelligence collective.
                    Nous vous aidons à la mise en œuvre d'un plan d'actions bien-être annuel sur mesure favorisant l’épanouissement durable de vos salariés pour gagner en performance individuelle et collective. 
                `}            
            />
            <div className="flex flex-col w-full h-full lg:flex-row justify-center">
                <Offer 
                    firstTitle={`LES ATELIERS`}
                    secTitle={`QUALITE DE VIE AU TRAVAIL`}
                    text={`Plus de 30 workshops et serious games thématiques à destination de vos équipes pour innover et améliorer l'engagement de vos collaborateurs.`}
                    info={`A partir de 1h30 à 4 heures d'animations `}
                    img={seminaire1}
                />
                <Offer 
                    firstTitle={`LES JOURNEES BIEN-ÊTRE`}
                    secTitle={`ET COHESION`}
                    text={`Développer la performance de vos équipes et renforcer la cohésion des collaborateurs à travers des événements team builing, conférences, séminaires d'entreprise.`}
                    info={`1 à 2 journées de séminaire`}
                    img={seminaire2}
                />
                <Offer 
                    firstTitle={`LES OFFRES D'ATELIERS`}
                    secTitle={`BIEN-ÊTRE AU TRAVAIL`}
                    text={`Nous co-construisons avec vous un programme bien-être sur mesure répondant à votre problématique : temps de convivialité, sport d'entreprise, experts en énergétique, méditation, yoga, naturopathe, nutritionniste, sophrologue, décoration des bureaux...`}
                    info={`1h par session`}
                    img={seminaire3}

                />
            </div>
            <div className="flex flex-col-1 justify-center py-6">
                <button className="btn btn-wide btn-outline btn-info">Demander un devis</button>
            </div>
            <div>
            <Prestation 
                firstTitle={`Chiffres clés`}
                secTitle={`S’intéresser au bien-être de vos collaborateurs, un gage de performance !`}
                text={`
                        Les études menées sur l’impact de la QVT* concluent à une forte corrélation entre la Qualité de Vie au Travail et la performance de l’entreprise.
                        *Qualité de Vie au Travail
                    `}
            />

            <Prestation 
                firstTitle={`Nos événements QVT du mois de juin !`}
                img={sqvt}      
            />

            <div className="flex flex-col-1 justify-center -mt-6">
                <button className="btn btn-wide btn-outline btn-info">Consultez le programme</button>
            </div>   
        </div>
        <form>
            
        </form>
    </section>
  )
}

export default Main