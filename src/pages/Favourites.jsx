import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { HiTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../store/slices/productsSlice";
import { useEffect, useState } from "react";

export default function Favourite() {
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const favProducts = JSON.parse(localStorage.getItem("favProducts"));
    if (favProducts) {
      setFavorites(favProducts);
    }
  }, []);

  const handleRemoveFromFavorites = (fav) => {
    const updatedFavorites = favorites.filter((item) => item.id !== fav.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favProducts", JSON.stringify(updatedFavorites));
    dispatch(removeFromFavorites(fav));
  };

  return (
    <Container fluid className="px-5 favourites-cart">
      <Row>
        <h2 className="my-heding">Favourites Cart</h2>
        {favorites.length > 0 ? (
          favorites.map((fav) => {
            return (
              <Col
                lg={3}
                md={4}
                sm={6}
                key={fav.id}
                className="mb-5 text-center"
              >
                <Card className="shadow">
                  <Card.Img variant="top" src={fav.thumbnail} alt={fav.title} />
                  <Card.Body>
                    <Card.Title className="fs-3">{fav.title}</Card.Title>
                    <Card.Text className="fs-4 my-3">
                      ${fav.price.toFixed(2)}
                    </Card.Text>
                    <Button
                      onClick={() => handleRemoveFromFavorites(fav)}
                      variant="outline-danger"
                    >
                      <HiTrash />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h2>Your Cart is Empty</h2>
        )}
      </Row>
    </Container>
  );
}
