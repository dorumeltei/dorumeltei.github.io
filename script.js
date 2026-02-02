// Project data
const projects = [
    {
        id: 1,
        title: "Task Manager Pro",
        description: "A comprehensive task management application with deadline tracking, priority levels, and team collaboration features.",
        category: "productivity",
        page: "projects/task-manager.html"
    },
    {
        id: 2,
        title: "Automated Backup System",
        description: "Automated backup solution for databases and file systems with scheduling and cloud integration.",
        category: "automation",
        page: "projects/backup-system.html"
    },
    {
        id: 3,
        title: "Server Monitor Dashboard",
        description: "Real-time server monitoring dashboard with alerts, metrics visualization, and performance tracking.",
        category: "administration",
        page: "projects/server-monitor.html"
    },
    {
        id: 4,
        title: "File Converter Utility",
        description: "Multi-format file converter supporting images, documents, and media files with batch processing.",
        category: "utils",
        page: "projects/file-converter.html"
    },
    {
        id: 5,
        title: "Workflow Automation Tool",
        description: "Create and manage automated workflows with drag-and-drop interface and integration with popular APIs.",
        category: "automation",
        page: "projects/workflow-tool.html"
    },
    {
        id: 6,
        title: "Note Taking App",
        description: "Clean and minimal note-taking application with markdown support, tags, and cloud sync.",
        category: "productivity",
        page: "projects/note-app.html"
    },
    {
        id: 7,
        title: "User Management System",
        description: "Comprehensive user administration system with role-based access control and audit logging.",
        category: "administration",
        page: "projects/user-management.html"
    },
    {
        id: 8,
        title: "Data Format Validator",
        description: "Validate and format data files including JSON, XML, CSV with error detection and correction.",
        category: "utils",
        page: "projects/data-validator.html"
    }
];

// Function to create project card HTML
function createProjectCard(project) {
    const card = document.createElement('a');
    card.href = project.page;
    card.className = 'project-card';
    card.dataset.category = project.category;
    
    card.innerHTML = `
        <div class="card-header">
            <h3>${project.title}</h3>
            <span class="card-category">${project.category}</span>
        </div>
        <div class="card-body">
            <p>${project.description}</p>
        </div>
        <div class="card-footer">
            <span class="view-project">View Project</span>
        </div>
    `;
    
    return card;
}

// Function to render all projects
function renderProjects(filteredProjects = projects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    
    filteredProjects.forEach(project => {
        const card = createProjectCard(project);
        grid.appendChild(card);
    });
}

// Function to filter projects
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Render all projects
    renderProjects();
    
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Filter projects
            const category = button.dataset.category;
            filterProjects(category);
        });
    });
});
