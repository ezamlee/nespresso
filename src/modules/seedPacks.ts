import { Inject, Module, OnReady } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Packs } from "src/models/pack";


@Module()
export class MachineSeed implements OnReady {

    @Inject(Packs)
    private Packs: MongooseModel<Packs>;

    $onReady(): void {


        this.Packs.find().then(data => {
            if ( data.length == 0) {
                this.Packs.collection.insert([
                    {
                        POD_TYPE: "S",
                        FLAVOR: "V",
                        SIZE: "12",
                        DESC: "CP001 – small coffee pod, 1 dozen, vanilla",
                        REF: "CP001"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "V",
                        SIZE: "36",
                        DESC: "CP003 – small coffee pod, 3 dozen, vanilla",
                        REF: "CP003"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "C",
                        SIZE: "12",
                        DESC: "CP011 – small coffee pod, 1 dozen, caramel",
                        REF: "CP011"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "C",
                        SIZE: "36",
                        DESC: "CP013 – small coffee pod, 3 dozen, caramel",
                        REF: "CP013"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "P",
                        SIZE: "12",
                        DESC: "CP021 – small coffee pod, 1 dozen, psl",
                        REF: "CP021"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "P",
                        SIZE: "36",
                        DESC: "CP023 – small coffee pod, 3 dozen, psl",
                        REF: "CP023"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "M",
                        SIZE: "12",
                        DESC: "CP031 – small coffee pod, 1 dozen, mocha",
                        REF: "CP031"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "M",
                        SIZE: "36",
                        DESC: "CP033 – small coffee pod, 3 dozen, mocha",
                        REF: "CP033"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "H",
                        SIZE: "12",
                        DESC: "CP041 – small coffee pod, 1 dozen, hazelnut",
                        REF: "CP041"
                    },
                    {
                        POD_TYPE: "S",
                        FLAVOR: "H",
                        SIZE: "36",
                        DESC: "CP043 – small coffee pod, 3 dozen, hazelnut",
                        REF: "CP043"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "V",
                        SIZE: "12",
                        DESC: "CP101 – large coffee pod, 1 dozen, vanilla",
                        REF: "CP101"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "V",
                        SIZE: "36",
                        DESC: "CP103 – large coffee pod, 3 dozen, vanilla",
                        REF: "CP103"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "C",
                        SIZE: "12",
                        DESC: "CP111 – large coffee pod, 1 dozen, caramel",
                        REF: "CP111"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "C",
                        SIZE: "36",
                        DESC: "CP113 – large coffee pod, 3 dozen, caramel",
                        REF: "CP113"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "P",
                        SIZE: "12",
                        DESC: "CP121 – large coffee pod, 1 dozen, psl",
                        REF: "CP121"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "P",
                        SIZE: "36",
                        DESC: "CP123 – large coffee pod, 3 dozen, psl",
                        REF: "CP123"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "M",
                        SIZE: "12",
                        DESC: "CP131 – large coffee pod, 1 dozen, mocha",
                        REF: "CP131"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "M",
                        SIZE: "36",
                        DESC: "CP133 – large coffee pod, 3 dozen, mocha",
                        REF: "CP133"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "H",
                        SIZE: "12",
                        DESC: "CP141 – large coffee pod, 1 dozen, hazelnut",
                        REF: "CP141"
                    },
                    {
                        POD_TYPE: "L",
                        FLAVOR: "H",
                        SIZE: "36",
                        DESC: "CP143 – large coffee pod, 3 dozen, hazelnut",
                        REF: "CP143"
                    },
                    {
                        POD_TYPE: "E",
                        FLAVOR: "V",
                        SIZE: "36",
                        DESC: "EP003 – espresso pod, 3 dozen, vanilla",
                        REF: "EP003"
                    },
                    {
                        POD_TYPE: "E",
                        FLAVOR: "V",
                        SIZE: "60",
                        DESC: "EP005 – espresso pod, 5 dozen, vanilla",
                        REF: "EP005"
                    },
                    {
                        POD_TYPE: "E",
                        FLAVOR: "V",
                        SIZE: "84",
                        DESC: "EP007 – espresso pod, 7 dozen, vanilla",
                        REF: "EP007"
                    },
                    {
                        POD_TYPE: "E",
                        FLAVOR: "C",
                        SIZE: "36",
                        DESC: "EP013 – espresso pod, 3 dozen, caramel",
                        REF: "EP013"
                    },
                    {
                        POD_TYPE: "E",
                        FLAVOR: "C",
                        SIZE: "60",
                        DESC: "EP015 – espresso pod, 5 dozen, caramel",
                        REF: "EP015"
                    },
                    {
                        POD_TYPE: "E",
                        FLAVOR: "C",
                        SIZE: "84",
                        DESC: "EP017 – espresso pod, 7 dozen, caramel",
                        REF: "EP017"
                    }

                ])
            }
        })
    }
}