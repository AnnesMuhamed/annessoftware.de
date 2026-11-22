# annessoftware.de

Firmenwebseite von **Annes Software & Apps**: statisches HTML, CSS und JavaScript.
Kein Framework, kein Build-Schritt, keine Cookies, kein Tracking und keine externen Schriften.

```
site/            Die Webseite (index.html, impressum.html, datenschutz.html, styles.css, script.js)
Dockerfile       nginx-Image, lauscht auf Port 8000
nginx.conf       Sicherheits-Header und Caching
```

## Lokal ansehen

```powershell
python -m http.server 8080 -d site
```
Danach im Browser <http://localhost:8080> öffnen.

## Vor dem Veröffentlichen

1. Im Impressum und in der Datenschutzerklärung die **gelb markierten Felder** ausfüllen
   (Name, Anschrift, Telefon, USt-IdNr. oder Kleinunternehmer) und die Entwurfs-Hinweise entfernen.
2. Das Postfach **kontakt@annessoftware.de** einrichten, zum Beispiel in konsoleH.

## Auf HostThings veröffentlichen

1. Dieses Verzeichnis als GitHub-Repository hochladen.
2. Auf myhostthings.com eine neue App anlegen: „Aus GitHub-Repository bauen“, Port `8000`.
3. Die Domain `annessoftware.de` mit der App verbinden und im Hetzner-DNS einen A-Record
   für `annessoftware.de` und `www` auf die Server-IP setzen.
