## RMNPJ Backend (NestJS + Supabase)

Simple API to store and retrieve React components.

Endpoints:
- POST `/component` - create component and return generated id
- GET `/preview/:id` - fetch component by id
- PUT `/component/:id` - update component fields

### Prerequisites
- Node.js 18+
- A Supabase project with anon key and URL

### Environment Variables
Create a `.env` file in the project root with:

```
PORT=3000
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Schema
Run `schema.sql` against your Supabase (or execute in SQL editor):

```
-- see schema.sql in repo
```

Notes:
- Uses `gen_random_uuid()`; if unavailable, replace with `uuid_generate_v4()` and enable the extension.

### Install & Run
If you encounter npm permission errors on macOS, set a local cache first:

```
npm config set cache .npm-cache --location=project
```

Install dependencies:

```
npm install
```

Build:

```
npm run build
```

Start (dev):

```
npm run start:dev
```

Start (prod):

```
node dist/main.js
```

### API

- Create component

Request:
```
POST /component
Content-Type: application/json
{
  "name": "Button",
  "code": "export const Button = () => <button>Click</button>",
  "description": "Primary button"
}
```
Response: 200
```
{
  "id": "<uuid>",
  "name": "Button",
  "code": "...",
  "description": "Primary button",
  "created_at": "...",
  "updated_at": "..."
}
```

- Get component by id
```
GET /preview/<id>
```

- Update component
```
PUT /component/<id>
Content-Type: application/json
{
  "name": "Button v2",
  "code": "export const Button = () => <button>Go</button>"
}
```

### Project Structure
```
src/
  app.module.ts
  main.ts
  supabase/
    supabase.module.ts
    supabase.service.ts
  component/
    component.module.ts
    component.controller.ts
    component.service.ts
    dto/
      create-component.dto.ts
      update-component.dto.ts
```

### Notes
- Validation is enabled globally; DTOs enforce string fields.
- Errors return appropriate HTTP codes (404 on missing component). 