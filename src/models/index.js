// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SizeTag = {
  "SMALL": "SMALL",
  "MEDIUM": "MEDIUM",
  "LARGE": "LARGE"
};

const InterestTag = {
  "COMMUNICATION": "COMMUNICATION",
  "ENVIRONMENT": "ENVIRONMENT",
  "EDUCATION": "EDUCATION",
  "ENTERTAINMENT": "ENTERTAINMENT",
  "GAMING": "GAMING",
  "HEALTHCARE": "HEALTHCARE",
  "LIFESTYLE": "LIFESTYLE"
};

const DevelopmentTag = {
  "EMBEDDED_SYSTEMS": "EMBEDDED_SYSTEMS",
  "FRONT_END": "FRONT_END",
  "WEB": "WEB",
  "GAME_DEVELOPMENT": "GAME_DEVELOPMENT",
  "MOBILE_APP": "MOBILE_APP",
  "COMPUTING": "COMPUTING",
  "APPLICATION_PROGRAMMING": "APPLICATION_PROGRAMMING",
  "DEVOPS": "DEVOPS",
  "FULL_STACK": "FULL_STACK",
  "BACKEND": "BACKEND",
  "DATA_SCIENCE": "DATA_SCIENCE",
  "CLOUD": "CLOUD",
  "DATABASE": "DATABASE",
  "CYBERSECURITY": "CYBERSECURITY"
};

const LanguageTag = {
  "C": "C",
  "JAVA": "JAVA",
  "PYTHON": "PYTHON",
  "C_PLUS_PLUS": "C_PLUS_PLUS",
  "CUDA": "CUDA",
  "C_SHARP": "C_SHARP",
  "JAVASCRIPT": "JAVASCRIPT",
  "HTML": "HTML",
  "CSS": "CSS",
  "PHP": "PHP",
  "VISUAL_BASIC_DOTNET": "VISUAL_BASIC_DOTNET",
  "DOTNET": "DOTNET",
  "R": "R",
  "GO": "GO",
  "SWIFT": "SWIFT",
  "PERL": "PERL",
  "X86_ASSEMBLY": "X86_ASSEMBLY",
  "ARM_ASSEMBLY": "ARM_ASSEMBLY",
  "RUBY": "RUBY",
  "MATLAB": "MATLAB",
  "VISUAL_BASIC": "VISUAL_BASIC",
  "GROOVY": "GROOVY",
  "OBJECTIVE_C": "OBJECTIVE_C",
  "OBJECTIVE_C_PLUS_PLUS": "OBJECTIVE_C_PLUS_PLUS",
  "RUST": "RUST",
  "SAS": "SAS",
  "SCRATCH": "SCRATCH",
  "WEB_ASSEMBLY": "WEB_ASSEMBLY",
  "D": "D",
  "DART": "DART",
  "PL_SQL": "PL_SQL",
  "SQL": "SQL",
  "DELHPI": "DELHPI",
  "KOTLIN": "KOTLIN",
  "OPENEDGE_ABL": "OPENEDGE_ABL",
  "JULIA": "JULIA",
  "SCALA": "SCALA",
  "LUA": "LUA",
  "FORTRAN": "FORTRAN",
  "COBOL": "COBOL",
  "HASKELL": "HASKELL",
  "VISUAL_BASIC_SCRIPT": "VISUAL_BASIC_SCRIPT",
  "TYPESCRIPT": "TYPESCRIPT",
  "BASH": "BASH",
  "SHELL": "SHELL",
  "CLOJURE": "CLOJURE",
  "COFFEESCRIPT": "COFFEESCRIPT",
  "LISP": "LISP",
  "CRYSTAL": "CRYSTAL",
  "F_SHARP": "F_SHARP",
  "POSTSCRIPT": "POSTSCRIPT",
  "HANDLEBARS": "HANDLEBARS"
};

const FrameworkTag = {
  "DJANGO": "DJANGO",
  "ANGULAR_JS": "ANGULAR_JS",
  "JQUERY": "JQUERY",
  "ASP_NET": "ASP_NET",
  "GATSBY": "GATSBY",
  "SVELTE": "SVELTE",
  "YII": "YII",
  "TURBOGEARS": "TURBOGEARS",
  "YESOD": "YESOD",
  "GROK": "GROK",
  "MOJOLICIOUS": "MOJOLICIOUS",
  "VAADIN": "VAADIN",
  "RUBY_ON_RAILS": "RUBY_ON_RAILS",
  "EXPRESS": "EXPRESS",
  "JS": "JS",
  "METEOR": "METEOR",
  "CODEIGNITOR": "CODEIGNITOR",
  "SYMFONY": "SYMFONY",
  "APACHE_WICKET": "APACHE_WICKET",
  "PHALCON": "PHALCON",
  "BOOTSTRAP": "BOOTSTRAP",
  "SILEX": "SILEX",
  "FUELPHP": "FUELPHP",
  "CHERRYPY": "CHERRYPY",
  "QUIOXTE": "QUIOXTE",
  "LARAVEL": "LARAVEL",
  "FLASK": "FLASK",
  "CAKEPHP": "CAKEPHP",
  "NEXT_JS": "NEXT_JS",
  "GRAILS": "GRAILS",
  "SPARK": "SPARK",
  "APACHE_STRUTS_1": "APACHE_STRUTS_1",
  "WEB2_PY": "WEB2PY",
  "APACHE_PLAY": "APACHE_PLAY"
};

const DifficultyTag = {
  "GOOD_FIRST_PROJECT": "GOOD_FIRST_PROJECT",
  "EXPERIENCED_CONTRIBUTOR": "EXPERIENCED_CONTRIBUTOR",
  "EXPERT": "EXPERT"
};

const ExperienceTag = {
  "BEGINNER": "BEGINNER",
  "MINIMAL_EXPERIENCE": "MINIMAL_EXPERIENCE",
  "EXPERIENCED_CONTRIBUTOR": "EXPERIENCED_CONTRIBUTOR",
  "EXPERT": "EXPERT"
};

const AccountTag = {
  "DEVELOPER": "DEVELOPER",
  "ORGANIZATION": "ORGANIZATION"
};

const ContributionTag = {
  "PULL_REQUEST": "PULL_REQUEST",
  "ISSUE": "ISSUE",
  "COMMENT": "COMMENT",
  "REVIEW": "REVIEW"
};

const { NewsletterEmailModel, UsersModel, ContributionsModel, ExperienceModel, PostsModel, ConversationModel, MessageModel, CommentModel, UsersConvo } = initSchema(schema);

export {
  NewsletterEmailModel,
  UsersModel,
  ContributionsModel,
  ExperienceModel,
  PostsModel,
  ConversationModel,
  MessageModel,
  CommentModel,
  UsersConvo,
  SizeTag,
  InterestTag,
  DevelopmentTag,
  LanguageTag,
  FrameworkTag,
  DifficultyTag,
  ExperienceTag,
  AccountTag,
  ContributionTag
};