import { useDispatch, useSelector } from "react-redux";
import type { TabProps } from "../restourants-page/restourants-page";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/entities/basket.slice";
import { useCallback } from "react";

export function useCounterState({ id }: TabProps) {
  const amount = useSelector((state: any) => selectAmountById(state, id));
  const dispatch = useDispatch();

  const increaseCounter = useCallback(
    () => dispatch(addToCart(id)),
    [dispatch, id],
  );

  const decreaseCounter = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id],
  );

  return {
    counter: amount,
    increaseCounter,
    decreaseCounter,
  };
}
