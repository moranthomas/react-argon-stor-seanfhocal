import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import Navbar from "components/Navbars/NavbarOne.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Hero from "../../views/IndexSections/Hero.js";
import Navbars from "../../views/IndexSections/Navbars.js";
import Tabs from "../../views/IndexSections/Tabs.js";

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
        <SimpleFooter />
      </>
    );
  }
}

export default Home;
