/* IRISH

Ta Gort na Gaeilge a threabhadh ag Tomas le fada and la. Bhi se ina phriomhoide bunscoile ar feadh cuig bliana is daichead. Ta se de thaithi aige daltai bunscoile, daltai meanscoile, abhair oidi agus mic leinn ollscoile a bheith muinte aige.

Ta ceim B.A, Ard Teastas Gaeilge, M.Ed, agus Ard Teastas san Oideachas (Cead Onoracha) aige.

Deanann se obair anois do Cholaiste Mhuire Marino agus do Cholaiste Hibernia. Thug se leachtai don Dioploma sa Ghaeilge in Ollscoil na Gaillimhe ar feadh se bliana deag.

Ta treimshi eagsula caite ag Tomas mar Phriomhoide i gColaisti ins na Gaeltachtai difriula ar feadh na mblianta, an cean is deanai na Colaiste Gharumna, Tir and Fhia ar feadh deich mbliana

Ar ndoigh, tuigeann se tabhacht agus fiuntas na seanfhocal maraon leis an ghaois ata iontu. Is minic seanfhocail mar theidil aisti is minic iad mar ornaidiocht i lar aisti.

- Nollaig Heuston, Iar-Roinnchigire na Roinne Oideachais agus Scileanna

/*


/* ENGLISH

Tomas has been plowing Gort na Gaeilge for a long time. He was a primary school principal for forty-five years. He has experience of teaching primary school students, secondary school students, student teachers and university students.

He holds a B.A, Higher Certificate in Irish, M.Ed, and Higher Certificate in Education (Honors Permission).

He now works for Our Lady of Marino College and Hibernia College. He lectured for the Diploma in Irish at the University of Galway for sixteen years.

Tomas has served as a Principal in Colleges in the various Gaeltachts for many years, most recently at Coláiste Gharumna, Tir and Fhia for ten years.

- Nollaig Heuston,- Former Inspector of the Department of Education and Skills
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
// core components
import Navbar from "../components/Navbars/NavbarOne.js";

class Profile extends React.Component {
  render() {

    const backgroundStyle = {
       background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,121,113,1) 11%, rgba(0,255,246,0) 35%)',
    };

    return (
      <>
        <Navbar />

        <main ref="main" style ={ backgroundStyle}>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-0 pt-md-4">

                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </main>
      </>
    );
  }
}

export default Profile;