/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ApiRecordUtils, knownRecordFactories} from "../runtimeSagasAndRecords";
import {List, Record, RecordOf} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";

import { Order } from './';

import { OrderStatusEnum } from "./";


export const OrderRecordProps = {
	recType: "OrderRecord" as "OrderRecord",
    id: null as string | null,
    petId: null as string | null,
    quantity: null as number | null,
    shipDate: null as Date | null,
    status: null as OrderStatusEnum | null,
    complete: null as boolean | null,
};

export type OrderRecordPropsType = typeof OrderRecordProps;
export const OrderRecord = Record(OrderRecordProps, OrderRecordProps.recType);
export type OrderRecord = RecordOf<OrderRecordPropsType>;

knownRecordFactories.set(OrderRecordProps.recType, OrderRecord);

export const OrderRecordEntityProps = {
	...OrderRecordProps,
	recType: "OrderRecordEntity" as "OrderRecordEntity",
};

export type OrderRecordEntityPropsType = typeof OrderRecordEntityProps;
export const OrderRecordEntity = Record(OrderRecordEntityProps, OrderRecordEntityProps.recType);
export type OrderRecordEntity = RecordOf<OrderRecordEntityPropsType>;

knownRecordFactories.set(OrderRecordEntityProps.recType, OrderRecordEntity);

class OrderRecordUtils extends ApiRecordUtils<Order, OrderRecord> {
	public normalize(apiObject: Order, asEntity?: boolean): Order {
		(apiObject as any).recType = asEntity ? "OrderRecordEntity" : "OrderRecord";
        if (apiObject.id) { (apiObject as any).id = apiObject.id.toString(); } 
        if (apiObject.petId) { (apiObject as any).petId = apiObject.petId.toString(); } 
		return apiObject;
	}

	public getSchema(): Schema {
	    return new schema.Entity("order", {
		});
	}
}

export const orderRecordUtils = new OrderRecordUtils();
