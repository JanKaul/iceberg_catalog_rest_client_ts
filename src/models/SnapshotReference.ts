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
 * @interface SnapshotReference
 */
export interface SnapshotReference {
    /**
     * 
     * @type {string}
     * @memberof SnapshotReference
     */
    type: SnapshotReferenceTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof SnapshotReference
     */
    snapshotId: number;
    /**
     * 
     * @type {number}
     * @memberof SnapshotReference
     */
    maxRefAgeMs?: number;
    /**
     * 
     * @type {number}
     * @memberof SnapshotReference
     */
    maxSnapshotAgeMs?: number;
    /**
     * 
     * @type {number}
     * @memberof SnapshotReference
     */
    minSnapshotsToKeep?: number;
}


/**
 * @export
 */
export const SnapshotReferenceTypeEnum = {
    Tag: 'tag',
    Branch: 'branch'
} as const;
export type SnapshotReferenceTypeEnum = typeof SnapshotReferenceTypeEnum[keyof typeof SnapshotReferenceTypeEnum];


/**
 * Check if a given object implements the SnapshotReference interface.
 */
export function instanceOfSnapshotReference(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "snapshotId" in value;

    return isInstance;
}

export function SnapshotReferenceFromJSON(json: any): SnapshotReference {
    return SnapshotReferenceFromJSONTyped(json, false);
}

export function SnapshotReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): SnapshotReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'snapshotId': json['snapshot-id'],
        'maxRefAgeMs': !exists(json, 'max-ref-age-ms') ? undefined : json['max-ref-age-ms'],
        'maxSnapshotAgeMs': !exists(json, 'max-snapshot-age-ms') ? undefined : json['max-snapshot-age-ms'],
        'minSnapshotsToKeep': !exists(json, 'min-snapshots-to-keep') ? undefined : json['min-snapshots-to-keep'],
    };
}

export function SnapshotReferenceToJSON(value?: SnapshotReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'snapshot-id': value.snapshotId,
        'max-ref-age-ms': value.maxRefAgeMs,
        'max-snapshot-age-ms': value.maxSnapshotAgeMs,
        'min-snapshots-to-keep': value.minSnapshotsToKeep,
    };
}

