# The `Button` widget

Buttons are the most basic but also the most essential part of a graphical user interface. They provide responsiveness to the application and allow the user to perform actions.

## Create a button
Creating a button is quite simple. We can specify its the text to display on the button and the function it should call when clicked.

```python
def asdf():
    print("Hello, world!")

button = tukaan.Button(window, text="Press me!", action=asdf)
button.grid()
```

And when you click the button, it prints "Hello, world!"

We can later modify all these attributes in the same way as for the `Label` widget:
```python
button.text = "New button text"
button.action = None
```

But what if we want to pass arguments to the button's `action` callback?

Well, if we just use parentheses, Python evaluates the call immediately, so we actually pass its return value to `action`.

```python
def another_func(*args):
    print(args)

button = tukaan.Button(window, action=another_func(1, 2, 3))
button.grid()
```

So to pass args or kwargs to the callback, we have to use an anonymous `lambda` function.

```python
button = tukaan.Button(window, action=lambda: another_func(1, 2, 3))
button.grid()
```

## Invoke the button from code
When writing tests for a GUI application, you'll probably run into the problem that you need to simulate clicking a button somehow. In Tukaan you can do this easily with the `.invoke` method.

```python
button.invoke()
```

And now the `action` callback is executed, just as if the user had pressed it.
