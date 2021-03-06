import Relationship = require('./relationship.model');
import OneToManyRelationship = require('./one_to_many_relationship.model');
import _ = require('lodash');
import Table = require('./table.model');
import {Serializable, Deserializable, Deserialize, Serialize} from "xserializer";


@Serializable()
@Deserializable()
class ManyToManyRelationship extends Relationship {
    @Deserialize()
    private _relationship1 : OneToManyRelationship;
    @Deserialize()
    private _relationship2 : OneToManyRelationship;

    constructor(relationship1 : OneToManyRelationship, relationship2: OneToManyRelationship, index : number) {
        super(index);
        this._relationship1 = relationship1;
        this._relationship2 = relationship2;
    }

    @Serialize()
    get relationship1() {
        return this._relationship1;
    }

    @Serialize()
    get relationship2() {
        return this._relationship2;
    }

    /**
     * First "many side" table
     * 
     * @readonly
     * @type {Table}
     */
    @Serialize()
    get manySide1Table() {
        return this._relationship1.oneSideTable;
    }

    /**
     * Second "many side" table
     * 
     * @readonly
     * @type {Table}
     */
    @Serialize()
    get manySide2Table() {
        return this._relationship2.oneSideTable;
    }

    /**
     * Inner table
     * 
     * @readonly
     * @description The table create to join the many-to-many relationship
     * @type {Table}
     */
    @Serialize()
    get innerTable() {
        return this._relationship1.manySideTable;
    }

    @Serialize()
    get relationshipNameFromManySide2() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.manySide1Table.instanceName}In${_.upperFirst(this.innerTable.instanceName)}${sufix}`;
    }

    @Serialize()
    get relationshipNameFromManySide1() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.manySide2Table.instanceName}In${_.upperFirst(this.innerTable.instanceName)}${sufix}`;
    }

    @Serialize()
    get pluralRelationshipNameFromManySide2() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.manySide1Table.pluralInstanceName}In${_.upperFirst(this.innerTable.instanceName)}${sufix}`;
    }

    @Serialize()
    get pluralRelationshipNameFromManySide1() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.manySide2Table.pluralInstanceName}In${_.upperFirst(this.innerTable.instanceName)}${sufix}`;
    }

    @Serialize()
    get innerRelationshipNameFromManySide2() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.innerTable.instanceName}With${_.upperFirst(this.manySide1Table.instanceName)}${sufix}`;
    }

    @Serialize()
    get innerRelationshipNameFromManySide1() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.innerTable.instanceName}With${_.upperFirst(this.manySide2Table.instanceName)}${sufix}`;
    }

    @Serialize()
    get pluralInnerRelationshipNameFromManySide2() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.innerTable.pluralInstanceName}With${_.upperFirst(this.manySide1Table.pluralInstanceName)}${sufix}`;
    }

    @Serialize()
    get pluralInnerRelationshipNameFromManySide1() {
        let sufix  = '';

        if (this.numberOfRelationshipsWithSameTables > 1) {
            sufix = this.indexInSameTablesRelationships.toString();
        }

        return `${this.innerTable.pluralInstanceName}With${_.upperFirst(this.manySide2Table.pluralInstanceName)}${sufix}`;
    }

    getNameFromSide(side: Table) {
        if (side === this.manySide1Table) {
            return this.relationshipNameFromManySide1;
        } else {
            return this.relationshipNameFromManySide2;
        }
    }

    getPluralNameFromSide(side: Table) {
        if (side === this.manySide1Table) {
            return this.pluralRelationshipNameFromManySide1;
        } else {
            return this.pluralRelationshipNameFromManySide2;
        }
    }

    getInnerNameFromSide(side: Table) {
        if (side === this.manySide1Table) {
            return this.innerRelationshipNameFromManySide1;
        } else {
            return this.innerRelationshipNameFromManySide2;
        }
    }

    getPluralInnerNameFromSide(side: Table) {
        if (side === this.manySide1Table) {
            return this.pluralInnerRelationshipNameFromManySide1;
        } else {
            return this.pluralInnerRelationshipNameFromManySide2;
        }
    }

    @Serialize()
    get isBetweenEntities() {
        return this.manySide1Table.isEntity &&
            this.manySide2Table.isEntity;
    }

    /**
     * Check if two relationships involves the same tables
     * 
     * @param {ManyToManyRelationship} rel The relationship to compare
     * @return {boolean} Wether it involves the same tables or not
     */
    involvesSameTables(rel : ManyToManyRelationship) {
        return this.innerTable === rel.innerTable 
            && (
                (
                    this.manySide1Table === rel.manySide1Table
                    &&
                    this.manySide2Table === rel.manySide2Table
                )
                || (
                    this.manySide1Table === rel.manySide2Table
                    &&
                    this.manySide2Table === rel.manySide1Table
                )
            );
    }
          
}

export = ManyToManyRelationship;