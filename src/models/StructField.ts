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
import type { Type } from './Type';
import {
    TypeFromJSON,
    TypeFromJSONTyped,
    TypeToJSON,
} from './Type';

/**
 * 
 * @export
 * @interface StructField
 */
export interface StructField {
    /**
     * 
     * @type {number}
     * @memberof StructField
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StructField
     */
    name: string;
    /**
     * 
     * @type {Type}
     * @memberof StructField
     */
    type: Type;
    /**
     * 
     * @type {boolean}
     * @memberof StructField
     */
    required: boolean;
    /**
     * 
     * @type {string}
     * @memberof StructField
     */
    doc?: string;
}

/**
 * Check if a given object implements the StructField interface.
 */
export function instanceOfStructField(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "required" in value;

    return isInstance;
}

export function StructFieldFromJSON(json: any): StructField {
    return StructFieldFromJSONTyped(json, false);
}

export function StructFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': TypeFromJSON(json['type']),
        'required': json['required'],
        'doc': !exists(json, 'doc') ? undefined : json['doc'],
    };
}

export function StructFieldToJSON(value?: StructField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': TypeToJSON(value.type),
        'required': value.required,
        'doc': value.doc,
    };
}

