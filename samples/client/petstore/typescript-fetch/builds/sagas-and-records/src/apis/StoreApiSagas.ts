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


import {Api} from './';
import {List} from 'immutable';
import {all, fork, put, takeLatest} from "redux-saga/effects";
import {apiCall, createSagaAction as originalCreateSagaAction, BasePayloadApiAction, NormalizedRecordEntities, normalizedEntities} from "../runtimeSagasAndRecords";
import {Action} from "redux-ts-simple";

import {
    Order,
    OrderRecord,
    orderRecordUtils,
} from '../models';



const createSagaAction = <T>(type: string) => originalCreateSagaAction<T>(type, {namespace: "api_storeApi"});

export const storeApiSagaMap = new Map<string, () => Generator<any, any, any>>([
    	["deleteOrder", deleteOrderSaga],
    	["getInventory", getInventorySaga],
    	["getOrderById", getOrderByIdSaga],
    	["placeOrder", placeOrderSaga],
	]
);

export function *storeApiAllSagas() {
	yield all([...storeApiSagaMap.values()].map(actionSaga => fork(actionSaga)));
}

//region deleteOrder

export interface PayloadDeleteOrder extends PayloadDeleteOrderRequest {
}

export interface PayloadDeleteOrderRequest {
    orderId: string;
}

export const deleteOrderRequest = createSagaAction<PayloadDeleteOrderRequest>("deleteOrderRequest");
export const deleteOrderSuccess = createSagaAction<void>("deleteOrderSuccess");
export const deleteOrderFailure = createSagaAction<any>("deleteOrderFailure");

export const deleteOrder = createSagaAction<PayloadDeleteOrder>("deleteOrder");

export function *deleteOrderSaga() {
	yield takeLatest(deleteOrder, deleteOrderSagaImp);
}

export function *deleteOrderSagaImp(action: Action<PayloadDeleteOrder>) {
	try {
        const {
            orderId,
   		} = action.payload;

		yield put(deleteOrderRequest(action.payload));

		const response = yield apiCall(Api.storeApi, Api.storeApi.deleteOrder,
            orderId,
		);

		    yield put(deleteOrderSuccess());

        return undefined;
	} catch (error) {
		yield put(deleteOrderFailure(error));
		return error;
	}
}
//endregion
//region getInventory

export interface PayloadGetInventory {
}


export const getInventoryRequest = createSagaAction<void>("getInventoryRequest");
export const getInventorySuccess = createSagaAction<{ [key: string]: number; }>("getInventorySuccess");
export const getInventoryFailure = createSagaAction<any>("getInventoryFailure");

export const getInventory = createSagaAction<PayloadGetInventory>("getInventory");

export function *getInventorySaga() {
	yield takeLatest(getInventory, getInventorySagaImp);
}

export function *getInventorySagaImp(action: Action<PayloadGetInventory>) {
	try {

		yield put(getInventoryRequest());

		const response: Required<{ [key: string]: number; }> = yield apiCall(Api.storeApi, Api.storeApi.getInventory,
		);

		let successReturnValue: any = undefined;
		    yield put(getInventorySuccess(response));

		return response;
	} catch (error) {
		yield put(getInventoryFailure(error));
		return error;
	}
}
//endregion
//region getOrderById

export interface PayloadGetOrderById extends PayloadGetOrderByIdRequest, BasePayloadApiAction {
}

export interface PayloadGetOrderByIdRequest {
    orderId: number;
}

export const getOrderByIdRequest = createSagaAction<PayloadGetOrderByIdRequest>("getOrderByIdRequest");
export const getOrderByIdSuccess = createSagaAction<OrderRecord>("getOrderByIdSuccess");
export const getOrderByIdSuccess_Entities = createSagaAction<NormalizedRecordEntities>("getOrderByIdSuccess_Entities");
export const getOrderByIdFailure = createSagaAction<any>("getOrderByIdFailure");

export const getOrderById = createSagaAction<PayloadGetOrderById>("getOrderById");

export function *getOrderByIdSaga() {
	yield takeLatest(getOrderById, getOrderByIdSagaImp);
}

export function *getOrderByIdSagaImp(action: Action<PayloadGetOrderById>) {
	try {
		const {toEntities, toInlined = !toEntities, ...requestPayload} = action.payload;
        const {
            orderId,
   		} = action.payload;

		yield put(getOrderByIdRequest(requestPayload));

		const response: Required<Order> = yield apiCall(Api.storeApi, Api.storeApi.getOrderById,
            orderId,
		);

		let successReturnValue: any = undefined;
		if (toEntities) {
            successReturnValue = orderRecordUtils.fromApiArrayAsEntities([response]);
			yield put(normalizedEntities(successReturnValue));
			yield put(getOrderByIdSuccess_Entities(successReturnValue));
		}
		if (toInlined) {
            successReturnValue = orderRecordUtils.fromApi(response);
		    yield put(getOrderByIdSuccess(successReturnValue));
		}

        return successReturnValue;
	} catch (error) {
		yield put(getOrderByIdFailure(error));
		return error;
	}
}
//endregion
//region placeOrder

export interface PayloadPlaceOrder extends PayloadPlaceOrderRequest, BasePayloadApiAction {
}

export interface PayloadPlaceOrderRequest {
    body: OrderRecord;
}

export const placeOrderRequest = createSagaAction<PayloadPlaceOrderRequest>("placeOrderRequest");
export const placeOrderSuccess = createSagaAction<OrderRecord>("placeOrderSuccess");
export const placeOrderSuccess_Entities = createSagaAction<NormalizedRecordEntities>("placeOrderSuccess_Entities");
export const placeOrderFailure = createSagaAction<any>("placeOrderFailure");

export const placeOrder = createSagaAction<PayloadPlaceOrder>("placeOrder");

export function *placeOrderSaga() {
	yield takeLatest(placeOrder, placeOrderSagaImp);
}

export function *placeOrderSagaImp(action: Action<PayloadPlaceOrder>) {
	try {
		const {toEntities, toInlined = !toEntities, ...requestPayload} = action.payload;
        const {
            body,
   		} = action.payload;

		yield put(placeOrderRequest(requestPayload));

		const response: Required<Order> = yield apiCall(Api.storeApi, Api.storeApi.placeOrder,
            orderRecordUtils.toApi(body),
		);

		let successReturnValue: any = undefined;
		if (toEntities) {
            successReturnValue = orderRecordUtils.fromApiArrayAsEntities([response]);
			yield put(normalizedEntities(successReturnValue));
			yield put(placeOrderSuccess_Entities(successReturnValue));
		}
		if (toInlined) {
            successReturnValue = orderRecordUtils.fromApi(response);
		    yield put(placeOrderSuccess(successReturnValue));
		}

        return successReturnValue;
	} catch (error) {
		yield put(placeOrderFailure(error));
		return error;
	}
}
//endregion
