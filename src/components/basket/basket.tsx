import { useSelector } from "react-redux";
import { selectBasketItems } from "../../redux/entities/basket.slice";

function BasketPage() {
  const basket = useSelector(selectBasketItems);

  if (!basket.length) {
    return null;
  }

  return (
    <ul>
      {basket.map(({ id, amount }) => (
        <li key={id}>
          {id} - {amount}
        </li>
      ))}
    </ul>
  );
}

export default BasketPage;
