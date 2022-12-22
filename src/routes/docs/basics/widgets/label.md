# Displaying static text: The `Label` widget

Labels are one of the most common widgets used in GUI apps. Let's see what we can do with it.

By default the label won't have any text, but we can simply specify it using the `text` attribute.
```python
import tukaan

app = tukaan.App()

example_label = Label(app, text="The quick brown fox jumps over the lazy dog.")
example_label.grid()

app.run()
```

We can change the text of a lebel using the `text` attribute
```python
example_label.text = "Something else"
```