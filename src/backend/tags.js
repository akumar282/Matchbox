

/*
    const LANG_LIST = [{lang: "C#"}, {lang: "C++"}, {lang: "C"},{lang: "Java"}, {lang: "Python"}, {lang: "Typescript"}, {lang: "Html/CSS"}, {lang: "Kotlin"}, {lang: "Swift"}, {lang: "Ruby"}, {lang: "SQL"}]; // static plan list
const DEV_TYPE = [{dev: "Frontend Development"}, {dev: "Backend Development"}, {dev: "Full-Stack Development"}, {dev: "Desktop Development"}, {dev: "Web Development"}, {dev: "Database Development"}, {dev: "Mobile Development"}, {dev: "Cloud Computing"}, {dev: "DevOps Engineering"}, {dev: "Security Engineering"}];
const TYPE_LIST = [{track: "Enviornmental"}, {track: "Connectivity"}, {track: ""}, {track: "Communication"}, {track: "Education"}, {track: "Entertainment"}];
*/

const tags = ["C#", "C", "C++", "Java", "Python", "TypeScript", "HTML/CSS", "a"]

export default function isTag(tag) {
    return tags.includes(tag)
}
