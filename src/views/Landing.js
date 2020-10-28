import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/NavbarOne.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Banner from "views/Banner.js";
import ProverbGrid from "./proverbs/ProverbGrid";


class Landing extends React.Component {

  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {

    const backgroundStyle = {
      background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,121,113,1) 11%, rgba(0,255,246,0) 35%)',
    };

    const headerStyle = {
      color: '#fff',
      textAlign: 'center',
      padding: '10px'
    }

    const headerTextStyle = {
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '53px',
        textAlign: 'center',
        color: '#f5d742',
        textDecoration: 'none'
    }

    var h2Style = {
      textAlign: 'center'
    }

    var mainTextStyle = {
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '20px',
      color: 'white'
    }

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
                      <h2 className="display-4 text-white">
                        A Collection of Irish Proverbs{" "}
                      </h2>
                      <p style={mainTextStyle}>
                        This book contains a collection of some of the most common Irish Proverbs
                        together with explanations and translations of each.
                      </p>
                    </Col>
                    <Col lg="3" />
                  </Row>
                </div>
              </Container>
            </section>
            {/* 1st Hero Variation */}
          </div>

            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                   <Col lg="3" />
                    <Col lg="6">
                      <Banner />
                    </Col>
                    <Col lg="3" />
                </Row>
              </div>
            </Container>

          <section>
            <ProverbGrid isLoading={isLoading.current} items={proverbArray} />
          </section>

        {/**
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
           */}


        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
