import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@/app/hook";
import {banglaSelector,fetchData} from "@/features/bangla/banglaSlice";
import {Button,CircularProgress} from "@mui/material";
import useFullSura from "@/hooks/useFullSura";

const Index = () => {
  const {id} = useParams()
  const dispatch = useAppDispatch()
  const {bangla, isLoading,  error} = useAppSelector(banglaSelector)
  return (
    <div>
    <div>ID : {id}</div>
    <Button onClick={()=>dispatch(fetchData())}>Fetch</Button>
    <div>
    {
      id && useFullSura(bangla,id).map(item=>{
        return (
        <div key={id + 1}>{item.text}</div>
        )
      })
    }
    </div>
    {isLoading && <CircularProgress />}
    {error && <Button variant="contained">{error}</Button>}
    </div>
    )
}

export default Index;