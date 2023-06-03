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
 * @interface ListType
 */
export interface ListType {
    /**
     * 
     * @type {string}
     * @memberof ListType
     */
    type: ListTypeTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof ListType
     */
    elementId: number;
    /**
     * 
     * @type {Type}
     * @memberof ListType
     */
    element: Type;
    /**
     * 
     * @type {boolean}
     * @memberof ListType
     */
    elementRequired: boolean;
}


/**
 * @export
 */
export const ListTypeTypeEnum = {
    List: 'list'
} as const;
export type ListTypeTypeEnum = typeof ListTypeTypeEnum[keyof typeof ListTypeTypeEnum];


/**
 * Check if a given object implements the ListType interface.
 */
export function instanceOfListType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "element" in value;
    isInstance = isInstance && "elementRequired" in value;

    return isInstance;
}

export function ListTypeFromJSON(json: any): ListType {
    return ListTypeFromJSONTyped(json, false);
}

export function ListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'elementId': json['element-id'],
        'element': TypeFromJSON(json['element']),
        'elementRequired': json['element-required'],
    };
}

export function ListTypeToJSON(value?: ListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'element-id': value.elementId,
        'element': TypeToJSON(value.element),
        'element-required': value.elementRequired,
    };
}

