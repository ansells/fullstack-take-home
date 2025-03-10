# Team Member Management System Backend

This backend was build with (Django Rest Framework)[https://www.django-rest-framework.org/].

### Code Layout

- `team_members/` - Contains the project layer with settings and top-level urls.
- `team_api/` - Contains the main application with models, views, and serializers.
- `team_api/migrations` - Contains the database migrations for the application.

### Running the project

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

Currently, the backend is configured to run on `localhost:8000`.
The admin interface is available at `http://localhost:8000/admin`.
THe browsable API is available at `http://localhost:8000/team_api/`.

## Design Notes

- The backend is built with Django and Django Rest Framework.
- The project uses the default SQLite database for simplicity.
- The Views and urls are generated using `ModelViewSet` since it follows a very standard REST API pattern.
- The serializers generate complet JSON of the models to the frontend without any filtering.
- The corsheaders middleware was added to allow the frontend to access the API.
- The project uses the default Django admin for managing the team members.
- Other DRF features like authentication, sessions and messaging were left in place for future enhancements.

## Future enhancements

- Add support for Docker deployment
- Add authentication and permissions to the API
- Implement user roles and permissions to tie team members to users.
- Utilize OpenAPI via `drf-spectacular` to auto-generate the API service layer and models.
- Implement unit testing of the API
