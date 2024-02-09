import { v4 as uuidv4 } from 'uuid';

const ListOfQuestions = 
[
    {
        "id": uuidv4(),
        "title": "On a scale of 1 to 5, how would you rate your overall mental well-being?",
        "options":["Very Poor","Poor","Average", "Good","Excellent"]
    },
    {
        "id": uuidv4(),
        "title": "Are you currently seeking professional help for any mental health concerns?"
    },
    {
        "id": uuidv4(),
        "title": "How often do you experience stress or anxiety in your daily life?",
        "options":["Rarely","Occasionally","Frequently", "Almost Daily"]
    },
    {
        "id": uuidv4(),
        "title": "Do you feel comfortable expressing your emotions to others?"
    },
    {
        "id": uuidv4(),
        "title": "How often do you engage in social activities or gatherings?",
        "options":["Daily","Weekly","Monthly", "Rarely", "Never"]
    }
]

export default ListOfQuestions;
