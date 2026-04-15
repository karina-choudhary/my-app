import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* 🔹 HERO SECTION */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Welcome to SwiftRide 🚗</h3>
            <p>Fast, safe and comfortable cab booking.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
            alt="slide"
            style={{ height: '400px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h3>Book Anytime</h3>
            <p>24/7 cab service available.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* 🔹 WELCOME */}
      <Container className="text-center my-5">
        <h1 className="fw-bold">Welcome to MyCabApp</h1>
        <p className="text-muted fs-5">
          Book your ride quickly and safely.
        </p>

        <Button as={Link} to="/Blog" variant="primary" size="lg">
          Book Ride
        </Button>
      </Container>

      {/* 🔹 FEATURES */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>

        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow-sm h-100 text-center">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Fast Booking</Card.Title>
                <Card.Text>
                  Book your cab in seconds without hassle.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm h-100 text-center">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Professional Drivers</Card.Title>
                <Card.Text>
                  Verified drivers for your safety.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm h-100 text-center">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1515165562835-c4c7b05b92ce"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>Secure Payment</Card.Title>
                <Card.Text>
                  100% safe and secure payment system.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* 🔹 CTA */}
      <Container fluid className="bg-primary text-white text-center py-5">
        <h2>Ready to Ride?</h2>
        <p>Book your cab now.</p>

        <Button as={Link} to="/Blog" variant="primary" size="lg">
          Book Now
        </Button>
      </Container>
    </>
  );
};

export default Home;