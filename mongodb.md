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
- Production deployments: high availability & redudancy

How they work:

- Primary node: receives all write operations
- All changes are recorded in the operation log `oplog`
- Secondary nodes replicate the primary node's operation log & ensures the data sets are exactly the same as the primary node
- Replication is asynchronous
