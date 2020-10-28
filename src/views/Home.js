import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import Navbar from "components/Navbars/NavbarOne.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Navbars from "./IndexSections/Navbars.js";
import Tabs from "./IndexSections/Tabs.js";

class Home extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <Hero />
          <section className="section">
            <Container>
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Home;
