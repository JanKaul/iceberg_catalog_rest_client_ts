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
 * @interface SetDefaultSortOrderUpdate
 */
export interface SetDefaultSortOrderUpdate {
    /**
     * 
     * @type {string}
     * @memberof SetDefaultSortOrderUpdate
     */
    action: SetDefaultSortOrderUpdateActionEnum;
    /**
     * Sort order ID to set as the default, or -1 to set last added sort order
     * @type {number}
     * @memberof SetDefaultSortOrderUpdate
     */
    sortOrderId: number;
}


/**
 * @export
 */
export const SetDefaultSortOrderUpdateActionEnum = {
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
export type SetDefaultSortOrderUpdateActionEnum = typeof SetDefaultSortOrderUpdateActionEnum[keyof typeof SetDefaultSortOrderUpdateActionEnum];


/**
 * Check if a given object implements the SetDefaultSortOrderUpdate interface.
 */
export function instanceOfSetDefaultSortOrderUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "sortOrderId" in value;

    return isInstance;
}

export function SetDefaultSortOrderUpdateFromJSON(json: any): SetDefaultSortOrderUpdate {
    return SetDefaultSortOrderUpdateFromJSONTyped(json, false);
}

export function SetDefaultSortOrderUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetDefaultSortOrderUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'sortOrderId': json['sort-order-id'],
    };
}

export function SetDefaultSortOrderUpdateToJSON(value?: SetDefaultSortOrderUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'sort-order-id': value.sortOrderId,
    };
}

