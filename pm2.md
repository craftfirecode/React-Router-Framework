# PM2: Port einer Anwendung anzeigen

Wenn du eine Anwendung mit PM2 startest, z. B.:

```bash
pm2 start npm --name techhub -- run start
```

kannst du den Port der Anwendung mit folgenden Methoden ermitteln:

## 1. **PM2 Show Befehl**
Nutze den folgenden Befehl, um detaillierte Informationen über den Prozess anzuzeigen:

```bash
pm2 show techhub
```

Suche nach der Umgebungsvariable oder den Argumenten, die den Port enthalten.

## 2. **PM2 List Befehl**

Führe diesen Befehl aus, um eine Übersicht aller Prozesse zu erhalten:

```bash
pm2 list
```

Falls der Port nicht angezeigt wird, verwende Methode 1 oder 3.

## 3. **Log-Dateien überprüfen**
Falls der Port in den Logs steht, kannst du ihn mit folgendem Befehl anzeigen:

```bash
pm2 logs techhub
```

Suche in den Logs nach einer Zeile wie `Listening on port XXXX`.

## 4. **Netstat oder Lsof nutzen**
Falls der Port nicht direkt über PM2 sichtbar ist, kannst du herausfinden, auf welchem Port der Prozess lauscht:

```bash
netstat -tulpn | grep node
```

Oder mit `lsof`:

```bash
lsof -i -P -n | grep LISTEN | grep node
```

Falls du die PM2-Prozess-ID (`PID`) kennst (z. B. aus `pm2 list`), kannst du speziell danach suchen:

```bash
lsof -i -P -n | grep <PID>
```

## 5. **Bestimmten Port testen**
Falls du einen bestimmten Port erwartest (z. B. 3000), kannst du es so testen:

```bash
curl -I http://localhost:3000
```