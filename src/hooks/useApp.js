//This is a common convention
import { useDispatch, useSelector } from "react-redux";

//Below 2 are used to dispatch or select from store or in the store
const useAppDispatch = useDispatch
const useAppSelector = useSelector

export {useAppDispatch,useAppSelector}