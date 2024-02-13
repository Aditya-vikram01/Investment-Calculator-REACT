import logo from "../assets/investment-calculator-logo.png";

export function Header() {
  return (
    <header id='header'>
      <img src={logo} alt='hand drawn investment picture' />
      <h1 id='header'>React Investment Calculator</h1>
    </header>
  );
}
