import './Card.css';
import { shadeColor } from '../../utils/color';

function Card({ cardNumber, total }) {
  const baseColor = "#dd536a"

  const percent =  ((cardNumber || 0) * 100) / total

  const color = shadeColor(baseColor, -percent)

  return (
    <div className="Card" style={{
      backgroundColor: color
    }}>
        {cardNumber || 0}
    </div>
  );
}

export default Card;
