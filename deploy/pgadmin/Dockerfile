# Base image
FROM python:3.9-slim-buster

# Set environment variables
ENV PGADMIN_VERSION=6.20 \
    PGADMIN_SETUP_EMAIL=your_email@example.com \
    PGADMIN_SETUP_PASSWORD=your_password

# Install dependencies
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | apt-key add - && \
    echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/buster pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && \
    apt-get update && \
    apt-get install -y pgadmin4=${PGADMIN_VERSION}

# Expose the pgAdmin port
EXPOSE 80

# Set the entrypoint command
ENTRYPOINT ["/usr/pgadmin4/bin/pgAdmin4", "-c", "/pgadmin4/config.py"]