export const selectAllPositions = (store) => store.positions;

export const selectVisiblePositions = (store, filters = []) => {
	if (!filters.length) return store.positions;

	return store.positions.filter(position => {
		const { role, level, languages, tools, } = position;
		const positionFilters = [ role, level, ...languages, ...tools ];

		return filters.every(filter => positionFilters.include(filter));
	})
}

