# Working with tabs: The `TabView` widget

Previously you learned about the `Window` widget. For many larger programs and projects such as IDE's and text editors you may need to allow for multiple TextBox's. To add multiple ad give them tabs you would use the TabView Widget.

![Image of a Tukaan tabview](/resources/docs/tabview.png)

An example of how to set up a TabView widget is as follows:

```python
import tukaan

# Create window
app = tukaan.App("Test TabView widget")

# Create tabview
tabview = tukaan.TabView(app)
tabview.grid()

# Create tabs
tab_1 = tabview.Tab("Tab 1")
tab_2 = tabview.Tab("Tab 2")

# Add tab contents
tukaan.Button(tab_1, "Button in tab 1").grid()  # You can display it inline, but then you can't access the object later
tukaan.Button(tab_2, "Button in tab 2").grid()

app.run()
```
