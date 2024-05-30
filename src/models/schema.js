export const schema = {
    "models": {
        "NewsletterEmailModel": {
            "name": "NewsletterEmailModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "NewsletterEmailModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UsersModel": {
            "name": "UsersModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user_name": {
                    "name": "user_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "password": {
                    "name": "password",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "profile_image": {
                    "name": "profile_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user_posts": {
                    "name": "user_posts",
                    "isArray": true,
                    "type": {
                        "model": "PostsModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "userID"
                    }
                },
                "user_comments": {
                    "name": "user_comments",
                    "isArray": true,
                    "type": {
                        "model": "CommentModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "userID"
                    }
                },
                "first_name": {
                    "name": "first_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "last_name": {
                    "name": "last_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "user_creation_date": {
                    "name": "user_creation_date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "github_link": {
                    "name": "github_link",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "saved_posts": {
                    "name": "saved_posts",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "hide_posts": {
                    "name": "hide_posts",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "messages": {
                    "name": "messages",
                    "isArray": true,
                    "type": {
                        "model": "MessageModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "from"
                    }
                },
                "conversations": {
                    "name": "conversations",
                    "isArray": true,
                    "type": {
                        "model": "UsersConvo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "usersModel"
                    }
                },
                "lang_tag": {
                    "name": "lang_tag",
                    "isArray": true,
                    "type": {
                        "enum": "LanguageTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "dev_type_tag": {
                    "name": "dev_type_tag",
                    "isArray": true,
                    "type": {
                        "enum": "DevelopmentTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "interest_tag": {
                    "name": "interest_tag",
                    "isArray": true,
                    "type": {
                        "enum": "InterestTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "size_tag": {
                    "name": "size_tag",
                    "isArray": true,
                    "type": {
                        "enum": "SizeTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "framework_tag": {
                    "name": "framework_tag",
                    "isArray": true,
                    "type": {
                        "enum": "FrameworkTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "difficulty_tag": {
                    "name": "difficulty_tag",
                    "isArray": true,
                    "type": {
                        "enum": "DifficultyTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "new_user": {
                    "name": "new_user",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "contributions": {
                    "name": "contributions",
                    "isArray": true,
                    "type": {
                        "model": "ContributionsModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "author"
                    }
                },
                "credibility_score": {
                    "name": "credibility_score",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "involved_projects": {
                    "name": "involved_projects",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "experience_level": {
                    "name": "experience_level",
                    "isArray": true,
                    "type": {
                        "enum": "ExperienceTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "years_of_experience": {
                    "name": "years_of_experience",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "user_type": {
                    "name": "user_type",
                    "isArray": true,
                    "type": {
                        "enum": "AccountTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "user_experiences": {
                    "name": "user_experiences",
                    "isArray": true,
                    "type": {
                        "model": "ExperienceModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "user_id"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UsersModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ContributionsModel": {
            "name": "ContributionsModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": true,
                    "type": {
                        "enum": "ContributionTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "link_to": {
                    "name": "link_to",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "point_value": {
                    "name": "point_value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ContributionsModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersModel",
                        "fields": [
                            "author"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ExperienceModel": {
            "name": "ExperienceModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user_id": {
                    "name": "user_id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "org_name": {
                    "name": "org_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "start_date": {
                    "name": "start_date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "end_date": {
                    "name": "end_date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "lang_tag": {
                    "name": "lang_tag",
                    "isArray": true,
                    "type": {
                        "enum": "LanguageTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "dev_type_tag": {
                    "name": "dev_type_tag",
                    "isArray": true,
                    "type": {
                        "enum": "DevelopmentTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "framework_tag": {
                    "name": "framework_tag",
                    "isArray": true,
                    "type": {
                        "enum": "FrameworkTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ExperienceModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersModel",
                        "fields": [
                            "user_id"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PostsModel": {
            "name": "PostsModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "post_title": {
                    "name": "post_title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "long_description": {
                    "name": "long_description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "project_link": {
                    "name": "project_link",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "image_link": {
                    "name": "image_link",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "post_date": {
                    "name": "post_date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "creator_name": {
                    "name": "creator_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lang_tag": {
                    "name": "lang_tag",
                    "isArray": true,
                    "type": {
                        "enum": "LanguageTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "dev_type_tag": {
                    "name": "dev_type_tag",
                    "isArray": true,
                    "type": {
                        "enum": "DevelopmentTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "interest_tag": {
                    "name": "interest_tag",
                    "isArray": true,
                    "type": {
                        "enum": "InterestTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "size_tag": {
                    "name": "size_tag",
                    "isArray": true,
                    "type": {
                        "enum": "SizeTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "framework_tag": {
                    "name": "framework_tag",
                    "isArray": true,
                    "type": {
                        "enum": "FrameworkTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "difficulty_tag": {
                    "name": "difficulty_tag",
                    "isArray": true,
                    "type": {
                        "enum": "DifficultyTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "post_comments": {
                    "name": "post_comments",
                    "isArray": true,
                    "type": {
                        "model": "CommentModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "postID"
                    }
                },
                "contributor_limit": {
                    "name": "contributor_limit",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "contributors": {
                    "name": "contributors",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "reported": {
                    "name": "reported",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "experience_level": {
                    "name": "experience_level",
                    "isArray": true,
                    "type": {
                        "enum": "ExperienceTag"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "application": {
                    "name": "application",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "project_chat": {
                    "name": "project_chat",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PostsModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersModel",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byConversationModel",
                        "fields": [
                            "project_chat"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ConversationModel": {
            "name": "ConversationModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "users": {
                    "name": "users",
                    "isArray": true,
                    "type": {
                        "model": "UsersConvo"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "conversationModel"
                    }
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ConversationModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "MessageModel": {
            "name": "MessageModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "message": {
                    "name": "message",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "message_date": {
                    "name": "message_date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "conversationID": {
                    "name": "conversationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MessageModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersModel",
                        "fields": [
                            "from"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byConversationModel",
                        "fields": [
                            "conversationID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CommentModel": {
            "name": "CommentModel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "comment": {
                    "name": "comment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "profile_image": {
                    "name": "profile_image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "comment_date": {
                    "name": "comment_date",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "parent_comment": {
                    "name": "parent_comment",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "replies": {
                    "name": "replies",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "isReply": {
                    "name": "isReply",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "postID": {
                    "name": "postID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "userID": {
                    "name": "userID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user_name": {
                    "name": "user_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CommentModels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "searchable",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPostsModel",
                        "fields": [
                            "postID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersModel",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "read",
                                    "create",
                                    "delete",
                                    "update"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UsersConvo": {
            "name": "UsersConvo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "usersModel": {
                    "name": "usersModel",
                    "isArray": false,
                    "type": {
                        "model": "UsersModel"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "usersModelID"
                    }
                },
                "conversationModel": {
                    "name": "conversationModel",
                    "isArray": false,
                    "type": {
                        "model": "ConversationModel"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "conversationModelID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UsersConvos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUsersModel",
                        "fields": [
                            "usersModelID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byConversationModel",
                        "fields": [
                            "conversationModelID"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "SizeTag": {
            "name": "SizeTag",
            "values": [
                "SMALL",
                "MEDIUM",
                "LARGE"
            ]
        },
        "InterestTag": {
            "name": "InterestTag",
            "values": [
                "COMMUNICATION",
                "ENVIRONMENT",
                "EDUCATION",
                "ENTERTAINMENT",
                "GAMING",
                "HEALTHCARE",
                "LIFESTYLE"
            ]
        },
        "DevelopmentTag": {
            "name": "DevelopmentTag",
            "values": [
                "EMBEDDED_SYSTEMS",
                "FRONT_END",
                "WEB",
                "GAME_DEVELOPMENT",
                "MOBILE_APP",
                "COMPUTING",
                "APPLICATION_PROGRAMMING",
                "DEVOPS",
                "FULL_STACK",
                "BACKEND",
                "DATA_SCIENCE",
                "CLOUD",
                "DATABASE",
                "CYBERSECURITY"
            ]
        },
        "LanguageTag": {
            "name": "LanguageTag",
            "values": [
                "C",
                "JAVA",
                "PYTHON",
                "C_PLUS_PLUS",
                "CUDA",
                "C_SHARP",
                "JAVASCRIPT",
                "HTML",
                "CSS",
                "PHP",
                "VISUAL_BASIC_DOTNET",
                "DOTNET",
                "R",
                "GO",
                "SWIFT",
                "PERL",
                "X86_ASSEMBLY",
                "ARM_ASSEMBLY",
                "RUBY",
                "MATLAB",
                "VISUAL_BASIC",
                "GROOVY",
                "OBJECTIVE_C",
                "OBJECTIVE_C_PLUS_PLUS",
                "RUST",
                "SAS",
                "SCRATCH",
                "WEB_ASSEMBLY",
                "D",
                "DART",
                "PL_SQL",
                "SQL",
                "DELHPI",
                "KOTLIN",
                "OPENEDGE_ABL",
                "JULIA",
                "SCALA",
                "LUA",
                "FORTRAN",
                "COBOL",
                "HASKELL",
                "VISUAL_BASIC_SCRIPT",
                "TYPESCRIPT",
                "BASH",
                "SHELL",
                "CLOJURE",
                "COFFEESCRIPT",
                "LISP",
                "CRYSTAL",
                "F_SHARP",
                "POSTSCRIPT",
                "HANDLEBARS"
            ]
        },
        "FrameworkTag": {
            "name": "FrameworkTag",
            "values": [
                "DJANGO",
                "ANGULAR_JS",
                "JQUERY",
                "ASP_NET",
                "GATSBY",
                "SVELTE",
                "YII",
                "TURBOGEARS",
                "YESOD",
                "GROK",
                "MOJOLICIOUS",
                "VAADIN",
                "RUBY_ON_RAILS",
                "EXPRESS",
                "JS",
                "METEOR",
                "CODEIGNITOR",
                "SYMFONY",
                "APACHE_WICKET",
                "PHALCON",
                "BOOTSTRAP",
                "SILEX",
                "FUELPHP",
                "CHERRYPY",
                "QUIOXTE",
                "LARAVEL",
                "FLASK",
                "CAKEPHP",
                "NEXT_JS",
                "GRAILS",
                "SPARK",
                "APACHE_STRUTS_1",
                "WEB2PY",
                "APACHE_PLAY"
            ]
        },
        "DifficultyTag": {
            "name": "DifficultyTag",
            "values": [
                "GOOD_FIRST_PROJECT",
                "EXPERIENCED_CONTRIBUTOR",
                "EXPERT"
            ]
        },
        "ExperienceTag": {
            "name": "ExperienceTag",
            "values": [
                "BEGINNER",
                "MINIMAL_EXPERIENCE",
                "EXPERIENCED_CONTRIBUTOR",
                "EXPERT"
            ]
        },
        "AccountTag": {
            "name": "AccountTag",
            "values": [
                "DEVELOPER",
                "ORGANIZATION"
            ]
        },
        "ContributionTag": {
            "name": "ContributionTag",
            "values": [
                "PULL_REQUEST",
                "ISSUE",
                "COMMENT",
                "REVIEW"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "d1fc7213ac0ffcb5335a5794c14b68cc"
};