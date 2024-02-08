import { v4 as uuidv4 } from 'uuid';


const ListOfQuestions = [
    {
        id: uuidv4(),
        title: "On a scale of 1 to 5, how would you rate your overall mental well-being?",
        options:["Very Poor","Poor","Average", "Good","Excellent"],
    },
    {
        id:uuidv4() ,
        title: "Are you currently seeking professional help for any mental health concerns?",
    },
    {
        id: uuidv4(),
        title: "How often do you experience stress or anxiety in your daily life?",
        options:["Rarely","Occasionally","Frequently", "Almost Daily"],
    },
    {
        id: uuidv4(),
        title: "Do you feel comfortable expressing your emotions to others?",
    },
    {
        id: uuidv4(),
        title: "How often do you engage in social activities or gatherings?",
        options:["Daily","Weekly","Monthly", "Rarely", "Never"],
    },
    {
        id: uuidv4(),
        title: "On a scale of 1 to 5, how extroverted or introverted do you consider yourself?",
        options:["Very Introverted","Introverted","Neutral", "Extroverted", "Very Extroverted"],
    },
    {
        id:uuidv4() ,
        title: "Are you more inclined towards optimism or pessimism?",
    },
    {
        id:uuidv4() ,
        title: "How satisfied are you with your current job/school environment?",
    },
    {
        id: uuidv4() ,
        title: "How much time do you spend on digital devices each day?",
    },
    {
        id: uuidv4() ,
        title: "On average, how many hours of sleep do you get per night?",
    },

];

export default ListOfQuestions;