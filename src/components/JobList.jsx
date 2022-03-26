import { JobPosition } from './JobPosition';
import { useSelector, useDispatch } from "react-redux";
import { selectAllPositions, selectVisiblePositions, } from "../store/positions/position-selectors";
import { addFilter } from "../store/filters/filters-actions";
import { selectAllFilters } from "../store/filters/filters-selectors";

export const JobList = () => {
  const filters = useSelector(selectAllFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, filters));
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