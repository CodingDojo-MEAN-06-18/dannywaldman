## 1. Create a database called 'my_first_db'.

```zsh
> use my_first_db
switched to db my_first_db
```
## 2. Create students collection.

```zsh
> db.createCollection('students') 
{ "ok" : 1 }
```

## 3. Create 5 students with the appropriate info.

```zsh
> db.students.insert({name: 'one', home_state: 'texas', lucky_number: 1, birthday: {month: 1, day: 1, year: 1971}})
WriteResult({ "nInserted" : 1 })
> db.students.insert({name: 'two', home_state: 'texas', lucky_number: 2, birthday: {month: 2, day: 2, year: 1972}})
WriteResult({ "nInserted" : 1 })
> db.students.insert({name: 'three', home_state: 'texas', lucky_number: 3, birthday: {month: 3, day: 3, year: 1973}})
WriteResult({ "nInserted" : 1 })
> db.students.insert({name: 'four', home_state: 'texas', lucky_number: 4, birthday: {month: 4, day: 4, year: 1974}})
WriteResult({ "nInserted" : 1 })
> db.students.insert({name: 'five', home_state: 'texas', lucky_number: 5, birthday: {month: 5, day: 5, year: 1975}})
WriteResult({ "nInserted" : 1 })
```

## 4. Get all students.

```zsh
> db.students.find({}).pretty()
{
        "_id" : ObjectId("5b3eb72cd6c3696f6daa4360"),
        "name" : "one",
        "home_state" : "texas",
        "lucky_number" : 1,
        "birthday" : {
                "month" : 1,
                "day" : 1,
                "year" : 1971
        }
}
{
        "_id" : ObjectId("5b3eb749d6c3696f6daa4361"),
        "name" : "two",
        "home_state" : "texas",
        "lucky_number" : 2,
        "birthday" : {
                "month" : 2,
                "day" : 2,
                "year" : 1972
        }
}
{
        "_id" : ObjectId("5b3eb759d6c3696f6daa4362"),
        "name" : "three",
        "home_state" : "texas",
        "lucky_number" : 3,
        "birthday" : {
                "month" : 3,
                "day" : 3,
                "year" : 1973
        }
}
{
        "_id" : ObjectId("5b3eb772d6c3696f6daa4363"),
        "name" : "four",
        "home_state" : "texas",
        "lucky_number" : 4,
        "birthday" : {
                "month" : 4,
                "day" : 4,
                "year" : 1974
        }
}
{
        "_id" : ObjectId("5b3eb78cd6c3696f6daa4364"),
        "name" : "five",
        "home_state" : "texas",
        "lucky_number" : 5,
        "birthday" : {
                "month" : 5,
                "day" : 5,
                "year" : 1975
        }
}
```

## 5. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

```zsh
> db.students.find({$or: [{home_state:"California"}, {home_state:"washington"} ,{home_state:"texas"}]})
{ "_id" : ObjectId("5b3eb72cd6c3696f6daa4360"), "name" : "one", "home_state" : "texas", "lucky_number" : 1, "birthday" : { "month" : 1, "day" : 1, "year" : 1971 } }
{ "_id" : ObjectId("5b3eb749d6c3696f6daa4361"), "name" : "two", "home_state" : "texas", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 1972 } }
{ "_id" : ObjectId("5b3eb759d6c3696f6daa4362"), "name" : "three", "home_state" : "texas", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1973 } }
{ "_id" : ObjectId("5b3eb772d6c3696f6daa4363"), "name" : "four", "home_state" : "texas", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 4, "year" : 1974 } }
{ "_id" : ObjectId("5b3eb78cd6c3696f6daa4364"), "name" : "five", "home_state" : "texas", "lucky_number" : 5, "birthday" : { "month" : 5, "day" : 5, "year" : 1975 } }
```

## 6. Get all students whose lucky number is:

##    greater than 3
```zsh
> db.students.find({"lucky_number" : {$gt:3}})
{ "_id" : ObjectId("5b3eb772d6c3696f6daa4363"), "name" : "four", "home_state" : "texas", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 4, "year" : 1974 } }
{ "_id" : ObjectId("5b3eb78cd6c3696f6daa4364"), "name" : "five", "home_state" : "texas", "lucky_number" : 5, "birthday" : { "month" : 5, "day" : 5, "year" : 1975 } }

```

##    less than or equal to 10
```zsh
> db.students.find({"lucky_number" : {$lte:10}})
{ "_id" : ObjectId("5b3eb72cd6c3696f6daa4360"), "name" : "one", "home_state" : "texas", "lucky_number" : 1, "birthday" : { "month" : 1, "day" : 1, "year" : 1971 } }
{ "_id" : ObjectId("5b3eb749d6c3696f6daa4361"), "name" : "two", "home_state" : "texas", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 1972 } }
{ "_id" : ObjectId("5b3eb759d6c3696f6daa4362"), "name" : "three", "home_state" : "texas", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1973 } }
{ "_id" : ObjectId("5b3eb772d6c3696f6daa4363"), "name" : "four", "home_state" : "texas", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 4, "year" : 1974 } }
{ "_id" : ObjectId("5b3eb78cd6c3696f6daa4364"), "name" : "five", "home_state" : "texas", "lucky_number" : 5, "birthday" : { "month" : 5, "day" : 5, "year" : 1975 } }
```

##    between 1 and 9 (inclusive)
```zsh
> db.students.find({$and:[{"lucky_number":{$gte:1}},{"lucky_number":{$lte:9}}]})
{ "_id" : ObjectId("5b3eb72cd6c3696f6daa4360"), "name" : "one", "home_state" : "texas", "lucky_number" : 1, "birthday" : { "month" : 1, "day" : 1, "year" : 1971 } }
{ "_id" : ObjectId("5b3eb749d6c3696f6daa4361"), "name" : "two", "home_state" : "texas", "lucky_number" : 2, "birthday" : { "month" : 2, "day" : 2, "year" : 1972 } }
{ "_id" : ObjectId("5b3eb759d6c3696f6daa4362"), "name" : "three", "home_state" : "texas", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1973 } }
{ "_id" : ObjectId("5b3eb772d6c3696f6daa4363"), "name" : "four", "home_state" : "texas", "lucky_number" : 4, "birthday" : { "month" : 4, "day" : 4, "year" : 1974 } }
{ "_id" : ObjectId("5b3eb78cd6c3696f6daa4364"), "name" : "five", "home_state" : "texas", "lucky_number" : 5, "birthday" : { "month" : 5, "day" : 5, "year" : 1975 } }
```

## 7. Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

```zsh
> db.students.updateMany({},{$set:{"interests":['coding','brunch','MongoDB']}})
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }
```

## 8. Add some unique interests for each particular student into each of their interest arrays.

```zsh
> db.students.update({name:"one"},{$push:{interests:"one"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"two"},{$push:{interests:"two"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"three"},{$push:{interests:"three"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"four"},{$push:{interests:"four"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name:"five"},{$push:{interests:"five"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

## 9. Add the interest 'taxes' into someone's interest array.

``zsh
> db.students.update({name:"five"},{$push:{interests:"taxes"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

## 10. Remove the 'taxes' interest you just added.

```zsh
> db.students.update({name:"five"},{$pull:{interests:"taxes"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

## 11. Remove all students who are from California (or Washington).

```zsh
> db.students.remove({$or: [{home_state:"Washington"},{home_state:"california"}]})
WriteResult({ "nRemoved" : 0 })
```

## 12. Remove a student by name. 

```zsh
> db.students.remove({name:"one"})
WriteResult({ "nRemoved" : 1 })
```

## 13. Remove a student whose lucky number is greater than 5 (JUST ONE)

```zsh
> db.students.remove({lucky_number:{$gt:5}},true)
WriteResult({ "nRemoved" : 0 })
```

## 14. Add a field to each student collection called 'number_of_belts' and set it to 0.

```zsh
> db.students.updateMany({}, {$set:{number_of_belts:0}})
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
```

## 15. Increment this field by 1 for all students in Washington (Seattle Dojo).

```zsh
> db.students.updateMany({home_state:"washington"}, {$inc:{number_of_belts:1}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
```

## 16. Rename the 'number_of_belts' field to 'belts_earned'

```zsh
> db.students.updateMany({}, {$rename:{number_of_belts:"belts_earned"}})
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
```

## 17. Remove the 'lucky_number' field.

```zsh
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
> db.students.updateMany({}, {$unset:{belts_earned:""}})
```

## 18. Add a 'updated_on' field, and set the value as the current date.

```zsh
> db.students.updateMany({}, {$currentDate:{updated_on:true}})
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
```

