# Instant Xinference

Install, run, and automate https://github.com/xorbitsai/inference with one click.

# In action

https://github.com/cocktailpeanut/xinference.pinokio/assets/121128867/1639c44b-cad3-413f-a72c-1b4f7b45ecfc


# How the scirpt works

## install.json

### 1. Create a virtualenv

```json
{
  "method": "shell.run",
  "params": {
    "message": "python -m venv env"
  }
}
```

### 2. Pip install xinference

Run `pip install` to install xinference.

The template expression is for handling cross platform quirks (On windows it's `env\Scripts\pip install xinference[all]`, and on other platforms it's `env/bin/pip install xinference[all]`)

```json
{
  "method": "shell.run",
  "params": {
    "message": "env{{path.sep}}{{os.platform() === 'win32' ? 'Scripts' : 'bin'}}{{path.sep}}pip install xinference[all]"
  }
}
```

### 3. Display notification to start the web ui

After the installation is complete, display a notification to send users to the [start.json](start.json) script, so they can launch the web ui.

```json
{
  "method": "notify",
  "params": {
    "html": "<b>Success!</b> Successfully installed Xinference. Let's launch the web ui!",
    "href": "start.json"
  }
}
```

## start.json

Starts the xinference server by running the command.

The template expression is for handling cross platform quirks (On windows it's `env\Scripts\xinference`, and on other platforms it's `env/bin/xinference`)

```json
{
  "method": "shell.run",
  "params": {
    "message": "env{{path.sep}}{{os.platform() === 'win32' ? 'Scripts' : 'bin'}}{{path.sep}}xinference"
  }
}
```


# Usage

1. Run the [install.json](install.json) script to install
2. Run the [start.json](start.json) script after installation (The install script will display a notification that sends you to start.json)

From that point on, whenever you start Pinokio, the [start.json](start.json) start script will automatically start and launch the Xinference web ui.
