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

import { GetMatchingRolesResponse } from './';


import {
    MatchingRoles,
    ResponseMeta,
    MatchingRolesRecord,
    matchingRolesRecordUtils,
    ResponseMetaRecord,
    responseMetaRecordUtils,
} from './';

export const GetMatchingRolesResponseRecordProps = {
	recType: "GetMatchingRolesResponseRecord" as "GetMatchingRolesResponseRecord",
    meta: ResponseMetaRecord(),
    data: (MatchingRolesRecord(), null as MatchingRolesRecord | null),
};

export type GetMatchingRolesResponseRecordPropsType = typeof GetMatchingRolesResponseRecordProps;
export const GetMatchingRolesResponseRecord = Record(GetMatchingRolesResponseRecordProps, GetMatchingRolesResponseRecordProps.recType);
export type GetMatchingRolesResponseRecord = RecordOf<GetMatchingRolesResponseRecordPropsType>;

knownRecordFactories.set(GetMatchingRolesResponseRecordProps.recType, GetMatchingRolesResponseRecord);


class GetMatchingRolesResponseRecordUtils extends ApiRecordUtils<GetMatchingRolesResponse, GetMatchingRolesResponseRecord> {
	public normalize(apiObject: GetMatchingRolesResponse, asEntity?: boolean): GetMatchingRolesResponse {
		(apiObject as any).recType = "GetMatchingRolesResponseRecord";
        responseMetaRecordUtils.normalize(apiObject.meta);
        if (apiObject.data) { matchingRolesRecordUtils.normalize(apiObject.data); } 
		return apiObject;
	}

	public fromApiPassthrough(apiObject: GetMatchingRolesResponse): MatchingRolesRecord {
	    if (!apiObject.data) {return MatchingRolesRecord(); }
		const normalizedApiObject = matchingRolesRecordUtils.normalize(apiObject.data);
		return appFromJS(normalizedApiObject);
	}

	public fromApiPassthroughAsEntities(apiObject: GetMatchingRolesResponse): NormalizedRecordEntities {
	    console.log("entities revival not supported on this response");
		return {entities: {}, result: List<string>()};
	}
}

export const getMatchingRolesResponseRecordUtils = new GetMatchingRolesResponseRecordUtils();
