import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "components/Navbars/NavbarOne.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Banner from "views/Banner.js";


class Landing extends React.Component {

  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {

    const backgroundStyle = {
      background: 'rgb(2,0,36)',
      background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,121,113,1) 11%, rgba(0,255,246,0) 35%)',
    };

    const headerStyle = {
      color: '#fff',
      textAlign: 'center',
      padding: '10px'
    }

    const headerTextStyle = {
        marginTop: '0px',
        marginBottom: '20px',
        fontSize: '53px',
        //fontWeight: 'bold',
        textAlign: 'center',
        color: '#f5d742',
        textDecoration: 'none'
    }


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
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A Collection of Irish Proverbs{" "}
                      </h1>
                      <p className="lead text-white">
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


          <section className="section section-lg pt-lg-0 ">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Download Argon
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              creative
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Build Something
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>


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


        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
