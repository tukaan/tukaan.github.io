# Providing help: Tooltips


Tooltips are very powerful tools. They are used to display information about a widget that is not directly visible to the user. This can be because the widget is displaying an image or cannot fit the text in the space available. That's where the tooltip comes in. The tooltip is a small window that is displayed when the user hovers over a widget.

![Image of a Tukaan tooltip](/resources/docs/tooltip.png)

An example of how to set up a tooltip is as follows:

```python
import tukaan

app = tukaan.App()
window = tukaan.MainWindow()

label = tukaan.Label(window, text="Example label", tooltip="Test tooltip")
label.grid()

app.run()
```

Tooltips are available on all widgets but be careful about the usage on widgets such as frames as it is triggered when the user hovers over the frame, not widgets placed inside it.