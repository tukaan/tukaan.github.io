# Getting text input: The `TextBox` widget

When creating almost any program programmer's will eventually come across the need for input from the user outside of clicking buttons. In Tukaan the program can get text input with the `TextBox` widget.

Here is a minimal example, until there's no real documentation:

```python
import tukaan

app = tukaan.App()
window = tukaan.MainWindow()


def print_textbox_content():
	input_from_textbox = example_textbox.get()
	print(input_from_textbox)


example_textbox = tukaan.TextBox(window)
example_textbox.grid()

submit_button = tukaan.Button(window, text="Submit", action=print_textbox_content)
submit_button.grid(col=1)


app.run()
```