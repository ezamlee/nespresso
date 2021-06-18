import { BodyParams, Controller, Get } from "@tsed/common";
import { Description, Returns } from "@tsed/schema";
import { Packs } from "../../models/pack"
import { PackService, IPackFilter } from "../../services/pack"

@Controller("/pack")
export class PackController {

    constructor(private PackService: PackService) { }

    @Get("/")
    @(Returns(200, Packs).ContentType("application/json"))
    @Description("Get a filter object and use it to filter data")
    async get(@BodyParams() filter: IPackFilter): Promise<Packs[]> {
        return await this.PackService.find(filter)
    }
}