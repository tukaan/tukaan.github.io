# Getting text input: The `TextBox` widget

When creating almost any program programmer's will eventually come across the need for input from the user outside of clicking buttons (See previous explanation for more detail on Button's). In Tukaan the program can get this input with the `TextBox` widget.

![Image of a Tukaan textbox field](/resources/docs/textbox.png)

A minimum example is as follows:

```python
import tukaan

app = tukaan.App()

example_entry = tukaan.TextBox(app)

# Place it on the window
example_entry.grid()

# Get input from example_entry
input_from_entry = example_entry.value

print(input_from_entry)

app.run()
```