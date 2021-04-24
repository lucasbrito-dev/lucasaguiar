import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Lucas Aguiar</span> Agência de Marketing
      </h1>
      <p className={headerStyles.description}>
        Entre em contato para fazer uma consultoria!
      </p>
    </div>
  );
};

export default Header;
