# Events and bindings
As you have [learned before](/docs/basics/hello), all GUI applications work based on events. Each keypress and mouseclick is an event to which the application responds.<br>For example, when a key is pressed, its character get inserted into the textbox, and when a mouseclick happens, the button gets a different state, and its callback is executed. Tukaan handles these basic and necessary events on its own, but you can use bindings to listen for and handle any event you like. This gives you a endless possibilities for communicating with the user or within the program.


## Binding a function to an event
You can use the `.bind` method on any Tukaan widget to bind it to an event. A binding consists of an event sequence and the target function.

The event sequence describes what event the widget should listen to. Every event is surrounded by `<` and `>` signs, and after a semicolon you can give details about the event.

For example if you want to a keypress, you can use the `<KeyDown>` event. It's actually just a shorthand for `<KeyDown:Any>`, so it binds to any keypress.

```python
def my_func():
    print("A key was pressed!")

widget.bind("<KeyDown>", my_func)
```
Or if you want do listen to the sequence <kbd>Control+Shift+a</kbd>, you would use the `<KeyDown:(Ctrl-Shift-a)>` sequence. You can add any number of modifier keys to a sequence, separating them with hypens.

### Getting event info
When you simply listen for the `<KeyDown:(a)>` event, you know exactly which keys will trigger the callback, however when you use the `<KeyDown:Any>` sequence, how do you know which character triggered the event? Well, it's actually quite simple.

You can set the `send_event` parameter on bind to `True`, so when an eventhappens, it will send a event object to the callback function.

This event object has various properties depending on the event type. For a keyboard event you can access its character with the `char` attribute.

```python
def my_func(event):
    print("Key pressed: " + event.char)

widget.bind("<KeyDown:Any>", my_func, send_event=True)
```

### Overwriting bindings
By default a binding won't overwrite any previous binding to that event. This means that you can run multiple functions on the same event. The associated callbacks will run in binding order.<br>However sometimes you want to overwrite any previous binding to that event, so only one function will run.

```python
def my_func():
    print("A key was pressed!")

widget.bind("<KeyDown:Any>", my_func)
widget.bind("<KeyDown:Any>", my_func, overwrite=True)
```

Now `my_func` will run only once at every keypress.


## Virtual events
When building complex applications, virtual events come really handy to communicate within the program. Most Tukaan widgets also generate virtual events when something happens with them.

```python
class ArbitaryPythonObject:
    ...

def my_func(event):
    print(event.data)

widget.bind("<<VirtualEvent>>", my_func, send_event=True)

widget.generate_event("<<VirtualEvent>>", data=ArbitaryPythonObject())
```
