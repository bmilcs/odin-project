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

const format = `mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]`;
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

`: / ? # [ ] @` characters must be converted using percent encoding.

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

## Create & Inserts Documents

MongoDB auto creates collections if missing.

- `insertOne()`
  - example: `db.<collection>.insertOne()`
  -
- `insertMany()`
  - example: `db.<collection>.insertMany()`

```js
db.grades.insertOne([{student_id: ...}]);


db.grades.insertMany([
  {student_id: ...},
  {student_id: ...},
  {student_id: ...}
]);
```

Output:

```bson
{
  "acknowledged": true,
  "insertedId": ObjectId("...")
}
```

## Find Documents In a Collection

`find` method: `db.collection.find`

```sh
# select a collection
use training

# find zip codes in the us
db.zips.find();

# iterate through results
it
```

Retrieve a specific document

```sh
# documents containing a specific field
{ field: { $eq: <value> } }
{ field: <value> }

# example: docs w/ the state AZ
db.zips.find({ state: "AZ" })
```

`$in` operator: select all documents that have a field value equal to any of the values specified in an array

```sh
# format
db.<collection>.find({
  <field>: { $in:
    [<value>, <value>, ...],
  }
})

# example: find all documents w/ one of the following cities
db.zips.find({ city: { $in: ["PHOENIX", "CHICAGO"] } })

# more examples:
db.zips.find({ _id: ObjectId("5c8eccc1caa187d17ca6ed16") })
db.sales.find({ _id: ObjectId("5bd761dcae323e45a93ccff4") })
db.sales.find({ storeLocation: { $in: ["London","New York"] } })
```

## Find Documents Using Comparison Operators

- `$gt` greater than
- `$lt` less than
- `$lte` less than or equal to
- `$gte` greater than or equal to

Dot notation is used to reference object values

Examples:

```sh
db.sales.find({ "items.price": { $gt: 50}})
db.sales.find({ "items.price": { $lt: 50}})
db.sales.find({ "customer.age": { $lte: 65}})
db.sales.find({ "customer.age": { $gte: 65}})
```

Get a single document in collectin: `findOne()`

## Query Array Elements

Search for every document that contains a value (single value OR array)

```sh
# returns items with an array that contains the investmentStock
db.accounts.find( { "products": "investmentStock" } )
```

Find all documents that contain a value **only when inside an array**: `$elemMatch`

> Use the `$elemMatch` operator to find all documents that contain the specified subdocument

```sh
db.accounts.find({ "products": { $elemMatch: { $eq: "investmentStock" } } } )

db.sales.find({
  items: {
    $elemMatch: { name: "laptop", price: { $gt: 800 }, quantity: { $gte: 1 } },
  },
})

db.transactions.find({
    transactions: {
      $elemMatch: { amount: { $lte: 4500 }, transaction_code: "sell" },
    },
  })
```

## Finding Documents Using Logical Operators

- `$and`: all criteria must match
  - implicit `$and`: `db.collection.find({ <exp1>, <exp2>})`
- `$or`: one criteria must match

Examples:

```sh
# implicit and
db.routes.find({ "airline.name": "Southwest Airlines", stops: { $gte: 1 } })

# or
db.routes.find({
  $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }],
})

# and & or operators
db.routes.find({
  $and: [
    { $or: [{ dst_airport: "SEA" }, { src_airport: "SEA" }] },
    { $or: [{ "airline.name": "American Airlines" }, { airplane: 320 }] },
  ]
})

# example
db.sales.find({
  couponUsed: true,
  purchaseMethod: "Online",
  "customer.age": { $lte: 25 }
})

db.sales.find({
  $or: [{ "items.name": "pens" }, { "items.tags": "writing" }],
})
```

## Replacing Documents

`replaceOne`: replace a single document

- retain the same Id
- `db.collection.replaceOne(filter, replacement, options)`
  - filter: A query that matches the document to replace: ObjectId, unique, good option
  - replacement: new BSON object containing updated data, replaces all fields
  - options: An object that specifies options for the update.

```sh
db.books.replaceOne(
  {
    _id: ObjectId("6282afeb441a74a98dbbec4e"),
  },
  {
    title: "Data Science Fundamentals for Python and MongoDB",
    isbn: "1484235967",
    publishedDate: new Date("2018-5-10"),
    thumbnailUrl:
      "https://m.media-amazon.com/images/I/71opmUBc2wL._AC_UY218_.jpg",
    authors: ["David Paper"],
    categories: ["Data Science"],
  }
)

# lab example
db.birds.findOne({ common_name: "Northern Cardinal" })

db.birds.replaceOne(
  { _id: ObjectId("6286809e2f3fa87b7d86dccd") },
  {
    common_name: "Morning Dove",
    scientific_name: "Zenaida macroura",
    wingspan_cm: 37.23,
    habitat: ["urban areas", "farms", "grassland"],
    diet: ["seeds"],
  }
)
```

## Updating Documents

`updateOne` method: updates a single document - IF it exists

- `$set` operator: adds new fields/values OR replaces existing ones
- `$push` operator: appends element to array OR adds array w/ value as an element
- `upsert: true` option: update OR insert a document - insert a document w/ provided info IF it doesn't exist

```sh
# set: replaces field values
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $set: { subscribers: 98562 }, }
)

# upsert: creates a new doc if no documents match
db.podcasts.updateOne(
  { title: "The Developer Hub" },
  { $set: { topics: ["databases", "MongoDB"] } },
  { upsert: true }
)

# push adds elements to arrays
db.podcasts.updateOne(
  { _id: ObjectId("5e8f8f8f8f8f8f8f8f8f8f8") },
  { $push: { hosts: "Nic Raboy" } }
)

# example: add new array with values
db.birds.updateOne(
  {
    common_name: "Canada Goose",
  },
  {
    $set: {
      tags: ["geese", "herbivore", "migration"],
    },
  }
)

# increment sightings +1, set last_updated to a date & create document if it doesn't exist
db.birds.updateOne(
  {
    common_name: "Robin Redbreast",
  },
  {
    $inc: {
      "sightings": 1,
    },
    $set: {
      last_updated: new Date(),
    },
  },
  {
    upsert: true,
  }
)
```

## Find & Modify Documents

`findAndModify()`: Returns document that has just been updated

- `updateOne()` increment downloads field
- `findOne()` return document using \_id
- problem:
  - makes 2 round trips to the server
  - another user could update the same document between operations

```sh
db.podcasts.findAndModify({
  query: document to update,
  update: changes to be made,
  new: true # true: return updated doc, false: return original doc
});

# example
db.podcasts.findAndModify({
  query: { _id: ObjectId("6261a92dfee1ff300dc80bf1") },
  update: { $inc: { subscribers: 1 } },
  new: true,
})
```

## Update Several Documents

`updateMany()` method: updates all documents that match a filtered criteria

- Not an all-or-nothing operation
  - If update fails, the successful updates stick while failed documents will not
  - Requires running `updateMany()` again to update the remaining documents
- Lacks isolation
  - Updates will be visible as soon as they're performed
  - Not appropriate for some use cases
    - Business transactions

```sh
db.books.updateMany(
  { publishedDate: { $lt: new Date("2019-01-01") } },
  { $set: { status: "LEGACY" } }
)

# lab question
db.birds.updateMany(
  {
    common_name: {
      $in: ["Blue Jay", "Grackle"],
    },
  },
  {
    $set: {
      last_seen: ISODate("2022-01-01"),
    },
  }
)
```

## Delete Documents

- `deleteOne()`
- `deleteMany()`
  - can be used to delete filtered items OR all docs in a collection

```sh
# delete a single item
db.podcasts.find( { uploaded: ISODate("2020-01-01")});
db.podcasts.deleteOne({ _id: Objectid("6282c9862acb966e76bbf20a") })
db.birds.deleteOne({ _id: ObjectId("62cddf53c1d62bc45439bebf") })

# delete all docs that match a filter
db.podcasts.deleteMany({category: “crime”})
db.birds.deleteMany({ sightings_count: { $lte: 10 } })

# output
{ acknowledged: true, deletedCount: 1 }
```

## Sorting & Limiting Query Results

**Cursors**: pointer to result set of a query

- `find()` returns a cursor, points to the documents that match

Cursor Methods:

- chained to queries
- Perform actions on the result set
  - `sort()` or `limit()`

`sort()`:

- `sort({ field: 1 })` = ascending order
- `sort({ field: -1 })` = descending order
- capital letters first, lowercase letter second
  - modifiable with options

```sh
db.collection.find(<query>).sort(<sort>)

# 1 => ascending, -1 => descending | sorting for a property
db.companies.find({ category_code: "music" },{name: 1}).sort({ name: 1 });
#                                              ^ PROJECTION: only show name fields

# to ensure consistent sort order, add _id field
db.companies.find({ category_code: "music" }).sort({ name: 1, _id: 1 });

# sort by sales date
db.sales.find({}).sort({ saleDate: 1 })

# online purchases w/ coupon used, sorted from newest to oldest
db.sales.find({ purchaseMethod: "Online", couponUsed: true}).sort({ saleDate: -1 })
```

`limit()`:

- limiting results count can enhance performance

```sh
db.companies.find(<query>).limit(<number>)

# get top 3 companies with most number of employees
db.companies
  .find({ category_code: "music" })
  .sort({ number_of_employees: -1, _id: 1 })
  .limit(3);

# London stores, items containing laptop OR backpack OR printer paper, sorted new > old, last 3
db.sales.find({ "items.name": { $in: ["laptop", "backpack", "printer paper"] }, "storeLocation": "London", }).sort({ saleDate: -1, }).limit(3)
```

## Projections: Return Selected Fields From A Query

**Projections**: Limit what fields you get back from a query

- improves performance and reduces bandwidth
- 2nd argument in a `find()` query:
  - `field: 1` to INCLUDE the field
  - `field: 0` to EXCLUDE the field
- can't combine include & exclude projections EXCEPT for the `_id` field

```sh
# syntax
db.collection.find( <query>, <projection> )

# include field
db.collection.find( <query>, { <field> : 1 })

# Return all restaurant inspections - business name, result, and _id fields only
db.inspections.find(
  { sector: "Restaurant - 818" },
  { business_name: 1, result: 1 }
)

# exclude field
db.collection.find(query, { <field> : 0, <field>: 0 })

# Return all inspections with result of "Pass" or "Warning" - exclude date and zip code
db.inspections.find(
  { result: { $in: ["Pass", "Warning"] } },
  { date: 0, "address.zip": 0 }
)
```

## Counting Documents

Get total result count for a query

```sh
# syntax
db.collection.countDocuments( <query>, <options> )

# examples

# Count number of docs in trip collection
db.trips.countDocuments({})

# Count number of trips over 120 minutes by subscribers
db.trips.countDocuments({ tripduration: { $gt: 120 }, usertype: "Subscriber" })


db.sales.countDocuments({ items: { $elemMatch: { name: "laptop", price: { $lt: 600 } } } } )
```
