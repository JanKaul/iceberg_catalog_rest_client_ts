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
 * @interface SnapshotLogInner
 */
export interface SnapshotLogInner {
    /**
     * 
     * @type {number}
     * @memberof SnapshotLogInner
     */
    snapshotId: number;
    /**
     * 
     * @type {number}
     * @memberof SnapshotLogInner
     */
    timestampMs: number;
}

/**
 * Check if a given object implements the SnapshotLogInner interface.
 */
export function instanceOfSnapshotLogInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "snapshotId" in value;
    isInstance = isInstance && "timestampMs" in value;

    return isInstance;
}

export function SnapshotLogInnerFromJSON(json: any): SnapshotLogInner {
    return SnapshotLogInnerFromJSONTyped(json, false);
}

export function SnapshotLogInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SnapshotLogInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'snapshotId': json['snapshot-id'],
        'timestampMs': json['timestamp-ms'],
    };
}

export function SnapshotLogInnerToJSON(value?: SnapshotLogInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'snapshot-id': value.snapshotId,
        'timestamp-ms': value.timestampMs,
    };
}
