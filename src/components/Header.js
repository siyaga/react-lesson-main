import logo from '../logo.svg';
import './styles.css';

function Header(prop) {
  const menu = ["Home", "Feature", "Profile", "Product"];

  const navigation = () => {
    return menu.map((item, idx) => {
      return <li><a href="#" onClick={() => prop.onClick(idx+1)} >{item}</a></li>
      // <button onClick={() => prop.onClick(idx+1)} >{item}</button>
    }) 
  }
  return(
    <div>
  <nav class="nav nav-2">
  <img class="nav-logo" src={logo} alt="logo" />
  <h1 className='header-title' >Tutorial React</h1>
  <ul class="nav-list">
    {navigation()}
  </ul>
</nav>
        {/* <nav className='navigation'>{navigation()}</nav> */}
    </div>
  );
}

export default Header;