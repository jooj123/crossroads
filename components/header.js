import Link from "next/link";

const Header = () => {

  return (
    <header className="header">
    <div className="header-wrap">
      {/* <div className="logo plain logo-left">
        <div className="site-title">
          <a
            href="http://www.crossroadscounsellingsydney.com.au/"
            title="Go to Home"
          >
            Crossroads
          </a>
        </div>
      </div> */}

      <nav id="nav" role="navigation">
        <div className="table">
          <div className="table-cell">
            <ul id="menu-main" className="">
              <li
                id="menu-item-256"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-256"
              >
                <a href="http://www.crossroadscounsellingsydney.com.au/about/">
                  About
                </a>
              </li>
              <li
                id="menu-item-316"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-316"
              >
                <Link href="/services/">Services</Link>
                <ul className="sub-menu">
                  <li
                    id="menu-item-289"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-289"
                  >
                    <Link href="/young-people">Young People</Link>
                  </li>
                  <li
                    id="menu-item-301"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-301"
                  >
                    <Link href="/adults/">Adults</Link>
                  </li>
                  <li
                    id="menu-item-300"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-300"
                  >
                    <Link href="/families/">Families</Link>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-420"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-420"
              >
                <a href="http://www.crossroadscounsellingsydney.com.au/faqs/">
                  FAQs
                </a>
              </li>
              <li
                id="menu-item-258"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-258"
              >
                <a href="http://www.crossroadscounsellingsydney.com.au/contact/">
                  Contact
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </nav>
      <a href="#nav" className="menu-trigger">
        <i className="fa fa-bars"></i>
      </a>
    </div>
  </header>
  );
}

export default Header;