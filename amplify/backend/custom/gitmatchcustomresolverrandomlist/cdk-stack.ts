import * as cdk from 'aws-cdk-lib'
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper'
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref'
import { Construct } from 'constructs'
import * as appsync from 'aws-cdk-lib/aws-appsync'
import * as path from 'path'

export class cdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props)
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    })

    const retVal: AmplifyDependentResourcesAttributes =
      AmplifyHelpers.addResourceDependency(
        this,
        amplifyResourceProps.category,
        amplifyResourceProps.resourceName,
        [
          {
            category: 'api',
            resourceName: 'unhinged'
          }
        ]
      )

    const resolver = new appsync.CfnResolver(this, 'random-custom-resolver', {
      apiId: cdk.Fn.ref(retVal.api.unhinged.GraphQLAPIIdOutput),
      fieldName: 'listRandomPostsModelQuery',
      typeName: 'Query',
      requestMappingTemplate: appsync.MappingTemplate.fromFile(path.join(__dirname, '..', 'Query.queryRandomPosts.req.vtl')).renderTemplate(),
      responseMappingTemplate: appsync.MappingTemplate.fromFile(path.join(__dirname, '..', 'Query.queryRandomPosts.res.vtl')).renderTemplate(),
      dataSourceName: 'OpenSearchDataSource'
    })
  }
}