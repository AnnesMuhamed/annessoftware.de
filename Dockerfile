# Webseite annessoftware.de – statische Seite hinter nginx.
# Läuft ohne Root-Rechte und lauscht auf Port 8000 (Standard in HostThings).
FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY site/ /usr/share/nginx/html/

EXPOSE 8000
