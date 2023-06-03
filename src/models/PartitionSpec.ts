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
import type { PartitionField } from './PartitionField';
import {
    PartitionFieldFromJSON,
    PartitionFieldFromJSONTyped,
    PartitionFieldToJSON,
} from './PartitionField';

/**
 * 
 * @export
 * @interface PartitionSpec
 */
export interface PartitionSpec {
    /**
     * 
     * @type {number}
     * @memberof PartitionSpec
     */
    readonly specId?: number;
    /**
     * 
     * @type {Array<PartitionField>}
     * @memberof PartitionSpec
     */
    fields: Array<PartitionField>;
}

/**
 * Check if a given object implements the PartitionSpec interface.
 */
export function instanceOfPartitionSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "fields" in value;

    return isInstance;
}

export function PartitionSpecFromJSON(json: any): PartitionSpec {
    return PartitionSpecFromJSONTyped(json, false);
}

export function PartitionSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartitionSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'specId': !exists(json, 'spec-id') ? undefined : json['spec-id'],
        'fields': ((json['fields'] as Array<any>).map(PartitionFieldFromJSON)),
    };
}

export function PartitionSpecToJSON(value?: PartitionSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fields': ((value.fields as Array<any>).map(PartitionFieldToJSON)),
    };
}

