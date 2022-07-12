# The `Button` widget

Buttons are among the most useful widgets used in GUI Applications. Learning how to use Buttons is crucial to a functional GUI. Buttons give responsiveness to an application and allow the user to perform actions. Let's see them in action!

![Image of a Tukaan button](/resources/docs/button.png)

## Create a button with a simple callback
Creating and displaying a button is very easy with Tukaan. We can specify its text and the function it should call when clicked.

```python
def printy_func():
    print("Hello, world!")

my_button = tukaan.Button(app, text="Press me!", on_click=printy_func)
my_button.grid()
```

And when you click the button, it prints "Hello, world!"

We can later modify all these attributes as seen below:

```python
my_button.text = "New text"

my_button.on_click = None
```
Output:
```
Hello, world!
```

But what if we want to pass arguments to the button's `on_click` callback?

Well, if we just use parentheses, Python evaluates the call immediately, so we actually pass its return value to the button.

```python
def another_func(*args):
    print(args)

b = tukaan.Button(app, text="I'm buggy", on_click=another_func(1, 2, 3))
b.grid()
```

So to pass args or kwargs to the callback, we have to use an anonymous [`lambda`]() function.

```python
b = tukaan.Button(app, text="This works!", on_click=lambda: another_func(1, 2, 3))
b.grid()
```

## Invoke the button from the code
When writing tests for a GUI application, you'll probably run into the problem that you need to simulate clicking a button somehow. In Tukaan you can do this easily with the `.invoke` method.

```python
my_button.invoke()
```

And now the `on_click` callback is executed, just as if the user had pressed it.
