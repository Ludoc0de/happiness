import heroImg from "../images/hero-img.png"
import heroPic from "../images/katia.png"
const Hero = () => {
  return (

    <section>
        <div className="hero flex flex-col">
            <img className="hero-img w-screen rounded-md"src={heroImg} alt="logo"/>
            <h2 className="hero-title__center text-2xl my-12">Le bonheur au travail, vous avez tout à y gagner... <br />Et votre entreprise aussi !</h2>
        </div>
        <div className="hero rounded-md min-h-16 bg-base-200 bg-secondary">
            <div className="hero-content flex-col lg:flex-row justify-center">
                <img src={heroPic} className="max-w-xl rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Je suis Katia</h1>
                <h4 className="text-2xl font-medium w-3/4 py-2">
                    Chief Happiness Officer
                    Facilitatrice en Bien-être au travail
                    et innovation collaborative
                </h4>
                <p className="text-xl py-6 w-9/12 w-3/4">
                     Hello les happy workers de demain, je vous souhaite la bienvenue ! 
                    <br />
                    <br />
                    Mademoiselle Happiness se positionne comme une entreprise du changement ! En effet, je souhaite partager avec vous un nouveau regard sur le monde du travail du 21e siècle.
                    Nous assistons depuis une décennie à un changement de paradigme.
                    Le mode collaboratif prend le lead sur le mode pyramidal, le numérique nous amène à repenser l'expérience client, la génération Z, en quête de sens, positionne le bonheur au travail en premier lieu, devant leur rémunération...  
                    De nombreuses études font état d’une envolée significative de la souffrance au travail - risques psychosociaux, absentéisme, perte de sens, démotivation - positionnant la France n°2 mondial du burnout derrière le Japon.
                    De plus, la crise sanitaire a remis en question les modèles de process et  de gouvernance au sein des entreprises.
                    <br />
                    <br />
                    Devant ces constats alarmants, la prise en compte de la condition humaine est devenue plus que jamais indispensable à toute organisation soucieuse de gagner en productivité et en performance. 
                    Des entités telles que Favi, Poult, Décathlon, Kiabi, Leroy Merlin, Google, Amazon, le Ministère de la Sécurité Sociale Belge l’ont déjà compris, et leur réussite prouve que l’équilibre qualité de vie/performance est possible. 
                    <br />
                    <br />
                    Et vous, quelles actions mettez-vous en place pour améliorer le bien-être de vos collaborateurs ?
                </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
