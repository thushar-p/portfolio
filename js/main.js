// --- Data Definitions ---
const skillsData = [
    { category: 'Programming Languages & frameworks', skills: [
        { name: 'Java', icon: 'J', className: 'skill-java programming-language', fullDescription: 'Proficient in Java for backend development, including Spring Boot and microservices architecture. Experienced in building robust, scalable, and high-performance applications.', imageUrl: 'assets/skill-icons/java.svg' },
        { name: 'C-Sharp', icon: 'C#', className: 'skill-c-sharp programming-language', fullDescription: 'Experience with C# and .NET for building robust enterprise applications, focusing on clean architecture and maintainability.', imageUrl: 'assets/skill-icons/c-sharp.svg' },
        { name: 'Dotnet', icon: '.N', className: 'skill-dotnet programming-language', fullDescription: 'Strong understanding of the .NET framework for web and desktop applications, including ASP.NET Core and Entity Framework.', imageUrl: 'assets/skill-icons/dotnetcore.svg' },
        { name: 'Springboot', icon: 'SB', className: 'skill-springboot programming-language', fullDescription: 'Extensive experience with Spring Boot for rapid application development and RESTful APIs. Skilled in dependency injection, data access, and security configurations.', imageUrl: 'assets/skill-icons/spring.svg' }
    ]},
    { category: 'Front End', skills: [
        { name: 'CSS', icon: '3', className: 'skill-css front-end', fullDescription: 'Skilled in modern CSS, including Flexbox, Grid, and responsive design principles. Proficient in creating visually appealing and consistent user interfaces.', imageUrl: 'assets/skill-icons/css.svg' },
        { name: 'HTML', icon: '5', className: 'skill-html front-end', fullDescription: 'Expert in semantic HTML5 for accessible and structured web content. Ensures cross-browser compatibility and SEO best practices.', imageUrl: 'assets/skill-icons/html5.svg' },
        { name: 'Javascript', icon: 'JS', className: 'skill-javascript front-end', fullDescription: 'Proficient in JavaScript for interactive web experiences and client-side logic. Experienced with ES6+ features and DOM manipulation.', imageUrl: 'assets/skill-icons/javascript.svg' }
    ]},
    { category: 'Database', skills: [
        { name: 'MySQL', icon: 'SQL', className: 'skill-mysql database', fullDescription: 'Experienced in MySQL database design, optimization, and query writing. Proficient in relational database management and data integrity.', imageUrl: 'assets/skill-icons/mysql.svg' },
        { name: 'DynamoDB', icon: 'DB', className: 'skill-dynamodb database', fullDescription: 'Familiar with NoSQL databases like DynamoDB for scalable and high-performance applications. Knowledgeable in data modeling for NoSQL solutions.', imageUrl: 'assets/skill-icons/dynamodb.svg' },
        { name: 'MongoDB', icon: 'MDB', className: 'skill-mongodb database', fullDescription: 'Hands-on experience with MongoDB for flexible and document-oriented data storage. Skilled in Mongoose ODM and aggregation pipelines.', imageUrl: 'assets/skill-icons/mongodb.svg' }
    ]},
    { category: 'Cloud and Devops', skills: [
        { name: 'AWS', icon: '☁️', className: 'skill-aws devops-cloud', fullDescription: 'Knowledge of AWS services for cloud deployment, including EC2, S3, Lambda, RDS, and API Gateway. Experienced in deploying and managing cloud-native applications.', imageUrl: 'assets/skill-icons/aws.svg' }
    ]},
    { category: 'Other tools and skills', skills: [
        { name: 'GIT', icon: '🔀', className: 'skill-git other-skills', fullDescription: 'Proficient in Git for version control, branching, merging, and collaborative development. Experienced with Git workflows like GitFlow and GitHub Flow.', imageUrl: 'assets/skill-icons/git.svg' },
        { name: 'GITLAB', icon: '🦊', className: 'skill-gitlab other-skills', fullDescription: 'Experience with GitLab for CI/CD pipelines and repository management. Skilled in setting up automated builds, tests, and deployments.', imageUrl: 'assets/skill-icons/gitlab.svg' },
        { name: 'GITHUB', icon: '🐙', className: 'skill-github other-skills', fullDescription: 'Active user of GitHub for open-source contributions and project hosting. Familiar with pull requests, issues, and project boards.', imageUrl: 'assets/skill-icons/github.svg' },
        { name: 'Postman scripts', icon: '📝', className: 'skill-postman-scripts other-skills', fullDescription: 'Skilled in writing Postman scripts for API testing and automation. Proficient in creating collections, environments, and test suites.', imageUrl: 'assets/skill-icons/postman.svg' },
        { name: 'Notion', icon: '📄', className: 'skill-notion other-skills', fullDescription: 'Utilize Notion for project management, documentation, and personal organization. Experienced in creating databases, wikis, and task boards.', imageUrl: 'assets/skill-icons/notion.svg' },
        { name: 'Jira', icon: '✅', className: 'skill-jira other-skills', fullDescription: 'Experienced with Jira for agile project management, issue tracking, and workflow automation. Skilled in managing sprints, backlogs, and reporting.', imageUrl: 'assets/skill-icons/jira.svg' },
        { name: 'Confluence', icon: '🤝', className: 'skill-confluence other-skills', fullDescription: 'Used Confluence for collaborative documentation and knowledge sharing. Proficient in creating and organizing technical documentation and team wikis.', imageUrl: 'assets/skill-icons/confluence.svg' },
        { name: 'Photoshop', icon: '🖼️', className: 'skill-photoshop other-skills', fullDescription: 'Basic skills in Photoshop for image editing and graphic design. Capable of basic photo manipulation and creating web assets.', imageUrl: 'assets/skill-icons/photoshop.svg' },
        { name: 'Illustrator', icon: '✒️', className: 'skill-illustrator other-skills', fullDescription: 'Basic skills in Illustrator for vector graphics and logo design. Can create scalable vector illustrations for web and print.', imageUrl: 'assets/skill-icons/illustrator.svg' },
        { name: 'Figma', icon: '🎨', className: 'skill-figma other-skills', fullDescription: 'Familiar with Figma for UI/UX design and prototyping. Experienced in creating wireframes, mockups, and interactive prototypes.', imageUrl: 'assets/skill-icons/figma.svg' }
    ]}
];
const projectsData = [
    {
        id: 'project-1',
        icon: 'fa-solid fa-code', // Changed to Font Awesome icon
        iconClass: 'html',
        title: 'School Management System',
        link: 'https://github.com/yourusername/school-management-system', // Replace with actual GitHub link
        meta: 'REST API',
        duration: '1 Month',
        description: 'A secure and scalable backend system designed using Java and Spring Boot to manage academic operations efficiently with role-based access and scheduled automation.',
        fullDescription: `This project is a School Management System backend developed using Spring Boot with a focus on clean architecture (SOLID principles) and modular design. The API supports role-based access control for three distinct user roles, ensuring appropriate permission handling through Spring Security.
        
Key features include:
- Role-Based Access Control (RBAC) using Spring Security.
- Entity relationships managed using Hibernate annotations.
- API testing with Postman and full API documentation using Swagger.
- Three scheduled jobs for automated operations like cleaning recycle bin and generating routine reports.
- Apache POI integration to read/write data from Excel files.
- Java 8 features like Optionals and Lambda expressions for cleaner, modern code.
- Built and managed using Git and GitHub, following Kanban-style SDLC for iterative delivery.
This system aims to streamline school administrative tasks such as student records, class scheduling, staff roles, and more with clear modularity, documentation, and automation.`,
        date: 'July 2025',
        status: 'Completed',
        techIcons: ['Java', 'Spring Boot', 'MySQL', 'Swagger'],
        tags: ['Backend', 'REST API', 'Spring Security', 'Java']
    },
    {
        id: 'project-2',
        icon: 'fa-solid fa-list-check',
        title: 'To-do Web Application',
        link: 'https://github.com/yourusername/todo-web-app', // Replace with actual GitHub link
        meta: 'Full Stack Web App',
        duration: '2 Weeks',
        description: 'A user-friendly full stack to-do application built with Java, JSP, and Servlets, featuring OTP-based email authentication and database integration via JDBC.',
        fullDescription: `This To-do Web Application is a full-stack Java project that enables users to manage tasks efficiently through a responsive and secure interface.
        
Key features include:
- Developed using core Java technologies with seamless database integration via JDBC and SQL.
- Frontend built with JSP and styled using CSS3 for a clean, user-friendly UI.
- Backend handled using Servlets to process requests and responses.
- Added client-side interactivity using JavaScript and server-side logic using Java.
- Implemented secure OTP-based authentication using JavaMail API and Java Activation API.
- Used Git and GitHub for version control and deployment.
This application includes three core entities and emphasizes modular design, clean separation of concerns, and enhanced user experience through real-time feedback and email security mechanisms.`,
        date: 'June 2025',
        status: 'Completed',
        techIcons: ['Java', 'JSP', 'Servlet', 'JDBC', 'JavaScript', 'CSS3'],
        tags: ['Full Stack', 'OTP Verification', 'JDBC', 'JavaMail API', 'Web Application']
    }
];
const experiencesData = [
    {
        id: 'exp-1',
        icon: 'fa-solid fa-laptop-code',
        title: 'Software Engineer',
        company: 'Raasoft Infotech Pvt. Ltd.',
        location: 'Mangalore, India',
        type: 'Full-time',
        dateRange: 'May 2024 – Present',
        duration: '1 Year 2 Months', // Update dynamically based on current date
        description: 'Developing scalable backend services and distributed systems for a payment application using .NET Core and AWS services.',
        fullDescription: `As a Software Engineer at Raasoft Infotech, I work on building and maintaining backend systems for a robust payment platform. My role involves designing and deploying microservices using C# and .NET Core while integrating AWS services such as Lambda, ECS (Fargate), S3, EventBridge, and Batch for scalable and reliable system architecture.

Key responsibilities and achievements include:
- Developed backend services for payment processing, user management, and transaction reporting.
- Designed distributed microservices integrated with AWS to ensure high availability and scalability.
- Managed MySQL, MongoDB, and DynamoDB to handle both structured and unstructured data.
- Integrated 3+ third-party services to enable real-time data synchronization.
- Implemented transaction compliance and velocity checks to ensure regulatory adherence.
- Used AWS Cognito for secure user authentication and access control.
- Optimized API latency and database performance through indexing and query tuning.
- Built efficient batch processing logic using hashing to sync ~8000 records in under 2 seconds.
- Created architecture diagrams and flowcharts for syncing data with external systems.
- Automated API testing with Postman collections and runners for complete end-to-end test coverage.
- Promoted clean coding practices, modular component design, and proper version control to ensure maintainability and team efficiency.`,
        tags: ['C#', '.NET Core', 'AWS', 'Microservices', 'MongoDB', 'DynamoDB', 'MySQL', 'Cognito', 'REST API', 'Postman']
    },
    {
        id: 'exp-2',
        icon: 'fa-solid fa-user-graduate',
        title: 'Backend Developer Intern',
        company: 'JSpiders',
        location: 'Bangalore, India',
        type: 'Internship',
        dateRange: 'Jan 2024 – Apr 2024',
        duration: '4 Months',
        description: 'Completed backend development internship with hands-on experience in building real-world applications using Java, Spring Boot, Servlets, and SQL.',
        fullDescription: `As a Backend Developer Intern at JSpiders, I gained practical experience in designing and developing Java-based applications from scratch. During the internship, I followed agile practices and worked on real-time backend projects focusing on REST API development, authentication mechanisms, and integration with external services.
        
Key contributions and projects:
- Developed a School Management System using Spring Boot and MySQL, featuring role-based access control, scheduled tasks, Swagger documentation, and Excel integration with Apache POI.
- Built a To-do Web Application using JSP, Servlets, and JDBC with secure OTP authentication via JavaMail API and Java Activation Framework.
- Strengthened understanding of object-oriented design, layered architecture, and modular development.
- Gained experience in using Postman for API testing and GitHub for version control and collaboration.
- Practiced full software development lifecycle including analysis, design, coding, testing, and documentation.`,
        tags: ['Java', 'Spring Boot', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'Swagger', 'Postman', 'JavaMail API', 'Apache POI']
    }
];
// --- DOM Elements ---
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const logo = document.querySelector('.logo');
const skillCard = document.querySelector('.skill-card');
const skillIcon = document.querySelector('.skill-icon');
const skillName = document.querySelector('.skill-name');
const prevBtn = document.querySelector('.carousel-nav:first-child');
const nextBtn = document.querySelector('.carousel-nav:last-child');
const skillsContentDiv = document.getElementById('skills-content');
const projectsTimeline = document.getElementById('projectsTimeline');
const projectFilterTags = document.getElementById('projectFilterTags');
const experienceTimeline = document.getElementById('experienceTimeline');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');
const detailModal = document.getElementById('detailModal');
const modalTitle = detailModal.querySelector('.modal-title');
const modalDescription = detailModal.querySelector('.modal-description');
const modalDetails = detailModal.querySelector('.modal-details');
const modalTags = detailModal.querySelector('.modal-tags');
const modalClose = document.getElementById('modalClose');
// Mobile menu elements
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('#mobileMenuOverlay .nav-link');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const mobileThemeToggleSwitch = document.getElementById('mobileThemeToggleSwitch');
// --- Initial DOM Element Check (for debugging) ---
console.log('projectsTimeline element:', projectsTimeline);
console.log('experienceTimeline element:', experienceTimeline);
console.log('skillsContentDiv element:', skillsContentDiv);
// --- Theme Toggle Functionality ---
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
// Sync initial state of mobile theme toggle switch
if (currentTheme === 'light') {
    mobileThemeToggleSwitch.style.transform = 'translateX(26px)';
} else {
    mobileThemeToggleSwitch.style.transform = 'translateX(0)';
}
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    // Sync mobile toggle switch
    if (newTheme === 'light') {
        mobileThemeToggleSwitch.style.transform = 'translateX(26px)';
    } else {
        mobileThemeToggleSwitch.style.transform = 'translateX(0)';
    }
});
mobileThemeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    // Sync desktop toggle switch
    if (newTheme === 'light') {
        themeToggle.style.transform = 'translateX(26px)';
    } else {
        themeToggle.style.transform = 'translateX(0)';
    }
    // Update mobile toggle switch
    if (newTheme === 'light') {
        mobileThemeToggleSwitch.style.transform = 'translateX(26px)';
    } else {
        mobileThemeToggleSwitch.style.transform = 'translateX(0)';
    }
});
// --- Skills Carousel Functionality ---
let currentSkillIndex = 0;
// Populate homePageSkills from skillsData
const homePageSkills = [];
skillsData.forEach(category => {
    category.skills.forEach(skill => {
        homePageSkills.push({
            name: skill.name,
            imageUrl: skill.imageUrl,
        });
    });
});
function updateHomeSkill() {
    const skill = homePageSkills[currentSkillIndex];
    const imgElement = skillIcon.querySelector('.skill-logo-home');
    if (imgElement) {
        imgElement.src = skill.imageUrl;
        imgElement.alt = `${skill.name} logo`;
    }
    skillName.textContent = skill.name;
}
prevBtn.addEventListener('click', () => {
    currentSkillIndex = (currentSkillIndex - 1 + homePageSkills.length) % homePageSkills.length;
    updateHomeSkill();
});
nextBtn.addEventListener('click', () => {
    currentSkillIndex = (currentSkillIndex + 1) % homePageSkills.length;
    updateHomeSkill();
});
// Auto-rotate skills every 3 seconds
setInterval(() => {
    currentSkillIndex = (currentSkillIndex + 1) % homePageSkills.length;
    updateHomeSkill();
}, 3000);
// Initial update for home page skill
updateHomeSkill();
// --- Page Navigation Functionality ---
function showPage(pageId) {
    navLinks.forEach(nl => nl.classList.remove('active'));
    mobileNavLinks.forEach(nl => nl.classList.remove('active')); // Also update mobile nav links
    pages.forEach(page => page.classList.remove('active'));
    const targetLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    document.getElementById(pageId).classList.add('active');
    // Close mobile menu if open
    mobileMenuOverlay.classList.remove('active');
}
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        showPage(targetPage);
    });
});
mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');
        showPage(targetPage);
    });
});
logo.addEventListener('click', () => {
    showPage('home');
});
// --- Mobile Menu Toggle ---
hamburgerMenu.addEventListener('click', () => {
    mobileMenuOverlay.classList.add('active');
});
mobileMenuClose.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('active');
});
// --- Dynamic Content Rendering ---
function renderSkills(searchTerm = '', originalSkillsData = skillsData) {
    console.log('renderSkills called with searchTerm:', searchTerm);
    let html = '';
    originalSkillsData.forEach(section => {
        const filteredSectionSkills = section.skills.filter(skill => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const nameMatch = skill.name.toLowerCase().includes(lowerCaseSearchTerm);
            const descriptionMatch = skill.fullDescription.toLowerCase().includes(lowerCaseSearchTerm);
            return nameMatch || descriptionMatch;
        });
        if (filteredSectionSkills.length > 0) {
            html += `<div class="skills-section">
                        <h2 class="skills-section-title">${section.category}</h2>
                        <div class="skills-grid three-col">`;
            filteredSectionSkills.forEach(skill => {
                const skillId = skill.name.replace(/\s/g, '-').toLowerCase();
                const skillHtml = `<div class="skill-card-large ${skill.className}" data-skill-id="${skillId}">
                            <div class="skill-logo-container">
                                <img src="${skill.imageUrl}" alt="${skill.name} logo" class="skill-logo">
                            </div>
                            <h3 class="skill-card-title">${skill.name}</h3>
                        </div>`;
                html += skillHtml;
            });
            html += `</div></div>`;
        }
    });
    if (skillsContentDiv) {
        skillsContentDiv.innerHTML = html;
        console.log('Skills HTML generated length:', html.length);
        console.log('Skills Content Div children count:', skillsContentDiv.children.length);
        addSkillCardClickListeners(); // Re-add listeners after rendering
    } else {
        console.error('skillsContentDiv not found!');
    }
}
let activeProjectFilter = 'all'; // Keep track of the active filter tag
function renderProjects(searchTerm = '', originalProjectsData = projectsData) {
    console.log('renderProjects called with searchTerm:', searchTerm);
    let currentProjects = originalProjectsData;
    // 1. Apply search filter
    if (searchTerm) {
        currentProjects = currentProjects.filter(project => {
            const searchableText = JSON.stringify(project).toLowerCase();
            return searchableText.includes(searchTerm);
        });
    }
    // 2. Apply tag filter
    if (activeProjectFilter !== 'all') {
        currentProjects = currentProjects.filter(project =>
            project.tags.map(t => t.toLowerCase()).includes(activeProjectFilter)
        );
    }
    let html = '';
    currentProjects.forEach(project => {
        const projectHtml = `<div class="timeline-item" data-project-id="${project.id}">
                    <div class="content-card">
                        <div class="content-header">
                            <div class="content-icon ${project.iconClass}"><i class="${project.icon}"></i></div>
                            <div class="content-info">
                                <h3 class="content-title">${project.title}</h3>
                                <div class="content-subtitle">${project.meta}</div>
                            </div>
                        </div>
                        <div class="content-meta">
                            <div class="content-meta-item">
                                <span>🌐</span>
                                <span><a href="${project.link}" target="_blank" class="project-link" aria-label="View project link">Link</a></span>
                            </div>
                            <div class="content-meta-item">
                                <span>📅</span>
                                <span>${project.date}</span>
                            </div>
                            <div class="content-meta-item">
                                <span>📊</span>
                                <span>${project.status}</span>
                            </div>
                        </div>
                        <div class="content-duration">
                            <span>⏱</span>
                            <span>${project.duration}</span>
                        </div>
                        <p class="content-description">${project.description}</p>
                        <div class="content-tags">
                            ${project.techIcons.map(icon => `<div class="content-tag">${icon}</div>`).join('')}
                        </div>
                    </div>
                </div>`;
        html += projectHtml;
        console.log('Generated HTML for project:', project.title, projectHtml);
    });
    if (projectsTimeline) {
        projectsTimeline.innerHTML = html;
        console.log('Projects HTML generated length:', html.length);
        console.log('Projects Timeline children count:', projectsTimeline.children.length);
        addProjectCardClickListeners(); // Re-add listeners after rendering
    } else {
        console.error('projectsTimeline not found!');
    }
}
function renderProjectFilterTags() {
    const allTags = new Set();
    projectsData.forEach(project => {
        project.tags.forEach(tag => allTags.add(tag));
    });
    let html = '<div class="filter-tag active" data-filter="all">All</div>';
    allTags.forEach(tag => {
        html += `<div class="filter-tag" data-filter="${tag.toLowerCase()}">${tag}</div>`;
    });
    if (projectFilterTags) {
        projectFilterTags.innerHTML = html;
        addProjectFilterListeners();
    } else {
        console.error('projectFilterTags not found!');
    }
}
function renderExperiences(searchTerm = '', originalExperiencesData = experiencesData) {
    console.log('renderExperiences called with searchTerm:', searchTerm);
    let currentExperiences = originalExperiencesData;
    if (searchTerm) {
        currentExperiences = originalExperiencesData.filter(exp => {
            const searchableText = JSON.stringify(exp).toLowerCase();
            return searchableText.includes(searchTerm);
        });
    }
    let html = '';
    currentExperiences.forEach((exp, index) => {
        const experienceHtml = `<div class="timeline-item" data-experience-id="${exp.id}">
                    <div class="content-card">
                        <div class="content-header">
                            <div class="content-icon"><i class="${exp.icon}"></i></div>
                            <div class="content-info">
                                <h3 class="content-title">${exp.title}</h3>
                                <div class="content-subtitle">${exp.institution || exp.company}</div>
                            </div>
                        </div>
                        <div class="content-meta">
                            <div class="content-meta-item">
                                <span>🏢</span>
                                <span>${exp.company}</span>
                            </div>
                            <div class="content-meta-item">
                                <span>📍</span>
                                <span>${exp.location}</span>
                            </div>
                            <div class="content-meta-item">
                                <span>💼</span>
                                <span>${exp.type}</span>
                            </div>
                        </div>
                        <div class="content-meta">
                            <div class="content-meta-item">
                                <span>📅</span>
                                <span>${exp.dateRange}</span>
                            </div>
                        </div>
                        <div class="content-duration">
                            <span>⏱</span>
                            <span>${exp.duration}</span>
                        </div>
                        <p class="content-description">${exp.description}</p>
                        <div class="content-tags">
                            ${exp.tags.map(tag => `<div class="content-tag">${tag}</div>`).join('')}
                        </div>
                    </div>
                </div>`;
        html += experienceHtml;
        console.log('Generated HTML for experience:', exp.title, experienceHtml);
    });
    if (experienceTimeline) {
        experienceTimeline.innerHTML = html;
        console.log('Experiences HTML generated length:', html.length);
        console.log('Experience Timeline children count:', experienceTimeline.children.length);
        addExperienceCardClickListeners(); // Re-add listeners after rendering
    } else {
        console.error('experienceTimeline not found!');
    }
}
// --- Contact Form Functionality ---
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    try {
        const subject = encodeURIComponent(`Portfolio Contact: ${data.subject || 'General Inquiry'}`);
        const body = encodeURIComponent(`Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nCompany: ${data.company || 'Not provided'}\nSubject: ${data.subject || 'Not specified'}\nBudget: ${data.budget || 'Not specified'}\nMessage:\n${data.message}`);
        const mailtoLink = `mailto:thushar8p@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        showMessage('Thank you for your message! Your email client should open now.', 'success');
        contactForm.reset();
    } catch (error) {
        console.error('Error:', error);
        showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}
// --- Search Functionality ---
function setupSearch(searchInputId, renderFunction, dataArray) {
    const searchInput = document.getElementById(searchInputId);
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            renderFunction(searchTerm, dataArray);
        });
    }
}
// --- Modal Functionality ---
function openModal(title, description, detailsHtml = '', tagsHtml = '') {
    modalTitle.textContent = title;
    // Replace newline characters with <br> tags for proper rendering
    modalDescription.innerHTML = description.replace(/\n/g, '<br>');
    modalDetails.innerHTML = detailsHtml;
    modalTags.innerHTML = tagsHtml;
    detailModal.classList.add('active');
    document.body.classList.add('no-scroll'); // Add no-scroll class to body
}
function closeModal() {
    detailModal.classList.remove('active');
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
    // Clear content after transition for better performance/privacy
    setTimeout(() => {
        modalTitle.textContent = '';
        modalDescription.innerHTML = ''; // Changed to innerHTML
        modalDetails.innerHTML = '';
        modalTags.innerHTML = '';
    }, 300); // Match CSS transition duration
}
modalClose.addEventListener('click', closeModal);
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        closeModal();
    }
});
function addProjectCardClickListeners() {
    document.querySelectorAll('#projectsTimeline .content-card').forEach(card => {
        card.removeEventListener('click', handleProjectCardClick); // Prevent duplicate listeners
        card.addEventListener('click', handleProjectCardClick);
    });
}
function handleProjectCardClick(event) {
    // Prevent opening modal if link is clicked directly
    if (event.target.closest('.project-link')) {
        return;
    }
    const projectId = this.closest('.timeline-item').getAttribute('data-project-id');
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        const details = `
            <p><strong>Category:</strong> ${project.meta}</p>
            <p><strong>Duration:</strong> ${project.duration}</p>
            <p><strong>Date:</strong> ${project.date}</p>
            <p><strong>Status:</strong> ${project.status}</p>
            <p><strong>Link:</strong> <a href="${project.link}" target="_blank" style="color: var(--text-primary); text-decoration: underline;">${project.link}</a></p>
        `;
        const tags = project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
        openModal(project.title, project.fullDescription, details, tags);
    }
}
function addExperienceCardClickListeners() {
    document.querySelectorAll('.timeline-item .content-card').forEach(card => {
        card.removeEventListener('click', handleExperienceCardClick); // Prevent duplicate listeners
        card.addEventListener('click', handleExperienceCardClick);
    });
}
function handleExperienceCardClick() {
    const experienceId = this.closest('.timeline-item').getAttribute('data-experience-id');
    const experience = experiencesData.find(e => e.id === experienceId);
    if (experience) {
        const details = `
            <p><strong>Company:</strong> ${experience.company}</p>
            <p><strong>Location:</strong> ${experience.location}</p>
            <p><strong>Type:</strong> ${experience.type}</p>
            <p><strong>Dates:</strong> ${experience.dateRange}</p>
            <p><strong>Duration:</strong> ${experience.duration}</p>
        `;
        const tags = experience.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
        openModal(experience.title, experience.fullDescription, details, tags);
    }
}
function addSkillCardClickListeners() {
    document.querySelectorAll('.skill-card-large').forEach(card => {
        card.removeEventListener('click', handleSkillCardClick); // Prevent duplicate listeners
        card.addEventListener('click', handleSkillCardClick);
    });
}
function handleSkillCardClick() {
    const skillId = this.getAttribute('data-skill-id');
    // Flatten the skillsData array to find the skill by its ID
    const skill = skillsData.flatMap(section => section.skills).find(s => s.name.replace(/\s/g, '-').toLowerCase() === skillId);
    if (skill) {
        openModal(skill.name, skill.fullDescription);
    }
}
// --- Project Filter Tags Functionality ---
function addProjectFilterListeners() {
    document.querySelectorAll('#projectFilterTags .filter-tag').forEach(tagElement => {
        tagElement.removeEventListener('click', handleProjectFilterClick); // Prevent duplicate listeners
        tagElement.addEventListener('click', handleProjectFilterClick);
    });
}
function handleProjectFilterClick() {
    document.querySelectorAll('#projectFilterTags .filter-tag').forEach(tag => tag.classList.remove('active'));
    this.classList.add('active');
    activeProjectFilter = this.getAttribute('data-filter');
    renderProjects(document.getElementById('projectsSearch').value.toLowerCase(), projectsData);
}
// --- Initial Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    renderSkills(); // No search term, renders all
    renderProjectFilterTags();
    renderProjects(); // No search term, renders all
    renderExperiences(); // No search term, renders all
    // Setup search for all relevant pages
    setupSearch('skillsSearch', renderSkills, skillsData);
    setupSearch('projectsSearch', renderProjects, projectsData);
    setupSearch('experienceSearch', renderExperiences, experiencesData);
});