# Freetyme
App designed to help users organize the free time they have available and plan events with friends.

## Use Cases

|# |Description    | UI Page  | Backend API | 
|--|-------------- |----------|------------ |
|1a|Add a new user |Login  |POST /auth/user
|1b|Login          |Login  |POST /auth/login
|1c|Logout         |Logout |POST /auth/logout
|2a|User adds 'free time'          | ?? |POST /api/freetime
|2b|Display all free time for user | ?? |GET /api/freetime
|2c|User deletes 'free time'       | ?? |DELETE /api/freetime/:id
|3a|Start a new meeting  | ?? |POST /api/meeting
|3b|Display a meeting              | ?? |GET /api/meeting/:id
|3c|Display all available meetings - include all users who have joined each meeting | ?? |GET /api/meeting
|3d|Add user to a meeting - User clicks 'Join' button on displayed meeting (on list of all meetings) | ?? |POST /api/meeting/:id
|3e|Delete user from meeting       | ?? |DELETE /api/meeting/:id
