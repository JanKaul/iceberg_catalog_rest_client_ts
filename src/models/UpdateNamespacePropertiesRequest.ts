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
 * @interface UpdateNamespacePropertiesRequest
 */
export interface UpdateNamespacePropertiesRequest {
    /**
     * 
     * @type {Set<string>}
     * @memberof UpdateNamespacePropertiesRequest
     */
    removals?: Set<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof UpdateNamespacePropertiesRequest
     */
    updates?: { [key: string]: string; };
}

/**
 * Check if a given object implements the UpdateNamespacePropertiesRequest interface.
 */
export function instanceOfUpdateNamespacePropertiesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateNamespacePropertiesRequestFromJSON(json: any): UpdateNamespacePropertiesRequest {
    return UpdateNamespacePropertiesRequestFromJSONTyped(json, false);
}

export function UpdateNamespacePropertiesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNamespacePropertiesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'removals': !exists(json, 'removals') ? undefined : json['removals'],
        'updates': !exists(json, 'updates') ? undefined : json['updates'],
    };
}

export function UpdateNamespacePropertiesRequestToJSON(value?: UpdateNamespacePropertiesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'removals': value.removals === undefined ? undefined : Array.from(value.removals as Set<any>),
        'updates': value.updates,
    };
}

