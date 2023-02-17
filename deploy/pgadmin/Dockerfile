FROM dpage/pgadmin4

# Set environment variables
ENV PGADMIN_DEFAULT_EMAIL=admin@mydomain.com
ENV PGADMIN_DEFAULT_PASSWORD=mysecretpassword

# Copy over any required configuration files
COPY config_local.py /pgadmin4/config_local.py

# Expose port 80 for pgAdmin
EXPOSE 80

# Start the pgAdmin server
CMD ["/usr/local/bin/python", "/usr/local/bin/pgadmin4.py"]