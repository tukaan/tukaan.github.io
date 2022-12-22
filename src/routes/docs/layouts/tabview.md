# Working with tabs: The `TabView` widget

![Image of a Tukaan tabview](/resources/docs/tabview.png)

An example of how to set up a TabView widget is as follows:

```python
import tukaan


app = tukaan.App()
window = tukaan.MainWindow(title="Test TabView widget")

# Create tabview
tabview = tukaan.TabView(window)
tabview.grid(margin=20)

# Create tabs
tab_1 = tabview.Tab("Tab 1")
tab_2 = tabview.Tab("Tab 2")

# Add tab contents
button_1 = tukaan.Button(tab_1, "Button in tab 1")
button_1.grid(margin=20)

button_2 = tukaan.Button(tab_2, "Button in tab 2")
button_2.grid(margin=20)

app.run()

```
