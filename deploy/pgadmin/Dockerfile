FROM dpage/pgadmin4
WORKDIR /app

# Create a virtual environment
RUN python3 -m venv /venv

# Activate the virtual environment
ENV PATH="/venv/bin:$PATH"

# Install any necessary dependencies using pip
RUN pip install -r requirements.txt

# Change the permission of the /venv/bin/python3 file to make it executable
RUN chmod +x /venv/bin/python3

# Set the entrypoint command
ENTRYPOINT ["./entrypoint.sh"]