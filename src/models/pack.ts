import { Description, Example, Required, Enum } from "@tsed/schema";
import { Model } from "@tsed/mongoose";

export enum POD_TYPE {
    COFFEE_POD_LARGE = "L",
    COFFEE_POD_SMAAL = "S",
    ESPRESSO = "E"
}

export enum FLAVOR {
    COFFEE_FLAVOR_VANILLA = "V",
    COFFEE_FLAVOR_CARAMEL = "C",
    COFFEE_FLAVOR_PSL = "P",
    COFFEE_FLAVOR_MOCHA = "M",
    COFFEE_FLAVOR_HAZELNUT = "H",
}

export enum SIZE {
    DOZEN_ONE = 12,
    DOZEN_THREE = 36,
    DOZEN_FIVE = 60,
    DOZEN_SEVEN = 84,
}

@Model()
export class Packs {

    @Required()
    @Enum(POD_TYPE)
    @Description('Type of pod either for coffee and size or for espresso')
    @Example('L')
    POD_TYPE: POD_TYPE;

    @Required()
    @Enum(FLAVOR)
    @Description('Variety of flavors such as vanilla, caramel, PSL, mocha or Hazelnut')
    @Example('M')
    FLAVOR: FLAVOR;

    @Required()
    @Enum(SIZE)
    @Description('Number of pods per pack')
    @Example('12')
    SIZE: SIZE;

    @Required()
    @Description('The description of the machine')
    @Example('CP001 – small coffee pod, 1 dozen, vanilla')
    DESC: string;

    @Required()
    @Description('Item Reference ID')
    @Example('CP001')
    REF: string;
}