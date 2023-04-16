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
  "SQL": "SQL",
  "PHP": "PHP",
  "HTML": "HTML",
  "CSS": "CSS",
  "GO": "GO",
  "DART": "DART",
  "SCALA": "SCALA"
};

const FrameworkTag = {
  "REACT": "REACT",
  "REACT_NATIVE": "REACT_NATIVE",
  "ANGULAR": "ANGULAR",
  "VUE": "VUE",
  "NODE": "NODE",
  "EXPRESS": "EXPRESS",
  "WEB_SOCKET_IO": "WEB_SOCKET_IO",
  "DJANGO": "DJANGO",
  "FLASK": "FLASK",
  "MONGO_DB": "MONGO_DB",
  "MY_SQL": "MY_SQL",
  "POSTGRES_SQL": "POSTGRES_SQL",
  "FIREBASE": "FIREBASE",
  "AWS": "AWS",
  "AZURE": "AZURE",
  "HEROKU": "HEROKU"
};

const { NewsletterEmailModel, MessageModel, PostsModel, CommentModel, UsersModel } = initSchema(schema);

export {
  NewsletterEmailModel,
  MessageModel,
  PostsModel,
  CommentModel,
  UsersModel,
  SizeTag,
  InterestTag,
  DevelopmentTag,
  LanguageTag,
  FrameworkTag
};