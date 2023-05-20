# MongoDB

MongoDB Atlas

- database as a service
  - don't need to manage mongodb yourself

Replica Set

- stored on multiple servers
- redundant
- high availability

## Atlas

Register CLI w/ an account

```sh
atlas auth register
```

Create MongoDB Atlas cluster in Atlas project `MDB_EDU`

```sh
atlas setup --clusterName myAtlasClusterEDU --provider AWS --currentIp --skipSampleData --username myAtlasDBUser --password myatlas-001 | tee atlas_cluster_details.txt

# press enter or Y
```

Load sample data

```sh
atlas clusters loadSampleData myAtlasClusterEDU
```

## Clusters

MongoDB Clusters: replica set or shared cluster

- Replication of a group of MongoDB servers
- Holds copies of the same data
- Production deployments: high availability & redundancy

How they work:

- Primary node: receives all write operations
- All changes are recorded in the operation log `oplog`
- Secondary nodes replicate the primary node's operation log & ensures the data sets are exactly the same as the primary node
- Replication is asynchronous

## MongoDB Overview

MongoDB is:

- General Purpose Document Database
- Structues data in documents, similar to JSON objects
- Relational databases store data in tables: rows & columns

Document Model:

- Easier/faster to plan how application data corresponds to data in db
- Model data of any shape/structure
  - Key-value pairs
  - Text
  - Geospatial indexes
  - Time-series
  - Graph Data
- 1 Format: Model & Query Data

Use cases for MongoDB:

- E-commerce
- Content management
- IoT & time-series data
- Trading & payments
- Gaming
- Mobile apps
- Real-time data & AI

Pros of MongoDB:

- Scalability
- Resilience
- Speed of development
- Privacy/security

Structure:

- Document: Basic unit of data in MongoDB
- Collection: Collection of document
- Database: Container for collections

Database > Collections > Documents

MongoDB => Core of Atlas

## Document Model

The document structure is:

- Displayed in JSON
- Stored in BSON
  - extension of JSON, with additional features
  - adds support to additional data types
    - json: string, object, array, null, etc.
    - bson: dates, object id's, number, more

Every document requires an ObjectID, a unique identifier

- Format: `_id`
- Acts as a _primary key_
- If a document is missing an `_id`, it is _automatically generated_

```json
{
  "key": "value",
  "key": "value",
  "key": "value",
},
{
  "_id": 1,
  "name": "AC3 Phone",
  "colors" : ["black", "silver"],
  "price" : 200,
  "available" : true
}
```

Documents can contain different fields.

Fields can contain different data types.

- Unlike relational databases
- Relational databases require a **table schema**, before inserting data

MongoDB has a flexible schema

- Iterate quickly & evolve

Flexible schema example:

```bson
<!-- original data structure -->
{
  "_id": ObjectID("20832089348023480"),
  "name": "chair",
  "price": 25.00
}

<!-- later, we add description -->
{
  "_id": ObjectID("20832089348023480"),
  "name": "chair",
  "price": 25.00,
  "description": "classic wooden chair"

}
```

With a relational database, making these changes would:

- run into complex chain of dependencies
- schema change scripts
- coordinate across engineering teams
- downtime when script executes

With MongoDB, schema changes can be made by:

- Update our classes to include the new field
- Start inserting new documents w/ new schema
- To add constraints to the structure of the data:
  - Add optional schema validation

## Documents

Field names:

- `_id` reserved, primary key
- fields cannot contain `null`
- field names can contain dots `.` and `$` dollar signs
  - added in MongoDB 5.0

Document limitations:

- BSON = 16 mb

BSON field order is important!

- `{a: 1, b: 1}` is EQUAL to `{a: 1, b: 1}`
- `{a: 1, b: 1}` is NOT EQUAL to `{b: 1, a: 1}`
- query engine may reorder fields during processing

### ObjectID

Common practices:

- Use `ObjectId`
- Use natural unique id if possible: saves space & avoids an additional index
- Generate auto-incrementing number
- Generate UUID

### Uses of Document Structure

Query filter documents:

- specify conditions that determine which records to select
- for read, update & delete
- use `<field>:<value>` expressions to specify **equality** conditions or **query operator** expressions

```js
{
  <field1>: <value1>,
  <field2>: { <operator>: <value> },
  ...
}
```

- Update Specification Documents
- Index Specification Documents

## BSON

BSON is:

- written in binary
- slow to read / fast to build/scan
- data larger than JSON data
- are encoded before storing / decoded before displaying
- not human readable: needs to be parased (machine-generated)
- used by databases to store data

Advantages:

- lightweight & traversable
- bson's binary structure encodes `type` & `length`
  - much faster to traverse compared to json
- has more data types compared to json

`$type` operator: query fields by their BSON type

- supports `number` alias for integer, decimal, double, long

## Indexes

Indexes:

- support efficient execution of queries
- should be considered for fields which your app reads often
