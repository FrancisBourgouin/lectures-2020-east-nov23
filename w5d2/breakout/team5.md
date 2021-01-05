## Building an ERD 

### Example of ERD box

+------------+
| Platforms  |
+------------+
| id         | PK
| name       |
| game_id    | FK
|            |
|            |
|            |
+------------+

+------------+
|    Game    |
+------------+
| id         | PK
| name       |
| genre      |
|            |
|            |
|Platforms_id| FK
+------------+

### Description of your relationship
  This ERD relationship shows a many-to-many relationship by linking various games to their compatible consoles.


### ERD describing the relationship