import {CloudProviderTag, DevelopmentTag} from '../API'

export const cloudComputing = {
  or: [
    {
      cloud_provider_tag: {
        contains: CloudProviderTag.SALESFORCE
      }
    },
    {
      cloud_provider_tag: {
        contains: CloudProviderTag.AMAZON_WEB_SERVICES
      }
    },
    {
      cloud_provider_tag: {
        contains: CloudProviderTag.GOOGLE_CLOUD_PLATFORM
      }
    },
    {
      cloud_provider_tag: {
        contains: CloudProviderTag.HEROKU
      }
    },
    {
      cloud_provider_tag: {
        contains: CloudProviderTag.MICROSOFT_AZURE
      }
    },
    {
      cloud_provider_tag: {
        contains: CloudProviderTag.NETAPP
      }
    }
  ]
}

export const machineLearning = {
  or: [
    {
      dev_type_tag: {
        contains: DevelopmentTag.ARTIFICIAL_INTELLIGENCE
      }
    },
    {
      dev_type_tag: {
        contains: DevelopmentTag.MACHINE_LEARNING
      }
    }
  ]
}

export const frameworks = {
  or: [
    {
      description: {
        contains: 'Framework'
      }
    },
    {
      description: {
        contains: 'framework'
      }
    },
    {
      long_description: {
        contains: 'Framework'
      }
    },
    {
      long_description: {
        contains: 'framework'
      }
    }
  ]
}