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
 * @interface GetNamespaceResponse
 */
export interface GetNamespaceResponse {
    /**
     * Reference to one or more levels of a namespace
     * @type {Array<string>}
     * @memberof GetNamespaceResponse
     */
    namespace: Array<string>;
    /**
     * Properties stored on the namespace, if supported by the server. If the server does not support namespace properties, it should return null for this field. If namespace properties are supported, but none are set, it should return an empty object.
     * @type {{ [key: string]: string; }}
     * @memberof GetNamespaceResponse
     */
    properties?: { [key: string]: string; } | null;
}

/**
 * Check if a given object implements the GetNamespaceResponse interface.
 */
export function instanceOfGetNamespaceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "namespace" in value;

    return isInstance;
}

export function GetNamespaceResponseFromJSON(json: any): GetNamespaceResponse {
    return GetNamespaceResponseFromJSONTyped(json, false);
}

export function GetNamespaceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetNamespaceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': json['namespace'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
    };
}

export function GetNamespaceResponseToJSON(value?: GetNamespaceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'namespace': value.namespace,
        'properties': value.properties,
    };
}

