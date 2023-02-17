FROM centos:7

# Install the necessary packages
RUN yum update -y && \
    yum install -y epel-release && \
    yum install -y python3 python3-pip python3-devel postgresql && \
    yum clean all && \
    rm -rf /var/cache/yum

# Install pgAdmin4
RUN pip3 install pgadmin4

# Create a pgAdmin4 configuration file
RUN touch /usr/lib/python3.6/site-packages/pgadmin4/config_local.py && \
    echo "SERVER_MODE = False" >> /usr/lib/python3.6/site-packages/pgadmin4/config_local.py && \
    echo "DEFAULT_SERVER = '0.0.0.0'" >> /usr/lib/python3.6/site-packages/pgadmin4/config_local.py && \
    echo "DEFAULT_SERVER_PORT = 5050" >> /usr/lib/python3.6/site-packages/pgadmin4/config_local.py && \
    echo "SECURITY_LOGIN_USER = 'pgadmin'" >> /usr/lib/python3.6/site-packages/pgadmin4/config_local.py && \
    echo "SECURITY_LOGIN_PASSWORD = 'pgadmin'" >> /usr/lib/python3.6/site-packages/pgadmin4/config_local.py

# Expose the default port for pgAdmin
EXPOSE 80

# Start pgAdmin4
CMD ["python3", "/usr/lib/python3.6/site-packages/pgadmin4/pgAdmin4.py"]
