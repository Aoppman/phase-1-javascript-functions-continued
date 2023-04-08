
//Define a function using FUNCTION DECLARATION
saturdayFun()
//function
function saturdayFun(activity) {

    if (activity === undefined) {
        return "This Saturday, I want to roller-skate!";
    }
    else {
        return `This Saturday, I want to ${activity}!`;
    }
};


//Define a function using a FUNCTION EXPRESSION

//Funtion
const mondayWork = function whatToDo(activity) {
        if (activity === undefined) {
            return "This Monday, I will go to the office.";
        }
        else {
            return `This Monday, I will ${activity}.`
        };
};

//Functtion expression
 mondayWork()


function wrapAdjective(special) {
   
    const result = function (emphatic) {
    if (special === '*') {
        return `You are *${emphatic}*!`;
    }
    else {
        return `You are ||${emphatic}||!`;
    }
    };

 return result;
 };

  