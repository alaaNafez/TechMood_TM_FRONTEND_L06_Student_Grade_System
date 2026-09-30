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

  students.push({ name: studentName, grade: grade, evaluation: evaluation });
  let studentList = "";
  let max = students[0].grade;
  let min = students[0].grade;
  let sum = 0;
  let pass = 0;
  let fail = 0;

  for (let i = 0; i < students.length; i++) {
    
    studentList +=
      "Student Name: " +
      students[i].name +
      ", Grade: " +
      students[i].grade +
      ", Evaluation: " +
      students[i].evaluation +
      "\n";

    if (students[i].grade > max) {
      max = students[i].grade;
    }
    if (students[i].grade < min) {
      min = students[i].grade;
    }
    sum += students[i].grade;
    if (students[i].grade >= 60) {
      pass++;
    } else {
      fail++;
    }
  }
  let avg = sum / students.length;
  // عرض كل الطلاب في العنصر results
  console.log(studentList);
  // عرض أعلى وأدنى درجة ومتوسط الدرجات وعدد الطلاب الناجحين والراسبين
  console.log("Max Grade: " + max);
  console.log("Min Grade: " + min);
  console.log("Average Grade: " + avg);
  console.log("Number of students passed: " + pass);
  console.log("Number of students failed: " + fail);

});


  
