# Training App — CI/CD Demo

Einfache Taschenrechner-API als Trainingsprojekt für Git/GitHub/CI/CD.

## Starten

```bash
npm install
npm run dev
```

## API

**Health Check**
```
GET /health
```

**Berechnen**
```
POST /calculate
{ "a": 10, "b": 5, "operation": "add" }
```
Operationen: `add`, `subtract`, `multiply`, `divide`

## Tests

```bash
npm test
```

## Branch-Strategie

| Branch | Bedeutung |
|--------|-----------|
| `main` | Produktion |
| `develop` | Integration / Staging |
| `feature/*` | Neue Features |
