import { useEffect } from "react";
import data from "./mock/data.json";
import { FilterPanel, JobList, TheHeader } from 'components';
import { useDispatch } from "react-redux";
import { addPositions } from "./store/positions/position-actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data))
  }, [])

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
