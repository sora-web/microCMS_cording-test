import MyApp from "../_app";
import Link from "next/link";

const HeaderRadius = () => {
  return (
    <header className="l-header l-header--radius">
      <div className="l-header__inner">
        <div className="p-header p-header--radius">
          <div className="p-header__inner">
            <div className="p-header__logo">
              <h1 className="c-logo">
                <img src="/img/logo.svg" alt="Your Name" />
              </h1>
            </div>

            <div className="p-header-pc lg-on">
              <div className="p-header__nav">
                <ul className="p-header__list">
                  <li className="p-header__item lg-mr20">
                    <Link href={`/`}>
                      <a className="">Design Tools</a>
                    </Link>
                  </li>
                  <li className="p-header__item lg-mr20">
                    <Link href={`/`}>
                      <a className="">Daily Updates</a>
                    </Link>
                  </li>
                  <li className="p-header__item lg-mr20">
                    <Link href={`/`}>
                      <a className="">Tutorials</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderRadius;
