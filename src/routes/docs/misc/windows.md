# Working with windows: `MainWindow` and `Window`

Previously you've learned how to create a window with `tukaan.MainWindow`. Now let's see what we can do with it.

By default the window looks something like this:

![Empty Tukaan window](/resources/docs/empty_window.png)

It's size is 300 by 200 pixels, and it's title is "Tukaan". But of course we can modify it.

```python
import tukaan

app = tukaan.App()

# Give the window a title, width and height
window = tukaan.MainWindow(title="My window", width=345, height=567)

app.run()
```

And you can set the title and size later in the program
```python
window.title = "New title"

window.width = 400
```


## The state of the window

You can query the state of the window with the `state` property. It will return a member of the `WindowState` enumeration.

The members are the following:
* `Normal`
* `Maximized`
* `Minimized`
* `FullScreen`
* `Hidden`
* `Closed`


```python
import tukaan

app = tukaan.App()
window = tukaan.MainWindow()

print(f"The current state of the main window is: {window.state}.")

app.run()
```

The user can minimize the window by clicking on the `―` in the titlebar. However, you can minimize a window in the code as well, by calling the `minimize` method.

With the `restore` method you can restore the window. So if the window was minimized unminimize it, if it was maximized then unmaximize it and so on.

```python
import tukaan

app = tukaan.App()
window = tukaan.MainWindow()

window.minimize()
print(f"The current state of the main window is: {window.state}.")
window.restore()
print(f"The current state of the main window is: {window.state}.")

app.run()
```


## What to do when closing the window

You can set a function to run when the user clicks on the `X` in the corner. If you override the default function, you need to explicitly call the `.destroy` method when you want to close it.

The callback should take a single argument, into which the window to be closed will be passed. This way you can easily access the object in the function.

```python
import tukaan

app = tukaan.App()
window = tukaan.MainWindow()

def on_close(window):
	print("Closing the window...")
	window.destroy()

window.on_close_callback = on_close
# Note, that it's not on_close(), because it would run the function immediately
# Just assign it, like a variable

window.on_close_callback()  # You can query this callback later, and run it explicitly if you want

app.run()
```

Or, if you like, you can use the `on_close` decorator, which is a bit simpler. The callback should return `True` if the window can be closed, and `False`, if not.

```python
import tukaan

app = tukaan.App()
window = tukaan.MainWindow()

CAN_BE_CLOSED = True

@window.on_close
def on_close(window):
    if CAN_BE_CLOSED:
        print("Closing the window...")
        return True
    else:
        print("Can't close")
        return False

app.run()
```


## Using multiple windows

You can't create multiple main windows (`tukaan.MainWindow` instances), if you try Tukaan will raise an error. Instead you can use the `tukaan.Window` class to create more windows. The methods and properties on it are mostly the same as on the `MainWindow` object.

```python
import tukaan

app = tukaan.App()

main_window = tukaan.MainWindow(title="Main window")

second_window = tukaan.Window(title="Second window")

app.run()
```