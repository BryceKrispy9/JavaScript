const allTopics = document.querySelectorAll('.topics');

copy(allTopics)

/*
{
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "8": {}
}
*/

const topicsToArray = Array.prototype.slice.call(allTopics); // Array module that calls the object of all topics

copy(topicsToArray);

/*
[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]
*/ // Copies high level element (array in this case)

topicsToArray[0].textContent;

const topicList = topicsToArray.map(e => e.textContent); // After converted, map is used to receive map from array. Stores all text content in a new array

copy(topicList);

/*
[
    "PYTHON FOR SOFTWARE DEVELOPMENTPYTHON FRAMEWORKPYTHON PYTHON APPLICATIONS",
    "BENEFITS OF POWER BIPOWER BIMICROSOFTDATA VISUALIZATIONS",
    "NOSQLDATABASESMYSQLSQL",
    "FLUTTER USE CASESWHY FLUTTER 2022FLUTTER FOR MOBILE APP DEVELOPMENTWEB DEVELOPMENTSOFTWARE DEVELOPMENT COMPANYFLUTTERMOBILE DEVELOPMENT",
    "DENTIST",
    "PYTHON",
    "LARAVEL DEVELOPMENT COMPANYHIRE LARAVEL DEVELOPERSLARAVEL DEVELOPMENT SERVICES",
    "AI DEVELOPMENTAI DEVELOPMENT SOLUTIONSAI DEVELOPMENT COMPANY IN USAAI DEVELOPMENT SERVICESAI DEVELOPMENT COMPANY",
    "HIRE LARAVEL DEVELOPERSLARAVEL DEVELOPMENT SERVICESLARAVEL DEVELOPMENT COMPANY"
]
*/