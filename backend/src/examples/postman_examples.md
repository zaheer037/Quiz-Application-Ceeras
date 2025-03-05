# Postman Examples for Admin and User Sign-In/Sign-Up

## User Sign-Up
- **Method**: POST
- **URL**: `http://localhost:8080/users/signup`
- **Headers**:
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
    "username": "testuser",
    "password": "testpassword",
    "email": "testuser@example.com"
}
```

## User Sign-In
- **Method**: POST
- **URL**: `http://localhost:8080/users/signin`
- **Headers**:
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
    "username": "testuser",
    "password": "testpassword"
}
```

## Admin Sign-Up
- **Method**: POST
- **URL**: `http://localhost:8080/admin/signup`
- **Headers**:
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
    "username": "adminuser",
    "password": "adminpassword",
    "organizationName": "Admin Organization"
}
```

## Admin Sign-In
- **Method**: POST
- **URL**: `http://localhost:8080/admin/signin`
- **Headers**:
  - Content-Type: application/json
- **Body** (raw JSON):
```json
{
    "username": "adminuser",
    "password": "adminpassword"
}
