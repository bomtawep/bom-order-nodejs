FROM dpage/pgadmin4 as pgadmin4
USER root 
VOLUME /var/lib/pgadmin
RUN groupadd non-root-postgres-group
RUN useradd non-root-postgres-user --group non-root-postgres-group
RUN chown -R non-root-postgres-user:non-root-postgres-group /var/lib/pgadmin
RUN chmod 777 /var/lib/pgadmin
EXPOSE 80 443