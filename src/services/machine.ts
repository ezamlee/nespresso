
import { $log, Inject, Injectable } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Machines, Machine_Type, Quality } from "../models/machine";


export interface IMachineFilter {
    MACHINE_TYPE?: Machine_Type,
    QUALITY?: Quality,
    IS_WATERLINE_COMPATIABLE?: boolean
}

@Injectable()
export class MachineService {
    @Inject(Machines)
    private Machines: MongooseModel<Machines>;

    constructor() {
    }

    async find(filter: IMachineFilter): Promise<Machines[]> {
        return this.Machines.find(filter)
    }

}