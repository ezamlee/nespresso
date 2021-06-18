import { Description, Example, Required, Enum } from "@tsed/schema";
import { Model } from "@tsed/mongoose";



export enum Machine_Type {
    COFFEE_MACHINE_LARGE = "L",
    COFFEE_MACHINE_SMALL = "S",
    ESPRESSO_MACHINE = "E",   // E for Espresso
}

export enum Quality {
    BASE = "B",
    DELUXE = "D",
    PREMIUM = "P"
}

@Model()
export class Machines {

    @Required()
    @Description('Type of machine <<E>> for Espresso, <<S>> for small coffee machine & <<L>> for large machine')
    @Example('L')
    @Enum(Machine_Type)
    MACHINE_TYPE: Machine_Type;

    @Required()
    @Description('Does the machine support water line feature')
    @Example(true)
    IS_WATERLINE_COMPATIABLE: boolean;


    @Required()
    @Description('The description of the machine')
    @Example('CM103 – large machine, deluxe model, water line compatible')
    DESC: string;

    @Required()
    @Description('Machine Quality such as basem premimum or deluxe')
    @Example('DELUXE')
    @Enum(Quality)
    QUALITY: Quality

    @Required()
    @Description('Item Reference ID')
    @Example('CM103')
    REF: string;

}