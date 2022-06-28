let courseListside;
let matObject = JSON.parse(localStorage.getItem(`Stumat`));
let profileCourseCard = document.getElementById(`profileCourseCard`);

for (let i = 0; i < matObject.length; i++) {

    $(`#dropdown-mat`).append(`<li>
<a class="dropdown-item list-icon" href="#">${matObject[i].Name}</a>
</li>`);

$(`#profileCourseCard`).append(`<dd> <a class="courseprofilecard text-decoration-none" 
href="#">${matObject[i].Name}</a>
</dd>`);

};

courseListside = document.querySelectorAll(`.dropdown-item`);
courseprofilecard = document.querySelectorAll(`.courseprofilecard`);

for (let i = 0; i < courseListside.length; i++) {
    
    courseListside[i].addEventListener(`click`, function () {
        let matNameside = courseListside[i].innerHTML
        localStorage.removeItem(`stumatname`);
        localStorage.setItem("stumatname", JSON.stringify(matNameside));
        open(`../../Student/Subject/subject.html`,`_self`);
    });
};


for (let i = 0; i < courseprofilecard.length; i++) {
    
    courseprofilecard[i].addEventListener(`click`, function () {
        let matNameside = courseprofilecard[i].innerHTML
        localStorage.removeItem(`stumatname`);
        localStorage.setItem("stumatname", JSON.stringify(matNameside));
        open(`../../Student/Subject/subject.html`,`_self`);
    });
};