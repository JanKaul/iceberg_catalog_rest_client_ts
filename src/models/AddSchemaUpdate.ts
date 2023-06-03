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
import type { Schema } from './Schema';
import {
    SchemaFromJSON,
    SchemaFromJSONTyped,
    SchemaToJSON,
} from './Schema';

/**
 * 
 * @export
 * @interface AddSchemaUpdate
 */
export interface AddSchemaUpdate {
    /**
     * 
     * @type {string}
     * @memberof AddSchemaUpdate
     */
    action: AddSchemaUpdateActionEnum;
    /**
     * 
     * @type {Schema}
     * @memberof AddSchemaUpdate
     */
    schema: Schema;
}


/**
 * @export
 */
export const AddSchemaUpdateActionEnum = {
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
export type AddSchemaUpdateActionEnum = typeof AddSchemaUpdateActionEnum[keyof typeof AddSchemaUpdateActionEnum];


/**
 * Check if a given object implements the AddSchemaUpdate interface.
 */
export function instanceOfAddSchemaUpdate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "schema" in value;

    return isInstance;
}

export function AddSchemaUpdateFromJSON(json: any): AddSchemaUpdate {
    return AddSchemaUpdateFromJSONTyped(json, false);
}

export function AddSchemaUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddSchemaUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': json['action'],
        'schema': SchemaFromJSON(json['schema']),
    };
}

export function AddSchemaUpdateToJSON(value?: AddSchemaUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'schema': SchemaToJSON(value.schema),
    };
}
