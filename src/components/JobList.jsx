import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from "react-redux";
import { selectAllPositions } from "../store/positions/position-selectors";
import { addFilter } from "../store/filters/filters-actions";

export const JobList = () => {
  const positions = useSelector(selectAllPositions);
  const dispatch = useDispatch();
  const handleAddFilter = (filter) => dispatch(addFilter(filter));

  return (
    <div className='job-list'>
      { positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={ handleAddFilter }
        />
      )) }
    </div>
  )
}