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
Student can have only one cohort ... no rollovers
ONe cohort can have many students.

### ERD describing the relationship

+------------+
| Student    |
+------------+
|   id       | PK
|   name     |
|   cohort_id| FK
|            |
|            |
+------------+

+------------+
| Cohort     |
+------------+
|   id       | PK
|   name     |
|start_date  |
|end_date    |
|            |
|            |
+------------+

