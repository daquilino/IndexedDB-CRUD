# IndexedDB-CRUD
IndexedDB demo.


## TOPICS
- Create a DB
- Create an Object Store (similar to a table)
- Create an Index(es) 
- Transactions (queries)

## Basic CRUD Methods
Where **store** refers to object store transactions are run on.
- ### CREATE
  - **store.put(value, [key])** - Add the value to the store. The key is supplied only if the object store did not have keyPath or autoIncrement option. If there’s already a value with same key, it will be replaced.

  - **store.add(value, [key])** - Same as put, but if there’s already a value with the same key, then the request fails, and an error with the name "ConstraintError" is generated.
- ### READ
  - **store.get(query)** – search for the first value by a key or a range.
  
  - **store.getAll([query], [count])** – search for all values, limit by count if given.
  
  - **store.getKey(query)** – search for the first key that satisfies the query, usually a range.
  
  - **store.getAllKeys([query], [count])** – search for all keys that satisfy the query, usually a range, up to count if given.
  
  - **store.count([query])** – get the total count of keys that satisfy the query, usually a range.
- ### UPDATE
  - **store.put(value, [key])** - see above
- ### DELETE
  - **store.delete(query)** – delete matching values by query.

  - **store.clear()** - clear the entire store.






transaction basics
For every transaction
1. open a transaction
   - readonly – can only read, the default.
   - readwrite – can only read and write the data, but not create/remove/alter object stores.
2. get a refference to the store
3. do your stuff
4. onsuccess/onerroe
5. oncomplete



Resources
 - [https://javascript.info/indexeddb](https://javascript.info/indexeddb)