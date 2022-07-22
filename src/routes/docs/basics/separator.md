## Separating widgets

> Separators are commonly used to separate widgets or to help visualize groups of widgets

Separators are very useful for (as the name suggests) separating two or more items. In Tukaan they are used to separate widgets or to help visualize groups of widgets. As separators are a different type of widget than normal they can be a bit tricky to use.

![Image of a Tukaan separator](/resources/docs/separator.png)

An example of how to set up a separator with `.position()` is as follows:

```python
from tukaan import App, Separator

app = App()

separator = Separator(app)
separator.position(x=10, y=30, width=280)

app.run()
```

When using `.grid()` the proccess is slightly different:

```python
from tukaan import App, Separator, Label
from tukaan.enums import Align

app = App()

#Create some space between the edge of the window and the separator

Label(app, text="This is a label").grid(row=0, col=0)

Separator(app, orientation="horizontal").grid(row=1, col=0, align=Align.Stretch)
app.run()
```

> It is important to note that while `Align` is necessary for `.grid()` it can also be used for position by replacing `height=value` or `width=value` with `height=Align.Stretch` or `width=Align.Stretch`.