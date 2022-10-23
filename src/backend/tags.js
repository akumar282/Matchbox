

/*
    const LANG_LIST = [{lang: "C#"}, {lang: "C++"}, {lang: "C"},{lang: "Java"}, {lang: "Python"}, {lang: "Typescript"}, {lang: "Html/CSS"}, {lang: "Kotlin"}, {lang: "Swift"}, {lang: "Ruby"}, {lang: "SQL"}]; // static plan list
const DEV_TYPE = [{dev: "Frontend Development"}, {dev: "Backend Development"}, {dev: "Full-Stack Development"}, {dev: "Desktop Development"}, {dev: "Web Development"}, {dev: "Database Development"}, {dev: "Mobile Development"}, {dev: "Mobile Development"}];
const TYPE_LIST = [{track: "Enviornmental"}, {track: "Connectivity"}, {track: ""}, {track: "Communication"}, {track: "Education"}, {track: "Entertainment"}];
*/

export const tags = ["C#", "C", "C++", "Java", "Python", "TypeScript", "HTML/CSS", "Kotlin", "Swift", "Ruby", "SQL",
              "Frontend Development", "Backend Development", "Full-Stack Development", "Desktop Development", "Web Development", "Database Development", "Mobile Development", 
              "Enviornmental", "Connectivity", "Communication", "Education", "Entertainment",
              "100 people >", "50 people >", "25 people >", "10 people>", "< 5 people"]

export default function isTag(tag) {
    return tags.includes(tag)
}
