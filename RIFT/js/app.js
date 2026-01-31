// Extracted from Smarteducation-1.html <script> block

// Application data and state
const appData = {
    currentUser: null,
    userType: 'student',
    users: {
        student: { name: 'John Doe', id: 'S001', email: 'john.doe@college.edu' },
        teacher: { name: 'Dr. Sarah Johnson', id: 'T001', email: 's.johnson@college.edu' },
        parent: { name: 'Robert Doe', id: 'P001', email: 'robert.doe@email.com' }
    },
    studentData: {
        attendance: 92,
        gpa: 9.4,
        nextExam: 'Data Structures',
        examDate: 'November 15, 2023',
        examTime: '10:00 AM - 12:00 PM',
        pendingAssignments: 3,
        courses: [
            { name: 'Data Structures', code: 'CS201', instructor: 'Dr. Sarah Johnson' },
            { name: 'Calculus II', code: 'MATH202', instructor: 'Prof. Michael Chen' },
            { name: 'Physics I', code: 'PHY101', instructor: 'Dr. Amanda Rodriguez' },
            { name: 'English Composition', code: 'ENG102', instructor: 'Prof. James Wilson' }
        ],
        attendanceRecords: [
            { date: '2023-11-01', course: 'Data Structures', status: 'Present' },
            { date: '2023-11-02', course: 'Calculus II', status: 'Present' },
            { date: '2023-11-03', course: 'Physics I', status: 'Absent' },
            { date: '2023-11-04', course: 'English Composition', status: 'Present' },
            { date: '2023-11-05', course: 'Data Structures', status: 'Present' }
        ],
        marks: [
            { course: 'Data Structures', assignment: 'Midterm Exam', marks: 88, total: 100, weight: 30 },
            { course: 'Calculus II', assignment: 'Quiz 1', marks: 95, total: 100, weight: 10 },
            { course: 'Physics I', assignment: 'Lab Report', marks: 92, total: 100, weight: 15 },
            { course: 'English Composition', assignment: 'Essay 1', marks: 85, total: 100, weight: 20 }
        ],
        examSchedule: [
            { course: 'Data Structures', date: '2023-11-15', time: '10:00 AM - 12:00 PM', type: 'Final Exam' },
            { course: 'Calculus II', date: '2023-11-18', time: '9:00 AM - 11:00 AM', type: 'Final Exam' },
            { course: 'Physics I', date: '2023-11-20', time: '1:00 PM - 3:00 PM', type: 'Final Exam' },
            { course: 'English Composition', date: '2023-11-22', time: '11:00 AM - 1:00 PM', type: 'Final Exam' }
        ]
    },
    recentActivity: [
        { date: '2023-11-05', activity: 'Submitted Data Structures Assignment', course: 'Data Structures', status: 'Completed' },
        { date: '2023-11-04', activity: 'Attended Physics Lab', course: 'Physics I', status: 'Present' },
        { date: '2023-11-03', activity: 'Missed Calculus Class', course: 'Calculus II', status: 'Absent' },
        { date: '2023-11-02', activity: 'Participated in English Debate', course: 'English Composition', status: 'Extra Credit' },
        { date: '2023-11-01', activity: 'Took Data Structures Quiz', course: 'Data Structures', status: 'Scored 88%' }
    ],
    upcomingEvents: [
        { date: '2023-11-08', event: 'Data Structures Quiz', course: 'Data Structures', type: 'Assessment' },
        { date: '2023-11-10', event: 'Physics Lab Report Due', course: 'Physics I', type: 'Assignment' },
        { date: '2023-11-12', event: 'Calculus Study Group', course: 'Calculus II', type: 'Revision' },
        { date: '2023-11-15', event: 'Data Structures Final Exam', course: 'Data Structures', type: 'Exam' }
    ],
    notifications: [
        { time: '2 hours ago', message: 'New assignment posted in Data Structures', priority: 'Immediately', action: 'View' },
        { time: '1 day ago', message: 'Your attendance has been updated', priority: 'Within 5 hours', action: 'Check' },
        { time: '2 days ago', message: 'Revision session scheduled for Calculus', priority: 'Within 1 hour', action: 'Join' },
        { time: '3 days ago', message: 'Message from Dr. Johnson about upcoming exam', priority: 'Immediately', action: 'Read' },
        { time: '30 minutes ago', message: 'Physics lab report due tomorrow', priority: 'Within 1 hour', action: 'Submit' },
        { time: '1 week ago', message: 'Library book return reminder', priority: 'Not Urgent', action: 'Return' }
    ],
    logs: [
        { time: '2023-11-05 14:30:22', action: 'Logged in to system', type: 'login' },
        { time: '2023-11-05 14:35:10', action: 'Viewed attendance records', type: 'view' },
        { time: '2023-11-05 15:20:45', action: 'Submitted assignment', type: 'update' },
        { time: '2023-11-05 16:05:33', action: 'Sent message to teacher', type: 'message' },
        { time: '2023-11-04 10:15:22', action: 'Checked exam schedule', type: 'view' },
        { time: '2023-11-04 11:40:18', action: 'Updated profile information', type: 'update' },
        { time: '2023-11-03 09:15:00', action: 'Downloaded course materials', type: 'download' },
        { time: '2023-11-02 14:22:10', action: 'Participated in online quiz', type: 'quiz' },
        { time: '2023-11-01 16:30:45', action: 'Viewed grades', type: 'view' },
        { time: '2023-10-30 10:00:00', action: 'Registered for new course', type: 'registration' }
    ]
};

// DOM elements
const loginPage = document.getElementById('loginPage');
const appContainer = document.getElementById('appContainer');
const loginForm = document.getElementById('loginForm');
const userTypeSelectors = document.querySelectorAll('.user-type');
const logoutBtn = document.getElementById('logoutBtn');
const navLinks = document.querySelectorAll('.nav-links a');
const pageContents = document.querySelectorAll('.page-content');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const userName = document.getElementById('userName');
const userRole = document.getElementById('userRole');
const userAvatar = document.getElementById('userAvatar');
const pageTitle = document.getElementById('pageTitle');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // User type selection
    userTypeSelectors.forEach(selector => {
        selector.addEventListener('click', function() {
            userTypeSelectors.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            appData.userType = this.getAttribute('data-type');
            
            // Update demo credentials hint
            const hint = document.querySelector('.login-box p');
            if (hint) {
                hint.textContent = `Demo Credentials: ${appData.userType}/123456`;
            }
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simple authentication check
        if (password === '123456') {
            login(username);
        } else {
            alert('Invalid credentials. Use "123456" as password for demo.');
        }
    });

    // Logout button
    logoutBtn.addEventListener('click', function() {
        logout();
    });

    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show the selected page
            const page = this.getAttribute('data-page');
            showPage(page);
        });
    });

    // Tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show the selected tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}Tab`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Populate initial data
    populateDashboard();
});

// Login function
function login(username) {
    appData.currentUser = username;
    
    // Set user info based on type
    const user = appData.users[appData.userType];
    userName.textContent = user.name;
    userRole.textContent = appData.userType.charAt(0).toUpperCase() + appData.userType.slice(1);
    userAvatar.textContent = user.name.split(' ').map(n => n[0]).join('');
    
    // Update page title based on user type
    if (appData.userType === 'teacher') {
        document.querySelector('.logo span').textContent = 'Teacher Portal';
        pageTitle.textContent = 'Teacher Dashboard';
    } else if (appData.userType === 'parent') {
        document.querySelector('.logo span').textContent = 'Parent Portal';
        pageTitle.textContent = 'Parent Dashboard';
    } else {
        document.querySelector('.logo span').textContent = 'SmartEd';
        pageTitle.textContent = 'Dashboard';
    }
    
    // Switch to app view
    loginPage.style.display = 'none';
    appContainer.style.display = 'flex';
    
    // Log the login
    addLog('Logged in to system', 'login');
}

// Logout function
function logout() {
    appData.currentUser = null;
    
    // Reset login form
    loginForm.reset();
    
    // Switch to login view
    appContainer.style.display = 'none';
    loginPage.style.display = 'flex';
    
    // Reset to student view for next login
    userTypeSelectors.forEach(s => s.classList.remove('active'));
    userTypeSelectors[0].classList.add('active');
    appData.userType = 'student';
}

// Show page function
function showPage(page) {
    // Hide all pages
    pageContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the selected page
    const pageElement = document.getElementById(`${page}Page`);
    if (pageElement) {
        pageElement.style.display = 'block';
        
        // Update page title
        const pageTitles = {
            dashboard: 'Dashboard',
            attendance: 'Attendance',
            marks: 'Marks & Grades',
            curriculum: 'Curriculum',
            exams: 'Exam Schedule',
            revision: 'Revision Sessions',
            messages: 'Messages',
            chat: 'Ask Teacher',
            reports: 'Reports',
            logs: 'Activity Logs'
        };
        
        pageTitle.textContent = pageTitles[page] || 'Page';
        
        // Load page-specific content
        if (page === 'attendance') {
            loadAttendancePage();
        } else if (page === 'marks') {
            loadMarksPage();
        } else if (page === 'curriculum') {
            loadCurriculumPage();
        } else if (page === 'exams') {
            loadExamsPage();
        } else if (page === 'revision') {
            loadRevisionPage();
        } else if (page === 'messages') {
            loadMessagesPage();
        } else if (page === 'chat') {
            loadChatPage();
        } else if (page === 'reports') {
            loadReportsPage();
        } else if (page === 'logs') {
            loadLogsPage();
        }
        
        // Log page view
        addLog(`Viewed ${pageTitles[page]} page`, 'view');
    }
}

// Populate dashboard with data
function populateDashboard() {
    // Update dashboard stats
    document.getElementById('attendancePercent').textContent = `${appData.studentData.attendance}%`;
    document.getElementById('currentGPA').textContent = appData.studentData.gpa;
    document.getElementById('nextExam').textContent = appData.studentData.nextExam;
    document.getElementById('examDate').textContent = appData.studentData.examDate;
    document.getElementById('examTime').textContent = appData.studentData.examTime;
    document.getElementById('pendingAssignments').textContent = appData.studentData.pendingAssignments;
    
    // Populate recent activity
    const recentActivityTbody = document.getElementById('recentActivity');
    recentActivityTbody.innerHTML = '';
    
    appData.recentActivity.forEach(activity => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${activity.date}</td>
            <td>${activity.activity}</td>
            <td>${activity.course}</td>
            <td><span class="badge ${activity.status === 'Completed' ? 'badge-present' : activity.status === 'Absent' ? 'badge-absent' : 'badge-pending'}">${activity.status}</span></td>
        `;
        recentActivityTbody.appendChild(row);
    });
    
    // Populate upcoming events
    const upcomingEventsTbody = document.getElementById('upcomingEvents');
    upcomingEventsTbody.innerHTML = '';
    
    appData.upcomingEvents.forEach(event => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${event.date}</td>
            <td>${event.event}</td>
            <td>${event.course}</td>
            <td><span class="badge ${event.type === 'Exam' ? 'badge-absent' : event.type === 'Assessment' ? 'badge-pending' : 'badge-present'}">${event.type}</span></td>
        `;
        upcomingEventsTbody.appendChild(row);
    });
    
    // Populate notifications
    const notificationTbody = document.getElementById('notificationList');
    notificationTbody.innerHTML = '';
    
    appData.notifications.forEach(notification => {
        let badgeClass = 'badge-pending'; // default
        if (notification.priority === 'Immediately') badgeClass = 'badge-absent';
        else if (notification.priority === 'Within 1 hour') badgeClass = 'badge-pending';
        else if (notification.priority === 'Within 5 hours') badgeClass = 'badge-present';
        else if (notification.priority === 'Not Urgent') badgeClass = 'badge-not-urgent';
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${notification.time}</td>
            <td>${notification.message}</td>
            <td><span class="badge ${badgeClass}">${notification.priority}</span></td>
            <td><button class="btn btn-primary btn-sm">${notification.action}</button></td>
        `;
        notificationTbody.appendChild(row);
    });
}

// Load attendance page
function loadAttendancePage() {
    const attendancePage = document.getElementById('attendancePage');
    
    let content = `
        <div class="data-table">
            <div class="table-header">
                <h3 class="table-title">Attendance Records</h3>
                <div>
                    <span>Overall Attendance: <strong>${appData.studentData.attendance}%</strong></span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Course</th>
                        <th>Instructor</th>
                        <th>Status</th>
                        ${appData.userType === 'teacher' ? '<th>Action</th>' : ''}
                    </tr>
                </thead>
                <tbody>
    `;
    
    appData.studentData.attendanceRecords.forEach(record => {
        const course = appData.studentData.courses.find(c => c.name === record.course);
        content += `
            <tr>
                <td>${record.date}</td>
                <td>${record.course}</td>
                <td>${course ? course.instructor : 'N/A'}</td>
                <td><span class="badge ${record.status === 'Present' ? 'badge-present' : 'badge-absent'}">${record.status}</span></td>
                ${appData.userType === 'teacher' ? `<td><button class="btn btn-primary btn-sm" onclick="updateAttendance('${record.date}', '${record.course}')">Update</button></td>` : ''}
            </tr>
        `;
    });
    
    content += `
                </tbody>
            </table>
        </div>
        
        <div class="card" style="margin-top: 20px;">
            <div class="card-header">
                <h3 class="card-title">Attendance Statistics</h3>
            </div>
            <div style="display: flex; justify-content: space-around; padding: 20px;">
                <div style="text-align: center;">
                    <h3>${appData.studentData.attendance}%</h3>
                    <p>Overall</p>
                </div>
                <div style="text-align: center;">
                    <h3>18</h3>
                    <p>Present Days</p>
                </div>
                <div style="text-align: center;">
                    <h3>2</h3>
                    <p>Absent Days</p>
                </div>
                <div style="text-align: center;">
                    <h3>0</h3>
                    <p>Late Days</p>
                </div>
            </div>
        </div>
    `;
    
    if (appData.userType === 'teacher') {
        content += `
            <div class="card" style="margin-top: 20px;">
                <div class="card-header">
                    <h3 class="card-title">Mark Attendance</h3>
                </div>
                <div style="padding: 20px;">
                    <div class="form-group">
                        <label for="attendanceCourse">Select Course</label>
                        <select id="attendanceCourse">
                            ${appData.studentData.courses.map(course => `<option value="${course.name}">${course.name} (${course.code})</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="attendanceDate">Date</label>
                        <input type="date" id="attendanceDate" value="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="form-group">
                        <label for="attendanceStatus">Status</label>
                        <select id="attendanceStatus">
                            <option value="Present">Present</option>
                            <option value="Absent">Absent</option>
                            <option value="Late">Late</option>
                            <option value="Excused">Excused</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" onclick="markAttendance()">Mark Attendance</button>
                </div>
            </div>
        `;
    }
    
    attendancePage.innerHTML = content;
}

// Load marks page
function loadMarksPage() {
    const marksPage = document.getElementById('marksPage');
    
    let content = `
        <div class="data-table">
            <div class="table-header">
                <h3 class="table-title">Marks & Grades</h3>
                <div>
                    <span>Current GPA: <strong>${appData.studentData.gpa}</strong></span>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Assignment/Exam</th>
                        <th>Marks</th>
                        <th>Weight</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    appData.studentData.marks.forEach(mark => {
        const percentage = (mark.marks / mark.total) * 100;
        let grade = '';
        
        if (percentage >= 90) grade = 'A';
        else if (percentage >= 80) grade = 'B';
        else if (percentage >= 70) grade = 'C';
        else if (percentage >= 60) grade = 'D';
        else grade = 'F';
        
        content += `
            <tr>
                <td>${mark.course}</td>
                <td>${mark.assignment}</td>
                <td>${mark.marks}/${mark.total} (${percentage.toFixed(1)}%)</td>
                <td>${mark.weight}%</td>
                <td><span class="badge ${grade === 'A' ? 'badge-present' : grade === 'B' ? 'badge-pending' : 'badge-absent'}">${grade}</span></td>
            </tr>
        `;
    });
    
    content += `
                </tbody>
            </table>
        </div>
        
        <div class="card" style="margin-top: 20px;">
            <div class="card-header">
                <h3 class="card-title">Academic Performance</h3>
            </div>
            <div style="padding: 20px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h4>Current GPA</h4>
                    <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">${appData.studentData.gpa.toFixed(1)}/10</div>
                    <div style="color: var(--gray); font-size: 0.9rem;">(Out of 10 scale)</div>
                </div>
                <h4>Grade Distribution</h4>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 100px; margin-right: 15px;">Data Structures</div>
                    <div style="flex: 1; background-color: var(--light-gray); height: 20px; border-radius: 10px;">
                        <div style="width: 88%; background-color: var(--success); height: 100%; border-radius: 10px;"></div>
                    </div>
                    <div style="width: 60px; text-align: right; margin-left: 15px;">88%</div>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 100px; margin-right: 15px;">Calculus II</div>
                    <div style="flex: 1; background-color: var(--light-gray); height: 20px; border-radius: 10px;">
                        <div style="width: 95%; background-color: var(--success); height: 100%; border-radius: 10px;"></div>
                    </div>
                    <div style="width: 60px; text-align: right; margin-left: 15px;">95%</div>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <div style="width: 100px; margin-right: 15px;">Physics I</div>
                    <div style="flex: 1; background-color: var(--light-gray); height: 20px; border-radius: 10px;">
                        <div style="width: 92%; background-color: var(--success); height: 100%; border-radius: 10px;"></div>
                    </div>
                    <div style="width: 60px; text-align: right; margin-left: 15px;">92%</div>
                </div>
                <div style="display: flex; align-items: center;">
                    <div style="width: 100px; margin-right: 15px;">English</div>
                    <div style="flex: 1; background-color: var(--light-gray); height: 20px; border-radius: 10px;">
                        <div style="width: 85%; background-color: var(--warning); height: 100%; border-radius: 10px;"></div>
                    </div>
                    <div style="width: 60px; text-align: right; margin-left: 15px;">85%</div>
                </div>
            </div>
        </div>
    `;
    
    marksPage.innerHTML = content;
}

// Load curriculum page
function loadCurriculumPage() {
    const curriculumPage = document.getElementById('curriculumPage');
    
    let content = `
        <div class="dashboard-cards">
    `;
    
    appData.studentData.courses.forEach(course => {
        content += `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${course.code}</h3>
                    <div class="card-icon curriculum-icon">
                        <i class="fas fa-book"></i>
                    </div>
                </div>
                <h3>${course.name}</h3>
                <p>Instructor: ${course.instructor}</p>
                <div style="margin-top: 15px;">
                    <button class="btn btn-primary" style="margin-right: 10px;">View Syllabus</button>
                    <button class="btn btn-success">Course Materials</button>
                </div>
            </div>
        `;
    });

    content += `
        </div>

        <div class="card" style="margin-top: 20px;">
            <div class="card-header">
                <h3 class="card-title">Weekly Schedule</h3>
            </div>
            <div style="padding: 20px;">
                <div class="data-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>9:00 - 10:30</td>
                                <td>Data Structures</td>
                                <td>Calculus II</td>
                                <td>Data Structures</td>
                                <td>Calculus II</td>
                                <td>Physics I</td>
                            </tr>
                            <tr>
                                <td>11:00 - 12:30</td>
                                <td>Physics I</td>
                                <td>English Composition</td>
                                <td>Physics Lab</td>
                                <td>Data Structures Lab</td>

