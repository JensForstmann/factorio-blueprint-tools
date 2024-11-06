import { WaitCondition } from './waitCondition';

export type ScheduleRecord = {
	records: Array<{
		station: string;
		wait_conditions?: WaitCondition[];
	}>;
};
