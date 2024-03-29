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
import type { TableRequirement } from './TableRequirement';
import {
    TableRequirementFromJSON,
    TableRequirementFromJSONTyped,
    TableRequirementToJSON,
} from './TableRequirement';
import type { TableUpdate } from './TableUpdate';
import {
    TableUpdateFromJSON,
    TableUpdateFromJSONTyped,
    TableUpdateToJSON,
} from './TableUpdate';

/**
 * 
 * @export
 * @interface CommitTableRequest
 */
export interface CommitTableRequest {
    /**
     * 
     * @type {Array<TableRequirement>}
     * @memberof CommitTableRequest
     */
    requirements: Array<TableRequirement>;
    /**
     * 
     * @type {Array<TableUpdate>}
     * @memberof CommitTableRequest
     */
    updates: Array<TableUpdate>;
}

/**
 * Check if a given object implements the CommitTableRequest interface.
 */
export function instanceOfCommitTableRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "requirements" in value;
    isInstance = isInstance && "updates" in value;

    return isInstance;
}

export function CommitTableRequestFromJSON(json: any): CommitTableRequest {
    return CommitTableRequestFromJSONTyped(json, false);
}

export function CommitTableRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommitTableRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'requirements': ((json['requirements'] as Array<any>).map(TableRequirementFromJSON)),
        'updates': ((json['updates'] as Array<any>).map(TableUpdateFromJSON)),
    };
}

export function CommitTableRequestToJSON(value?: CommitTableRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'requirements': ((value.requirements as Array<any>).map(TableRequirementToJSON)),
        'updates': ((value.updates as Array<any>).map(TableUpdateToJSON)),
    };
}

