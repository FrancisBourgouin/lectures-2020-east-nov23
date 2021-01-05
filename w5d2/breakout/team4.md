## Building an ERD 

### Example of ERD box

+------------+
| Albums     |  
+------------+
|   id       |
|   name     |
|release date|
| runtime    |
+------------+

+------------+
| songs      |
+------------+
|   id       |
|            |
|   name     |
|   genre    |
|release date|
| album_id   |
+------------+

+------------+
| artists    |
+------------+
|   id       |
|            |
|   name     |
|   genre    |
|            |
|            |
+------------+

+------------+
| ft_artist  |
+------------+
| id         |
|   artist_id|
|  song_id   |
|            |
|            |
+------------+

### Description of your relationship



### ERD describing the relationship