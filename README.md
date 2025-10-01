# GreenSched

<p align="center">
  <img src="docs/logo/greensched-logo.png" alt="GreenSched Logo" width="150"/>
</p>

<div align="center" style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
  <img src="https://img.shields.io/github/actions/workflow/status/username/greensched/ci.yml?branch=main" alt="Build Status"/>
  <img src="https://sonarqube.example.com/api/badges/gate?key=greensched" alt="Sonar Quality Gate"/>
  <img src="https://sonarqube.example.com/api/badges/coverage?key=greensched" alt="Coverage"/>
  <img src="https://sonarqube.example.com/api/badges/maintainability?key=greensched" alt="Maintainability"/>
</div>


**Collaborative Waste Collection Calendars**  

GreenSched is an exploratory project demonstrating Domain-Driven Design (DDD), Clean Architecture (CA), Test-Driven Development (TDD), Command Query Separation (CQS), and event-driven messaging.  
The project provides a web frontend built with React and ShadCN, Electron for desktop, and PWA capabilities for mobile. The backend is implemented in Spring Boot with microservices representing autonomous Bounded Contexts (BCs).

---

## Table of Contents

1. [Overview](#overview)  
2. [Microservices / Bounded Contexts](#microservices--bounded-contexts)  
3. [Running Locally](#running-locally)  
4. [Conduct](#conduct)  
5. [Contributing](#contributing)  
6. [License](#license)

---

## Overview

GreenSched allows users to view, create, share, and manage municipal waste collection calendars. Features include user registration, calendar versioning, subscriptions, private notes, comments, and ratings.  
The architecture is based on autonomous Bounded Contexts (Identity, Calendar, Collaboration) and a BFF for orchestrating frontend interactions.

---

## Microservices / Bounded Contexts

| Name            | Abstract                                                      | Status       |
|-----------------|---------------------------------------------------------------|-------------|
| Identity BC     | Manages user registration, authentication, and roles.        | TBD         |
| Calendar BC     | Handles calendar creation, versioning, duplication, and soft delete. | TBD         |
| Collaboration BC | Manages subscriptions, comments, ratings, and visibility of shared calendars. | TBD         |
| BFF             | Backend-for-Frontend orchestrating data from all BCs for the frontend. | TBD         |

---

## Running Locally

Follow these instructions to start the project locally. Ensure you have **Node.js**, **npm/yarn**, **Java 17+**, and **Docker** installed.  

### Frontend
```bash
cd frontend
npm install
npm run dev
# or for Electron desktop
npm run electron:dev
# for PWA
npm run build && npm run serve
```

### BFF
```bash
cd bff
./mvnw clean install
./mvnw spring-boot:run
```

### Identity BC
```bash
cd services/identity
./mvnw clean install
./mvnw spring-boot:run
```

### Calendar BC
```bash
cd services/calendar
./mvnw clean install
./mvnw spring-boot:run
```

### Collaboration BC
```bash
cd services/collaboration
./mvnw clean install
./mvnw spring-boot:run
```

> Optionally, use `docker-compose up` for supporting services (PostgreSQL, RabbitMQ, Redis).

---

## Conduct

We expect all contributors to follow professional and respectful communication. Collaboration, knowledge sharing, and constructive feedback are encouraged.  
Please maintain clean commits and descriptive commit messages. Avoid including sensitive data in commits.

---

## Contributing

This project follows the TBD GitHub Flow.  
1. Fork the repository.  
2. Create a feature branch: `feature/<feature-name>`.  
3. Commit your changes with clear messages.  
4. Open a pull request against the `main` branch.  
5. Ensure tests pass and code is reviewed before merging.  

For major changes, please open an issue first to discuss the proposed modifications.

---

## License

This project is licensed. See the [LICENSE](LICENSE) file for details.
