import { Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";

import Routes from "../../routes/Routes";
import history from "../../routes/History";
import styles from "./OuterWrapper.module.scss";

function OuterWrapper() {
  return (
    <>
      <Card className={styles.wrapper}>
        <section >
          <Container>
            <Row>
              <Col>
                <div>
                  <Router history={history}>{Routes}</Router>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Card>
    </>
  );
}

export default OuterWrapper;
