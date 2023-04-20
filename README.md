## BACKEND
### Models:
- character
~~~ 
{ 
  id: uuid,
  name: string, 
  status: string, 
  species: string, 
  gender: string, 
  origin: string, 
  image: string, 
  fav: bool
}
~~~
### Routes:
- GET all characters
- GET character by id
- POST character
- DELETE character by id
- PUT character by id
