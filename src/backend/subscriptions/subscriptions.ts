import { API, graphqlOperation } from "aws-amplify";
import { GraphQLSubscription } from '@aws-amplify/api';
import { onUpdateConversationModel } from '../../graphql/subscriptions'
import { OnUpdateConversationModelSubscriptionVariables } from "../../API";

export async function updateSubscription(id: OnUpdateConversationModelSubscriptionVariables) {
  const subscription = API.graphql<GraphQLSubscription<OnUpdateConversationModelSubscriptionVariables>>(graphqlOperation(onUpdateConversationModel, id)).subscribe({
    next: (data) => console.log(data),
    error: (error) => {
      console.error(error)
    }
  })
  return subscription
}