
import { $log, Inject, Injectable } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Packs, POD_TYPE, FLAVOR, SIZE } from "../models/pack";


export interface IPackFilter {
    POD_TYPE?: POD_TYPE,
    FLAVOR?: FLAVOR,
    SIZE?: SIZE
}

@Injectable()
export class PackService {
    @Inject(Packs)
    private Packs: MongooseModel<Packs>;

    constructor() { }

    async find(filter: IPackFilter): Promise<Packs[]> {
        return this.Packs.find(filter)
    }

}