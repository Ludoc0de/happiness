
const Prestation = (props) => {
    return (
        <div className="hero my-12 bg-base-100">
            <div className="hero-content text-left">
                <div className="max-w-3xl">
                    <h2 className="text-5xl font-bold">{props.firstTitle}</h2>
                    <h3 className="text-3xl py-6">{props.secTitle}</h3>
                    <p className="text-lg py-6">
                        {props.text}     
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Prestation