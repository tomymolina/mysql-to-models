# mysql-to-models

A database JSON schema generator form an existing mysql database.

## Description

This app generates a full schema of a database with tables, columns, constraints and relationships from an existing database.


## Installation

1. Install nodejs v6 or greater.
4. Do `npm install -g mysql-to-models`.

## Usage

1. Do `mysql-to-models init` to create a database config file (only the first time).
2. Do `mysql-to-models generate [<config.json>] [<models.json>]` to generate the models file of the database.

More info is provided using `mysql-to-models --help`.

## License

Copyright 2016 Martín Molina Álvarez

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.