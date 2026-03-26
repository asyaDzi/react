import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/entities/basket.slice";
import { useCallback } from "react";
import type { TabProps } from "../restaurants-page/restaurants-page";
import { useAppSelector } from "../../redux/hooks";

export function useCounterState({ id }: TabProps) {
  const amount = useAppSelector((state) => selectAmountById(state, id));
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
