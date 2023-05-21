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

## Data Modeling

- data accessed together should be stored together
- documents in the same collection can contain different structures
  - polymorphism
- embedded document model
  - enables us to build complex relationships among data
- can normalize data by using database references
- **how your app uses data** > **how it's stored**
  - opposite of relational database
- store, query & use resources optimally (for performance)

### Data Relationships

Relationship types:

- One-to-one
  - data entity in one set connect to exactly on data entry in another
  - in relational dbs: directors table & movies table w/ a join
- One-to-many
  - data entity in one set is connected to any number of data entities in another set
  - movie with a cast of many actors
  - nested array
- Many-to-many
  - any number of data entities in one set are connected to any number of data entities in another set

Ways to model relationships:

- Embedding
  - Related data is inserted into your document
- Referencing
  - Refer to documents in another collection

Structure data to **match the way your app queries/updates it**

- data accessed together => stored together

### Embedding

Embedding or nested documents:

- 1-to-many
- many-to-many

```json
{
  "name": {
    "first": "bryan",
    "last": "miller"
  }
}
```

Warning

- Embedding data in a single document **can create LARGE documents**
  - Excessive memory & add latency for reads
  - Large docs must be read in FULL: slow performance
- Continuously adding data without limit **created unbounded documents**
  - may exceed the max BSON document size: 16mb
  - unbounded: schema antipatterns

### Referencing

References

- Relate 2 or more separate collections to one another
- Save `_id` field of one document in another document as a link between the two
- simple & sufficient for most use cases
- called "linking" or "data normalization"

Pros:

- no duplication of data
- smaller documents

Cons:

- querying from multiple documents costs **extra resources** & **impacts read performance**

### Choosing Referencing vs Embedding

| Embedding                              | Referencing                               |
| -------------------------------------- | ----------------------------------------- |
| Single query to retrieve data          | No duplication                            |
| Single operation to update/delete data | Smaller documents                         |
| Data duplication                       | Need to join data from multiple documents |
| Large documents                        |                                           |

### Scaling Data Model

Optimum Efficiency:

- query result times
- memory usage
- cpu usage
- storage

Avoid unbounded documents, or documents that grow indefinitely

- cause: embedding

Comments array problem as it grows larger:

- will take up more space in memory
- may impact write performance
  - as new comments are added, the entire document is rewritten into storage
- difficult to perform pagination
- comments can't be filtered for a single post
- all comments will have to be read
- maximum document size of 16 mb (storage problems)

Solution:

- create 2 collections:
  - blog_post
  - comments
- reference `blog_entry_id` in each comment

### Schema Tips

**Schema design patterns**: guidelines help devs plan, organize & model data

If best practices for schemas are not followed (Schema anti-pattern results):

- sub-optimal performance
- non-scalable solutions

Examples of schema anti-patterns:

- massive arrays
- mass number of collections
- bloated documents
- unnecessary indexes
- queries without indexes
- data accessed together, but stored in separate collections

Data Explorer in Atlas:

- Collections > Indexes: shows indexes & stats
  - Order by usage, drop unused indexes
- Collections > Schema Anti-patterns:
  - Gives you details on how to fix issues

Performance Advisor in Atlas:

- tells which indexes are redundant
- gives us suggestions

## Connecting to MongoDB

Connection Strings allows us to connect to our cluster.

- host
- options for connecting
  - shell
  - compass
  - applications

Two formats:

- standard format
  - standalone clusters, replica sets, sharded clusets
- dns seedless format
  - provide dns server list to our connection string
  - more flexibility to deployment
  - ability to change servers in rotation without reconfiguring our clients

Locating our connections string:

- database menu > connect button > drivers

```js
const connectionString =
  "mongodb+srv://myAtlasDBUser:<password>@cluster.usqsf.mongodb.net/?retryWrites=true&w=majority";
```

- `mongodb` = mongodb connection string (seedless dns entry)
- `+srv` = sets tls security to true & use dns seedly
- `username:password`
- `@cluster.usqsf.mongodb.net` host & optional port (default: 27017)
- `?retryWrites=true&w=majority";` additional options
  - auto retry on write fails
  - connection timeout
  - tls / ssl
  - connection pooling
  - etc.

## Connecting To Cluster

Install mongosh

```sh
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

sudo apt-get update

sudo apt-get install -y mongodb-mongosh
```

Connect to the shell by using the connectionString.

- Create user/password first in Atlas under Security > Database Access

```sh
# get connection string
atlas clusters connectionStrings describe myAtlasClusterEDU

# get connection string & store in env variable
MY_ATLAS_CONNECTION_STRING=$(atlas clusters connectionStrings describe myAtlasClusterEDU | sed "1 d")
mongosh -u myAtlasDBUser -p myatlas-001 $MY_ATLAS_CONNECTION_STRING

# output a document describing the role of mongod instance using mongosh
db.hello()
```

MongoDB Compass: GUI connection

- Download/install
- Copy connection string via site

Features:

- Aggregations: can be exported to any language
- Schema: analyze structure & optimize schema
- Explain Plan: understand performance of queries
- Indexes: indexes that exist on a collection, understand performance
- Validation: enforce structure of docs on update/insert

MongoDB Drivers:

- Allow you to connect to MongoDB clusters in your language of choice
- [NodeJS Drivers Documentation](https://www.mongodb.com/docs/drivers/node/current/usage-examples/)
- [Developer Center: Code Examples](https://www.mongodb.com/developer/search/?s=&technology=Nodejs&sortMode=0)

## Troubleshooting Connection Errors

- User authentication errors
  - `MongoServerError: bad auth : Authentication failed.`
  - Fill in password to connection string
- Network errors
  - `MongoServerSelectionError: connection <monitor> to 34.239.188.169:27017 closed`
  - Add IP address to security > network access in Atlas