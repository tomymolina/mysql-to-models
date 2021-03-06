"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Relationship = require('./relationship.model');
const xserializer_1 = require("xserializer");
let OneToXRelationship = class OneToXRelationship extends Relationship {
    constructor(name, index) {
        super(index);
        this._name = name;
        this._foreignKeys = [];
    }
    get foreignKeys() {
        return this._foreignKeys;
    }
    set foreignKeys(fks) {
        this._foreignKeys = fks;
    }
    addForeignKey(fk) {
        this._foreignKeys.push(fk);
    }
    get name() {
        return this._name;
    }
    involvesSameTables(rel) {
        throw new Error('Not implemented');
    }
    getNameFromSide(tableSide) {
        throw new Error('Not implemented');
    }
    getPluralNameFromSide(tableSide) {
        throw new Error('Not implemented');
    }
    getOtherSideColumn(column) {
        let otherSideColumn;
        let i = 0;
        while (!otherSideColumn && i < this.foreignKeys.length) {
            if (this.foreignKeys[i].referencedColumn === column) {
                otherSideColumn = this.foreignKeys[i].column;
            }
            else if (this.foreignKeys[i].column) {
                otherSideColumn = this.foreignKeys[i].referencedColumn;
            }
            i++;
        }
        if (!otherSideColumn) {
            throw new Error(`Column "${column.columnName}" not found in foreign keys of relationship "${this.name}"`);
        }
        return otherSideColumn;
    }
    get foreignKeysContainPrimaryKey() {
        return !!this.foreignKeys.find(fk => fk.column.isPrimaryKey);
    }
};
__decorate([
    xserializer_1.Deserialize()
], OneToXRelationship.prototype, "_name", void 0);
__decorate([
    xserializer_1.Deserialize()
], OneToXRelationship.prototype, "_foreignKeys", void 0);
__decorate([
    xserializer_1.Serialize()
], OneToXRelationship.prototype, "foreignKeys", null);
__decorate([
    xserializer_1.Serialize()
], OneToXRelationship.prototype, "name", null);
__decorate([
    xserializer_1.Serialize()
], OneToXRelationship.prototype, "foreignKeysContainPrimaryKey", null);
OneToXRelationship = __decorate([
    xserializer_1.Deserializable(),
    xserializer_1.Serializable()
], OneToXRelationship);
module.exports = OneToXRelationship;
//# sourceMappingURL=one_to_x_relationship.model.js.map