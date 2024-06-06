## Esercizio di Oggi: Express API CRUD

Oggi creeremo le API per il nostro blog. Utilizzeremo un nuovo progetto Express e Prisma. Potete utilizzare lo schema Prisma che avete creato nell'esercizio di ieri.

### Definizione degli Endpoint

#### 1. Creare un Nuovo Post
- **Endpoint:** `POST /posts`
- **Descrizione:** Crea un nuovo post.

#### 2. Recuperare un Post Utilizzando il Suo Slug
- **Endpoint:** `GET /posts/:slug`
- **Descrizione:** Recupera un post utilizzando il suo slug.

#### 3. Recuperare Tutti i Post
- **Endpoint:** `GET /posts`
- **Descrizione:** Recupera tutti i post presenti nel database, con la possibilità di filtrare per:
  - Post pubblicati.
  - Post che contengono una determinata parola nel titolo o nel contenuto.

#### 4. Aggiornare un Post
- **Endpoint:** `PUT /posts/:slug`
- **Descrizione:** Aggiorna un post.

#### 5. Eliminare un Post
- **Endpoint:** `DELETE /posts/:slug`
- **Descrizione:** Elimina un post.

### Bonus

1. **Implementare la Paginazione**
2. **Gestire gli Errori:**
   - Restituire uno stato HTTP 404 e un messaggio di errore nel caso in cui una rotta non sia stata trovata.
   - Restituire uno stato HTTP 500 e un messaggio di errore nel caso in cui venga sollevata un'eccezione dal Prisma Client.
