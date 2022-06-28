let matObject = JSON.parse(localStorage.getItem(`Stumat`));
let courseList;
let courseListside;

for (let i = 0; i < matObject.length; i++) {
    $("#stuMat").append(`<div class="inner col-lg-3 col-md-6">
    
        <div class="course d-flex flex-column mt-4 px-0">
            <div class="course-image">
                <img src="https://source.unsplash.com/1600x900/?books">
            </div>

            <div class="course-info p-3 pb-0">
            <a href="#" class="text-decoration-none">
                <h4>${matObject[i].Name}</h4>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo minima
                    est
                    enim praesentium nemo?</p>
            </div>
            
        </div>
    
</div>`);

    $(`#dropdown-mat`).append(`<li>
<a class="dropdown-item list-icon" href="#">${matObject[i].Name}</a>
</li>`);

};

courseList = document.querySelectorAll(`.course h4`);
courseListside = document.querySelectorAll(`.dropdown-item`);

for (let i = 0; i < courseList.length; i++) {
    courseList[i].addEventListener(`click`, function () {
        let matName = courseList[i].innerHTML
        localStorage.removeItem(`stumatname`);
        localStorage.setItem("stumatname", JSON.stringify(matName));
        open(`../../Student/Subject/subject.html`,`_self`);
    });

    courseListside[i].addEventListener(`click`, function () {
        let matNameside = courseListside[i].innerHTML
        localStorage.removeItem(`stumatname`);
        localStorage.setItem("stumatname", JSON.stringify(matNameside));
        open(`../../Student/Subject/subject.html`,`_self`);
    });
};