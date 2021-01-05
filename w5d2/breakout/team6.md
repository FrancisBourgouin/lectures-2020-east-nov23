## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

- Car Manufacturer <--> Car Model

### ERD describing the relationship

+------------+
| Manufacturer|
+------------+
|   id         |
|   name      |
|   Date Founded         |
|         |
|            |
|            |
+------------+

+------------+
| Model      |
+------------+
|    id        
|    name        |
|    release_year        |
|    type_id        |
|    manufacturer_id        |
|            |
+------------+

+------------+
| type     |
+------------+
|    id        |
|    name        |
|    number_of_seats        |
|            |
|            |
|            |
+------------+