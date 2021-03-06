define({ "api": [
  {
    "type": "post",
    "url": "/api/authenticate",
    "title": "",
    "version": "0.3.0",
    "group": "Authentication",
    "name": "Authenticate",
    "parameter": {
      "fields": {
        "Credentials": [
          {
            "group": "Credentials",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "Username"
          },
          {
            "group": "Credentials",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "password"
          }
        ]
      }
    },
    "filename": "src/test_api.js",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "The server encountered an internal error"
          }
        ]
      },
      "examples": [
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"uri\": \"<api-endpoint>\",\n    \"method\": \"<method used>\",\n    \"type\": \"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\",\n    \"title\": \"Internal Server Error\",\n    \"status\": 500,\n    \"detail\": \"<Detail Message>\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/subscriptioninfo",
    "title": "",
    "version": "0.3.0",
    "description": "Get the subscription information from an authenticated user.",
    "group": "Authentication",
    "name": "GetSubscriptionInfo",
    "filename": "src/test_api.js",
    "groupTitle": "Authentication",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "Auth header with JWT Token"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization-Example:",
          "content": "Authorization: Bearer <jwt-token>",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "The server encountered an internal error"
          }
        ]
      },
      "examples": [
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"uri\": \"<api-endpoint>\",\n    \"method\": \"<method used>\",\n    \"type\": \"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\",\n    \"title\": \"Internal Server Error\",\n    \"status\": 500,\n    \"detail\": \"<Detail Message>\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/subscriptioninfo/:userid",
    "title": "",
    "version": "0.2.0",
    "description": "Get the subscription information for a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "user id"
          }
        ]
      }
    },
    "group": "Authentication",
    "name": "GetSubscriptionInfo",
    "filename": "folder2/History.js",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "The server encountered an internal error"
          }
        ]
      },
      "examples": [
        {
          "title": "500 Internal Server Error",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"uri\": \"<api-endpoint>\",\n    \"method\": \"<method used>\",\n    \"type\": \"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\",\n    \"title\": \"Internal Server Error\",\n    \"status\": 500,\n    \"detail\": \"<Detail Message>\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });