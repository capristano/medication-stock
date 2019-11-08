export class Medication {

    public id: number;
    public name: string;
    public dosage: number;
    public unitMeasurement: string;
    public initialAmount: number;
    public currentAmount: number;
    public averagePrice: number;
    public amountQuarter1: number;
    public priceQuarter1: number;
    public amountQuarter2: number;
    public priceQuarter2: number;
    public amountQuarter3: number;
    public priceQuarter3: number;
    public amountQuarter4: number;
    public priceQuarter4: number;


    constructor(
        name?: string,
        dosage?: number,
        unitMeasurement?: string,
        initialAmount?: number
    ) {
        this.name = name;
        this.dosage = dosage;
        this.unitMeasurement = unitMeasurement;
        this.initialAmount = initialAmount;
    }

}
