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
 * @interface RemoveSnapshotsUpdate
 */
export interface RemoveSnapshotsUpdate {
    /**
     * 
     * @type {string}
     * @memberof RemoveSnapshotsUpdate
     */
    action: RemoveSnapshotsUpdateActionEnum;
    /**
     * 
     * @type {Array<number>}
     * @memberof RemoveSnapshotsUpdate
     */
    snapshotIds: Array<number>;
}


/**
 * @export
 */
export const RemoveSnapshotsUpdateActionEnum = {
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
export type RemoveSnapshotsUpdateActionEnum = typeof RemoveSnapshotsUpdateActionEnum[keyof typeof RemoveSnapshotsUpdateActionEnum];


/**
 * Check if a given object implements the RemoveSnapshotsUpdate interface.
 */
export function instanceOfRemoveSnapshotsUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "snapshotIds" in value;

    return isInstance;
}

export function RemoveSnapshotsUpdateFromJSON(json: any): RemoveSnapshotsUpdate {
    return RemoveSnapshotsUpdateFromJSONTyped(json, false);
}

export function RemoveSnapshotsUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveSnapshotsUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'snapshotIds': json['snapshot-ids'],
    };
}

export function RemoveSnapshotsUpdateToJSON(value?: RemoveSnapshotsUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'snapshot-ids': value.snapshotIds,
    };
}
