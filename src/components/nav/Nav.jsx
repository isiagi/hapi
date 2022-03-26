import './nav.css';

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <h1>LOGO</h1>
      <div className="header">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>IT SOLUTIONS</li>
          <li>CONTACT</li>
          <li>
            <div className="nav__drop">
              <button className="nav__btn">SERVICES</button>
              <div className="dropdown__menu">
                <div>
                  <div class="dropdown-heading">IT SERVICES</div>
                  <div class="dropdown-links">
                    <a href="/hello" class="link">
                      All
                    </a>
                    <a href="/good" class="link">
                      Latest
                    </a>
                    <a href="/heyy" class="link">
                      Popular
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
