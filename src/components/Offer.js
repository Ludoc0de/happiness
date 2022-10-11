
const Offer = (props) => {
  return (
    <div className="card w-96 shadow-xl bg-base-200 ml-10">
      <div className="card-body">
        <h4 className="card-title">{props.firstTitle}</h4>
        <h4 className="card-title mb-10">{props.secTitle}</h4>
        <p  className="mb-6">
           {props.text}
        </p>
        <p>{props.info}</p>
      </div>
      <figure><img className="rounded-md mb-10" src={props.img} alt=""/></figure>
    </div>
  )
}

export default Offer