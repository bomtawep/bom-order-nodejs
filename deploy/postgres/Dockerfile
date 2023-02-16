FROM postgres:12 
RUN mkdir postgres
RUN groupadd non-root-postgres-group
RUN useradd non-root-postgres-user --group non-root-postgres-group
RUN chown -R non-root-postgres-user:non-root-postgres-group /postgres
RUN chmod 777 /postgres
USER non-root-postgres
