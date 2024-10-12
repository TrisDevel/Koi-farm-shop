
import Card from 'react-bootstrap/Card';
import "../assets/KoiList.css";
import { Link } from 'react-router-dom'; 
function KoiCard({ id, imgSrc, title,price, breeder,sex,bornIn,size,variety}) {
    return (
        <Card className='mb-5'>
            <div>
                <Link to={`/koi/${id}`}>
                    <img src={imgSrc} alt={title} className="koi-image" />
                </Link>
            </div>
            <Card.Body className='cardlist'>
                <Card.Title className='tittle-name-koi'>{title || 'Card Title'}</Card.Title>
                <Card.Text  className='price-koi '><strong>price:</strong> {price || 'Unknown'}</Card.Text>
                <Card.Text  className='breeder-koi '><strong>Breeder:</strong> {breeder || 'Unknown'}</Card.Text>
                <Card.Text  className='sex-koi '><strong>Sex:</strong> {sex || 'Unknown'}</Card.Text>
                <Card.Text  className='born-koi '><strong>Born in:</strong> {bornIn || 'Unknown'}</Card.Text>
                <Card.Text  className='size-koi '><strong>Size:</strong> {size || 'Unknown'}</Card.Text>
                <Card.Text  className='variety-koi '><strong>Variety:</strong> {variety || 'Unknown'}</Card.Text>
                <a className='add-to-cart'  variant="primary">ADD TO CART</a>
            </Card.Body>
        </Card>
    );
}
export default KoiCard;
