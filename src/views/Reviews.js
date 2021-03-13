import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

import Navbar from "../components/Navbars/NavbarOne.js";
import SimpleFooter from '../components/Footers/SimpleFooter.js';
import './Author.css';

class Reviews extends React.Component {
  render() {

    const backgroundStyle = {
       background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,121,113,1) 11%, rgba(0,255,246,0) 35%)',
    };

    const headerStyle = {
        color: '#fff',
        textAlign: 'center',
        padding: '30px',
        marginTop: '30px'
      };

    const headerTextStyle = {
        marginTop: '30px',
        marginBottom: '10px',
        fontSize: '53px',
        fontWeight: '500',
        textAlign: 'center',
        color: '#f5d742',
        textDecoration: 'none'
    };

    return (
      <>
        <Navbar />

        <main ref="main" style ={ backgroundStyle}>
        {/* Page content */}

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
                <Col lg="2" />
               <Col lg="8" >
                    <Card className="card-profile shadow">
                        <Row className="justify-content-center">
                        <Col className="order-lg-2" lg="3">
                            <div className="card-profile-image">

                            </div>
                        </Col>
                        </Row>

                        <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                        <div className="d-flex justify-content-between">

                        </div>
                        </CardHeader>

                        <CardBody className="pt-0 pt-md-4">
                        <div className="text-center">
                            <h3>
                            Testimonials
                            </h3>

                            <div>
                                <hr className="my-4" />
                                <p>
                                "I was delighted to come across this treasure trove! Thank you Tomás".
                                </p>
                                <div className="h6 mt-4">
                                <i className="ni business_briefcase-24 mr-2" />
                                - R. McKibben, Co. Mayo
                                </div>

                                <hr className="my-4" />
                                <p>
                                "This is such a lovely book. So beautifully presented and illustrated.
                                It will be a very useful resource for many teachers and students".
                                </p>
                                <div className="h6 mt-4">
                                <i className="ni business_briefcase-24 mr-2" />
                                - Bernadette, Co. Longford
                                </div>

                                <hr className="my-4" />
                                <p>
                                "Dear Tomás, I would like to congratulate you on your wonderful book.
                                This copy is for my daugher, who loves it!"
                                </p>
                                <div className="h6 mt-4">
                                <i className="ni business_briefcase-24 mr-2" />
                                - K. Conroy, Co. Clare
                                </div>

                                <hr className="my-4" />
                            </div>

                        </div>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col lg="3" />
          </Row>
            </div>
        </Container>
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

export default Reviews;