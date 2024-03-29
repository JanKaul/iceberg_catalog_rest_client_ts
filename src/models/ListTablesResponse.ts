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
import type { TableIdentifier } from './TableIdentifier';
import {
    TableIdentifierFromJSON,
    TableIdentifierFromJSONTyped,
    TableIdentifierToJSON,
} from './TableIdentifier';

/**
 * 
 * @export
 * @interface ListTablesResponse
 */
export interface ListTablesResponse {
    /**
     * 
     * @type {Set<TableIdentifier>}
     * @memberof ListTablesResponse
     */
    identifiers?: Set<TableIdentifier>;
}

/**
 * Check if a given object implements the ListTablesResponse interface.
 */
export function instanceOfListTablesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListTablesResponseFromJSON(json: any): ListTablesResponse {
    return ListTablesResponseFromJSONTyped(json, false);
}

export function ListTablesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTablesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identifiers': !exists(json, 'identifiers') ? undefined : (new Set((json['identifiers'] as Array<any>).map(TableIdentifierFromJSON))),
    };
}

export function ListTablesResponseToJSON(value?: ListTablesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifiers': value.identifiers === undefined ? undefined : (Array.from(value.identifiers as Set<any>).map(TableIdentifierToJSON)),
    };
}

