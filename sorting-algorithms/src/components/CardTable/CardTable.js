import './CardTable.css';
import Card from '../Card/Card';

function CardTable({tableName, cards, operations, main, additional}) {
  return (
    <div className="CardTable">
        <div>{tableName || ''}</div>
        {operations && <div>Operations: {operations}</div>}
        {additional && <div style={{height: 'auto'}}>{additional}</div>}
        {main && cards.length > 0 && <div>n = {cards.length}</div>}
        <div className="CardContainer">
            {cards && cards.map((c, i) => 
                <Card key={i} cardNumber={c} total={cards.length}/>
            )}
        </div>
    </div>
  );
}

export default CardTable;
