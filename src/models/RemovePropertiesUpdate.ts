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
 * @interface RemovePropertiesUpdate
 */
export interface RemovePropertiesUpdate {
    /**
     * 
     * @type {string}
     * @memberof RemovePropertiesUpdate
     */
    action: RemovePropertiesUpdateActionEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof RemovePropertiesUpdate
     */
    removals: Array<string>;
}


/**
 * @export
 */
export const RemovePropertiesUpdateActionEnum = {
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
export type RemovePropertiesUpdateActionEnum = typeof RemovePropertiesUpdateActionEnum[keyof typeof RemovePropertiesUpdateActionEnum];


/**
 * Check if a given object implements the RemovePropertiesUpdate interface.
 */
export function instanceOfRemovePropertiesUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "removals" in value;

    return isInstance;
}

export function RemovePropertiesUpdateFromJSON(json: any): RemovePropertiesUpdate {
    return RemovePropertiesUpdateFromJSONTyped(json, false);
}

export function RemovePropertiesUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemovePropertiesUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'removals': json['removals'],
    };
}

export function RemovePropertiesUpdateToJSON(value?: RemovePropertiesUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'removals': value.removals,
    };
}
