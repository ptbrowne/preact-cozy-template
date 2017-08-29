Preact template
===============

This repository aims at using [`preact-cli`](https://github.com/developit/preact-cli)
along with a custom plugin to easily bootstrap a `cozy-app`.

### File structure

* `app`: A `preact-cli` initialized app. Its `preact.config.js` calls the aforementioned plugin
* `preact-cli-cozy`: The `preact-cli` plugin which modifies a little bit the `webpack` config

### Usage

It is necessary to use a different port than the default one from `preact-cli` since we
want to be able to use the `cozy-stack`.

```bash
env HOST='0.0.0.0' PORT=3000 preact watch
```

In a different terminal :

```bash
curl http://127.0.0.1:3000 > build/index.html
```

The template is provided by `preact-cli-cozy`.

Then you should be able to run the app.


