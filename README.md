#Todo React App



Usage
---

Setup
---

```
npm install
```


Require config folder with development.env and test.env files for firebase
---

```
API_KEY=your_api_key
AUTH_DOMAIN=your_auth_domain
DATABASE_URL=your_database_url
STORAGE_BUCKET=your_storage_bucket
MESSAGING_SENDER_ID=your_messaging_sender_id

```

Also set config on heroku server
---

```
heroku config:set API_KEY=your_api_key
heroku config:set AUTH_DOMAIN=your_auth_domain
heroku config:set DATABASE_URL=your_database_url
heroku config:set STORAGE_BUCKET=your_storage_bucket
heroku config:set MESSAGING_SENDER_ID=your_messaging_sender_id

```



Compile
---

```
webpack
```



Start the development server with this command:
---

```
npm start
```
or
```
node server.js
```



Run tests:
---
```
npm test
```
