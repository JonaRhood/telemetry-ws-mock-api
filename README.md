# 🩺 Telemetry Mock API

This project is a mock API server that simulates real-time medical telemetry sensor signals using WebSockets. It is designed to help developers test frontends that consume health-related data such as heart rate, oxygen levels, temperature, blood pressure, and more.

## 🚀 Features

- Real-time data streaming via WebSocket.
- Simulated data for:
  - Heart rate
  - Blood oxygen level
  - Body temperature
  - Respiratory rate
  - Blood pressure (systolic and diastolic)
  - Glucose levels
  - Simulated ECG signal
- 100 mock patients with updated data every second.
- `/health` endpoint for health checks.
- Hosted on Azure (usable for testing and frontend development).

## 🔁 Data Format

Every second, the server sends an array of 100 telemetry objects via WebSocket. Each object looks like this:

```json
{
  "id": 1,
  "heartRate": 72,
  "oxygen": 97,
  "temperature": "36.8",
  "respirationRate": 15,
  "bloodPressure": {
    "systolic": 120,
    "diastolic": 70
  },
  "glucose": 110,
  "ecgSignal": [-0.34, 0.12, 0.89, ...],
  "timestamp": 1715090012345
}
```

## 🛠️ Requirements

- Node.js (v14 or higher)
- Express.js
- WebSocket
- npm
- dotenv

## 📦 Installation

```bash
git clone https://github.com/JonaRhood/telemetry-ws-mock-api.git
cd telemetry-ws-mock-api
npm install
```

## ⚙️ Technologies Used

[![NODEJS][Node.js]][Node-url]
[![EXPRESS][Express.js]][Express-url]
[![AZURE][AZURE]][AZURE-url]
[![GIT][GIT.js]][GIT-url]
[![DOTENV][Dotenv]][Dotenv-url]
[![NODEMON][Nodemon]][Nodemon-url]

## 👤 Contact

<a href="https://github.com/JonaRhood/reddit-client/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=JonaRhood/reddit-client" />
</a>

[![LinkedIn][linkedin-shield]][linkedin-url] <br />
Jonathan Cano -  jonathancanofreta@gmail.com

[Node.js]: https://img.shields.io/badge/NODE.JS-20232A?style=for-the-badge&logo=Node.js
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/EXPRESS-20232A?style=for-the-badge&logo=express
[Express-url]: https://expressjs.com/es/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-blue.svg?style=for-the-badge&logo=linkedin&colorBlue
[linkedin-url]: https://www.linkedin.com/in/jonathancanocalduch
[Dotenv]: https://img.shields.io/badge/.ENV-20232A?style=for-the-badge&logo=.env
[Dotenv-url]: https://www.dotenv.org/
[Git.js]: https://img.shields.io/badge/git-20232A?style=for-the-badge&logo=git&logoColor=e8571f
[Git-url]: https://git-scm.com/
[Azure]: https://img.shields.io/badge/Microsoft%20AZURE-20232A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgOTYgOTYiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZTM5OWMxOWYtYjY4Zi00MjlkLWIxNzYtMThjMjExN2ZmNzNjIiB4MT0iLTEwMzIuMTcyIiB4Mj0iLTEwNTkuMjEzIiB5MT0iMTQ1LjMxMiIgeTI9IjY1LjQyNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAxMDc1IDE1OCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxMTRhOGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNjY5YmMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYWMyYTZmYzItY2E0OC00MzI3LTlhM2MtZDRkY2MzMjU2ZTE1IiB4MT0iLTEwMjMuNzI1IiB4Mj0iLTEwMjkuOTgiIHkxPSIxMDguMDgzIiB5Mj0iMTA1Ljk2OCIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMTA3NSAxNTgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLW9wYWNpdHk9Ii4zIi8+PHN0b3Agb2Zmc2V0PSIwLjA3MSIgc3RvcC1vcGFjaXR5PSIuMiIvPjxzdG9wIG9mZnNldD0iLjMyMSIgc3RvcC1vcGFjaXR5PSIuMSIvPjxzdG9wIG9mZnNldD0iLjYyMyIgc3RvcC1vcGFjaXR5PSIuMDUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJhN2ZlZTk3MC1hNzg0LTRiYjEtYWY4ZC02M2QxOGU1ZjdkYjkiIHgxPSItMTAyNy4xNjUiIHgyPSItOTk3LjQ4MiIgeTE9IjE0Ny42NDIiIHkyPSI2OC41NjEiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDEwNzUgMTU4KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzNjY2JmNCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI4OTJkZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjZTM5OWMxOWYtYjY4Zi00MjlkLWIxNzYtMThjMjExN2ZmNzNjKSIgZD0iTTMzLjMzOCA2LjU0NGgyNi4wMzhsLTI3LjAzIDgwLjA4N2E0LjE1MiA0LjE1MiAwIDAgMS0zLjkzMyAyLjgyNEg4LjE0OWE0LjE0NSA0LjE0NSAwIDAgMS0zLjkyOC01LjQ3TDI5LjQwNCA5LjM2OGE0LjE1MiA0LjE1MiAwIDAgMSAzLjkzNC0yLjgyNXoiLz48cGF0aCBmaWxsPSIjMDA3OGQ0IiBkPSJNNzEuMTc1IDYwLjI2MWgtNDEuMjlhMS45MTEgMS45MTEgMCAwIDAgLTEuMzA1IDMuMzA5bDI2LjUzMiAyNC43NjRhNC4xNzEgNC4xNzEgMCAwIDAgMi44NDYgMS4xMjFoMjMuMzh6Ii8+PHBhdGggZmlsbD0idXJsKCNhYzJhNmZjMi1jYTQ4LTQzMjctOWEzYy1kNGRjYzMyNTZlMTUpIiBkPSJNMzMuMzM4IDYuNTQ0YTQuMTE4IDQuMTE4IDAgMCAwLTMuOTQzIDIuODc5TDQuMjUyIDgzLjkxN2E0LjE0IDQuMTQgMCAwIDAgMy45MDggNS41MzhIMjUuNzM5YTQuNDQzIDQuNDQzIDAgMCAwIDMuNDEtMi45bDUuMDE0LTE0Ljc3NyAxNy45MSAxNi43MDVhNC4yMzcgNC4yMzcgMCAwIDAgMi42NjYuOTcySDgxLjI0TDU2LjQyNCA2MC4yNjFsLTI5Ljc4MS4wMDdMNTkuNDcgNi41NDR6Ii8+PHBhdGggZmlsbD0idXJsKCNhN2ZlZTk3MC1hNzg0LTRiYjEtYWY4ZC02M2QxOGU1ZjdkYjkpIiBkPSJNNjYuNTk1IDkuMzY0YTQuMTQ1IDQuMTQ1IDAgMCAwLTMuOTI4LTIuODJIMzMuNjQ4YTQuMTQ2IDQuMTQ2IDAgMCAxIDMuOTI4IDIuODJsMjUuMTg0IDc0LjYyYTUuMTYgNS4xNiAwIDAgMS00LjYzNCA2LjQ3MmgzOS4wMmE0LjE0NiA0LjE0NiAwIDAgMCAzLjkyNy01LjQ3MnoiLz48L3N2Zz4=
[Azure-url]: https://azure.microsoft.com/es-es
[Nodemon]: https://img.shields.io/badge/Nodemon-20232A?style=for-the-badge&logo=Nodemon
[Nodemon-url]: https://nodemon.io/