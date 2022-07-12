# The basics of Tukaan

Tukaan works by using an embedded Tcl/Tk interpreter, and translating the Python functions to Tcl commands. Tkinter works similarly, but it doesn't always translate the objects returned from Tcl to a Python object, so sometimes you get back a string instead of a list or a float. Tukaan does this **way** better.

If you want to create a Tukaan application, the first thing you need to do is to instantiate the `tukaan.App` class 
This will initialize the embedded Tcl/Tk interpreter and create the main window of your application. When this main window is closed, the interpreter will stop and the whole GUI will be destroyed.

```python
import tukaan

app = tukaan.App()
```

With this code, a window will pop up on the screen, but then disappear imediately. To understand why, we need to learn about the *event loop*.

## The event loop

Most GUI frameworks work by running a infinite loop, and listening for events inside it, such as a mouse action or keypress and process them. For example, when you click a button, it calculates which widget you clicked on, gives you visual feedback so the button will look like it's pressed, and runs the callback associated with it.

This event loop looks kinda like this in pseudocode:
```python
while main_window_is_open():
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

In Tukaan you can start the event loop by calling the `run` method on the main window. This method should be always at the end of your code, since it will block until the main window is closed. If you don't use this run method, the window will only appear for a moment and then close, since there is no loop to keep the program alive.

```python
import tukaan

app = tukaan.App()

...

app.run()
```
See? With three lines of code we have a working window, that responds to maximizing and closing without having to worry about processing and dispatching events or redrawing the screen as its size changes.

You might think that you can't access these events from within the program, because they are handled internally, but fortunately this is not the case. Tukaan (i.e. Tcl/Tk) sends event to widgets, to which you can bind functions and get some useful data about the event. In fact, you can even generate your own events that the widgets can respond to.