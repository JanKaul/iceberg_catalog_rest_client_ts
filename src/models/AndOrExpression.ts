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
import type { Expression } from './Expression';
import {
    ExpressionFromJSON,
    ExpressionFromJSONTyped,
    ExpressionToJSON,
} from './Expression';

/**
 * 
 * @export
 * @interface AndOrExpression
 */
export interface AndOrExpression {
    /**
     * 
     * @type {string}
     * @memberof AndOrExpression
     */
    type: string;
    /**
     * 
     * @type {Expression}
     * @memberof AndOrExpression
     */
    left: Expression;
    /**
     * 
     * @type {Expression}
     * @memberof AndOrExpression
     */
    right: Expression;
}

/**
 * Check if a given object implements the AndOrExpression interface.
 */
export function instanceOfAndOrExpression(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "left" in value;
    isInstance = isInstance && "right" in value;

    return isInstance;
}

export function AndOrExpressionFromJSON(json: any): AndOrExpression {
    return AndOrExpressionFromJSONTyped(json, false);
}

export function AndOrExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AndOrExpression {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'left': ExpressionFromJSON(json['left']),
        'right': ExpressionFromJSON(json['right']),
    };
}

export function AndOrExpressionToJSON(value?: AndOrExpression | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'left': ExpressionToJSON(value.left),
        'right': ExpressionToJSON(value.right),
    };
}
