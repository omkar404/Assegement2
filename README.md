# Assigement-Backend

Testing the API
1. Create a new movie:

Method: POST
URL: http://localhost:3000/movies
Headers: Content-Type: application/json
Body:
json
{
  "name": "New Movie",
  "img": "https://example.com/new-movie.jpg",
  "summary": "This is a new movie summary."
}

2. Get all movies:

Method: GET
URL: http://localhost:3000/movies

3. Get a specific movie by ID:

Method: GET
URL: http://localhost:3000/movies/{id}
Replace {id} with the actual movie ID.

4. Update a movie:

Method: PUT
URL: http://localhost:3000/movies/{id}
Replace {id} with the actual movie ID.
Headers: Content-Type: application/json
Body:
json
{
  "name": "Updated Movie",
  "img": "https://example.com/updated-movie.jpg",
  "summary": "This is an updated movie summary."
}

5. Delete a movie:

Method: DELETE
URL: http://localhost:3000/movies/{id}
Replace {id} with the actual movie ID. 