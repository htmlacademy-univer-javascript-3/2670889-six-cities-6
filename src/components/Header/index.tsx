import { Link } from 'react-router-dom';
import { Container } from '../Container';
import { NavBar } from '../NavBar';

type HeaderProps = {
  isAuthorized: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isAuthorized }) => (
  <header className="header">
    <Container>
      <div className="header__wrapper">
        <div className="header__left">
          <Link className="header__logo-link" to="/">
            <img
              className="header__logo"
              src={`${import.meta.env.BASE_URL}/img/logo.svg`}
              alt="6 cities logo"
              width="81"
              height="41"
            />
          </Link>
        </div>
        <NavBar isAuthorized={isAuthorized} />
      </div>
    </Container>
  </header>
);
