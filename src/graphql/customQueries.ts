import {
    AccountTag,
    CloudProviderTag,
    DevelopmentTag,
    DifficultyTag,
    ExperienceTag,
    FrameworkTag,
    InterestTag,
    LanguageTag, OAuthProvider,
    SizeTag
} from '../API'

export const getUsersModelSmall = /* GraphQL */ `query GetUsersModel($id: ID!) {
    getUsersModel(id: $id) {
        id
        user_name
        email
        profile_image
        first_name
        last_name
        new_user
        credibility_score
        user_type
        oauth_provider
        oauth_id
        createdAt
        updatedAt
    }
}
`

export type GetUsersSmallQuery = {
    getUsersModel?:  {
        __typename: "UsersModel",
        id: string,
        user_name: string,
        email: string,
        password: string,
        profile_image?: string | null,
        user_posts?:  {
            __typename: "ModelPostsModelConnection",
            nextToken?: string | null,
        } | null,
        user_comments?:  {
            __typename: "ModelCommentModelConnection",
            nextToken?: string | null,
        } | null,
        first_name?: string | null,
        last_name?: string | null,
        user_creation_date?: string | null,
        github_link?: string | null,
        liked_posts?: Array< string | null > | null,
        saved_posts?: Array< string | null > | null,
        hide_posts?: Array< string | null > | null,
        messages?:  {
            __typename: "ModelMessageModelConnection",
            nextToken?: string | null,
        } | null,
        conversations?:  {
            __typename: "ModelUsersConvoConnection",
            nextToken?: string | null,
        } | null,
        lang_tag?: Array< LanguageTag | null > | null,
        dev_type_tag?: Array< DevelopmentTag | null > | null,
        interest_tag?: Array< InterestTag | null > | null,
        size_tag?: Array< SizeTag | null > | null,
        framework_tag?: Array< FrameworkTag | null > | null,
        difficulty_tag?: Array< DifficultyTag | null > | null,
        cloud_provider_tag?: Array< CloudProviderTag | null > | null,
        new_user?: boolean | null,
        contributions?:  {
            __typename: "ModelContributionsModelConnection",
            nextToken?: string | null,
        } | null,
        credibility_score?: number | null,
        involved_projects?: Array< string | null > | null,
        experience_level?: Array< ExperienceTag | null > | null,
        years_of_experience?: number | null,
        user_type?: Array< AccountTag | null > | null,
        user_experiences?:  {
            __typename: "ModelExperienceModelConnection",
            nextToken?: string | null,
        } | null,
        oauth_provider?: OAuthProvider | null,
        oauth_id?: string | null,
        createdAt: string,
        updatedAt: string,
    } | null,
}