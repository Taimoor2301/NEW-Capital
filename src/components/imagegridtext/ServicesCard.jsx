import { Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../../assests/css/Services.css";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
const ServicesCard = ({ service }) => {
  return (
    <Card className="serviceCard" key={service.id}>
      <Fade top duration={1000}>
          <div className="CardImages">
            <Image
              src={service.imgsrc}
              className="img-fluid"
              alt="cardImage "
              fluid
            />
          </div>
          <Card.Body className="cardBody">
            <Card.Title>
              <h3>{service.title}</h3>
            </Card.Title>
            <Card.Text className="cardText">{service.description}</Card.Text>
          </Card.Body>
      </Fade>
    </Card>
  );
};

export default ServicesCard;
