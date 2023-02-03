// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SizeTag = {
  "LESS_FIVE": "LESS_FIVE",
  "MORE_FIVE": "MORE_FIVE",
  "MORE_TEN": "MORE_TEN",
  "MORE_TWENTY_FIVE": "MORE_TWENTY_FIVE",
  "MORE_FIFTY": "MORE_FIFTY",
  "MORE_HUND": "MORE_HUND"
};

const InterestTag = {
  "COMMUNICATION": "COMMUNICATION",
  "CONNECTING": "CONNECTING",
  "ENVIRONMENT": "ENVIRONMENT",
  "EDUCATION": "EDUCATION",
  "ENTERTAINMENT": "ENTERTAINMENT",
  "GAMING": "GAMING"
};

const DevelopmentTag = {
  "FRONTEND": "FRONTEND",
  "BACKEND": "BACKEND",
  "FULL_STACK": "FULL_STACK",
  "DESKTOP": "DESKTOP",
  "WEB_DEV": "WEB_DEV",
  "DATABASE": "DATABASE",
  "MOBILE": "MOBILE",
  "CLOUD": "CLOUD",
  "DEV_OPS": "DEV_OPS",
  "CYBER_SEC": "CYBER_SEC"
};

const LanguageTag = {
  "C_SHARP": "C_SHARP",
  "C_PLUS_PLUS": "C_PLUS_PLUS",
  "C": "C",
  "JAVA": "JAVA",
  "PYTHON": "PYTHON",
  "TYPESCRIPT": "TYPESCRIPT",
  "JAVASCRIPT": "JAVASCRIPT",
  "KOTLIN": "KOTLIN",
  "SWIFT": "SWIFT",
  "RUBY": "RUBY",
  "RUST": "RUST",
  "SQL": "SQL"
};

const { NewsletterEmailModel, PostsModel, UsersModel } = initSchema(schema);

export {
  NewsletterEmailModel,
  PostsModel,
  UsersModel,
  SizeTag,
  InterestTag,
  DevelopmentTag,
  LanguageTag
};