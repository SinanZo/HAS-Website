Local development MySQL (docker)

If you don't have a local MySQL server, you can start one with Docker for local dev:

1. Copy the example env and adjust if you like:

   Copy `.env.example` to the project root as `.env` and edit values.

2. Start MySQL with docker-compose (from project root):

   docker-compose up -d

3. Wait until the container is healthy (docker ps shows status) and then run the backend from `b`:

   cd b
   # If using env file, set env before starting
   setx MYSQL_PASSWORD example
   node index.js

4. To stop and remove the container:

   docker-compose down -v

Notes:
- The backend will attempt to connect to MySQL automatically. Set environment variables `MYSQL_HOST`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE` if you differ from the defaults.
- The current DB wrapper will upgrade from fallback to a real pool once MySQL accepts connections.
