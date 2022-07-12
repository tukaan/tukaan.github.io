# Working with windows: `App` and `Window`

Previously you've learned how to create a window with `tukaan.App`. Now let's see what we can do with it.

By default the window looks something like this:

![Empty Tukaan window](/resources/docs/empty_window.png)

It's size is 200 by 200 pixels, and it's title is "Tukaan window". But of course we can modify it.

```python
import tukaan

#Gives the window name, width, and height
app = tukaan.App(title="My window", width=345, height=567)

#Runs app
app.run()
```

And you can set the title and size later in the program

```python
import tukaan

app = tukaan.App(title="My window")

# You can use properties...
app.title = "New title"

app.width = 300

# ...or methods to modify the attributes
app.set_title("New title")

app.set_width(300)

app.run()
```


## The state of the window

You can query the state of the window with the `state` property. The possible returned values are: `normal`, `maximized`, `minimized`, `fullscreen`, `hidden` and `closed`.

```python
import tukaan

app = tukaan.App(title="My window")

print(f"The current state of the main window is: {app.state}.")

app.run()
```

The user can minimize the window by clicking on the `―` in the titlebar. However, you can minimize a window in the program as well, by calling the `minimize` method.

With the `restore` method you can restore the window. So if the window was minimized unminimize it, if it was maximized then unmaximize it and so on.

```python
import tukaan

app = tukaan.App(title="My window")

app.minimize()
print(f"The current state of the main window is: {app.state}.")
app.restore()
print(f"The current state of the main window is: {app.state}.")

app.run()
```


## What to do when closing the window

You can set a function to run when the user clicks on the `X` in the corner. If you override the default function, you need to call the `destroy` method when you want to close it.

The callback should take a single argument, into which the window to be closed will be passed. This way you can easily access the object in the function.

```python
import tukaan

app = tukaan.App()

def on_close(window):
	print("Closing the window...")
	window.destroy()

app.on_close_callback = on_close
# Note, that it's not on_close(), because it would run the function immediately
# Just assign it, like a variable

app.on_close_callback.__call__()  # You can query this callback later, and run it explicitly if you want

app.run()
```

Or, if you like, you can use the `on_close` decorator, which is a bit simpler. The callback should return `True` if the window can be closed, and `False`, if not.

```python
import tukaan

app = tukaan.App()

CAN_BE_CLOSED = True

@app.on_close
def on_close(app):
    if CAN_BE_CLOSED:
        print("Closing the window...")
        return True
    else:
        print("Can't close")
        return False

app.run()
```


## Using multiple windows

You can't create multiple `tukaan.App` instances, if you try it will raise an error. This is because a second Tcl interpreter would confuse the program. Instead we can use the `tukaan.Window` class to create more windows. The methods and properties on it are mostly the same as on the `App` object.

```python
import tukaan

app = tukaan.App(title="Main window")

second_window = tukaan.Window(title="Second window")

app.run()
```