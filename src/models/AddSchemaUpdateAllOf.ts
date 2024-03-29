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
 * @interface AddSchemaUpdateAllOf
 */
export interface AddSchemaUpdateAllOf {
    /**
     * 
     * @type {Schema}
     * @memberof AddSchemaUpdateAllOf
     */
    schema: Schema;
}

/**
 * Check if a given object implements the AddSchemaUpdateAllOf interface.
 */
export function instanceOfAddSchemaUpdateAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "schema" in value;

    return isInstance;
}

export function AddSchemaUpdateAllOfFromJSON(json: any): AddSchemaUpdateAllOf {
    return AddSchemaUpdateAllOfFromJSONTyped(json, false);
}

export function AddSchemaUpdateAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddSchemaUpdateAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': SchemaFromJSON(json['schema']),
    };
}

export function AddSchemaUpdateAllOfToJSON(value?: AddSchemaUpdateAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': SchemaToJSON(value.schema),
    };
}

