# DMI Portfolio Website (Static HTML/CSS) that is deployed in a 5 day mini Sprint using Jira Project Management tool.

This repository contains a clean, professional-looking **static portfolio website** used in **DevOps Micro Internship (DMI)** Week 4 to practice:
- Linux basics
- Nginx hosting
- Deployment proof / ownership
- Production-style checks
- Jira Project Management tool
- Agile methodology and Scrum framework and templates


## What you will build
A portfolio-style website hosted on:
- **Ubuntu VM**
- **Nginx**
- Accessible via: `http://<public-ip>`
- Sprint methods in Jira

---

## Mandatory Ownership Proof (DMI Rule)
Before you deploy, you MUST edit the footer and add your details:

Original:

```html
<p><strong>Deployed by:</strong> DMI Cohort 2 | Rahul Sharma | Group 4 | Week 1 | 16-01-2026</p>
```

Add this line (example):

```html
<p><strong>Deployed by:</strong> DMI Cohort 2 | Sridevi Parimi | Group 5 | Week 4 | <span id="deplyDate" ></span></p>
```

Original :

````html
<h1>
    Empowering thousands of students  towards success
</h1>
````
Add this line (example):

````html
<p>
    <a href="https://discord.pravinmishra.com/" target="_blank" rel="noopener noreferrer"
        style="color: #ffffff; text-decoration: underline;">
        Join DMI Cohort 3 on Discord and start your DevOps journey
    </a>
</p>
````

Sprint Overview
|Day	| Task                                  |	Notes                                              |
|:------|:-------------------------------------:| :---------------------------------------------------:|
|Day 1	| Implement Footer + Commit + Deploy	|   Initial footer deployed on EC2                     |
|Day 2	| Make Deploy Date Dynamic	            |   Added dynamic JS date and updated README           |
|Day 3	| Polish & Accessibility	            |   Checked mobile responsiveness and accessibility    |
|Day 4	| Change Tagline	                    |   Minor UI tweaks and footer styling                 |
|Day 5	| Demo + Retro + Burndown	            |   Jira Burndown proof + final deploy                 |

## What I Learned
- Set up a live Amazon Linux EC2 instance for hosting static files.

- Installed and configured Nginx as the web server.

- Learned to safely move project files to /usr/share/nginx/html and replace old versions.

- Practiced incremental deployment, updating only changed components (footer, date, version).

- Added deploy date and version to track live changes.

- Verified deployment through browser testing on desktop and mobile.

- Learned to check service status, file permissions, and logs to troubleshoot issues.

- Gained experience in proof-based delivery, seeing changes live every day.

- Developed a mini workflow: local dev → manual deployment → live validation.

- Small daily increments are more effective than one big push

- Using Jira for sprint tracking improves visibility and accountability

- Daily deployment proof builds confidence in production readiness
