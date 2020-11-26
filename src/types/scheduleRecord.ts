import { WaitCondition } from "./waitCondition";

export type ScheduleRecord = {
    station: string;
    wait_conditions: WaitCondition[];
};
