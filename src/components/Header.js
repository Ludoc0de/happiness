import logo from "../images/logo_v1.png"
const Header = () => {
  return (
    <header>
      <span className="flex flex-col items-center bg-success py-2">
        <h4>"L'entreprise peut être source de croissance humaine".</h4>
        <p>Les entreprises humanistes, Jacques Lecomte</p>
      </span>
      
      <div className="navbar bg-base-100 py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Accueil</a></li>
              <li><a>A propos</a></li>
              <li><a>Nos offres</a></li>
              <li><a>Chiffres clés</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="w-50 navbar-center">
          <img src={logo} alt="logo"/>
        </div>
        <div className="navbar-end">
          <a className="normal-case text-sm">
            <p className="">Un regard plus humaniste sur le monde du travail du 21e siècle</p>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
