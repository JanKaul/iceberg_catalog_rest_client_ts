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
import type { Term } from './Term';
import {
    TermFromJSON,
    TermFromJSONTyped,
    TermToJSON,
} from './Term';

/**
 * 
 * @export
 * @interface SetExpression
 */
export interface SetExpression {
    /**
     * 
     * @type {string}
     * @memberof SetExpression
     */
    type: string;
    /**
     * 
     * @type {Term}
     * @memberof SetExpression
     */
    term: Term;
    /**
     * 
     * @type {Array<object>}
     * @memberof SetExpression
     */
    values: Array<object>;
}

/**
 * Check if a given object implements the SetExpression interface.
 */
export function instanceOfSetExpression(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "term" in value;
    isInstance = isInstance && "values" in value;

    return isInstance;
}

export function SetExpressionFromJSON(json: any): SetExpression {
    return SetExpressionFromJSONTyped(json, false);
}

export function SetExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetExpression {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'term': TermFromJSON(json['term']),
        'values': json['values'],
    };
}

export function SetExpressionToJSON(value?: SetExpression | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'term': TermToJSON(value.term),
        'values': value.values,
    };
}

