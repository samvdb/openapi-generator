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

import { MatchingRoles } from './';


import {
    Role,
    RoleRecord,
    roleRecordUtils,
} from './';

export const MatchingRolesRecordProps = {
	recType: "MatchingRolesRecord" as "MatchingRolesRecord",
    songRoles: (RoleRecord(), List<RoleRecord>()),
    messagingRoles: (RoleRecord(), List<RoleRecord>()),
};

export type MatchingRolesRecordPropsType = typeof MatchingRolesRecordProps;
export const MatchingRolesRecord = Record(MatchingRolesRecordProps, MatchingRolesRecordProps.recType);
export type MatchingRolesRecord = RecordOf<MatchingRolesRecordPropsType>;

knownRecordFactories.set(MatchingRolesRecordProps.recType, MatchingRolesRecord);


class MatchingRolesRecordUtils extends ApiRecordUtils<MatchingRoles, MatchingRolesRecord> {
	public normalize(apiObject: MatchingRoles, asEntity?: boolean): MatchingRoles {
		(apiObject as any).recType = "MatchingRolesRecord";
        roleRecordUtils.normalizeArray(apiObject.songRoles);
        roleRecordUtils.normalizeArray(apiObject.messagingRoles);
		return apiObject;
	}
}

export const matchingRolesRecordUtils = new MatchingRolesRecordUtils();
