
Kanban Board Application with Secure Authentication
Description
This Kanban Board Application is a task management tool that provides secure user authentication and session management. Users can log in, view their Kanban board, manage tasks, and securely store their session tokens. The application ensures a secure experience by leveraging JSON Web Tokens (JWT) for authentication and session handling.

Features
Secure Login Page: Users authenticate via a username and password.
JWT Authentication: Authentication is handled securely using JSON Web Tokens.
Local Storage for JWT: JWTs are stored in the browser's local storage for subsequent authenticated requests.
Session Expiration Handling: Sessions expire after a defined period of inactivity, requiring reauthentication.
Error Handling: Invalid credentials trigger an error message for the user.
Logout Functionality: Users can log out to remove the JWT and return to the login page.
Access Control: Unauthorized users are redirected to the login page.



https://kanban-project-2.onrender.com
