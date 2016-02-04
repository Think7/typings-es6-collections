// Type definitions for es6-collections v0.5.1
// Project: https://github.com/WebReflection/es6-collections/
// Definitions by: Ron Buckton <http://github.com/rbuckton>
// Modified for typings by: Think7 <http://github.com/Think7>

/* *****************************************************************************
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
 ***************************************************************************** */

export interface IteratorResult<T> {
    done: boolean;
    value?: T;
}

export interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

export interface ForEachable<T> {
    forEach(callbackfn: (value: T) => void): void;
}

export class Map<K, V> {
    constructor();
    constructor(iterable: ForEachable<[K, V]>);

    public clear(): void;
    public delete(key: K): boolean;
    public forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void;
    public get(key: K): V;
    public has(key: K): boolean;
    public set(key: K, value?: V): Map<K, V>;
    public entries(): Iterator<[K, V]>;
    public keys(): Iterator<K>;
    public values(): Iterator<V>;
    public size: number;
}

export class Set<T> {
    constructor();
    constructor(iterable: ForEachable<T>);

    public add(value: T): Set<T>;
    public clear(): void;
    public delete(value: T): boolean;
    public forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;
    public has(value: T): boolean;
    public entries(): Iterator<[T, T]>;
    public keys(): Iterator<T>;
    public values(): Iterator<T>;
    public size: number;
}

export class WeakMap<K, V> {
    constructor();
    constructor(iterable: ForEachable<[K, V]>);

    public delete(key: K): boolean;
    public clear(): void;
    public get(key: K): V;
    public has(key: K): boolean;
    public set(key: K, value?: V): WeakMap<K, V>;
}

export class WeakSet<T> {
    constructor();
    constructor(iterable: ForEachable<T>);

    public delete(value: T): boolean;
    public clear(): void;
    public add(value: T): WeakSet<T>;
    public has(value: T): boolean;
}

