import React from "react";
import { Container, Row, Col, Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* 🔹 HERO SECTION */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="slide"
            style={{ height: "450px", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{
              background: "rgba(0,0,0,0.5)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2 className="fw-bold">Book Your Ride 🚗</h2>
            <p>Fast • Safe • Reliable cab booking</p>
            <Button
              as={Link}
              to="/Blog"
              variant="primary"
              size="lg"
              className="px-4 py-2 rounded-pill shadow"
            >
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
            alt="slide"
            style={{ height: "450px", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{
              background: "rgba(0,0,0,0.5)",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2 className="fw-bold">Ride Anytime</h2>
            <p>24/7 cab service available</p>
            <Button
              as={Link}
              to="/Blog"
              variant="primary"
              size="lg"
              className="px-4 py-2 rounded-pill shadow"
            >
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* 🔹 WELCOME */}
      <Container className="text-center my-5">
        <h1 className="fw-bold display-5">Welcome to MyCabApp</h1>
        <p className="text-muted fs-5">
          Book your ride quickly and safely with just a few clicks.
        </p>

        <Button
          as={Link}
          to="/Blog"
          variant="primary"
          size="lg"
          className="px-4 py-2 shadow rounded-pill"
        >
          Book Ride
        </Button>
      </Container>

      {/* 🔹 FEATURES */}
      <Container className="my-5">
        <h2 className="text-center mb-5 fw-bold display-6">
          Why Choose Us?
        </h2>

        <Row className="g-4">
          {/* Card 1 */}
          <Col md={4}>
            <Card className="shadow-sm h-100 text-center border-0 d-flex flex-column">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>🚀 Fast Booking</Card.Title>
                  <Card.Text>
                    Book your cab in seconds without any hassle.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4}>
            <Card className="shadow-sm h-100 text-center border-0 d-flex flex-column">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>👨‍✈️ Professional Drivers</Card.Title>
                  <Card.Text>
                    Verified and experienced drivers for your safety.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 (FIXED IMAGE) */}
          <Col md={4}>
            <Card className="shadow-sm h-100 text-center border-0 d-flex flex-column">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title>🔒 Secure Payment</Card.Title>
                  <Card.Text>
                    100% safe and secure payment system.
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 🔹 CTA */}
      <Container
        fluid
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(to right, #2563eb, #4f46e5)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 className="fw-bold">Ready to Ride?</h2>
        <p className="fs-5">Book your cab now and enjoy your journey.</p>

        <Button
          as={Link}
          to="/Blog"
          variant="light"
          size="lg"
          className="fw-semibold px-4 py-2 rounded-pill"
        >
          Book Now
        </Button>
      </Container>
    </>
  );
};

export default Home;