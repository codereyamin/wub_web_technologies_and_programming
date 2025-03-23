# Tuhin Ikbal Eyamin
# CSE 65/C
# 3936

# Why Do We Use GitHub?

GitHub is a cloud-based platform that helps developers manage code repositories using Git. It plays a crucial role in software development by providing features like **version control, collaboration, continuous integration, and deployment**.

## Role of GitHub in Software Development  

### 🔹 Version Control  
GitHub allows multiple developers to work on a project without overwriting each other's changes.  

**Example:**  
If Developer A makes a change to `index.js` and Developer B modifies `style.css`, GitHub keeps track of these changes without conflicts.  

### 🔹 Collaboration  
Teams can work together remotely by sharing a repository.  

**Example:**  
A front-end developer and a back-end developer can push their code separately and merge their work using Pull Requests.  

### 🔹 Code Review & Pull Requests  
Before merging new code, teammates can review and suggest improvements.  

**Example:**  
A junior developer submits a Pull Request for a new feature, and a senior developer reviews and approves it.  

### 🔹 Branching & Merging  
Developers can create separate branches to work on new features without affecting the main codebase.  

**Example:**  
A new `feature-authentication` branch is created to work on login functionality. Once complete, it's merged into the `main` branch.  

### 🔹 Issue Tracking & Project Management  
GitHub provides issue tracking where bugs, tasks, and enhancements can be reported and assigned.  

**Example:**  
A tester finds a bug and creates an issue with details. A developer is assigned to fix it.  

### 🔹 CI/CD Integration  
GitHub integrates with **GitHub Actions, Jenkins, Travis CI**, etc., to automate testing and deployment.  

**Example:**  
When code is pushed to the `main` branch, GitHub Actions automatically deploys the app to a server.  

---

📌 **Follow these steps to upload this README file to GitHub:**  

```bash
git init
git add README.md
git commit -m "Added README file"
git branch -M main
git remote add origin https://github.com/codereyamin/wub_web_technologies.git
git push -u origin main
