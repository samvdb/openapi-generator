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

import {ApiRecordUtils, knownRecordFactories, appFromJS, NormalizedRecordEntities} from "../runtimeSagasAndRecords";
import {List, Record, RecordOf} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";

import { GetProductTypesResponse } from './';


import {
    ProductType,
    ResponseMeta,
    ResponseMetaRecord,
    responseMetaRecordUtils,
} from './';

export const GetProductTypesResponseRecordProps = {
	recType: "GetProductTypesResponseRecord" as "GetProductTypesResponseRecord",
    meta: ResponseMetaRecord(),
    data: null as List<ProductType> | null,
};

export type GetProductTypesResponseRecordPropsType = typeof GetProductTypesResponseRecordProps;
export const GetProductTypesResponseRecord = Record(GetProductTypesResponseRecordProps, GetProductTypesResponseRecordProps.recType);
export type GetProductTypesResponseRecord = RecordOf<GetProductTypesResponseRecordPropsType>;

knownRecordFactories.set(GetProductTypesResponseRecordProps.recType, GetProductTypesResponseRecord);


class GetProductTypesResponseRecordUtils extends ApiRecordUtils<GetProductTypesResponse, GetProductTypesResponseRecord> {
	public normalize(apiObject: GetProductTypesResponse, asEntity?: boolean): GetProductTypesResponse {
		(apiObject as any).recType = "GetProductTypesResponseRecord";
        responseMetaRecordUtils.normalize(apiObject.meta);
		return apiObject;
	}

	public fromApiPassthrough(apiObject: GetProductTypesResponse): List<ProductType> {
	    return appFromJS(apiObject.data);
	}

	public fromApiPassthroughAsEntities(apiObject: GetProductTypesResponse): NormalizedRecordEntities {
	    console.log("entities revival not supported on this response");
		return {entities: {}, result: List<string>()};
	}
}

export const getProductTypesResponseRecordUtils = new GetProductTypesResponseRecordUtils();
