$(document).ready(function (){
    $("button").on("click", makeStuff);
});

function makeStuff()
{
    let studentFName = $("input#fName").val()
    let studentLName = $("input#lName").val()
    let studentPEarned = parseFloat($("input#pEarned").val())
    let studentPPosssible = parseFloat($("input#pPossible").val())

    let percentage = Math.fround(studentPEarned / studentPPosssible * 100)

    let letterGrade;

    if(percentage >= 95)
    {
        letterGrade = "A"
    }
    else if(percentage >= 85)
    {
        letterGrade = "B"
    }
    else if(percentage >= 75)
    {
        letterGrade = "C"
    }
    else if(percentage >= 65)
    {
        letterGrade = "D"
    }
    else if(percentage < 60)
    {
        letterGrade = "F"
    }


    let gradeBook = {
        firstName: studentFName,
        lastName: studentLName,
        pointsEarned: studentPEarned,
        pointsPossible: studentPPosssible
    }

    $("p#studentName").text(`first name: ${gradeBook.firstName}`)
    $("p#studentLastNAme").text(`last name: ${gradeBook.lastName}`)
    $("p#studentPercent").text(`percent: ${percentage}%`)
    $("p#studentLetterGrade").text(`grade: ${letterGrade}`)
}