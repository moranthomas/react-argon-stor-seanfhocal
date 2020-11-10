/* IRISH

Ta Gort na Gaeilge a threabhadh ag Tomas le fada and la. Bhi se ina phriomhoide bunscoile ar feadh cuig bliana is daichead. Ta se de thaithi aige daltai bunscoile, daltai meanscoile, abhair oidi agus mic leinn ollscoile a bheith muinte aige.

Ta ceim B.A, Ard Teastas Gaeilge, M.Ed, agus Ard Teastas san Oideachas (Cead Onoracha) aige.

Deanann se obair anois do Cholaiste Mhuire Marino agus do Cholaiste Hibernia. Thug se leachtai don Dioploma sa Ghaeilge in Ollscoil na Gaillimhe ar feadh se bliana deag.

Ta treimshi eagsula caite ag Tomas mar Phriomhoide i gColaisti ins na Gaeltachtai difriula ar feadh na mblianta, an cean is deanai na Colaiste Gharumna, Tir and Fhia ar feadh deich mbliana

Ar ndoigh, tuigeann se tabhacht agus fiuntas na seanfhocal maraon leis an ghaois ata iontu. Is minic seanfhocail mar theidil aisti is minic iad mar ornaidiocht i lar aisti.

- Nollaig Heuston, Iar-Roinnchigire na Roinne Oideachais agus Scileanna

*/


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
import profileImg from '../assets/img/stor/dad-profile-photo.png';
import SimpleFooter from '../components/Footers/SimpleFooter.js';
import './Author.css';

class Profile extends React.Component {
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
                <Col lg="3" />
               <Col lg="6" >
                    <Card className="card-profile shadow">
                        <Row className="justify-content-center">
                        <Col className="order-lg-2" lg="3">
                            <div className="card-profile-image">
                                <img src={profileImg} className='profileImgStyle rounded-circle'  alt='' />
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
                            Tomás P. Ó Móráin
                            </h3>
                            <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2" />
                            B.A, HDip.Ed, M.Ed
                            </div>

                            <div>

                                <hr className="my-4" />

                                <p>
                                "Tomas has been plowing Gort na Gaeilge for a long time. He was a primary school principal for forty-five years. He has experience of teaching primary school students, secondary school students, student teachers and university students.
                                </p>

                               <p>
                                He holds a B.A, Higher Certificate in Irish, M.Ed, and Higher Certificate in Education (Honors Level). </p>
                               <p>
                                He now works for Our Lady of Marino College and Hibernia College. He lectured for the Diploma in Irish at the University of Galway for sixteen years.
                                </p>
                                <p>
                                Tomas has served as a Principal in Colleges in the various Gaeltachts for many years, most recently at Coláiste Gharumna, Tir an Fhia for ten years.""
                                </p>

                                <hr className="my-4" />

                                <div className="h6 mt-4">
                                <i className="ni business_briefcase-24 mr-2" />
                                - Nollaig Heuston
                                </div>
                                <div>
                                <i className="ni education_hat mr-2" />
                                Former Inspector of the Department of Education and Skills
                                </div>
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

export default Profile;