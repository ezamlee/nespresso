import { Inject, Module, OnReady } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { Machines } from "src/models/machine";


@Module()
export class MachineSeed implements OnReady {

    @Inject(Machines)
    private Machines: MongooseModel<Machines>;

    $onReady(): void {


        this.Machines.find().then(data => {
            if (data.length == 0) {
                this.Machines.collection.insert([
                    {
                        MACHINE_TYPE: 'S',
                        IS_WATERLINE_COMPATIABLE: false,
                        DESC: "CM001 – small machine, base model",
                        QUALITY: "B",
                        REF: "CM001"
                    }
                    , {
                        MACHINE_TYPE: 'S',
                        IS_WATERLINE_COMPATIABLE: false,
                        DESC: "CM002 – small machine, premium model",
                        QUALITY: "P",
                        REF: "CM002"
                    }
                    , {
                        MACHINE_TYPE: 'S',
                        IS_WATERLINE_COMPATIABLE: true,
                        DESC: "CM003 – small machine, deluxe model, water line compatible",
                        QUALITY: "D",
                        REF: "CM003"
                    }
                    , {
                        MACHINE_TYPE: 'L',
                        IS_WATERLINE_COMPATIABLE: false,
                        DESC: "CM101 – large machine, base model",
                        QUALITY: "B",
                        REF: "CM101"
                    }
                    , {
                        MACHINE_TYPE: 'L',
                        IS_WATERLINE_COMPATIABLE: true,
                        DESC: "CM102 – large machine, premium model, water line compatible",
                        QUALITY: "P",
                        REF: "CM102"
                    }
                    , {
                        MACHINE_TYPE: 'L',
                        IS_WATERLINE_COMPATIABLE: true,
                        DESC: "CM103 – large machine, deluxe model, water line compatible",
                        QUALITY: "D",
                        REF: "CM103"
                    }
                    , {
                        MACHINE_TYPE: 'E',
                        IS_WATERLINE_COMPATIABLE: false,
                        DESC: "EM001 – espresso machine, base model",
                        QUALITY: "B",
                        REF: "EM001"
                    }
                    , {
                        MACHINE_TYPE: 'E',
                        IS_WATERLINE_COMPATIABLE: false,
                        DESC: "EM002 – espresso machine, premium model",
                        QUALITY: "P",
                        REF: "EM002"
                    }
                    , {
                        MACHINE_TYPE: 'E',
                        IS_WATERLINE_COMPATIABLE: true,
                        DESC: "EM003 – espresso machine, deluxe model, water line compatible",
                        QUALITY: "D",
                        REF: "EM003"
                    }
                ])
            }
        })
    }
}