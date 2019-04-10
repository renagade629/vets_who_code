let homePageSelectHtml = () => {
    $('.main_container').replaceWith( 
    `<div class ="main_initial_state">
        <div class="teacher_btn_container">
            <p>
                Are you a teacher? <br>
                Needs help with your students IEP? <br>
            </p>
            <button onclick="modifyTeacherInnterHtml()">Click here</button>
        </div>

        <div class="parent_btn_container">
            <p>
                Are you a parent of a special needs child?  <br>
                Need help tracking your child's IEP goals? <br>
            </p>
            <button onclick="modifyParentInnterHtml()">Click here</button>
        </div>
    </div>`);
}

let modifyParentInnterHtml = () => {
    $(".main_initial_state").replaceWith(
    `<div class ="main_container">
        <div class="left" onclick="homePageSelectHtml()"></div>
        <div class="dynamic_container">
            <div class="img_container">
                <img src="parent_portal.png" alt="Parent Portal">
                <img src="goal_tracking.png" alt="Goal Tracking">
                <img src="communication.png" alt="Better Communication">
            </div>

            <p>
                <br>Parents, <br> <br>
                Wish you had parent-portal that followed your childs information? <br>
                Are you struggling to track your child's progress with their IEP goals? <br>
                Do you need a tool for improve better communication with your child's teachers?
            </p>
        </div>
    </div>`);
}

let modifyTeacherInnterHtml = () => {
    $(".main_initial_state").replaceWith(
    `<div class ="main_container">
        <div class="left" onclick="homePageSelectHtml()"></div>
        <div class="dynamic_container">
            <div class="img_container">
                <img src="paper_work.png" alt="Manual Paperwork">
                <img src="compliance.png" alt="Compliance">
                <img src="automate_reps.png" alt="Automate Reports">
            </div>

            <p>
                <br>Teachers: <br> <br>
                Are you tired of manual IEP paperwork? <br>
                Tired of using non-user-friendly compliance software? <br>
                Need automated report generation for progress reports and ARD meetings?
            </p>
    
        </div>
    </div>`);
}