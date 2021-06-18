import { BodyParams, Controller, Get } from "@tsed/common";
import { Description, Returns } from "@tsed/schema";
import { Machines } from "../../models/machine"
import { MachineService, IMachineFilter } from "../../services/machine"
import { $log } from "@tsed/common"

@Controller("/machine")
export class MachineController {

    constructor(private MachineService: MachineService) { }

    @Get("/")
    @(Returns(200, Machines).ContentType("application/json"))
    @Description("Get a filter object and use it to filter data")
    async get(@BodyParams() filter: IMachineFilter): Promise<Machines[]> {
        return await this.MachineService.find(filter)
    }
}