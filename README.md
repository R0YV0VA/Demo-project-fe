# This project demonstrate work with React.js
 In project i use such libraries as:
 - Redux
 - Thunk
 - Saga
 - JWT
 - Cookies
 - Axios
## Instruction
### With Docker
- Download this repo.
- Download repo with BE https://github.com/R0YV0VA/Demo-project-be.
- Build Dockerfile's in each folder `docker build -t $name$ .`
- Create you ssh and secret.json with connectionString.
- Edit `docker-compose.yml` with your settings.
- And finaly compose `docker-compose -f "docker-compose.yml" up -d`.
### Without Docker
- Download this repo.
- Prepare the FE project `npm install`
- Download repo with BE https://github.com/R0YV0VA/Demo-project-be.
- Start bouth projects. `npm start` for FE.
### T-SQL request
CREATE DATABASE AuthExample;

USE AuthExample;

CREATE TABLE Users ( Id INT NOT NULL, Nickname NVARCHAR (50) NOT NULL, Login NVARCHAR (50) NOT NULL, Password NVARCHAR (50) NOT NULL, Status INT NOT NULL, PRIMARY KEY CLUSTERED ([Id] ASC));