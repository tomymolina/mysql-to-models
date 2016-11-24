"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Indexable = require('./indexable.model');
class Relationship extends Indexable {
    constructor(index) {
        super(index);
        this._numberOfRelationshipsWithSameTables = 1;
        this._indexInSameTablesRelationships = 0;
    }
    /**
     * The number of relationships (of the same type) with the same tables involved
     *
     * @type {number}
     */
    get numberOfRelationshipsWithSameTables() {
        return this._numberOfRelationshipsWithSameTables;
    }
    set numberOfRelationshipsWithSameTables(num) {
        this._numberOfRelationshipsWithSameTables = num;
    }
    /**
     * The index in the same tables relationships
     *
     * @description There are another relationships that involve the same tables. Every relationship has an index.
     * @type {number}
     */
    get indexInSameTablesRelationships() {
        return this._indexInSameTablesRelationships;
    }
    set indexInSameTablesRelationships(index) {
        this._indexInSameTablesRelationships = index;
    }
}
__decorate([
    Indexable.ToJSON()
], Relationship.prototype, "numberOfRelationshipsWithSameTables", null);
__decorate([
    Indexable.ToJSON()
], Relationship.prototype, "indexInSameTablesRelationships", null);
module.exports = Relationship;
//# sourceMappingURL=relationship.model.js.map