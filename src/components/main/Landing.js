import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/NavbarOne.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Banner from "views/Banner.js";
import ProverbGrid from "../../views/proverbs/ProverbGrid";


class Landing extends React.Component {

  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {

    const isLoading = false;  //hardcode for now as async timer method not working

    const proverb1 = {
      char_id: '0',
      proverb: '"Múineann gá seift"',
      irish: '"Má tá riachtanas le rud smaoineoidh tú are chleas éigin chun é a dhéanamh"',
      english:  '"Necessity is the mother of invention"'
    };

    const proverb2 = {
      char_id: '1',
      proverb: '"Nuair is crua don chailleach caithfidh sí rith"',
      irish: '"Nuair a bhíonn an chailleach i gruachás bíonn uirthi rith"',
      english:  'When the hag gets into difficulties she must run'
    };

    const proverb3 = {
      char_id: '2',
      proverb: '"Bíonn dhá insint ar gach scéal"',
      irish: '"Bíonn dhá thaobh le gach scéal"',
      english:  'There are two sides to every story'
    };

    const proverb4 = {
      char_id: '3',
      proverb: '"Is éasca an t-amadán is a mhaoin a scaradh ona chéile"',
      irish: 'Caitheann fear na míchéille an iomarca airgid',
      english:  'A fool and his money are soon parted'
    };

    const proverbArray = [
      proverb1, proverb2, proverb3, proverb4
    ];

    const backgroundStyle = {
      background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,121,113,1) 11%, rgba(0,255,246,0) 35%)',
    };

    const headerStyle = {
      color: '#fff',
      textAlign: 'center',
      padding: '10px'
    };

    const headerTextStyle = {
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '53px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#f5d742',
        textDecoration: 'none'
    };

    var h2Style = {
      fontSize: '19px',
      color: 'white',
      marginBottom: '20px',
      textAlign: 'center'
    };

    return (
      <>
        <Navbar />

        <main ref="main" style ={ backgroundStyle}>

          <div className="position-relative" >
            {/* shape Hero */}
            <section className="section">
              <Container>
                <div className="col px-0">
                  <Row>
                    <Col lg="3" />
                    <Col lg="6">
                      <div style={headerStyle}>
                        <p style={headerTextStyle}>Stór Seanfhocal </p>
                      </div>
                    </Col>
                    <Col lg="3" />
                  </Row>
                  <Row>
                    <Col lg="3" />
                    <Col lg="6" style={h2Style}>
                      <h2 style={h2Style}>
                        A Collection of Irish Proverbs each one beautifully illustrated together with explanations and translations
                      </h2>
                    </Col>
                    <Col lg="3" />
                  </Row>

                  <Row>
                      <Col lg="3" />
                      <Col lg="6">
                        <Banner />
                      </Col>
                      <Col lg="3" />
                  </Row>

                </div>
              </Container>
            </section>
            {/* 1st Hero Variation */}
          </div>

          <section>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                   <Col sm="1" />
                    <Col lg="12">
                      <ProverbGrid isLoading={isLoading.current} items={proverbArray} />
                    </Col>
                    <Col sm="1" />
                </Row>
              </div>
            </Container>
          </section>

        </main>

        <section>
          <span>
            <br />
            <br />
          </span>
        </section>

        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
