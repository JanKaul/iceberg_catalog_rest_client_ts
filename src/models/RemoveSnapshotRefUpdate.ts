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
 * @interface RemoveSnapshotRefUpdate
 */
export interface RemoveSnapshotRefUpdate {
    /**
     * 
     * @type {string}
     * @memberof RemoveSnapshotRefUpdate
     */
    action: RemoveSnapshotRefUpdateActionEnum;
    /**
     * 
     * @type {string}
     * @memberof RemoveSnapshotRefUpdate
     */
    refName: string;
}


/**
 * @export
 */
export const RemoveSnapshotRefUpdateActionEnum = {
    UpgradeFormatVersion: 'upgrade-format-version',
    AddSchema: 'add-schema',
    SetCurrentSchema: 'set-current-schema',
    AddSpec: 'add-spec',
    SetDefaultSpec: 'set-default-spec',
    AddSortOrder: 'add-sort-order',
    SetDefaultSortOrder: 'set-default-sort-order',
    AddSnapshot: 'add-snapshot',
    SetSnapshotRef: 'set-snapshot-ref',
    RemoveSnapshots: 'remove-snapshots',
    RemoveSnapshotRef: 'remove-snapshot-ref',
    SetLocation: 'set-location',
    SetProperties: 'set-properties',
    RemoveProperties: 'remove-properties'
} as const;
export type RemoveSnapshotRefUpdateActionEnum = typeof RemoveSnapshotRefUpdateActionEnum[keyof typeof RemoveSnapshotRefUpdateActionEnum];


/**
 * Check if a given object implements the RemoveSnapshotRefUpdate interface.
 */
export function instanceOfRemoveSnapshotRefUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "refName" in value;

    return isInstance;
}

export function RemoveSnapshotRefUpdateFromJSON(json: any): RemoveSnapshotRefUpdate {
    return RemoveSnapshotRefUpdateFromJSONTyped(json, false);
}

export function RemoveSnapshotRefUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveSnapshotRefUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'refName': json['ref-name'],
    };
}

export function RemoveSnapshotRefUpdateToJSON(value?: RemoveSnapshotRefUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'ref-name': value.refName,
    };
}

