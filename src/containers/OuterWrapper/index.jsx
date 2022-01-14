import { Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Card from '@mui/material/Card';

import Routes from "../../routes/Routes";
import history from "../../routes/History";
import styles from "./OuterWrapper.module.scss";

function OuterWrapper() {
  return (
    <>
      <section className={styles.wrapper}>
      <Card sx={{ maxWidth: 345 }}>

        <Container>
          <Row>
            <Col>
              <div>
                <Router history={history}>
                {Routes}
                </Router>
              </div>
            </Col>
          </Row>
        </Container>
        </Card>
      </section>
    </>
  );
}

export default OuterWrapper;
