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
 * @interface SchemaAllOf
 */
export interface SchemaAllOf {
    /**
     * 
     * @type {number}
     * @memberof SchemaAllOf
     */
    readonly schemaId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof SchemaAllOf
     */
    identifierFieldIds?: Array<number>;
}

/**
 * Check if a given object implements the SchemaAllOf interface.
 */
export function instanceOfSchemaAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SchemaAllOfFromJSON(json: any): SchemaAllOf {
    return SchemaAllOfFromJSONTyped(json, false);
}

export function SchemaAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchemaAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schemaId': !exists(json, 'schema-id') ? undefined : json['schema-id'],
        'identifierFieldIds': !exists(json, 'identifier-field-ids') ? undefined : json['identifier-field-ids'],
    };
}

export function SchemaAllOfToJSON(value?: SchemaAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identifier-field-ids': value.identifierFieldIds,
    };
}

