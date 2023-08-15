import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export type LocationDocument = HydratedDocument<locationData>;
export type cityDocument = HydratedDocument<city>;

@Schema()

export class city {
    @Prop()
    value: String;
}


// export class locationData   {
//     @Prop()
//     label: String;

//     @Prop()
//     location: String;

//     @Prop()
//     lat: String;

//     @Prop()
//     long: String;
// }


export const citySchema = SchemaFactory.createForClass(city)
// export const locationSchema = SchemaFactory.createForClass(locationData);