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
 * @interface SetDefaultSpecUpdate
 */
export interface SetDefaultSpecUpdate {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultSpecUpdate
     */
    action: SetDefaultSpecUpdateActionEnum;
    /**
     * Partition spec ID to set as the default, or -1 to set last added spec
     * @type {number}
     * @memberof SetDefaultSpecUpdate
     */
    specId: number;
}


/**
 * @export
 */
export const SetDefaultSpecUpdateActionEnum = {
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
export type SetDefaultSpecUpdateActionEnum = typeof SetDefaultSpecUpdateActionEnum[keyof typeof SetDefaultSpecUpdateActionEnum];


/**
 * Check if a given object implements the SetDefaultSpecUpdate interface.
 */
export function instanceOfSetDefaultSpecUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "specId" in value;

    return isInstance;
}

export function SetDefaultSpecUpdateFromJSON(json: any): SetDefaultSpecUpdate {
    return SetDefaultSpecUpdateFromJSONTyped(json, false);
}

export function SetDefaultSpecUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetDefaultSpecUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'specId': json['spec-id'],
    };
}

export function SetDefaultSpecUpdateToJSON(value?: SetDefaultSpecUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'spec-id': value.specId,
    };
}

