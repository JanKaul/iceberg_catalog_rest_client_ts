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
 * @interface CreateNamespaceRequest
 */
export interface CreateNamespaceRequest {
    /**
     * Reference to one or more levels of a namespace
     * @type {Array<string>}
     * @memberof CreateNamespaceRequest
     */
    namespace: Array<string>;
    /**
     * Configured string to string map of properties for the namespace
     * @type {{ [key: string]: string; }}
     * @memberof CreateNamespaceRequest
     */
    properties?: { [key: string]: string; };
}

/**
 * Check if a given object implements the CreateNamespaceRequest interface.
 */
export function instanceOfCreateNamespaceRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "namespace" in value;

    return isInstance;
}

export function CreateNamespaceRequestFromJSON(json: any): CreateNamespaceRequest {
    return CreateNamespaceRequestFromJSONTyped(json, false);
}

export function CreateNamespaceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNamespaceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namespace': json['namespace'],
        'properties': !exists(json, 'properties') ? undefined : json['properties'],
    };
}

export function CreateNamespaceRequestToJSON(value?: CreateNamespaceRequest | null): any {
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

