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
One to many relationship between a school and its students
PK: id
FK: school_id


### ERD describing the relationship

+------------+
| SCHOOL     |
+------------+
|   id       |
|   name     |
|   address  |
|   email    |
|   type     |
|            |
+------------+

+------------+
| STUDENT    |
+------------+
|  id        |
|  school_id |
|  name      |
|  email     |
|  GPA       |
|  exp_grad  |
| enroll_date|
+------------+