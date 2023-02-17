# Set the base image
FROM centos:7

# Install required packages
RUN yum -y update && yum -y install epel-release && \
    yum -y install python-pip python-devel gcc postgresql-devel && \
    pip install --upgrade pip

# Install pgAdmin
RUN pip install pgadmin4

# Expose the port
EXPOSE 80

# Start pgAdmin
CMD ["python", "-m", "pgadmin4"]
