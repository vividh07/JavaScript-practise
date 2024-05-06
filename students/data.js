let students = [
    {
        Rollno : 1,
        Name : "Aman",
        eng : 84,
        hin : 56,
        math : 88,
        bio : 40,
        phy : 90,
        img : "https://reqres.in/img/faces/8-image.jpg",
       

    },
    {
        Rollno : 2,
        Name : "Chaman",
        eng : 70,
        hin : 66,
        math : 98,
        bio : 90,
        phy : 90,
        img : "https://reqres.in/img/faces/9-image.jpg",
       
    },
    {
        Rollno : 3,
        Name : "Suman",
        eng : 49,
        hin : 89,
        math : 60,
        bio : 56,
        phy : 25,
        img : "https://reqres.in/img/faces/7-image.jpg",
        
    },
    {
        Rollno : 4,
        Name : "Vikas",
        eng : 10,
        hin : 59,
        math : 45,
        bio : 34,
        phy : 89,
        img : "https://reqres.in/img/faces/10-image.jpg",
       
        
    },
    {
        Rollno : 5,
        Name : "Neeraj",
        eng : 84,
        hin : 56,
        math : 88,
        bio : 40,
        phy : 90,
        img : "https://reqres.in/img/faces/11-image.jpg",
       
        
    }
];

document.write(`
<div class="container p-5">
        <div class="row g-4">
`);
students = students.map((student) => {
    student.totalMarks = student.eng + student.hin + student.math + student.bio + student.phy;
    return student;
});
students.map((val, index)=>{
 document.write(`
 <div class="col-4 text-center">
        <div class="card">
            <div class="card-header">
                <img src=${val.img} alt="" class="img-fluid rounded-circle">
            </div>
            <div class="card-body">
                <h3>Name : ${val.Name}</h3>
            </div>
        <div class ="card-footer ">
            <h5>English : ${val.eng}</h5>
            <h5>Hindi : ${val.hin}</h5>
            <h5>Math : ${val.math}</h5>
            <h5>Biology : ${val.bio}</h5>
            <h5>Physics : ${val.phy}</h5>
            <h5>Total : ${val.totalMarks}</h5>
            <h5>Average : ${val.totalMarks/5}</h5>
        </div>
        </div>
    </div>
 `);
});
document.write(`
</div>
</div>
`);