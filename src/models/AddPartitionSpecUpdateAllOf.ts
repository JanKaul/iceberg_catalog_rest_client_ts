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
import type { PartitionSpec } from './PartitionSpec';
import {
    PartitionSpecFromJSON,
    PartitionSpecFromJSONTyped,
    PartitionSpecToJSON,
} from './PartitionSpec';

/**
 * 
 * @export
 * @interface AddPartitionSpecUpdateAllOf
 */
export interface AddPartitionSpecUpdateAllOf {
    /**
     * 
     * @type {PartitionSpec}
     * @memberof AddPartitionSpecUpdateAllOf
     */
    spec: PartitionSpec;
}

/**
 * Check if a given object implements the AddPartitionSpecUpdateAllOf interface.
 */
export function instanceOfAddPartitionSpecUpdateAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "spec" in value;

    return isInstance;
}

export function AddPartitionSpecUpdateAllOfFromJSON(json: any): AddPartitionSpecUpdateAllOf {
    return AddPartitionSpecUpdateAllOfFromJSONTyped(json, false);
}

export function AddPartitionSpecUpdateAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddPartitionSpecUpdateAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'spec': PartitionSpecFromJSON(json['spec']),
    };
}

export function AddPartitionSpecUpdateAllOfToJSON(value?: AddPartitionSpecUpdateAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'spec': PartitionSpecToJSON(value.spec),
    };
}

