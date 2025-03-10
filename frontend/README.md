# Team Member Management System Frontend

This frontend is built with Vite and React cloned from the following template

### [React Tanning 🌴](https://github.com/padunk/react-tanning)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### [TanStack](https://tanstack.com)

This template is based on Vite React basic template with these TanStacks technologies:

- Router
- Query
- Form

### Code Layout (under src folder)

- `assets/` - Contains static assets such as images, etc.
- `components/` - Contains all the UI components used in the project.
- `components/common/` - Contains common components for basic elements such as buttons, etc.
- `components/members/` - Higher-level components for displaying and editing team members.
- `routes/` - Tanstack file-based routes for the main application pages
- `service/` - API services, models and react-query hooks for interacting with the backend API.
- `utils/` - Utility functions and constants used throughout the project.

### Running the project

```bash
npm install
npm run dev
```

Currently, the frontend is configured to run on `localhost:5173`.

### Building the project

```bash
npm run build
```

## Design Notes

- The frontend is built with Vite and React using Tanstack with Tailwind CSS for styling.
- No UI component library was used to keep the project as minimal as possible.
- The service layer was kept as simple as possible to interact with the backend API.
- The project uses a file-based routing system with Tanstack to keep the routing simple and easy to manage.

## Future enhancements

- Add support for Docker deployment
- Select and utilize a UI component library to improve the look and feel of the application.
- Add login and authentication functionality.
- Implement pagination on the team members list.
- Provide better feedback during loading states and confirmation of actions.
- Implement user roles and permissions to tie team members to users.
- Utilize OpenAPI to auto-generate the API service layer and models.
- Add more features such as authentication and user roles.
- Implement testing for the frontend components and services.
