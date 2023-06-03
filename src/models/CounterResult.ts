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
 * 
 * @export
 * @interface CounterResult
 */
export interface CounterResult {
    /**
     * 
     * @type {string}
     * @memberof CounterResult
     */
    unit: string;
    /**
     * 
     * @type {number}
     * @memberof CounterResult
     */
    value: number;
}

/**
 * Check if a given object implements the CounterResult interface.
 */
export function instanceOfCounterResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "unit" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CounterResultFromJSON(json: any): CounterResult {
    return CounterResultFromJSONTyped(json, false);
}

export function CounterResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CounterResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'unit': json['unit'],
        'value': json['value'],
    };
}

export function CounterResultToJSON(value?: CounterResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'unit': value.unit,
        'value': value.value,
    };
}

