import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	return (
		<Card className="my-3 p-3 rounded">
			<Card.Img src={product.image} variant="top" />
			<br />
			<br />
			<Card.Body>
				<Card.Title as="h3">
					<strong>{product.name}</strong>
				</Card.Title>{' '}
				<br />
				<br />
				<Card.Link>
					<Link to={product.link}>Go To WebSite</Link>
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default Product;
