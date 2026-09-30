// button في  html
const checkGradeBtn = document.querySelector("#checkGrade");
// مكان عرض النتيجة في html
const result = document.querySelector("#result");
let students = [];
// عند الضغط على الزر يتم تنفيذ الكود التالي

checkGradeBtn.addEventListener("click", () => {
  // الحصول على اسم الطالب والدرجة من الحقول في html
  // value تاخذ القيمة نفسها من عنصر html
  const studentName = document.querySelector("#studentName").value;
  const grade = Number(document.querySelector("#studentGrade").value);

  // قيمة النتيجة
  let evaluation;

  // تحديد النتيجة بناءً على الدرجة
  if (grade >= 90) {
    evaluation = "Excellent";
  } else if (grade >= 80) {
    evaluation = "Very Good";
  } else if (grade >= 70) {
    evaluation = "Good";
  } else if (grade >= 60) {
    evaluation = "Pass";
  } else {
    evaluation = "Fail";
  }

  // عرض النتيجة في العنصر result
  result.textContent = studentName + " has result " + evaluation;

});


  
