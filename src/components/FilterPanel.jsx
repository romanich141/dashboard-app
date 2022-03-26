import { useSelector, useDispatch, } from "react-redux";
import { Badge, Card, Stack, } from 'UI';
import { selectAllFilters } from "../store/filters/filters-selectors";
import { clearFilters, removeFilter } from "../store/filters/filters-actions";
import { useCallback } from "react";

export const FilterPanel = () => {
  const filters = useSelector(selectAllFilters);


  const dispatch = useDispatch();

  const clearAllFilters = useCallback(() => {
    dispatch(clearFilters());
  }, [])

  if (!filters.length) return "";

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          { filters.map(filter => (

            <Badge
              variant="clearable"
              children={ filter }
              onClear={ () => dispatch(removeFilter(filter)) }
            />

          )) }
        </Stack>

        <button
            className='link'
            children="Clear"
            onClick={ clearAllFilters }
        />
      </div>
    </Card>
  )
}