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
 * @interface RemoveSnapshotsUpdateAllOf
 */
export interface RemoveSnapshotsUpdateAllOf {
    /**
     * 
     * @type {Array<number>}
     * @memberof RemoveSnapshotsUpdateAllOf
     */
    snapshotIds: Array<number>;
}

/**
 * Check if a given object implements the RemoveSnapshotsUpdateAllOf interface.
 */
export function instanceOfRemoveSnapshotsUpdateAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "snapshotIds" in value;

    return isInstance;
}

export function RemoveSnapshotsUpdateAllOfFromJSON(json: any): RemoveSnapshotsUpdateAllOf {
    return RemoveSnapshotsUpdateAllOfFromJSONTyped(json, false);
}

export function RemoveSnapshotsUpdateAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveSnapshotsUpdateAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'snapshotIds': json['snapshot-ids'],
    };
}

export function RemoveSnapshotsUpdateAllOfToJSON(value?: RemoveSnapshotsUpdateAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'snapshot-ids': value.snapshotIds,
    };
}

