import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation tokenAuth($email: String!, $password: String!) {
        tokenAuth(email: $email, password: $password) {
            token
            refreshToken
            errors
            success
            user {
                pk
            }
        }
    }
`;

export const CHECK_AUTH_TOKEN = gql`
    mutation verifyToken($token: String!) {
        verifyToken(token: $token) {
            errors
            success
            payload
        }
    }
`;

/// create user mutation
export const CREATE_USER = gql`
    mutation register(
        $first_name: String!
        $last_name: String!
        $email: String!
        $password1: String!
        $password2: String!
        $groupage: String!
        $phone: String!
        $gender: String!
        $city: String!
    ) {
        register(
            firstName: $first_name
            lastName: $last_name
            email: $email
            password1: $password1
            password2: $password2
        ) {
            success
            errors
            token
            refreshToken
        }
    }
`;

export const ME = gql`
    query {
        me {
            pk
            id
            lastLogin
            username
            firstName
            lastName
            email
            gender
            tags {
                name
                id
            }
        }
    }
`;
