# Displaying text: The `Label` widget

> Many of the widgets used in Tukaan have similar names to those in other GUI libraries. This may help when changing GUI libraries

Labels are one of, if not the most, commonly used widgets in GUI Applications. Learning how to use Labels is fundamental to the sucess of an application. Let's see what we can do with the Label.

![Image of a Tukaan label](/resources/docs/label.png)

By default the label won't have any text, but we can simply specify it using the `text` attribute. We need to assign the label to a variable, so wecan change its attributes later.
```python
import tukaan

app = tukaan.App()

example_label = Label(app, text="Hello, World!")

# Place it on the window
example_label.grid()

# Changing its text
example_label.text = "New text!"

app.run()
```

