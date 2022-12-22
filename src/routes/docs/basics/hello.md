# Hello World!

Now let's write our first app with Tukaan!

The following application will simply open a window with the text "Hello world!" in it.
Give it a try, and then let's go through it line by line.

```python
import tukaan

app = tukaan.App(name="My first app")

window = tukaan.MainWindow(title="Hello World!")

greeting_label = tukaan.Label(window, text="Hello World!")
greeting_label.grid()

app.run()
```

The first line is obvious. This time we only need the basic namespace, which includes most of the widgets. Tukaan also has some submodules that help you work with fonts, colors, create various system dialogs and apply themes to the UI.

On the second line we create the application. This itself doesn't create the main window, but sets up some information about the app, and initializes the embedded Tcl interpreter.

Tukaan works by using an embedded Tcl/Tk interpreter, and translating the Python function calls to Tcl commands. Tkinter works similarly, but it doesn't always translate the objects returned from Tcl to a Python object, so sometimes it gives back a string instead of a list or a float, which can be really frustrating. Tukaan does this conversion **way** better, so a Pillow image or a `pathlib.Path` object can be easily represented in Tcl, and then converted back to a Python object. If you want to learn more about this topic, [read this](../advanced/behind-the-scenes).

## Creating a window
Next, we create the main window of the application.

```python
window = tukaan.MainWindow(title="Hello World!")
```

This will create an empty window with the title "Hello world!". We assign the window to a `window` variable so we can do things with it later and use it as a parent for other widgets.

The window decoration is determined by the window manager, so it will look differently depending on your system.

<figure>
	<img src="/resources/docs/label.png" alt="Picture of blank Tukaan windows">
	<figcaption>Empty tukaan windows on Linux Mint, Windows 11 and macOS.<br>Throughout the rest of this tutorial, you’ll usually see screenshots taken on Linux Mint.</figcaption>
</figure> 

The main window is required to run the application. When it's closed, the whole GUI will be destroyed.

## The label
Creating a label is quite straightforward. We specify its parent in which it will be placed, and give it some text to display.

After that we display it on the screen, by calling the `grid` method on the created object. To learn more about widget placement in the grid system, see [this page](grid), 

```python
greeting_label = tukaan.Label(window, text="Hello World!")
greeting_label.grid()
```

## The event loop

```python
app.run()
```

The final task is to actually start the application with the `run` method of `tukaan.App`. Without this, the window will pop up on the screen, but then disappear imediately. To understand why, we need to learn about the *event loop*. 

GUI frameworks work by running a infinite loop, and listening for events inside it, such as a mouse action or keypress and process them. For example, when you click a button, it calculates which widget is under the mouse cursor (i.e. which widget was clicked), gives you visual feedback so the button will look like it's pressed, and runs the callback associated with it.

This event loop looks kinda like this in pseudocode:
```python
while main_window_is_open:
    wait_until_event_queue_is_not_empty()
    event = event_queue.pop()
    event.handle()
```

With some frameworks, you have to create this event loop yourself, like in PySimpleGUI
```python
while True:
    event, values = window.read()
    if event == psg.WIN_CLOSED:
        break
```
or in Pygame
```python
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            break
```
but in others, you can use a function to start the built-in event loop, like in PyQt:
```python
window.show()
sys.exit(app.exec_())
```

In Tukaan you can start the event loop by calling the `run` method on the app object. Remember that this method should be always at the end of your code, since it runs an infinite loop, and thus won't return until the main window is closed.

If you don't use this method, the window will only appear for a moment and then close, since there is no loop to keep the program alive.

```python
import tukaan

app = tukaan.App()
window = tukaan.MainWindow()

# Your code here

app.run()
```
See? With four lines of code we have a working window, that responds to maximizing and closing without having to worry about processing and dispatching events or redrawing the screen as its size changes.

You might think that you can't access these events from within the program, because they are handled internally, but fortunately this is not the case. Tukaan (i.e. Tk) sends event to widgets, to which you can bind functions and also get some useful information about the event. In fact, you can even generate your own events that the widgets can respond to.
