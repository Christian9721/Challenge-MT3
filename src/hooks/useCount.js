import { useMemo } from "react";
import { STATUS } from "../constants/status.constants";

const useCount = (props) => {
	const { source } = props;

	const counts = useMemo(() => {
		const counts = source.reduce((accumulator, task) => {
			if (task.status === STATUS.ACTIVE) {
				accumulator.activeCount += 1;
			} else if (task.status === STATUS.DONE) {
				accumulator.doneCount += 1;
			}
			return accumulator;
			}, { activeCount: 0, doneCount: 0 });
		return counts;
	}, [source]);

	return {...counts}
}

export default useCount;