# GreenSched

<p align="center">
  <img src="docs/logo/greensched-logo.png" alt="GreenSched Logo" width="150"/>
</p>


**Collaborative Waste Collection Calendars**  
GreenSched is an exploratory project demonstrating Domain-Driven Design (DDD), Clean Architecture (CA), Test-Driven Development (TDD), Command Query Separation (CQS), and event-driven messaging.  
The project provides a web frontend built with React and ShadCN, Electron for desktop, and PWA capabilities for mobile. The backend is implemented in Spring Boot with microservices representing autonomous Bounded Contexts (BCs).

---

<!-- Tabella BC con badge -->
# Project Status

| Name          | Abstract | Status |
|---------------|----------|--------|
| **Frontend**  | Frontend web. | [![SonarQube Main Analysis](https://github.com/emidiomorgia/green-sched/actions/workflows/main-frontend-build.yml/badge.svg?branch=main)](https://github.com/emidiomorgia/green-sched/actions/workflows/main-frontend-build.yml) <br/> [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=emidiomorgia_green-sched-app&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=emidiomorgia_green-sched-app) <br/> [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=emidiomorgia_green-sched-app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=emidiomorgia_green-sched-app) |
| **Identity BC** | Manages user registration, authentication, and roles. | <img src="https://img.shields.io/github/actions/workflow/status/username/greensched-identity/ci.yml?branch=main" alt="Identity Build Status"/> <br/> <img src="https://sonarqube.example.com/api/badges/coverage?key=greensched-identity" alt="Identity Coverage"/> <br/> <img src="https://sonarqube.example.com/api/badges/maintainability?key=greensched-identity" alt="Identity Maintainability"/> |
| **Calendar BC** | Handles calendar creation, versioning, duplication, and soft delete. | <img src="https://img.shields.io/github/actions/workflow/status/username/greensched-calendar/ci.yml?branch=main" alt="Calendar Build Status"/> <br/> <img src="https://sonarqube.example.com/api/badges/coverage?key=greensched-calendar" alt="Calendar Coverage"/> <br/> <img src="https://sonarqube.example.com/api/badges/maintainability?key=greensched-calendar" alt="Calendar Maintainability"/> |
| **Collaboration BC** | Manages subscriptions, comments, ratings, and visibility of shared calendars. | <img src="https://img.shields.io/github/actions/workflow/status/username/greensched-collaboration/ci.yml?branch=main" alt="Collaboration Build Status"/> <br/> <img src="https://sonarqube.example.com/api/badges/coverage?key=greensched-collaboration" alt="Collaboration Coverage"/> <br/> <img src="https://sonarqube.example.com/api/badges/maintainability?key=greensched-collaboration" alt="Collaboration Maintainability"/> |
| **BFF** | Backend-for-Frontend orchestrating data from all BCs for the frontend. | <img src="https://img.shields.io/github/actions/workflow/status/username/greensched-bff/ci.yml?branch=main" alt="BFF Build Status"/> <br/> <img src="https://sonarqube.example.com/api/badges/coverage?key=greensched-bff" alt="BFF Coverage"/> <br/> <img src="https://sonarqube.example.com/api/badges/maintainability?key=greensched-bff" alt="BFF Maintainability"/> |

---

## Table of Contents

1. [Overview](#overview)  
2. [Running Locally](#running-locally)  
3. [Conduct](#conduct)  
4. [Contributing](#contributing)  
5. [License](#license)

---

## Overview

GreenSched allows users to view, create, share, and manage municipal waste collection calendars. Features include user registration, calendar versioning, subscriptions, private notes, comments, and ratings.  
The architecture is based on autonomous Bounded Contexts (Identity, Calendar, Collaboration) and a BFF for orchestrating frontend interactions.

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
