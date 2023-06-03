/* tslint:disable */
/* eslint-disable */
/**
 * Apache Iceberg REST Catalog API
 * Defines the specification for the first version of the REST Catalog API. Implementations should ideally support both Iceberg table specs v1 and v2, with priority given to v2.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * JSON error payload returned in a response with further details on the error
 * @export
 * @interface ErrorModel
 */
export interface ErrorModel {
    /**
     * Human-readable error message
     * @type {string}
     * @memberof ErrorModel
     */
    message: string;
    /**
     * Internal type definition of the error
     * @type {string}
     * @memberof ErrorModel
     */
    type: string;
    /**
     * HTTP response code
     * @type {number}
     * @memberof ErrorModel
     */
    code: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ErrorModel
     */
    stack?: Array<string>;
}

/**
 * Check if a given object implements the ErrorModel interface.
 */
export function instanceOfErrorModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "code" in value;

    return isInstance;
}

export function ErrorModelFromJSON(json: any): ErrorModel {
    return ErrorModelFromJSONTyped(json, false);
}

export function ErrorModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'type': json['type'],
        'code': json['code'],
        'stack': !exists(json, 'stack') ? undefined : json['stack'],
    };
}

export function ErrorModelToJSON(value?: ErrorModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'type': value.type,
        'code': value.code,
        'stack': value.stack,
    };
}

